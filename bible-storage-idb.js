(function(){
  'use strict';

  const DB_NAME='biblia_estudio_content_v1';
  const DB_VERSION=1;
  const PRIMARY_STORE='records';
  const AUTOMATIC_STORE='automatic';
  const MIGRATION_KEY='biblia_idb_v1_migrated';
  const nativeGet=Storage.prototype.getItem;
  const nativeSet=Storage.prototype.setItem;
  const nativeRemove=Storage.prototype.removeItem;
  const nativeKey=Storage.prototype.key;
  const nativeLength=Object.getOwnPropertyDescriptor(Storage.prototype,'length')?.get;
  const memory=new Map();
  let database=null;
  let installed=false;
  let writeQueue=Promise.resolve();
  let lastWriteError=null;

  const EXACT_KEYS=new Set([
    'highlights','favorites','explanations','last','readingPoints','readingPoint',
    'activeReadingPoint','lastReadingPoint','dictionaryCustom','dictionaryEdits',
    'dictionaryDeleted','importedTitles','fontSize','readerTheme','lastLocalBibleAudit',
    'verifiedTitleLayerAudit','titlesChapterOffsetV125','titlesDoubleShiftFixedV126'
  ]);
  const PREFIXES=['biblia_','dictionary','dailyVerse','titles','verifiedTitle','lastLocalBible'];

  function isManagedKey(key){
    const value=String(key||'');
    if(value===MIGRATION_KEY||value.startsWith('biblia_idb_v1_'))return false;
    return EXACT_KEYS.has(value)||PREFIXES.some(prefix=>value.startsWith(prefix));
  }

  function hashText(value){
    let hash=2166136261;
    const text=String(value);
    for(let i=0;i<text.length;i++){
      hash^=text.charCodeAt(i);
      hash=Math.imul(hash,16777619);
    }
    return (hash>>>0).toString(16).padStart(8,'0');
  }

  function requestResult(request){
    return new Promise((resolve,reject)=>{
      request.onsuccess=()=>resolve(request.result);
      request.onerror=()=>reject(request.error||new Error('Error de IndexedDB'));
    });
  }

  function transactionDone(transaction){
    return new Promise((resolve,reject)=>{
      transaction.oncomplete=()=>resolve();
      transaction.onerror=()=>reject(transaction.error||new Error('No se pudo guardar en IndexedDB'));
      transaction.onabort=()=>reject(transaction.error||new Error('La escritura en IndexedDB fue cancelada'));
    });
  }

  function openDatabase(){
    return new Promise((resolve,reject)=>{
      const request=indexedDB.open(DB_NAME,DB_VERSION);
      request.onupgradeneeded=()=>{
        const db=request.result;
        if(!db.objectStoreNames.contains(PRIMARY_STORE))db.createObjectStore(PRIMARY_STORE,{keyPath:'key'});
        if(!db.objectStoreNames.contains(AUTOMATIC_STORE))db.createObjectStore(AUTOMATIC_STORE,{keyPath:'key'});
      };
      request.onsuccess=()=>resolve(request.result);
      request.onerror=()=>reject(request.error||new Error('No se pudo abrir IndexedDB'));
      request.onblocked=()=>reject(new Error('Cierra las otras ventanas de la Biblia y vuelve a intentarlo'));
    });
  }

  async function readAll(storeName=PRIMARY_STORE){
    const tx=database.transaction(storeName,'readonly');
    const done=transactionDone(tx);
    const rows=await requestResult(tx.objectStore(storeName).getAll());
    await done;
    return Array.isArray(rows)?rows:[];
  }

  function physicalEntries(){
    const entries=[];
    const storage=window.localStorage;
    const length=nativeLength?nativeLength.call(storage):storage.length;
    for(let i=0;i<length;i++){
      const key=nativeKey.call(storage,i);
      if(!key||!isManagedKey(key))continue;
      const value=nativeGet.call(storage,key);
      if(value!==null)entries.push([key,value]);
    }
    return entries;
  }

  async function replaceStores(entries){
    const normalized=entries
      .filter(([key,value])=>isManagedKey(key)&&typeof value==='string')
      .map(([key,value])=>[String(key),String(value)]);
    const tx=database.transaction([PRIMARY_STORE,AUTOMATIC_STORE],'readwrite');
    const done=transactionDone(tx);
    const primary=tx.objectStore(PRIMARY_STORE);
    const automatic=tx.objectStore(AUTOMATIC_STORE);
    primary.clear();
    automatic.clear();
    const now=Date.now();
    for(const [key,value] of normalized){
      const record={key,value,hash:hashText(value),updatedAt:now};
      primary.put(record);
      automatic.put(record);
    }
    await done;
    return normalized;
  }

  async function verifyEntries(entries){
    const expected=new Map(entries.map(([key,value])=>[String(key),String(value)]));
    const rows=await readAll(PRIMARY_STORE);
    const actual=new Map(rows.map(row=>[row.key,row.value]));
    for(const [key,value] of expected){
      if(actual.get(key)!==value)throw new Error('La verificación de datos falló en '+key);
    }
    return true;
  }

  function reportWriteError(error){
    lastWriteError=error instanceof Error?error:new Error(String(error));
    console.error('No se pudo guardar un dato de la Biblia',lastWriteError);
    window.dispatchEvent(new CustomEvent('biblia-storage-error',{detail:{message:lastWriteError.message}}));
  }

  function queueOperation(operation){
    writeQueue=writeQueue.then(operation).catch(error=>{reportWriteError(error)});
    return writeQueue;
  }

  async function writeRecord(key,value){
    const tx=database.transaction([PRIMARY_STORE,AUTOMATIC_STORE],'readwrite');
    const done=transactionDone(tx);
    const primary=tx.objectStore(PRIMARY_STORE);
    const automatic=tx.objectStore(AUTOMATIC_STORE);
    const request=primary.get(key);
    request.onsuccess=()=>{
      if(request.result)automatic.put(request.result);
      primary.put({key,value,hash:hashText(value),updatedAt:Date.now()});
    };
    request.onerror=()=>tx.abort();
    await done;
  }

  async function deleteRecord(key){
    const tx=database.transaction([PRIMARY_STORE,AUTOMATIC_STORE],'readwrite');
    const done=transactionDone(tx);
    const primary=tx.objectStore(PRIMARY_STORE);
    const automatic=tx.objectStore(AUTOMATIC_STORE);
    const request=primary.get(key);
    request.onsuccess=()=>{
      if(request.result)automatic.put(request.result);
      primary.delete(key);
    };
    request.onerror=()=>tx.abort();
    await done;
  }

  function emitChange(key,oldValue,newValue){
    window.dispatchEvent(new CustomEvent('biblia-storage-change',{detail:{key,oldValue,newValue}}));
  }

  function installStorageAdapter(){
    if(installed)return;
    installed=true;

    Storage.prototype.getItem=function(key){
      const normalized=String(key);
      if(this===window.localStorage&&isManagedKey(normalized)){
        return memory.has(normalized)?memory.get(normalized):null;
      }
      return nativeGet.call(this,normalized);
    };

    Storage.prototype.setItem=function(key,value){
      const normalized=String(key),text=String(value);
      if(this===window.localStorage&&isManagedKey(normalized)){
        const oldValue=memory.has(normalized)?memory.get(normalized):null;
        if(oldValue===text)return;
        memory.set(normalized,text);
        queueOperation(()=>writeRecord(normalized,text));
        emitChange(normalized,oldValue,text);
        return;
      }
      return nativeSet.call(this,normalized,text);
    };

    Storage.prototype.removeItem=function(key){
      const normalized=String(key);
      if(this===window.localStorage&&isManagedKey(normalized)){
        const oldValue=memory.has(normalized)?memory.get(normalized):null;
        if(oldValue===null)return;
        memory.delete(normalized);
        queueOperation(()=>deleteRecord(normalized));
        emitChange(normalized,oldValue,null);
        return;
      }
      return nativeRemove.call(this,normalized);
    };
  }

  async function flush(){
    await writeQueue;
    if(lastWriteError){
      const error=lastWriteError;
      lastWriteError=null;
      throw error;
    }
    return true;
  }

  async function replaceAll(entries){
    await flush();
    const normalized=await replaceStores(entries);
    await verifyEntries(normalized);
    memory.clear();
    for(const [key,value] of normalized)memory.set(key,value);
    for(const [key] of physicalEntries())nativeRemove.call(window.localStorage,key);
    nativeSet.call(window.localStorage,MIGRATION_KEY,'1');
    emitChange('biblia_idb_replace_all',null,String(normalized.length));
    return normalized.length;
  }

  async function bootstrap(){
    database=await openDatabase();
    const physical=physicalEntries();
    let rows=await readAll(PRIMARY_STORE);

    // Si el almacén principal quedara completamente vacío, recupera la copia
    // automática interna antes de permitir que la aplicación arranque.
    if(!rows.length&&!physical.length){
      const automaticRows=await readAll(AUTOMATIC_STORE);
      if(automaticRows.length){
        const recovered=automaticRows.map(row=>[row.key,row.value]);
        await replaceStores(recovered);
        await verifyEntries(recovered);
        rows=await readAll(PRIMARY_STORE);
      }
    }

    // Una versión anterior abierta después de migrar puede volver a crear claves físicas.
    // Cuando existen, son la fuente más reciente y se incorporan antes de eliminarlas.
    if(physical.length){
      const merged=new Map(rows.map(row=>[row.key,row.value]));
      for(const [key,value] of physical)merged.set(key,value);
      const entries=[...merged.entries()];
      await replaceStores(entries);
      await verifyEntries(entries);
      rows=await readAll(PRIMARY_STORE);
      for(const [key] of physical)nativeRemove.call(window.localStorage,key);
    }

    memory.clear();
    for(const row of rows){
      if(isManagedKey(row.key)&&typeof row.value==='string')memory.set(row.key,row.value);
    }
    nativeSet.call(window.localStorage,MIGRATION_KEY,'1');
    installStorageAdapter();
    return{backend:'indexeddb',groups:memory.size};
  }

  window.BibleStorageV1={
    bootstrap,flush,replaceAll,verifyEntries,isManagedKey,
    entries:()=>[...memory.entries()],
    keys:()=>[...memory.keys()],
    get status(){return{backend:'indexeddb',groups:memory.size,pending:lastWriteError===null};}
  };
})();
