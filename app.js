const DATA='./';
const APP_VERSION='1.37.0';
const freshUrl=file=>`${DATA}${file}?v=${APP_VERSION}`;
const storedReadingPoints=JSON.parse(localStorage.getItem('readingPoints')||'[]');
const state={books:[],bookIndex:0,chapter:1,verses:[],titles:{},selected:new Set(),highlights:JSON.parse(localStorage.getItem('highlights')||'{}'),favorites:JSON.parse(localStorage.getItem('favorites')||'{}'),explanations:JSON.parse(localStorage.getItem('explanations')||'{}'),readingPoints:Array.isArray(storedReadingPoints)?storedReadingPoints.map((p,i)=>({...p,id:String(p.id||`${Date.now()}-${i}-${Math.random().toString(36).slice(2)}`)})):[],importedTitles:JSON.parse(localStorage.getItem('importedTitles')||'{}'),externalBible:null,baseTitles:{},dictionaryBase:[],dictionaryCustom:JSON.parse(localStorage.getItem('dictionaryCustom')||'[]'),dictionaryEdits:JSON.parse(localStorage.getItem('dictionaryEdits')||'{}'),dictionaryDeleted:JSON.parse(localStorage.getItem('dictionaryDeleted')||'[]')};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const reader=$('#reader'), selectionBar=$('#selectionBar');

function showHome(){
  $('#homeScreen').classList.remove('hidden');
  $('#readerScreen').classList.add('hidden');
  state.selected.clear();
  updateSelection();
  updateReadingPointUI();
  scrollTo(0,0);
}
function showReader(){
  $('#homeScreen').classList.add('hidden');
  $('#readerScreen').classList.remove('hidden');
  scrollTo(0,0);
}
function openBooksDrawer(){
  const drawer=$('#drawer');
  drawer.classList.remove('hidden','closing');
  drawer.classList.add('is-open');
  $('#drawerBackdrop').classList.remove('hidden');
}
function openSearchDialog(){
  $('#searchDialog h2').textContent='Buscar en la Biblia';
  $('#searchDialog .search-row').style.display='flex';
  $('#searchResults').innerHTML='<p class="search-help">Busca palabras o una referencia, por ejemplo: Juan 3:16, 1 Corintios 6 o Romanos 8:28-30.</p>';
  $('#searchInput').value='';
  $('#searchDialog').showModal();
}

