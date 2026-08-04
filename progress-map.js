/* V3.1.20 · Mapa, sincronización y lecturas por libro (módulo independiente)
   La interfaz se actualiza sin reconstruirse continuamente. */
(function(){
  'use strict';

  const FULL_BIBLE_READINGS_KEY_V3119='biblia_full_bible_readings_v3119';

  function getFullBibleReadingsV3119(){
    try{
      const value=Number(localStorage.getItem(FULL_BIBLE_READINGS_KEY_V3119));
      return Number.isFinite(value)&&value>0?Math.floor(value):0;
    }catch(_){
      return 0;
    }
  }

  function saveFullBibleReadingsV3119(value){
    const safe=Math.max(0,Math.min(99,Math.floor(Number(value)||0)));
    localStorage.setItem(FULL_BIBLE_READINGS_KEY_V3119,String(safe));
    return safe;
  }


  function completedBookReadCountV3120(book, store){
    const total=Math.max(0,Number(book?.chapters)||0);
    if(!total)return 0;
    let minimum=Infinity;
    for(let chapter=1;chapter<=total;chapter+=1){
      const item=store[`${book.key}:${chapter}`];
      if(!item?.completed)return 0;
      const count=Math.max(1,Math.floor(Number(item.readCount)||1));
      minimum=Math.min(minimum,count);
    }
    return Number.isFinite(minimum)?minimum:0;
  }

  function escapeHtml(value){
    return String(value ?? '').replace(/[&<>"']/g, ch => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    })[ch]);
  }

  function getBooks(){
    try{
      return Array.isArray(state?.books) ? state.books : [];
    }catch(_){
      return [];
    }
  }

  function getProgressStore(){
    try{
      if(typeof loadChapterReadingProgressV316 === 'function'){
        loadChapterReadingProgressV316();
      }
      return chapterReadingProgressV316 && typeof chapterReadingProgressV316 === 'object'
        ? chapterReadingProgressV316 : {};
    }catch(_){
      return {};
    }
  }

  function bookName(book){
    try{
      if(typeof displayBook === 'function') return displayBook(book);
    }catch(_){ }
    return String(book?.name || book?.title || book?.key || 'Libro').replaceAll('_',' ');
  }

  function calculateBook(book, store){
    const total = Math.max(0, Number(book?.chapters) || 0);
    let completed = 0;
    let inProgress = 0;

    for(let chapter = 1; chapter <= total; chapter += 1){
      const item = store[`${book.key}:${chapter}`];
      if(item?.completed){
        completed += 1;
      }else if((Number(item?.read) || 0) > 0){
        inProgress += 1;
      }
    }

    let status = 'not-started';
    if(total > 0 && completed >= total) status = 'completed';
    else if(completed > 0 || inProgress > 0) status = 'in-progress';

    return {
      total,
      completed,
      inProgress,
      pending: Math.max(0, total - completed - inProgress),
      status,
      percent: total ? Math.max(0, Math.min(100, completed / total * 100)) : 0,
      readCount: completedBookReadCountV3120(book,store)
    };
  }

  function statusLabel(status){
    if(status === 'completed') return 'Completado';
    if(status === 'in-progress') return 'En curso';
    return 'Sin empezar';
  }

  function createCard(book, store){
    const info = calculateBook(book, store);
    return `<button class="progress-map-book ${info.status}" type="button" data-progress-book="${escapeHtml(book.key)}" aria-expanded="false">
      <span class="progress-map-book-head">
        <strong>${escapeHtml(bookName(book))}</strong>
        <small>${statusLabel(info.status)}</small>
      </span>
      <span class="progress-map-book-count">${info.completed} de ${info.total} capítulos</span>
      <span class="progress-map-book-read-count">${info.readCount===1?'Leído 1 vez':`Leído ${info.readCount} veces`}</span>
      <span class="progress-map-book-bar" aria-hidden="true"><i style="width:${info.percent}%"></i></span>
      <span class="progress-map-book-detail" hidden>
        <span>${info.completed} completados</span>
        <span>${info.inProgress} en curso</span>
        <span>${info.pending} sin empezar</span>
        <span>${info.readCount===1?'1 lectura completa':`${info.readCount} lecturas completas`}</span>
        <button class="progress-map-book-read-edit" type="button" data-book-read-edit="${escapeHtml(book.key)}">Asignar veces leído</button>
      </span>
    </button>`;
  }

  function createTestament(title, books, store){
    return `<section class="progress-map-testament">
      <h3>${title}</h3>
      <div class="progress-map-grid">${books.map(book => createCard(book, store)).join('')}</div>
    </section>`;
  }

  function render(){
    const content = document.getElementById('myWordJourneyContent');
    if(!content || !content.children.length) return;

    const books = getBooks();
    if(!books.length) return;

    const store = getProgressStore();
    const details = books.map(book => calculateBook(book, store));
    const completed = details.filter(item => item.status === 'completed').length;
    const inProgress = details.filter(item => item.status === 'in-progress').length;
    const notStarted = details.filter(item => item.status === 'not-started').length;

    let section = content.querySelector('#progressMap66BooksV3115');
    const isNew = !section;
    if(!section){
      section = document.createElement('section');
      section.id = 'progressMap66BooksV3115';
      section.className = 'word-journey-section progress-map-section';
    }
    const fullBibleReadings=getFullBibleReadingsV3119();
    section.innerHTML = `<h2>Mapa del progreso</h2>
      <p class="progress-map-intro">Estado de los 66 libros según los capítulos que has recorrido.</p>
      <div class="progress-map-full-bible">
        <div>
          <span>Biblia completa</span>
          <strong>${fullBibleReadings} ${fullBibleReadings===1?'lectura registrada':'lecturas registradas'}</strong>
        </div>
        <button id="progressMapFullBibleBtnV3119" type="button">Registrar lecturas completas</button>
      </div>
      <div class="progress-map-sync-row">
        <button id="progressMapSyncBtnV3116" class="progress-map-sync-btn" type="button">Sincronizar libros ya leídos</button>
        <small>Para incorporar libros terminados antes de activar el seguimiento por capítulos.</small>
      </div>
      <div class="progress-map-summary">
        <div><strong>${completed}</strong><span>Completados</span></div>
        <div><strong>${inProgress}</strong><span>En curso</span></div>
        <div><strong>${notStarted}</strong><span>Sin empezar</span></div>
      </div>
      ${createTestament('Antiguo Testamento', books.slice(0,39), store)}
      ${createTestament('Nuevo Testamento', books.slice(39), store)}`;

    if(isNew){
      const sections = content.querySelectorAll(':scope > .word-journey-section');
      const monthlySection = sections.length ? sections[sections.length - 1] : null;
      if(monthlySection) content.insertBefore(section, monthlySection);
      else content.appendChild(section);
    }

    /* Enlace directo: evita depender únicamente de la delegación global. */
    section.querySelector('#progressMapSyncBtnV3116')?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      openSyncDialog();
    });
    section.querySelector('#progressMapFullBibleBtnV3119')?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      openFullBibleReadingsDialogV3119();
    });
  }


  function markAllBooksCompletedHistoricallyV3119(){
    const books=getBooks();
    synchronizeSelectedBooks(books.map(book=>book.key));
  }

  function openFullBibleReadingsDialogV3119(){
    document.getElementById('progressMapFullBibleDialogV3119')?.remove();
    const current=getFullBibleReadingsV3119();
    const overlay=document.createElement('div');
    overlay.id='progressMapFullBibleDialogV3119';
    overlay.className='progress-map-sync-overlay';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');
    overlay.innerHTML=`<div class="progress-map-sync-dialog progress-map-full-bible-dialog">
      <button class="progress-map-sync-close" type="button" aria-label="Cerrar">×</button>
      <h3>Lecturas completas de la Biblia</h3>
      <p>Indique cuántas veces había leído la Biblia completa. Este dato se guardará en la copia de seguridad. No se crearán fechas antiguas.</p>
      <label class="progress-map-full-bible-field">
        <span>Lecturas completas registradas</span>
        <input id="progressMapFullBibleInputV3119" type="number" min="0" max="99" step="1" value="${current}">
      </label>
      <p class="progress-map-full-bible-note">Si el número es mayor que cero, los 66 libros quedarán marcados como completados en el mapa. Reducir el contador no borrará su progreso de lectura.</p>
      <div class="progress-map-sync-footer">
        <button type="button" class="progress-map-sync-cancel">Cancelar</button>
        <button type="button" class="progress-map-sync-confirm">Guardar</button>
      </div>
    </div>`;
    document.body.appendChild(overlay);

    const close=()=>overlay.remove();
    overlay.querySelector('.progress-map-sync-close')?.addEventListener('click',close);
    overlay.querySelector('.progress-map-sync-cancel')?.addEventListener('click',close);
    overlay.addEventListener('click',event=>{if(event.target===overlay)close()});
    overlay.querySelector('.progress-map-sync-confirm')?.addEventListener('click',()=>{
      const input=overlay.querySelector('#progressMapFullBibleInputV3119');
      const raw=Number(input?.value);
      if(!Number.isFinite(raw)||raw<0||raw>99||!Number.isInteger(raw)){
        alert('Introduzca un número entero entre 0 y 99.');
        return;
      }
      const message=raw===1
        ?'Se registrará 1 lectura completa de la Biblia. ¿Desea continuar?'
        :`Se registrarán ${raw} lecturas completas de la Biblia. ¿Desea continuar?`;
      if(!confirm(message))return;
      const saved=saveFullBibleReadingsV3119(raw);
      if(saved>0)markAllBooksCompletedHistoricallyV3119();
      close();
      render();
      alert(saved===1?'Se ha registrado 1 lectura completa.':`Se han registrado ${saved} lecturas completas.`);
    });
    setTimeout(()=>overlay.querySelector('#progressMapFullBibleInputV3119')?.focus(),0);
  }

  window.openFullBibleReadingsDialogV3119=openFullBibleReadingsDialogV3119;

  function setBookReadCountV3120(bookKey,value){
    const books=getBooks();
    const book=books.find(item=>item.key===bookKey);
    if(!book)return false;
    const store=getProgressStore();
    const safe=Math.max(0,Math.min(99,Math.floor(Number(value)||0)));
    const total=Math.max(0,Number(book.chapters)||0);

    if(safe>0){
      for(let chapter=1;chapter<=total;chapter+=1){
        const key=`${book.key}:${chapter}`;
        const previous=store[key]&&typeof store[key]==='object'?store[key]:{};
        store[key]={
          ...previous,
          read:Math.max(1,Number(previous.read)||0),
          total:Math.max(1,Number(previous.total)||1),
          completed:true,
          readCount:Math.max(safe,Math.floor(Number(previous.readCount)||0)),
          firstCompletedAt:Number(previous.firstCompletedAt)||0,
          lastCompletedAt:Number(previous.lastCompletedAt)||0,
          updatedAt:Number(previous.updatedAt)||0,
          importedHistorical:true
        };
      }
    }

    try{
      if(typeof saveChapterReadingProgressV316==='function')saveChapterReadingProgressV316();
      else localStorage.setItem('biblia_chapter_reading_progress_v316',JSON.stringify(store));
      return true;
    }catch(error){
      console.error('No se pudo guardar las lecturas del libro',error);
      return false;
    }
  }

  function openBookReadCountDialogV3120(bookKey){
    document.getElementById('progressMapBookReadDialogV3120')?.remove();
    const books=getBooks();
    const book=books.find(item=>item.key===bookKey);
    if(!book)return;
    const store=getProgressStore();
    const current=calculateBook(book,store).readCount;
    const overlay=document.createElement('div');
    overlay.id='progressMapBookReadDialogV3120';
    overlay.className='progress-map-sync-overlay';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');
    overlay.innerHTML=`<div class="progress-map-sync-dialog progress-map-book-read-dialog">
      <button class="progress-map-sync-close" type="button" aria-label="Cerrar">×</button>
      <h3>${escapeHtml(bookName(book))}</h3>
      <p>Indique cuántas veces ha leído este libro completo. El dato se aplicará a todos sus capítulos y quedará incluido en la copia de seguridad.</p>
      <label class="progress-map-full-bible-field">
        <span>Veces leído completo</span>
        <input id="progressMapBookReadInputV3120" type="number" min="0" max="99" step="1" value="${current}">
      </label>
      <p class="progress-map-full-bible-note">Asignar un número mayor actualizará el historial del libro. Un número menor no borrará lecturas ya registradas automáticamente.</p>
      <div class="progress-map-sync-footer">
        <button type="button" class="progress-map-sync-cancel">Cancelar</button>
        <button type="button" class="progress-map-sync-confirm">Guardar</button>
      </div>
    </div>`;
    document.body.appendChild(overlay);

    const close=()=>overlay.remove();
    overlay.querySelector('.progress-map-sync-close')?.addEventListener('click',close);
    overlay.querySelector('.progress-map-sync-cancel')?.addEventListener('click',close);
    overlay.addEventListener('click',event=>{if(event.target===overlay)close()});
    overlay.querySelector('.progress-map-sync-confirm')?.addEventListener('click',()=>{
      const raw=Number(overlay.querySelector('#progressMapBookReadInputV3120')?.value);
      if(!Number.isFinite(raw)||raw<0||raw>99||!Number.isInteger(raw)){
        alert('Introduzca un número entero entre 0 y 99.');
        return;
      }
      const effective=Math.max(current,raw);
      const message=effective===1
        ?`${bookName(book)} quedará registrado como leído 1 vez. ¿Desea continuar?`
        :`${bookName(book)} quedará registrado como leído ${effective} veces. ¿Desea continuar?`;
      if(!confirm(message))return;
      if(!setBookReadCountV3120(bookKey,effective)){
        alert('No se pudo guardar el número de lecturas.');
        return;
      }
      close();
      render();
      alert(effective===1?'Se ha registrado 1 lectura completa del libro.':`Se han registrado ${effective} lecturas completas del libro.`);
    });
    setTimeout(()=>overlay.querySelector('#progressMapBookReadInputV3120')?.focus(),0);
  }

  window.openBookReadCountDialogV3120=openBookReadCountDialogV3120;

  function existingCompletedBookKeys(){
    const books=getBooks();
    const store=getProgressStore();
    return new Set(books.filter(book=>calculateBook(book,store).status==='completed').map(book=>book.key));
  }

  function openSyncDialog(){
    document.getElementById('progressMapSyncDialogV3116')?.remove();
    const books=getBooks();
    const completed=existingCompletedBookKeys();
    const overlay=document.createElement('div');
    overlay.id='progressMapSyncDialogV3116';
    overlay.className='progress-map-sync-overlay';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');
    overlay.innerHTML=`<div class="progress-map-sync-dialog">
      <button class="progress-map-sync-close" type="button" aria-label="Cerrar">×</button>
      <h3>Sincronizar libros ya leídos</h3>
      <p>Seleccione únicamente los libros que ya había terminado antes de activar el seguimiento. No se asignará una fecha antigua ni se añadirán al mes actual.</p>
      <div class="progress-map-sync-actions-top">
        <button type="button" data-sync-action="all">Seleccionar todos</button>
        <button type="button" data-sync-action="none">Quitar selección</button>
      </div>
      <div class="progress-map-sync-list">
        ${books.map((book,index)=>`<label class="progress-map-sync-item ${completed.has(book.key)?'already-completed':''}">
          <input type="checkbox" value="${escapeHtml(book.key)}" ${completed.has(book.key)?'checked disabled':''}>
          <span><strong>${escapeHtml(bookName(book))}</strong><small>${completed.has(book.key)?'Ya completado en el mapa':`${book.chapters} capítulos`}</small></span>
        </label>`).join('')}
      </div>
      <div class="progress-map-sync-footer">
        <button type="button" class="progress-map-sync-cancel">Cancelar</button>
        <button type="button" class="progress-map-sync-confirm">Sincronizar seleccionados</button>
      </div>
    </div>`;
    document.body.appendChild(overlay);

    const close=()=>overlay.remove();
    overlay.querySelector('.progress-map-sync-close')?.addEventListener('click',close);
    overlay.querySelector('.progress-map-sync-cancel')?.addEventListener('click',close);
    overlay.addEventListener('click',event=>{if(event.target===overlay)close()});
    overlay.querySelector('[data-sync-action="all"]')?.addEventListener('click',()=>{
      overlay.querySelectorAll('input[type="checkbox"]:not(:disabled)').forEach(input=>input.checked=true);
    });
    overlay.querySelector('[data-sync-action="none"]')?.addEventListener('click',()=>{
      overlay.querySelectorAll('input[type="checkbox"]:not(:disabled)').forEach(input=>input.checked=false);
    });
    overlay.querySelector('.progress-map-sync-confirm')?.addEventListener('click',()=>{
      const selected=[...overlay.querySelectorAll('input[type="checkbox"]:checked:not(:disabled)')].map(input=>input.value);
      if(!selected.length){
        alert('No ha seleccionado ningún libro nuevo.');
        return;
      }
      const names=selected.map(key=>bookName(books.find(book=>book.key===key))).filter(Boolean);
      const message=`Se marcarán como completados ${selected.length} ${selected.length===1?'libro':'libros'}:\n\n${names.join(', ')}\n\n¿Desea continuar?`;
      if(!confirm(message))return;
      synchronizeSelectedBooks(selected);
      close();
      render();
      alert(`${selected.length} ${selected.length===1?'libro incorporado':'libros incorporados'} al mapa de progreso.`);
    });
  }

  window.openProgressMapSyncDialogV3117=openSyncDialog;

  function synchronizeSelectedBooks(bookKeys){
    const books=getBooks();
    const store=getProgressStore();
    for(const key of bookKeys){
      const book=books.find(item=>item.key===key);
      if(!book)continue;
      const totalChapters=Math.max(0,Number(book.chapters)||0);
      for(let chapter=1;chapter<=totalChapters;chapter+=1){
        const progressKey=`${book.key}:${chapter}`;
        const previous=store[progressKey]&&typeof store[progressKey]==='object'?store[progressKey]:{};
        store[progressKey]={
          ...previous,
          read:Math.max(1,Number(previous.read)||0),
          total:Math.max(1,Number(previous.total)||1),
          completed:true,
          readCount:Math.max(1,Number(previous.readCount)||0),
          firstCompletedAt:Number(previous.firstCompletedAt)||0,
          lastCompletedAt:Number(previous.lastCompletedAt)||0,
          updatedAt:Number(previous.updatedAt)||0,
          importedHistorical:true
        };
      }
    }
    try{
      if(typeof saveChapterReadingProgressV316==='function'){
        saveChapterReadingProgressV316();
      }else{
        localStorage.setItem('biblia_chapter_reading_progress_v316',JSON.stringify(store));
      }
    }catch(error){
      console.error('No se pudo guardar la sincronización de libros',error);
      alert('No se pudo guardar la sincronización. No se han eliminado datos existentes.');
    }
  }

  function scheduleRender(){
    requestAnimationFrame(() => requestAnimationFrame(render));
  }

  document.addEventListener('click', event => {
    if(event.target.closest?.('#progressMapFullBibleBtnV3119')){
      openFullBibleReadingsDialogV3119();
      return;
    }
    if(event.target.closest?.('#progressMapSyncBtnV3116')){
      openSyncDialog();
      return;
    }
    const editButton=event.target.closest?.('[data-book-read-edit]');
    if(editButton){
      event.preventDefault();
      event.stopPropagation();
      openBookReadCountDialogV3120(editButton.dataset.bookReadEdit);
      return;
    }
    const card = event.target.closest?.('[data-progress-book]');
    if(!card) return;
    const detail = card.querySelector('.progress-map-book-detail');
    if(!detail) return;
    const opening = detail.hidden;
    detail.hidden = !opening;
    card.setAttribute('aria-expanded', opening ? 'true' : 'false');
  });

  document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('myWordJourneyContent');
    if(!content) return;

    const observer = new MutationObserver(() => {
      if(content.children.length && !content.querySelector('#progressMap66BooksV3115')){
        scheduleRender();
      }
    });
    observer.observe(content, {childList:true});

    document.getElementById('myWordJourneyBtn')?.addEventListener('click', scheduleRender);
  });
})();