function save(){localStorage.setItem('highlights',JSON.stringify(state.highlights));localStorage.setItem('favorites',JSON.stringify(state.favorites));localStorage.setItem('explanations',JSON.stringify(state.explanations));localStorage.setItem('last',JSON.stringify({bookIndex:state.bookIndex,chapter:state.chapter}));localStorage.setItem('readingPoints',JSON.stringify(state.readingPoints));localStorage.setItem('importedTitles',JSON.stringify(state.importedTitles||{}));localStorage.setItem('dictionaryCustom',JSON.stringify(state.dictionaryCustom||[]));localStorage.setItem('dictionaryEdits',JSON.stringify(state.dictionaryEdits||{}));localStorage.setItem('dictionaryDeleted',JSON.stringify(state.dictionaryDeleted||[]));updateReadingPointUI();}
function key(v){return `${state.books[state.bookIndex].key}:${state.chapter}:${v}`}
function rangeKey(nums=[...state.selected]){return `${state.books[state.bookIndex].key}:${state.chapter}:${nums.sort((a,b)=>a-b).join(',')}`}
function displayBook(book){const map={mateo:'San Mateo',marcos:'San Marcos',lucas:'San Lucas',juan:'San Juan'};return map[book.key]||book.shortTitle}
function formatNums(nums){nums=[...new Set(nums)].sort((a,b)=>a-b);if(!nums.length)return'';let out=[],start=nums[0],prev=nums[0];for(let i=1;i<=nums.length;i++){const n=nums[i];if(n===prev+1){prev=n;continue}out.push(start===prev?`${start}`:`${start}-${prev}`);start=prev=n}return out.join(', ')}
function currentReference(nums=[...state.selected],upper=false){const b=displayBook(state.books[state.bookIndex]);const r=`${b} ${state.chapter}:${formatNums(nums)}`;return upper?r.toUpperCase():r}
async function init(){
  // Limpieza única de las cachés antiguas de esta aplicación. No afecta a localStorage.
  if('caches' in window){
    try{
      const cacheNames=await caches.keys();
      await Promise.all(cacheNames.filter(name=>name.startsWith('biblia-estudio-')&&name!=='biblia-estudio-v1.37.0').map(name=>caches.delete(name)));
    }catch(error){console.warn('No se pudieron limpiar las cachés antiguas',error)}
  }
  state.books=await fetch(freshUrl('index.json'),{cache:'no-store'}).then(r=>r.json());state.dictionaryBase=await fetch(freshUrl('biblical-dictionary.json'),{cache:'no-store'}).then(r=>r.json()).then(x=>x.entries||[]).catch(()=>[]);state.externalBible=await loadInstalledBible();const oldPoint=JSON.parse(localStorage.getItem('readingPoint')||'null');if(oldPoint&&!state.readingPoints.length){state.readingPoints=[{...oldPoint,id:oldPoint.updated||Date.now()}];localStorage.setItem('readingPoints',JSON.stringify(state.readingPoints));localStorage.removeItem('readingPoint')}state.baseTitles=await fetch(freshUrl('titulos.json'),{cache:'no-store'}).then(r=>r.ok?r.json():{}).catch(()=>({}));state.titles=mergeTitles(state.baseTitles,state.externalBible?.titles||state.importedTitles);const last=JSON.parse(localStorage.getItem('last')||'null');if(last){state.bookIndex=Math.min(last.bookIndex,state.books.length-1);state.chapter=last.chapter}await loadChapter();renderBooks();showHome();if('serviceWorker'in navigator){
  // La actualización del service worker se aplica sin recargar la pantalla.
  // Así el desplegable de Libros no vuelve solo a la portada mientras se usa.
  navigator.serviceWorker.register(`sw.js?v=${APP_VERSION}`,{updateViaCache:'none'}).then(async reg=>{
    await reg.update();
    if(reg.waiting)reg.waiting.postMessage({type:'SKIP_WAITING'});
  }).catch(()=>{});
}}
async function getBookChapters(book){if(state.externalBible?.books?.[book.key])return state.externalBible.books[book.key];return fetch(freshUrl(book.key+'.json'),{cache:'no-store'}).then(r=>r.json())}
async function loadChapter(){state.selected.clear();const b=state.books[state.bookIndex];const data=await getBookChapters(b);state.verses=(data[state.chapter-1]||[]).map(limpiarTextoBiblico);render();save();}
function render(){const b=state.books[state.bookIndex];$('#bookTitle').textContent=displayBook(b);$('#chapterTitle').textContent=state.chapter;$('#chapterIndicator').textContent=`${displayBook(b)} ${state.chapter}`;const chapterTitles=(state.titles[b.key]?.[String(state.chapter)]||[]).reduce((m,x)=>((m[x.versiculo]||(m[x.versiculo]=[])).push(x.titulo),m),{});reader.innerHTML=`<div class="reader-book-title">${escapeHtml(displayBook(b).toUpperCase())}</div><div class="chapter-number">${state.chapter}</div>`+state.verses.map((t,i)=>{const n=i+1,k=key(n),h=state.highlights[k]?` highlight-${state.highlights[k]}`:'',saved=state.favorites[k]?' saved-verse':'';const headings=(chapterTitles[n]||[]).map(x=>`<h3 class="section-title">${escapeHtml(x)}</h3>`).join('');const exp=findExplanationForVerse(n);const marker=exp?`<button class="explain-marker" data-exp="${exp.key}" aria-label="Ver explicación">i</button>`:'';return `${headings}<span class="verse${h}${saved}" data-v="${n}"><sup class="verse-number">${n}</sup>${formatBibleText(t)}</span>${marker} `}).join('');updateSelection();updateReadingPointUI();reader.scrollTop=0}
function limpiarTextoBiblico(texto){return String(texto??'').replace(/\r\n?/g,'\n').replace(/\\n/g,'\n').replace(/\/n/gi,'\n').replace(/\u002Fn/gi,'\n').replace(/\n{3,}/g,'\n\n').trim()}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function formatBibleText(s){return escapeHtml(limpiarTextoBiblico(s)).replace(/\n/g,'<br>')}
function findExplanationForVerse(n){const prefix=`${state.books[state.bookIndex].key}:${state.chapter}:`;for(const [k,v] of Object.entries(state.explanations)){if(k.startsWith(prefix)){const nums=k.split(':')[2].split(',').map(Number);if(nums.includes(n))return{key:k,...v}}}return null}
function updateSelection(){
  $$('.verse').forEach(el=>el.classList.toggle('selected',state.selected.has(+el.dataset.v)));
  const favoriteBtn=document.querySelector('.action[data-action="favorite"]');
  const toggle=$('#actionsPanelToggle');
  if(state.selected.size){
    const firstOpen=selectionBar.classList.contains('hidden');
    selectionBar.classList.remove('hidden');
    if(firstOpen)selectionBar.classList.add('open');
    if(toggle)toggle.setAttribute('aria-expanded',selectionBar.classList.contains('open')?'true':'false');
    $('#selectionReference').textContent=currentReference();
    const nums=[...state.selected];
    const allSaved=nums.every(n=>Boolean(state.favorites[key(n)]));
    if(favoriteBtn){favoriteBtn.innerHTML=`<span>🔖</span>${allSaved?'Quitar':'Guardar'}`;favoriteBtn.dataset.mode=allSaved?'remove':'save'}
  }else{
    selectionBar.classList.remove('open');
    selectionBar.classList.add('hidden');
    if(toggle)toggle.setAttribute('aria-expanded','false');
    if(favoriteBtn){favoriteBtn.innerHTML='<span>🔖</span>Guardar';favoriteBtn.dataset.mode='save'}
  }
}
const actionsPanelToggle=$('#actionsPanelToggle');
if(actionsPanelToggle)actionsPanelToggle.addEventListener('click',e=>{
  e.stopPropagation();
  const open=selectionBar.classList.toggle('open');
  actionsPanelToggle.setAttribute('aria-expanded',open?'true':'false');
});
reader.addEventListener('click',e=>{const marker=e.target.closest('.explain-marker');if(marker){openViewExplanation(marker.dataset.exp);return}const v=e.target.closest('.verse');if(!v)return;const n=+v.dataset.v;state.selected.has(n)?state.selected.delete(n):state.selected.add(n);updateSelection()});
// El versículo abierto desde el selector permanece marcado hasta tocar fuera de él.
document.addEventListener('click',e=>{const target=document.querySelector('.verse.reading-target');if(target&&!e.target.closest('.verse.reading-target'))target.classList.remove('reading-target')},true);
$$('.action').forEach(b=>b.addEventListener('click',()=>action(b.dataset.action)));
async function action(a){
  if(a==='clear'){state.selected.clear();updateSelection()}
  if(a==='copy')copyVerses();
  if(a==='highlight')$('#highlightDialog').showModal();
  if(a==='favorite'){
    const nums=[...state.selected];
    const allSaved=nums.length>0&&nums.every(n=>Boolean(state.favorites[key(n)]));
    for(const n of nums){
      const k=key(n);
      if(allSaved)delete state.favorites[k];
      else state.favorites[k]={text:limpiarTextoBiblico(state.verses[n-1]),ref:`${displayBook(state.books[state.bookIndex])} ${state.chapter}:${n}`,savedAt:Date.now()};
    }
    save();
    render();
    state.selected=new Set(nums);
    updateSelection();
    toast(allSaved?'Guardado quitado':'Versículo guardado');
  }
  if(a==='explain')openEditExplanation(rangeKey(),currentReference())
  if(a==='dictionary')openDictionary()
}
async function copyVerses(){const nums=[...state.selected].sort((a,b)=>a-b);const body=nums.map(n=>`[${n}] ${limpiarTextoBiblico(state.verses[n-1])}`).join('\n');const text=`${currentReference(nums,true)} RVR1960\n${body}`;await navigator.clipboard.writeText(text);toast('Versículos copiados')}
$$('#highlightDialog [data-color]').forEach(b=>b.addEventListener('click',()=>{for(const n of state.selected){const k=key(n);b.dataset.color==='none'?delete state.highlights[k]:state.highlights[k]=b.dataset.color}save();$('#highlightDialog').close();render();toast('Subrayado actualizado')}));
function openEditExplanation(k,ref){const old=state.explanations[k];const text=$('#explanationText');$('#explanationDialog').dataset.key=k;$('#explanationRef').textContent=ref;text.value=old?.text||'';text.readOnly=Boolean(old);$('#editExplanationInline').style.display=old?'inline-block':'none';$('#deleteExplanation').style.display=old?'inline-block':'none';$('#explanationDialog').showModal()}
$('#saveExplanation').onclick=()=>{const k=$('#explanationDialog').dataset.key,text=$('#explanationText').value.trim();if(!text){toast('Escribe una explicación');return}state.explanations[k]={text,ref:$('#explanationRef').textContent,updated:Date.now()};save();$('#explanationDialog').close();state.selected.clear();render();toast('Explicación guardada')};
$('#editExplanationInline').onclick=()=>{const text=$('#explanationText');text.readOnly=false;text.focus();text.setSelectionRange(text.value.length,text.value.length);toast('Modo edición')};
$('#pasteExplanation').onclick=async()=>{try{const text=$('#explanationText');text.readOnly=false;text.value=await navigator.clipboard.readText();text.focus()}catch{toast('No se pudo pegar')}};
$('#deleteExplanation').onclick=()=>{if(confirm('¿Eliminar esta explicación?')){delete state.explanations[$('#explanationDialog').dataset.key];save();$('#explanationDialog').close();render();toast('Explicación eliminada')}};
function openViewExplanation(k){const x=state.explanations[k];if(!x)return;$('#viewExplanationDialog').dataset.key=k;$('#viewExplanationRef').textContent=x.ref;$('#viewExplanationText').textContent=x.text;$('#viewExplanationDialog').showModal()}
$('#editExplanation').onclick=()=>{const k=$('#viewExplanationDialog').dataset.key,x=state.explanations[k];$('#viewExplanationDialog').close();openEditExplanation(k,x.ref)};
$('#copyExplanation').onclick=async()=>{const k=$('#viewExplanationDialog').dataset.key,x=state.explanations[k];await navigator.clipboard.writeText(`${x.ref}\n${x.text}`);toast('Explicación copiada')};
function renderBooks(filter='all'){
  const list=$('#booksList');
  list.innerHTML='';
  const filtered=state.books.filter(b=>filter==='all'||b.testament===filter);
  filtered.forEach(b=>{
    const real=state.books.indexOf(b);
    const wrap=document.createElement('section');
    wrap.className='book-entry';

    const btn=document.createElement('button');
    btn.className='book-item';
    btn.setAttribute('aria-expanded','false');
    btn.innerHTML=`<span>${escapeHtml(displayBook(b))}</span><small>${b.chapters} capítulos · ${escapeHtml(b.category)}</small><span class="book-chevron">⌄</span>`;

    const chaptersWrap=document.createElement('div');
    chaptersWrap.className='book-chapters-wrap hidden';
    const grid=document.createElement('div');
    grid.className='book-chapters';
    grid.setAttribute('aria-label',`Capítulos de ${displayBook(b)}`);
    chaptersWrap.append(grid);

    for(let chapter=1;chapter<=b.chapters;chapter++){
      const chapterBlock=document.createElement('div');
      chapterBlock.className='chapter-block';
      const chapterBtn=document.createElement('button');
      chapterBtn.type='button';
      chapterBtn.className='chapter-choice';
      chapterBtn.textContent=chapter;
      if(real===state.bookIndex&&chapter===state.chapter)chapterBtn.classList.add('current');

      const versesGrid=document.createElement('div');
      versesGrid.className='book-verses hidden';
      versesGrid.setAttribute('aria-label',`Versículos de ${displayBook(b)} ${chapter}`);

      chapterBtn.onclick=async event=>{
        event.stopPropagation();
        const opening=versesGrid.classList.contains('hidden');
        chaptersWrap.querySelectorAll('.book-verses').forEach(x=>x.classList.add('hidden'));
        chaptersWrap.querySelectorAll('.chapter-choice').forEach(x=>x.classList.remove('open'));
        if(!opening)return;
        chapterBtn.classList.add('open');
        if(!versesGrid.dataset.loaded){
          versesGrid.innerHTML='<span class="loading-verses">Cargando…</span>';
          try{
            const data=await getBookChapters(b);
            const count=(data[chapter-1]||[]).length;
            versesGrid.innerHTML='';
            for(let verse=1;verse<=count;verse++){
              const verseBtn=document.createElement('button');
              verseBtn.type='button';
              verseBtn.textContent=verse;
              verseBtn.onclick=async ev=>{
                ev.stopPropagation();
                state.bookIndex=real;
                state.chapter=chapter;
                closeDrawer();
                showReader();
                await loadChapter();
                setTimeout(()=>{
                  const el=$(`.verse[data-v="${verse}"]`);
                  el?.scrollIntoView({block:'center',behavior:'smooth'});
                  document.querySelectorAll('.verse.reading-target').forEach(x=>x.classList.remove('reading-target'));
                  el?.classList.add('reading-target');
                },120);
              };
              versesGrid.append(verseBtn);
            }
            versesGrid.dataset.loaded='true';
          }catch{
            versesGrid.innerHTML='<span class="loading-verses">No se pudieron cargar los versículos.</span>';
          }
        }
        versesGrid.classList.remove('hidden');
        setTimeout(()=>chapterBlock.scrollIntoView({block:'nearest',behavior:'smooth'}),40);
      };

      chapterBlock.append(chapterBtn,versesGrid);
      grid.append(chapterBlock);
    }

    btn.onclick=()=>{
      const opening=chaptersWrap.classList.contains('hidden');
      $$('.book-chapters-wrap').forEach(x=>x.classList.add('hidden'));
      $$('.book-item').forEach(x=>x.setAttribute('aria-expanded','false'));
      if(opening){
        chaptersWrap.classList.remove('hidden');
        btn.setAttribute('aria-expanded','true');
        setTimeout(()=>wrap.scrollIntoView({block:'nearest',behavior:'smooth'}),30);
      }
    };

    wrap.append(btn,chaptersWrap);
    list.append(wrap);
  });
}
$('#homeBtn').onclick=showHome;$('#bookTitle').onclick=openBooksDrawer;function closeDrawer(){const drawer=$('#drawer');drawer.classList.remove('is-open');drawer.classList.add('closing');$('#drawerBackdrop').classList.add('hidden');setTimeout(()=>{drawer.classList.add('hidden');drawer.classList.remove('closing')},220)}$('#closeDrawer').onclick=closeDrawer;$('#drawerBackdrop').onclick=closeDrawer;
(function activarGestosPanelLibros(){
  const drawer=$('#drawer');
  const backdrop=$('#drawerBackdrop');
  const EDGE=30;
  const THRESHOLD=72;
  let startX=0,startY=0,trackingClose=false,trackingOpen=false,horizontal=false;

  function resetDrag(){
    drawer.classList.remove('dragging');
    drawer.style.transform='';
    backdrop.style.opacity='';
    trackingClose=trackingOpen=horizontal=false;
  }

  // Cerrar: arrastrar el panel abierto hacia la izquierda.
  drawer.addEventListener('touchstart',e=>{
    if(e.touches.length!==1||drawer.classList.contains('hidden'))return;
    startX=e.touches[0].clientX;startY=e.touches[0].clientY;
    trackingClose=true;horizontal=false;
  },{passive:true});
  drawer.addEventListener('touchmove',e=>{
    if(!trackingClose)return;
    const dx=e.touches[0].clientX-startX,dy=e.touches[0].clientY-startY;
    if(!horizontal){
      if(Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>12){trackingClose=false;return}
      if(Math.abs(dx)>10)horizontal=true;
    }
    if(horizontal&&dx<0){
      e.preventDefault();
      drawer.classList.add('dragging');
      const x=Math.max(-drawer.offsetWidth,dx);
      drawer.style.transform=`translateX(${x}px)`;
      backdrop.style.opacity=String(Math.max(0,1-Math.abs(x)/drawer.offsetWidth));
    }
  },{passive:false});
  drawer.addEventListener('touchend',e=>{
    if(!trackingClose){resetDrag();return}
    const dx=(e.changedTouches[0]?.clientX??startX)-startX;
    const shouldClose=horizontal&&dx<-THRESHOLD;
    resetDrag();
    if(shouldClose){
      closeDrawer();
    }else{
      drawer.classList.remove('closing');
      drawer.classList.add('is-open');
      drawer.classList.remove('hidden');
      backdrop.classList.remove('hidden');
    }
  },{passive:true});
  drawer.addEventListener('touchcancel',resetDrag,{passive:true});

  // Abrir: comenzar en el borde izquierdo y deslizar hacia la derecha.
  window.addEventListener('touchstart',e=>{
    if(e.touches.length!==1||!drawer.classList.contains('hidden'))return;
    if(document.querySelector('dialog[open]'))return;
    const t=e.touches[0];
    if(t.clientX>EDGE)return;
    startX=t.clientX;startY=t.clientY;
    trackingOpen=true;horizontal=false;
  },{passive:true});
  window.addEventListener('touchmove',e=>{
    if(!trackingOpen)return;
    const dx=e.touches[0].clientX-startX,dy=e.touches[0].clientY-startY;
    if(!horizontal){
      if(Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>12){trackingOpen=false;return}
      if(dx>10){
        horizontal=true;
        drawer.classList.remove('hidden','closing');
        drawer.classList.add('dragging');
        backdrop.classList.remove('hidden');
      }
    }
    if(horizontal){
      e.preventDefault();
      const width=drawer.offsetWidth||window.innerWidth*.9;
      const progress=Math.max(0,Math.min(1,dx/width));
      drawer.style.transform=`translateX(${(-1+progress)*100}%)`;
      backdrop.style.opacity=String(progress);
    }
  },{passive:false});
  window.addEventListener('touchend',e=>{
    if(!trackingOpen)return;
    const dx=(e.changedTouches[0]?.clientX??startX)-startX;
    const shouldOpen=horizontal&&dx>THRESHOLD;
    resetDrag();
    if(shouldOpen){
      drawer.classList.remove('hidden','closing');
      drawer.classList.add('is-open');
      backdrop.classList.remove('hidden');
    }else{
      drawer.classList.remove('is-open');
      drawer.classList.add('hidden');
      backdrop.classList.add('hidden');
    }
  },{passive:true});
  window.addEventListener('touchcancel',()=>{
    if(!trackingOpen)return;
    resetDrag();
    drawer.classList.remove('is-open');
    drawer.classList.add('hidden');
    backdrop.classList.add('hidden');
  },{passive:true});
})();
$$('.drawer-tabs button').forEach(b=>b.onclick=()=>{$$('.drawer-tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderBooks(b.dataset.testament)});
$('#chapterTitle').onclick=()=>{const b=state.books[state.bookIndex];$('#chapterDialogTitle').textContent=displayBook(b);$('#chaptersGrid').innerHTML='';for(let i=1;i<=b.chapters;i++){const x=document.createElement('button');x.textContent=i;x.onclick=async()=>{state.chapter=i;$('#chapterDialog').close();showReader();await loadChapter()};$('#chaptersGrid').append(x)}$('#chapterDialog').showModal()};
$('#prevChapter').onclick=()=>moveChapter(-1);$('#nextChapter').onclick=()=>moveChapter(1);async function moveChapter(d){let b=state.books[state.bookIndex];let c=state.chapter+d;if(c<1&&state.bookIndex>0){state.bookIndex--;b=state.books[state.bookIndex];c=b.chapters}else if(c>b.chapters&&state.bookIndex<state.books.length-1){state.bookIndex++;c=1}else if(c<1||c>b.chapters)return;state.chapter=c;showReader();await loadChapter();scrollTo(0,0)}
$('#searchBtn').onclick=openSearchDialog;$('#searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')runSearch()});$('#runSearch').onclick=runSearch;
function normalizeText(x){return x.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim()}
function parseReference(raw){const q=normalizeText(raw).replace(/\./g,'');const m=q.match(/^(.+?)\s+(\d+)(?:\s*:\s*(\d+)(?:\s*-\s*(\d+))?)?$/);if(!m)return null;const bookName=m[1].trim();const aliases={salmo:'salmos',cantar:'cantares',apocalipsis:'apocalipsis',revelacion:'apocalipsis','san mateo':'mateo','san marcos':'marcos','san lucas':'lucas','san juan':'juan'};const wanted=aliases[bookName]||bookName;const bi=state.books.findIndex(b=>{const names=[b.key,b.shortTitle,b.title,b.abbr,displayBook(b)].map(normalizeText);return names.includes(wanted)||names.some(n=>n.replace(/^libro (de|del|de los) /,'')===wanted)});if(bi<0)return null;const c=+m[2],v=m[3]?+m[3]:null,endv=m[4]?+m[4]:v,b=state.books[bi];if(c<1||c>b.chapters)return null;return{bi,c,v,endv,ref:v?`${displayBook(b)} ${c}:${v}${endv>v?'-'+endv:''}`:`${displayBook(b)} ${c}`}}
async function openSearchResult(r){state.bookIndex=r.bi;state.chapter=r.c;$('#searchDialog').close();showReader();await loadChapter();if(r.v)setTimeout(()=>{for(let n=r.v;n<=Math.min(r.endv||r.v,state.verses.length);n++)state.selected.add(n);updateSelection();$(`.verse[data-v="${r.v}"]`)?.scrollIntoView({block:'center'})},100)}
async function runSearch(){const raw=$('#searchInput').value.trim();if(raw.length<2)return toast('Escribe al menos 2 caracteres');const box=$('#searchResults');const direct=parseReference(raw);if(direct){box.innerHTML=`<div class="search-result reference-result"><strong>${escapeHtml(direct.ref)}</strong><span>Abrir esta referencia</span></div>`;box.querySelector('.search-result').onclick=()=>openSearchResult(direct);return}const q=normalizeText(raw);box.innerHTML='<p>Buscando en toda la Biblia…</p>';let results=[];for(let bi=0;bi<state.books.length&&results.length<100;bi++){const b=state.books[bi],chapters=await getBookChapters(b);for(let ci=0;ci<chapters.length&&results.length<100;ci++)for(let vi=0;vi<chapters[ci].length&&results.length<100;vi++)if(normalizeText(limpiarTextoBiblico(chapters[ci][vi])).includes(q))results.push({bi,c:ci+1,v:vi+1,endv:vi+1,t:limpiarTextoBiblico(chapters[ci][vi]),ref:`${displayBook(b)} ${ci+1}:${vi+1}`})}box.innerHTML=results.length?results.map((r,i)=>`<div class="search-result" data-i="${i}"><strong>${r.ref}</strong>${formatBibleText(r.t)}</div>`).join(''):'<p>Sin resultados.</p>';$$('.search-result').forEach(el=>el.onclick=()=>openSearchResult(results[+el.dataset.i]))}
$('#settingsBtn').onclick=()=>$('#settingsDialog').showModal();$('#fontSize').oninput=e=>{document.documentElement.style.setProperty('--font-size',e.target.value+'px');localStorage.setItem('fontSize',e.target.value)};const fs=localStorage.getItem('fontSize');if(fs){$('#fontSize').value=fs;document.documentElement.style.setProperty('--font-size',fs+'px')}
let wakeLock=null;$('#keepAwake').onchange=async e=>{try{if(e.target.checked&&'wakeLock'in navigator)wakeLock=await navigator.wakeLock.request('screen');else await wakeLock?.release()}catch{e.target.checked=false;toast('No disponible en este dispositivo')}};
$('#showFavorites').onclick=()=>showCollection('Versículos guardados',Object.entries(state.favorites).map(([k,v])=>({k,ref:v.ref,text:v.text})));$('#showExplanations').onclick=()=>showCollection('Mis explicaciones',Object.entries(state.explanations).sort((a,b)=>b[1].updated-a[1].updated).map(([k,v])=>({k,ref:v.ref,text:v.text,exp:true})));function showCollection(title,items){$('#settingsDialog').close();$('#searchDialog h2').textContent=title;$('#searchDialog .search-row').style.display='none';$('#searchResults').innerHTML=items.length?items.map((x,i)=>`<div class="list-card" data-i="${i}"><strong>${x.ref}</strong><p>${formatBibleText(x.text)}</p></div>`).join(''):'<p>Todavía no hay elementos.</p>';$('#searchDialog').showModal();$$('.list-card').forEach(el=>el.onclick=()=>{const x=items[+el.dataset.i];if(x.exp){$('#searchDialog').close();openViewExplanation(x.k)}else navigateKey(x.k)})}
async function navigateKey(k){const [bookKey,c,v]=k.split(':');state.bookIndex=state.books.findIndex(b=>b.key===bookKey);state.chapter=+c;$('#searchDialog').close();showReader();await loadChapter();setTimeout(()=>{state.selected.add(+v);updateSelection();$(`.verse[data-v="${v}"]`)?.scrollIntoView({block:'center'})},80)}
function currentVisibleVerse(){const verses=$$('.verse');let best=1,bestDistance=Infinity;for(const el of verses){const r=el.getBoundingClientRect();const d=Math.abs(r.top-100);if(r.bottom>72&&d<bestDistance){bestDistance=d;best=+el.dataset.v}}return best}
function addReadingPoint(showToast=true){
  const b=state.books[state.bookIndex];
  const selected=[...state.selected].sort((a,b)=>a-b);
  const v=selected[0]||currentVisibleVerse();
  const existing=state.readingPoints.find(p=>p.bookKey===b.key&&Number(p.chapter)===Number(state.chapter)&&Number(p.verse)===Number(v));
  if(existing){
    if(showToast)toast(`Esta marca ya existe: ${existing.ref}`);
    return existing;
  }
  const now=Date.now();
  const point={id:`${now}-${Math.random().toString(36).slice(2)}`,bookKey:b.key,chapter:Number(state.chapter),verse:Number(v),ref:`${displayBook(b)} ${state.chapter}:${v}`,updated:now};
  state.readingPoints.unshift(point);
  save();
  renderSavedDialog();
  if(showToast)toast(`Marca puesta: ${point.ref}`);
  return point;
}
function latestSavedPoint(){
  const entries=Object.entries(state.favorites||{});
  if(!entries.length)return null;
  const [k,v]=entries.sort((a,b)=>(Number(b[1]?.savedAt)||0)-(Number(a[1]?.savedAt)||0))[0];
  const [bookKey,chapter,verse]=k.split(':');
  return{bookKey,chapter:Number(chapter),verse:Number(verse),ref:v.ref,savedAt:Number(v.savedAt)||0};
}
function updateReadingPointUI(){
  const latest=latestSavedPoint();
  const btn=$('#readingPointBtn'),continueBtn=$('#continueReading');
  if(btn)btn.classList.toggle('has-point',Boolean(latest));
  if(continueBtn){continueBtn.textContent=latest?`Continuar: ${latest.ref}`:'Todavía no hay un punto guardado';continueBtn.disabled=!latest}
  const homeRef=$('#homeContinueRef'),homeContinue=$('#homeContinue');
  if(homeRef)homeRef.textContent=latest?latest.ref:'Todavía no hay un punto guardado';
  if(homeContinue)homeContinue.disabled=!latest;
}
async function goToReadingPoint(point=latestSavedPoint()){
  if(!point)return toast('Todavía no hay un punto guardado');
  const bi=state.books.findIndex(b=>b.key===point.bookKey);if(bi<0)return;
  state.bookIndex=bi;state.chapter=point.chapter;
  $('#settingsDialog')?.close();$('#savedDialog')?.close();
  showReader();await loadChapter();
  setTimeout(()=>{const el=$(`.verse[data-v="${point.verse}"]`);el?.scrollIntoView({block:'center'});document.querySelectorAll('.verse.reading-target').forEach(x=>x.classList.remove('reading-target'));el?.classList.add('reading-target')},100)
}
function renderSavedDialog(){
  updateReadingPointUI();
  const marksBox=$('#readingMarksList');
  if(marksBox)marksBox.innerHTML='<p class="empty-saved">El último versículo guardado es el punto de lectura.</p>';
  const items=Object.entries(state.favorites).map(([k,v])=>({k,ref:v.ref,text:v.text}));
  const box=$('#savedVersesList');
  box.innerHTML=items.length?items.map((x,i)=>`<button class="saved-verse-card" data-i="${i}"><strong>${escapeHtml(x.ref)}</strong><span>${formatBibleText(x.text)}</span></button>`).join(''):'<p class="empty-saved">Todavía no hay versículos guardados.</p>';
  $$('.saved-verse-card').forEach(el=>el.onclick=()=>{const x=items[+el.dataset.i];$('#savedDialog').close();navigateKey(x.k)});
}

$('#readingMarksList').addEventListener('click',ev=>{
  const card=ev.target.closest('.reading-mark-card');
  if(!card)return;
  ev.preventDefault();
  ev.stopPropagation();
  const id=card.dataset.markId;
  const point=state.readingPoints.find(p=>String(p.id)===String(id));
  if(ev.target.closest('.reading-mark-delete')){
    state.readingPoints=state.readingPoints.filter(p=>String(p.id)!==String(id));
    save();
    renderSavedDialog();
    toast('Marca quitada');
    return;
  }
  if(ev.target.closest('.reading-mark-go')&&point)goToReadingPoint(point);
});

function wireHomeActions(){
  $('#homeContinue')?.addEventListener('click',()=>goToReadingPoint());
  $('#homeEnter')?.addEventListener('click',async()=>{showReader();await loadChapter();});
  $('#homeBooks')?.addEventListener('click',()=>{renderBooks();openBooksDrawer()});
  $('#homeSearch')?.addEventListener('click',openSearchDialog);
  $('#homeSaved')?.addEventListener('click',()=>{renderSavedDialog();$('#savedDialog').showModal()});
}
wireHomeActions();
$('#readingPointBtn').onclick=()=>{renderSavedDialog();$('#savedDialog').showModal()};
$('#addReadingPoint')?.addEventListener('click',ev=>{ev.preventDefault();ev.stopPropagation();toast('Guarda un versículo para usarlo como punto de lectura')});
$('#continueReading').onclick=()=>goToReadingPoint();
$('#clearReadingPoint')?.addEventListener('click',ev=>{ev.preventDefault();ev.stopPropagation();toast('El punto cambia al guardar otro versículo')});

function fixDoubleShiftedImportedTitles(){
  if(localStorage.getItem('titlesDoubleShiftFixedV126')==='1')return;
  // La V1.25 desplazó una segunda vez los títulos ya instalados.
  // Los devolvemos exactamente un capítulo, sin tocar los títulos manuales.
  if(localStorage.getItem('titlesChapterOffsetV125')==='1'){
    const corrected={};
    for(const [bookKey,chapters] of Object.entries(state.importedTitles||{})){
      for(const [chapter,items] of Object.entries(chapters||{})){
        const target=Number(chapter)-1;
        if(target<1)continue;
        corrected[bookKey]=corrected[bookKey]||{};
        corrected[bookKey][String(target)]=[...(corrected[bookKey][String(target)]||[]),...(items||[])];
      }
    }
    state.importedTitles=corrected;
    localStorage.setItem('importedTitles',JSON.stringify(corrected));
  }
  localStorage.setItem('titlesDoubleShiftFixedV126','1');
}

function mergeTitles(base,extra){
  const out=JSON.parse(JSON.stringify(base||{}));
  for(const [book,chapters] of Object.entries(extra||{})){
    out[book]=out[book]||{};
    for(const [chapter,items] of Object.entries(chapters||{})){
      const merged=[...(out[book][chapter]||[]),...(items||[])];
      const seen=new Set();
      out[book][chapter]=merged.filter(x=>{const id=`${x.versiculo}|${x.titulo}`;if(seen.has(id))return false;seen.add(id);return true}).sort((a,b)=>a.versiculo-b.versiculo);
    }
  }
  return out;
}



function normalizeDictionaryText(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim()}
function getDictionaryEntries(){
  const deleted=new Set(state.dictionaryDeleted||[]), edits=state.dictionaryEdits||{};
  const base=(state.dictionaryBase||[]).filter(x=>!deleted.has(x.id)).map(x=>({...x,...(edits[x.id]||{}),builtin:true}));
  const custom=(state.dictionaryCustom||[]).filter(x=>!deleted.has(x.id)).map(x=>({...x,builtin:false}));
  return [...base,...custom].sort((a,b)=>String(a.termino).localeCompare(String(b.termino),'es',{sensitivity:'base'}));
}
function renderDictionary(query=''){
  const q=normalizeDictionaryText(query), all=getDictionaryEntries();
  const filtered=q?all.filter(x=>normalizeDictionaryText(`${x.termino} ${x.explicacion} ${x.categoria}`).includes(q)):all;
  $('#dictionaryCount').textContent=`${all.length.toLocaleString('es-ES')} entradas`;
  $('#dictionaryResults').innerHTML=filtered.length?filtered.map(x=>`<button class="dictionary-card" type="button" data-id="${escapeHtml(x.id)}"><strong>${escapeHtml(x.termino)}</strong><small>${escapeHtml(x.categoria||'Sin categoría')}</small><p>${escapeHtml(x.explicacion)}</p></button>`).join(''):'<p class="empty-saved">No se encontraron resultados.</p>';
  $$('.dictionary-card').forEach(card=>card.addEventListener('click',()=>openDictionaryEditor(card.dataset.id)));
}
function openDictionary(){
  state.selected.clear();updateSelection();
  $('#dictionarySearch').value='';renderDictionary();$('#dictionaryDialog').showModal();
  setTimeout(()=>$('#dictionarySearch').focus(),80);
}
function openDictionaryEditor(id=''){
  const entry=getDictionaryEntries().find(x=>x.id===id);
  $('#dictionaryEntryId').value=entry?.id||'';
  $('#dictionaryTerm').value=entry?.termino||'';
  $('#dictionaryCategory').value=entry?.categoria||'';
  $('#dictionaryExplanation').value=entry?.explicacion||'';
  $('#dictionaryEditTitle').textContent=entry?'Editar palabra':'Añadir palabra';
  $('#deleteDictionaryEntry').style.display=entry?'inline-block':'none';
  $('#dictionaryEditDialog').showModal();
}
$('#runDictionarySearch')?.addEventListener('click',()=>renderDictionary($('#dictionarySearch').value));
$('#dictionarySearch')?.addEventListener('input',e=>renderDictionary(e.target.value));
$('#dictionarySearch')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();renderDictionary(e.target.value)}});
$('#addDictionaryEntry')?.addEventListener('click',()=>openDictionaryEditor());
$('#openDictionarySettings')?.addEventListener('click',()=>{$('#settingsDialog').close();openDictionary()});
$('#saveDictionaryEntry')?.addEventListener('click',()=>{
  const id=$('#dictionaryEntryId').value, termino=$('#dictionaryTerm').value.trim(), categoria=$('#dictionaryCategory').value.trim(), explicacion=$('#dictionaryExplanation').value.trim();
  if(!termino||!explicacion){toast('Escribe la palabra y su explicación');return}
  if(id){
    const customIndex=(state.dictionaryCustom||[]).findIndex(x=>x.id===id);
    if(customIndex>=0)state.dictionaryCustom[customIndex]={...state.dictionaryCustom[customIndex],termino,categoria,explicacion,updatedAt:Date.now()};
    else state.dictionaryEdits[id]={termino,categoria,explicacion,updatedAt:Date.now()};
  }else{
    const newId=`custom-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
    state.dictionaryCustom.push({id:newId,termino,categoria,explicacion,builtin:false,createdAt:Date.now(),updatedAt:Date.now()});
  }
  save();$('#dictionaryEditDialog').close();renderDictionary($('#dictionarySearch').value);toast(id?'Entrada actualizada':'Entrada añadida');
});
$('#deleteDictionaryEntry')?.addEventListener('click',()=>{
  const id=$('#dictionaryEntryId').value;if(!id||!confirm('¿Eliminar esta entrada del diccionario?'))return;
  const customIndex=(state.dictionaryCustom||[]).findIndex(x=>x.id===id);
  if(customIndex>=0)state.dictionaryCustom.splice(customIndex,1);else{if(!state.dictionaryDeleted.includes(id))state.dictionaryDeleted.push(id);delete state.dictionaryEdits[id]}
  save();$('#dictionaryEditDialog').close();renderDictionary($('#dictionarySearch').value);toast('Entrada eliminada');
});

const BACKUP_KEYS=[
  'highlights','favorites','explanations','last','readingPoints','readingPoint','importedTitles','fontSize',
  'lastLocalBibleAudit','verifiedTitleLayerAudit','titlesChapterOffsetV125','titlesDoubleShiftFixedV126','dictionaryCustom','dictionaryEdits','dictionaryDeleted'
];
function buildCompleteBackup(){
  const data={};
  for(const key of BACKUP_KEYS){const value=localStorage.getItem(key);if(value!==null)data[key]=value}
  return{
    app:'Mi Biblia de Estudio',schema:1,appVersion:APP_VERSION,createdAt:new Date().toISOString(),
    summary:{savedVerses:Object.keys(state.favorites||{}).length,highlights:Object.keys(state.highlights||{}).length,explanations:Object.keys(state.explanations||{}).length,titles:countTitleLayer(state.importedTitles||{}),dictionary:getDictionaryEntries().length,dictionaryCustom:(state.dictionaryCustom||[]).length,dictionaryEdited:Object.keys(state.dictionaryEdits||{}).length,dictionaryDeleted:(state.dictionaryDeleted||[]).length},
    localStorage:data
  };
}
function downloadJsonFile(name,value){
  const blob=new Blob([JSON.stringify(value,null,2)],{type:'application/json;charset=utf-8'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)
}
$('#exportBackup')?.addEventListener('click',()=>{
  const stamp=new Date().toISOString().slice(0,19).replace(/[:T]/g,'-');
  downloadJsonFile(`Biblia_de_Estudio_backup_${stamp}.json`,buildCompleteBackup());
  toast('Copia de seguridad exportada');
});
$('#importBackup')?.addEventListener('click',()=>$('#backupFileInput')?.click());
$('#backupFileInput')?.addEventListener('change',async e=>{
  const file=e.target.files?.[0];e.target.value='';if(!file)return;
  try{
    const backup=JSON.parse(await file.text());
    if(backup?.app!=='Mi Biblia de Estudio'||!backup.localStorage||typeof backup.localStorage!=='object')throw new Error('El archivo no es una copia válida de esta aplicación');
    const count=Object.keys(backup.localStorage).length;
    if(!confirm(`Se restaurarán ${count} grupos de datos y se reemplazarán los datos actuales. ¿Continuar?`))return;
    for(const key of BACKUP_KEYS)localStorage.removeItem(key);
    for(const [key,value] of Object.entries(backup.localStorage)){
      if(BACKUP_KEYS.includes(key)&&typeof value==='string')localStorage.setItem(key,value);
    }
    toast('Copia restaurada. Reiniciando…');
    setTimeout(()=>location.reload(),700);
  }catch(error){console.error(error);toast(error.message||'No se pudo importar la copia')}
});

const TITLE_SOURCE_URLS=[
  'https://cdn.jsdelivr.net/gh/mrk214/bible-data-es-spa@main/data/es___spa___spa/RVR1960_vid_149.json',
  'https://raw.githubusercontent.com/mrk214/bible-data-es-spa/main/data/es___spa___spa/RVR1960_vid_149.json'
];
function titleLayerEntries(layer){
  const rows=[];
  for(const book of USFM_KEYS){
    for(const chapter of Object.keys(layer?.[book]||{}).map(Number).sort((a,b)=>a-b)){
      for(const item of (layer[book]?.[String(chapter)]||[]).slice().sort((a,b)=>a.versiculo-b.versiculo||a.titulo.localeCompare(b.titulo,'es'))){
        rows.push(`${book}|${chapter}|${item.versiculo}|${item.titulo}`);
      }
    }
  }
  return rows;
}
function countTitleLayer(layer){return titleLayerEntries(layer).length}
async function downloadStructuredTitleSource(){
  let lastError;
  for(const url of TITLE_SOURCE_URLS){
    try{const res=await fetch(url,{cache:'no-store'});if(!res.ok)throw new Error(`HTTP ${res.status}`);return await res.json()}catch(error){lastError=error}
  }
  throw lastError||new Error('No se pudo descargar la fuente de títulos');
}
function buildVerifiedTitleLayer(data){
  const result={},errors=[],warnings=[];let ignoredIntroductions=0;
  const books=Array.isArray(data?.books)?data.books:[];
  if(books.length<66)errors.push(`La fuente solo contiene ${books.length} libros`);
  books.slice(0,66).forEach((book,bookIndex)=>{
    const key=USFM_KEYS[bookIndex],meta=state.books.find(b=>b.key===key);if(!key||!meta)return;
    const chapters=Array.isArray(book?.chapters)?book.chapters:[];
    // La fuente contiene un bloque introductorio en la posición 0. El capítulo bíblico 1 está en la posición 1.
    chapters.forEach((chapter,sourceIndex)=>{
      if(sourceIndex===0){ignoredIntroductions++;return}
      const targetChapter=sourceIndex;
      if(targetChapter<1||targetChapter>meta.chapters){warnings.push(`${meta.shortTitle}: se ignoró el bloque ${sourceIndex}`);return}
      const items=Array.isArray(chapter?.items)?chapter.items:[];const found=[];
      for(let i=0;i<items.length;i++){
        const item=items[i]||{};
        if(!['section1','section2','heading1','heading2'].includes(item.type))continue;
        const titulo=(item.lines||[]).join(' ').replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();if(!titulo)continue;
        let verse=Number((item.verse_numbers||[])[0]||0);
        if(!verse){for(let j=i+1;j<items.length;j++){const n=Number((items[j]?.verse_numbers||[])[0]||0);if(n){verse=n;break}}}
        if(!verse)verse=1;
        const max=EXPECTED_CHAPTER_VERSES[key]?.[targetChapter-1];
        if(!Number.isInteger(max)||verse<1||verse>max){errors.push(`${meta.shortTitle} ${targetChapter}:${verse}: título fuera de un versículo válido`);continue}
        found.push({versiculo:verse,titulo});
      }
      if(found.length){
        const seen=new Set();
        result[key]=result[key]||{};
        result[key][String(targetChapter)]=found.filter(x=>{const id=`${x.versiculo}|${x.titulo.toLowerCase()}`;if(seen.has(id))return false;seen.add(id);return true}).sort((a,b)=>a.versiculo-b.versiculo);
      }
    });
  });
  const count=countTitleLayer(result);
  if(!count)errors.push('No se encontró ningún título válido');
  return{result,count,errors,warnings,ignoredIntroductions};
}
async function installVerifiedTitles(){
  const btn=$('#installTitles'),status=$('#titleLayerStatus'),seal=$('#titleSeal'),hashEl=$('#titleHash'),exportBtn=$('#exportTitles');
  btn.disabled=true;btn.textContent='Descargando y verificando títulos…';status.textContent='Leyendo la fuente estructurada y colocando cada encabezado en su capítulo y versículo…';seal.classList.add('hidden');hashEl.classList.add('hidden');
  try{
    const data=await downloadStructuredTitleSource();
    const audit=buildVerifiedTitleLayer(data);
    if(audit.errors.length)throw new Error(audit.errors[0]);
    const hash=await sha256Hex(titleLayerEntries(audit.result).join('\n'));
    state.importedTitles=audit.result;localStorage.setItem('importedTitles',JSON.stringify(audit.result));
    state.titles=mergeTitles(state.baseTitles,audit.result);save();render();
    const report={installedAt:Date.now(),count:audit.count,sha256:hash,ignoredIntroductions:audit.ignoredIntroductions,warnings:audit.warnings};
    localStorage.setItem('verifiedTitleLayerAudit',JSON.stringify(report));
    status.textContent=`${audit.count.toLocaleString('es-ES')} títulos instalados y verificados. Se ignoraron ${audit.ignoredIntroductions} introducciones. La Biblia de 31.104 versículos permanece intacta.`;
    seal.classList.remove('hidden');hashEl.textContent=`SHA-256 títulos: ${hash}`;hashEl.classList.remove('hidden');exportBtn.classList.remove('hidden');
    updateBibleCounters({...(state.lastLocalAudit?.stats||{}),titles:audit.count});toast('Títulos instalados correctamente');
  }catch(error){console.error(error);status.textContent=`No se instalaron los títulos: ${error.message}`;toast('No se pudieron instalar los títulos')}
  finally{btn.disabled=false;btn.textContent='Reinstalar títulos en su orden correcto'}
}
function restoreTitleLayerStatus(){
  const report=JSON.parse(localStorage.getItem('verifiedTitleLayerAudit')||'null');const count=countTitleLayer(state.importedTitles||{});
  if(!report||!count)return;
  const status=$('#titleLayerStatus'),seal=$('#titleSeal'),hashEl=$('#titleHash'),exportBtn=$('#exportTitles'),btn=$('#installTitles');
  status.textContent=`${count.toLocaleString('es-ES')} títulos instalados y disponibles sin conexión. La Biblia verificada permanece intacta.`;
  seal.classList.remove('hidden');hashEl.textContent=`SHA-256 títulos: ${report.sha256}`;hashEl.classList.remove('hidden');exportBtn.classList.remove('hidden');btn.textContent='Reinstalar títulos en su orden correcto';
}
$('#installTitles')?.addEventListener('click',installVerifiedTitles);
$('#exportTitles')?.addEventListener('click',()=>{
  const layer=state.importedTitles||{};if(!countTitleLayer(layer)){toast('Todavía no hay títulos instalados');return}
  const blob=new Blob([JSON.stringify(layer,null,2)],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='titulos_rvr1960.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
setTimeout(restoreTitleLayerStatus,1300);

const EXPECTED_CHAPTER_VERSES={"genesis":[31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26],"exodo":[22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38],"levitico":[17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34],"numeros":[54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,23,31,40,16,54,42,56,29,34,13],"deuteronomio":[46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12],"josue":[18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33],"jueces":[36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25],"rut":[22,23,18,22],"1_samuel":[28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,29,22,44,25,12,25,11,31,13],"2_samuel":[27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,33,43,26,22,51,39,25],"1_reyes":[53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53],"2_reyes":[18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30],"1_cronicas":[54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30],"2_cronicas":[17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23],"esdras":[11,70,13,24,17,22,28,36,15,44],"nehemias":[11,20,32,23,19,19,73,18,38,39,36,47,31],"ester":[22,23,15,17,14,14,10,17,32,3],"job":[22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17],"salmos":[6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,10,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6],"proverbios":[33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31],"eclesiastes":[18,26,22,16,20,12,29,17,18,20,10,14],"cantares":[17,17,11,16,16,13,13,14],"isaias":[31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24],"jeremias":[19,37,25,31,31,30,34,22,26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34],"lamentaciones":[22,22,66,22,22],"ezequiel":[28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35],"daniel":[21,49,30,37,31,28,28,27,27,21,45,13],"oseas":[11,23,5,19,15,11,16,14,17,15,12,14,16,9],"joel":[20,32,21],"amos":[15,16,15,13,27,14,17,14,15],"abdias":[21],"jonas":[17,10,10,11],"miqueas":[16,13,12,13,15,16,20],"nahum":[15,13,19],"habacuc":[17,20,19],"sofonias":[18,15,20],"hageo":[15,23],"zacarias":[21,13,10,14,11,15,14,23,17,12,17,14,9,21],"malaquias":[14,17,18,6],"mateo":[25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20],"marcos":[45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20],"lucas":[80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53],"juan":[51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25],"hechos":[26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31],"romanos":[32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27],"1_corintios":[31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24],"2_corintios":[24,17,18,18,21,18,16,24,15,18,33,21,14],"galatas":[24,21,29,31,26,18],"efesios":[23,22,21,32,33,24],"filipenses":[30,30,21,23],"colosenses":[29,23,25,18],"1_tesalonicenses":[10,20,13,18,28],"2_tesalonicenses":[12,17,18],"1_timoteo":[20,15,16,16,25,21],"2_timoteo":[18,26,17,22],"tito":[16,15,15],"filemon":[25],"hebreos":[14,18,19,16,14,20,28,13,28,39,40,29,25],"santiago":[27,26,18,17,20],"1_pedro":[25,25,22,19,14],"2_pedro":[21,22,18],"1_juan":[10,29,24,21,21],"2_juan":[13],"3_juan":[15],"judas":[25],"apocalipsis":[20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21]};
const USFM_KEYS=['genesis','exodo','levitico','numeros','deuteronomio','josue','jueces','rut','1_samuel','2_samuel','1_reyes','2_reyes','1_cronicas','2_cronicas','esdras','nehemias','ester','job','salmos','proverbios','eclesiastes','cantares','isaias','jeremias','lamentaciones','ezequiel','daniel','oseas','joel','amos','abdias','jonas','miqueas','nahum','habacuc','sofonias','hageo','zacarias','malaquias','mateo','marcos','lucas','juan','hechos','romanos','1_corintios','2_corintios','galatas','efesios','filipenses','colosenses','1_tesalonicenses','2_tesalonicenses','1_timoteo','2_timoteo','tito','filemon','hebreos','santiago','1_pedro','2_pedro','1_juan','2_juan','3_juan','judas','apocalipsis'];
function canonicalizeBibleForHash(parts){return parts.join('\n')}
async function sha256Hex(text){
  if(!crypto?.subtle)return 'No disponible en este navegador';
  const bytes=new TextEncoder().encode(text);
  const hash=await crypto.subtle.digest('SHA-256',bytes);
  return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('');
}
function countInstalledTitles(){
  let total=0,duplicates=0,invalid=0;
  const seen=new Set();
  for(const [book,chapters] of Object.entries(state.titles||{})){
    const meta=state.books.find(b=>b.key===book);
    for(const [chapter,items] of Object.entries(chapters||{})){
      const c=Number(chapter);
      if(!meta||c<1||c>meta.chapters){invalid+=(items||[]).length;continue}
      for(const item of items||[]){
        const v=Number(item?.versiculo);const title=String(item?.titulo||'').trim();
        if(!title||v<1){invalid++;continue}
        const id=`${book}:${c}:${v}:${title.toLowerCase()}`;
        if(seen.has(id))duplicates++;else seen.add(id);
        total++;
      }
    }
  }
  return{total,duplicates,invalid};
}
function updateBibleCounters(stats={}){
  const values={auditBookCount:stats.books||0,auditChapterCount:stats.chapters||0,auditVerseCount:stats.verses||0,auditTitleCount:stats.titles||0};
  for(const [id,value] of Object.entries(values)){const el=$('#'+id);if(el)el.textContent=Number(value).toLocaleString('es-ES')}
}
function createAuditReportText(report){
  const lines=[
    'AUDITORÍA DE LA BIBLIA INSTALADA — RVR1960','',
    `Fecha: ${new Date(report.auditedAt).toLocaleString('es-ES')}`,
    `Libros: ${report.stats.books} / 66`,
    `Capítulos: ${report.stats.chapters} / 1.189`,
    `Versículos: ${report.stats.verses.toLocaleString('es-ES')} / 31.104`,
    `Títulos: ${report.stats.titles.toLocaleString('es-ES')}`,
    `Versículos vacíos: ${report.stats.emptyVerses}`,
    `Textos con /n o \\n defectuoso: ${report.stats.badBreaks}`,
    `Títulos duplicados: ${report.stats.duplicateTitles}`,
    `Títulos inválidos: ${report.stats.invalidTitles}`,
    `Errores: ${report.errors.length}`,
    `Advertencias: ${report.warnings.length}`,'',
    `Estado: ${report.verified?'BIBLIA VERIFICADA':'REVISIÓN NECESARIA'}`,'',
    'SHA-256:',report.sha256,'']
  if(report.errors.length)lines.push('ERRORES',...report.errors.map(x=>`- ${x}`),'')
  if(report.warnings.length)lines.push('ADVERTENCIAS',...report.warnings.map(x=>`- ${x}`),'')
  return lines.join('\n');
}
async function auditarBibliaInstalada(){
  const btn=$('#importTitles'),status=$('#titlesStatus'),seal=$('#auditSeal'),hashEl=$('#auditHash'),download=$('#downloadAuditReport');
  btn.disabled=true;btn.textContent='Auditando archivos locales…';
  status.textContent='Comprobando los 66 libros de la raíz, capítulo por capítulo y versículo por versículo…';
  seal.classList.add('hidden');hashEl.classList.add('hidden');download.classList.add('hidden');updateBibleCounters({});
  const report={version:APP_VERSION,auditedAt:Date.now(),stats:{books:0,chapters:0,verses:0,titles:0,emptyVerses:0,badBreaks:0,duplicateTitles:0,invalidTitles:0},errors:[],warnings:[],sha256:'',verified:false};
  const hashParts=[];
  try{
    for(let bi=0;bi<state.books.length;bi++){
      const meta=state.books[bi];
      let chapters;
      try{const res=await fetch(freshUrl(meta.key+'.json'),{cache:'no-store'});if(!res.ok)throw new Error(`HTTP ${res.status}`);chapters=await res.json()}catch(error){report.errors.push(`${meta.shortTitle}: no se pudo leer ${meta.key}.json (${error.message})`);continue}
      report.stats.books++;
      if(!Array.isArray(chapters)){report.errors.push(`${meta.shortTitle}: el archivo no contiene una lista de capítulos`);continue}
      if(chapters.length!==meta.chapters)report.errors.push(`${meta.shortTitle}: capítulos esperados ${meta.chapters}, encontrados ${chapters.length}`);
      const expected=EXPECTED_CHAPTER_VERSES[meta.key]||[];
      let bookVerses=0;
      chapters.forEach((verses,ci)=>{
        report.stats.chapters++;
        if(!Array.isArray(verses)){report.errors.push(`${meta.shortTitle} ${ci+1}: capítulo inválido`);return}
        const expectedCount=expected[ci];
        if(Number.isInteger(expectedCount)&&verses.length!==expectedCount)report.errors.push(`${meta.shortTitle} ${ci+1}: versículos esperados ${expectedCount}, encontrados ${verses.length}`);
        verses.forEach((raw,vi)=>{
          const original=String(raw??'');const cleaned=limpiarTextoBiblico(original);
          report.stats.verses++;bookVerses++;
          if(!cleaned) {report.stats.emptyVerses++;report.errors.push(`${meta.shortTitle} ${ci+1}:${vi+1} está vacío`)}
          if(/\\n|\/n/i.test(original)){report.stats.badBreaks++;report.warnings.push(`${meta.shortTitle} ${ci+1}:${vi+1} contiene un salto defectuoso que la app limpia al mostrarlo`)}
          hashParts.push(`${meta.key}|${ci+1}|${vi+1}|${cleaned}`);
        });
      });
      if(bookVerses!==meta.verses)report.errors.push(`${meta.shortTitle}: total esperado ${meta.verses}, encontrado ${bookVerses}`);
      status.textContent=`Auditando ${meta.shortTitle}… ${bi+1}/66`;
      updateBibleCounters({...report.stats,titles:0});
      await new Promise(resolve=>setTimeout(resolve,0));
    }
    const titleStats=countInstalledTitles();report.stats.titles=titleStats.total;report.stats.duplicateTitles=titleStats.duplicates;report.stats.invalidTitles=titleStats.invalid;
    if(titleStats.invalid)report.errors.push(`Hay ${titleStats.invalid} títulos con libro, capítulo, versículo o texto inválido`);
    if(titleStats.duplicates)report.warnings.push(`Hay ${titleStats.duplicates} títulos duplicados exactamente en la misma posición`);
    if(report.stats.books!==66)report.errors.push(`Libros leídos: ${report.stats.books}; esperados: 66`);
    if(report.stats.chapters!==1189)report.errors.push(`Capítulos encontrados: ${report.stats.chapters}; esperados: 1.189`);
    if(report.stats.verses!==31104)report.errors.push(`Versículos encontrados: ${report.stats.verses}; esperados: 31.104`);
    report.sha256=await sha256Hex(canonicalizeBibleForHash(hashParts));
    report.verified=report.errors.length===0;
    state.lastLocalAudit=report;localStorage.setItem('lastLocalBibleAudit',JSON.stringify(report));
    updateBibleCounters(report.stats);
    hashEl.textContent=`SHA-256: ${report.sha256}`;hashEl.classList.remove('hidden');download.classList.remove('hidden');
    if(report.verified){seal.classList.remove('hidden');status.textContent=`Auditoría superada: 66 libros, 1.189 capítulos y 31.104 versículos. ${report.stats.titles.toLocaleString('es-ES')} títulos detectados.${report.warnings.length?' Hay '+report.warnings.length+' advertencia(s) no estructurales.':''}`;toast('Biblia instalada verificada')}
    else{status.textContent=`Revisión necesaria: se encontraron ${report.errors.length} error(es) y ${report.warnings.length} advertencia(s). Descarga el informe para ver el detalle.`;toast('Auditoría terminada con incidencias')}
  }catch(error){console.error(error);status.textContent=`No se pudo completar la auditoría: ${error.message}`;toast('Error durante la auditoría')}
  finally{btn.disabled=false;btn.textContent='Volver a auditar Biblia instalada'}
}
$('#importTitles')?.addEventListener('click',auditarBibliaInstalada);
$('#downloadAuditReport')?.addEventListener('click',()=>{
  const report=state.lastLocalAudit||JSON.parse(localStorage.getItem('lastLocalBibleAudit')||'null');if(!report){toast('Primero realiza la auditoría');return}
  const blob=new Blob([createAuditReportText(report)],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`INFORME_AUDITORIA_RVR1960_V${APP_VERSION}.txt`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)
});
function actualizarEstadoTitulos(){
  const report=JSON.parse(localStorage.getItem('lastLocalBibleAudit')||'null');if(!report)return;
  state.lastLocalAudit=report;updateBibleCounters(report.stats||{});
  const status=$('#titlesStatus'),seal=$('#auditSeal'),hashEl=$('#auditHash'),download=$('#downloadAuditReport'),btn=$('#importTitles');
  if(btn)btn.textContent='Volver a auditar Biblia instalada';
  if(status)status.textContent=report.verified?'Última auditoría superada. Puedes repetirla después de cualquier cambio en los libros.':`Última auditoría: ${report.errors?.length||0} error(es) y ${report.warnings?.length||0} advertencia(s).`;
  if(report.verified)seal?.classList.remove('hidden');
  if(report.sha256){hashEl.textContent=`SHA-256: ${report.sha256}`;hashEl.classList.remove('hidden')}
  download?.classList.remove('hidden');
}
setTimeout(actualizarEstadoTitulos,1200);
$$('dialog form[method=dialog]').forEach(f=>f.addEventListener('submit',()=>{}));function toast(t){const x=$('#toast');x.textContent=t;x.classList.remove('hidden');clearTimeout(window._tt);window._tt=setTimeout(()=>x.classList.add('hidden'),1900)}

async function actualizarAplicacion(){
  const indicator=$('#pullRefresh');
  indicator?.classList.add('refreshing');
  if(indicator)indicator.querySelector('strong').textContent='Actualizando…';
  try{
    if('serviceWorker' in navigator){
      const regs=await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r=>r.update()));
    }
    if('caches' in window){
      const names=await caches.keys();
      await Promise.all(names.filter(n=>n.startsWith('biblia-estudio-')).map(n=>caches.delete(n)));
    }
    await fetch(`index.html?v=${Date.now()}`,{cache:'reload'});
  }catch(e){console.warn('No se pudo comprobar la actualización',e)}
  location.reload();
}
(function activarDeslizarParaActualizar(){
  const indicator=$('#pullRefresh');
  let startY=0,pulling=false,distance=0;
  const puedeActualizar=e=>{
    const target=e?.target;
    const enMenu=target instanceof Element && target.closest('#drawer, dialog, .backdrop');
    const drawerCerrado=$('#drawer')?.classList.contains('hidden');
    const pantallaValida=!$('#homeScreen')?.classList.contains('hidden') || !$('#readerScreen')?.classList.contains('hidden');
    return window.scrollY<=0 && drawerCerrado && !document.querySelector('dialog[open]') && pantallaValida && !enMenu;
  };
  window.addEventListener('touchstart',e=>{
    if(e.touches.length===1&&puedeActualizar(e)){startY=e.touches[0].clientY;pulling=true;distance=0}
    else{pulling=false;distance=0}
  },{passive:true});
  window.addEventListener('touchmove',e=>{
    if(!pulling)return;
    distance=Math.max(0,e.touches[0].clientY-startY);
    if(distance<8)return;
    const shown=Math.min(110,distance*.55);
    indicator?.classList.add('visible');
    if(indicator){indicator.style.transform=`translate(-50%, ${shown-70}px)`;indicator.querySelector('span').textContent=distance>=110?'↻':'↓';indicator.querySelector('strong').textContent=distance>=110?'Suelta para actualizar':'Desliza para actualizar'}
  },{passive:true});
  window.addEventListener('touchend',()=>{
    if(!pulling)return;
    pulling=false;
    if(distance>=110){actualizarAplicacion();return}
    if(indicator){indicator.classList.remove('visible');indicator.style.transform='translate(-50%, -70px)'}
  },{passive:true});
})();
init().catch(e=>{reader.innerHTML='<p>No se pudo cargar la Biblia.</p>';console.error(e)});

