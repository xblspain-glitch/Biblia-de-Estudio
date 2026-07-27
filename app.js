const DATA='./';
const APP_VERSION='1.25';
const freshUrl=file=>`${DATA}${file}?v=${APP_VERSION}`;
const storedReadingPoints=JSON.parse(localStorage.getItem('readingPoints')||'[]');
const state={books:[],bookIndex:0,chapter:1,verses:[],titles:{},selected:new Set(),highlights:JSON.parse(localStorage.getItem('highlights')||'{}'),favorites:JSON.parse(localStorage.getItem('favorites')||'{}'),explanations:JSON.parse(localStorage.getItem('explanations')||'{}'),readingPoints:Array.isArray(storedReadingPoints)?storedReadingPoints.map((p,i)=>({...p,id:String(p.id||`${Date.now()}-${i}-${Math.random().toString(36).slice(2)}`)})):[],importedTitles:JSON.parse(localStorage.getItem('importedTitles')||'{}')};
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
  $('#drawer').classList.remove('hidden');
  $('#drawerBackdrop').classList.remove('hidden');
}
function openSearchDialog(){
  $('#searchDialog h2').textContent='Buscar en la Biblia';
  $('#searchDialog .search-row').style.display='flex';
  $('#searchResults').innerHTML='<p class="search-help">Busca palabras o una referencia, por ejemplo: Juan 3:16, 1 Corintios 6 o Romanos 8:28-30.</p>';
  $('#searchInput').value='';
  $('#searchDialog').showModal();
}

function save(){localStorage.setItem('highlights',JSON.stringify(state.highlights));localStorage.setItem('favorites',JSON.stringify(state.favorites));localStorage.setItem('explanations',JSON.stringify(state.explanations));localStorage.setItem('last',JSON.stringify({bookIndex:state.bookIndex,chapter:state.chapter}));localStorage.setItem('readingPoints',JSON.stringify(state.readingPoints));localStorage.setItem('importedTitles',JSON.stringify(state.importedTitles||{}));updateReadingPointUI();}
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
      await Promise.all(cacheNames.filter(name=>name.startsWith('biblia-estudio-')&&name!=='biblia-estudio-v1.25').map(name=>caches.delete(name)));
    }catch(error){console.warn('No se pudieron limpiar las cachés antiguas',error)}
  }
  state.books=await fetch(freshUrl('index.json'),{cache:'no-store'}).then(r=>r.json());migrateImportedTitlesOneChapterForward();const oldPoint=JSON.parse(localStorage.getItem('readingPoint')||'null');if(oldPoint&&!state.readingPoints.length){state.readingPoints=[{...oldPoint,id:oldPoint.updated||Date.now()}];localStorage.setItem('readingPoints',JSON.stringify(state.readingPoints));localStorage.removeItem('readingPoint')}state.titles=await fetch(freshUrl('titulos.json'),{cache:'no-store'}).then(r=>r.ok?r.json():{}).catch(()=>({}));state.titles=mergeTitles(state.titles,state.importedTitles);const last=JSON.parse(localStorage.getItem('last')||'null');if(last){state.bookIndex=Math.min(last.bookIndex,state.books.length-1);state.chapter=last.chapter}await loadChapter();renderBooks();showHome();if('serviceWorker'in navigator){
  // La actualización del service worker se aplica sin recargar la pantalla.
  // Así el desplegable de Libros no vuelve solo a la portada mientras se usa.
  navigator.serviceWorker.register(`sw.js?v=${APP_VERSION}`,{updateViaCache:'none'}).then(async reg=>{
    await reg.update();
    if(reg.waiting)reg.waiting.postMessage({type:'SKIP_WAITING'});
  }).catch(()=>{});
}}
async function loadChapter(){state.selected.clear();const b=state.books[state.bookIndex];const data=await fetch(freshUrl(b.key+'.json'),{cache:'no-store'}).then(r=>r.json());state.verses=(data[state.chapter-1]||[]).map(limpiarTextoBiblico);render();save();}
function render(){const b=state.books[state.bookIndex];$('#bookTitle').textContent=displayBook(b);$('#chapterTitle').textContent=state.chapter;$('#chapterIndicator').textContent=`${displayBook(b)} ${state.chapter}`;const chapterTitles=(state.titles[b.key]?.[String(state.chapter)]||[]).reduce((m,x)=>((m[x.versiculo]||(m[x.versiculo]=[])).push(x.titulo),m),{});reader.innerHTML=`<div class="reader-book-title">${escapeHtml(displayBook(b).toUpperCase())}</div><div class="chapter-number">${state.chapter}</div>`+state.verses.map((t,i)=>{const n=i+1,k=key(n),h=state.highlights[k]?` highlight-${state.highlights[k]}`:'',saved=state.favorites[k]?' saved-verse':'';const headings=(chapterTitles[n]||[]).map(x=>`<h3 class="section-title">${escapeHtml(x)}</h3>`).join('');const exp=findExplanationForVerse(n);const marker=exp?`<button class="explain-marker" data-exp="${exp.key}" aria-label="Ver explicación">i</button>`:'';return `${headings}<span class="verse${h}${saved}" data-v="${n}"><sup class="verse-number">${n}</sup>${formatBibleText(t)}</span>${marker} `}).join('');updateSelection();updateReadingPointUI();reader.scrollTop=0}
function limpiarTextoBiblico(texto){return String(texto??'').replace(/\r\n?/g,'\n').replace(/\\n/g,'\n').replace(/\/n/gi,'\n').replace(/\u002Fn/gi,'\n').replace(/\n{3,}/g,'\n\n').trim()}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function formatBibleText(s){return escapeHtml(limpiarTextoBiblico(s)).replace(/\n/g,'<br>')}
function findExplanationForVerse(n){const prefix=`${state.books[state.bookIndex].key}:${state.chapter}:`;for(const [k,v] of Object.entries(state.explanations)){if(k.startsWith(prefix)){const nums=k.split(':')[2].split(',').map(Number);if(nums.includes(n))return{key:k,...v}}}return null}
function updateSelection(){
  $$('.verse').forEach(el=>el.classList.toggle('selected',state.selected.has(+el.dataset.v)));
  const favoriteBtn=document.querySelector('.action[data-action="favorite"]');
  if(state.selected.size){
    selectionBar.classList.remove('hidden');
    $('#selectionReference').textContent=currentReference();
    const nums=[...state.selected];
    const allSaved=nums.every(n=>Boolean(state.favorites[key(n)]));
    if(favoriteBtn){favoriteBtn.innerHTML=`<span>🔖</span>${allSaved?'Quitar':'Guardar'}`;favoriteBtn.dataset.mode=allSaved?'remove':'save'}
  }else{
    selectionBar.classList.add('hidden');
    if(favoriteBtn){favoriteBtn.innerHTML='<span>🔖</span>Guardar';favoriteBtn.dataset.mode='save'}
  }
}
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
}
async function copyVerses(){const nums=[...state.selected].sort((a,b)=>a-b);const body=nums.map(n=>`[${n}] ${limpiarTextoBiblico(state.verses[n-1])}`).join('\n');const text=`${currentReference(nums,true)} RVR1960\n${body}`;await navigator.clipboard.writeText(text);toast('Versículos copiados')}
$$('#highlightDialog [data-color]').forEach(b=>b.addEventListener('click',()=>{for(const n of state.selected){const k=key(n);b.dataset.color==='none'?delete state.highlights[k]:state.highlights[k]=b.dataset.color}save();$('#highlightDialog').close();render();toast('Subrayado actualizado')}));
function openEditExplanation(k,ref){const old=state.explanations[k];$('#explanationDialog').dataset.key=k;$('#explanationRef').textContent=ref;$('#explanationText').value=old?.text||'';$('#deleteExplanation').style.display=old?'inline-block':'none';$('#explanationDialog').showModal()}
$('#saveExplanation').onclick=()=>{const k=$('#explanationDialog').dataset.key,text=$('#explanationText').value.trim();if(!text){toast('Escribe una explicación');return}state.explanations[k]={text,ref:$('#explanationRef').textContent,updated:Date.now()};save();$('#explanationDialog').close();state.selected.clear();render();toast('Explicación guardada')};
$('#pasteExplanation').onclick=async()=>{try{$('#explanationText').value=await navigator.clipboard.readText()}catch{toast('No se pudo pegar')}};
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
            const data=await fetch(freshUrl(b.key+'.json'),{cache:'no-store'}).then(r=>r.json());
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
$('#homeBtn').onclick=showHome;$('#bookTitle').onclick=openBooksDrawer;function closeDrawer(){$('#drawer').classList.add('hidden');$('#drawerBackdrop').classList.add('hidden')}$('#closeDrawer').onclick=closeDrawer;$('#drawerBackdrop').onclick=closeDrawer;$$('.drawer-tabs button').forEach(b=>b.onclick=()=>{$$('.drawer-tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderBooks(b.dataset.testament)});
$('#chapterTitle').onclick=()=>{const b=state.books[state.bookIndex];$('#chapterDialogTitle').textContent=displayBook(b);$('#chaptersGrid').innerHTML='';for(let i=1;i<=b.chapters;i++){const x=document.createElement('button');x.textContent=i;x.onclick=async()=>{state.chapter=i;$('#chapterDialog').close();showReader();await loadChapter()};$('#chaptersGrid').append(x)}$('#chapterDialog').showModal()};
$('#prevChapter').onclick=()=>moveChapter(-1);$('#nextChapter').onclick=()=>moveChapter(1);async function moveChapter(d){let b=state.books[state.bookIndex];let c=state.chapter+d;if(c<1&&state.bookIndex>0){state.bookIndex--;b=state.books[state.bookIndex];c=b.chapters}else if(c>b.chapters&&state.bookIndex<state.books.length-1){state.bookIndex++;c=1}else if(c<1||c>b.chapters)return;state.chapter=c;showReader();await loadChapter();scrollTo(0,0)}
$('#searchBtn').onclick=openSearchDialog;$('#searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')runSearch()});$('#runSearch').onclick=runSearch;
function normalizeText(x){return x.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim()}
function parseReference(raw){const q=normalizeText(raw).replace(/\./g,'');const m=q.match(/^(.+?)\s+(\d+)(?:\s*:\s*(\d+)(?:\s*-\s*(\d+))?)?$/);if(!m)return null;const bookName=m[1].trim();const aliases={salmo:'salmos',cantar:'cantares',apocalipsis:'apocalipsis',revelacion:'apocalipsis','san mateo':'mateo','san marcos':'marcos','san lucas':'lucas','san juan':'juan'};const wanted=aliases[bookName]||bookName;const bi=state.books.findIndex(b=>{const names=[b.key,b.shortTitle,b.title,b.abbr,displayBook(b)].map(normalizeText);return names.includes(wanted)||names.some(n=>n.replace(/^libro (de|del|de los) /,'')===wanted)});if(bi<0)return null;const c=+m[2],v=m[3]?+m[3]:null,endv=m[4]?+m[4]:v,b=state.books[bi];if(c<1||c>b.chapters)return null;return{bi,c,v,endv,ref:v?`${displayBook(b)} ${c}:${v}${endv>v?'-'+endv:''}`:`${displayBook(b)} ${c}`}}
async function openSearchResult(r){state.bookIndex=r.bi;state.chapter=r.c;$('#searchDialog').close();showReader();await loadChapter();if(r.v)setTimeout(()=>{for(let n=r.v;n<=Math.min(r.endv||r.v,state.verses.length);n++)state.selected.add(n);updateSelection();$(`.verse[data-v="${r.v}"]`)?.scrollIntoView({block:'center'})},100)}
async function runSearch(){const raw=$('#searchInput').value.trim();if(raw.length<2)return toast('Escribe al menos 2 caracteres');const box=$('#searchResults');const direct=parseReference(raw);if(direct){box.innerHTML=`<div class="search-result reference-result"><strong>${escapeHtml(direct.ref)}</strong><span>Abrir esta referencia</span></div>`;box.querySelector('.search-result').onclick=()=>openSearchResult(direct);return}const q=normalizeText(raw);box.innerHTML='<p>Buscando en toda la Biblia…</p>';let results=[];for(let bi=0;bi<state.books.length&&results.length<100;bi++){const b=state.books[bi],chapters=await fetch(freshUrl(b.key+'.json'),{cache:'no-store'}).then(r=>r.json());for(let ci=0;ci<chapters.length&&results.length<100;ci++)for(let vi=0;vi<chapters[ci].length&&results.length<100;vi++)if(normalizeText(limpiarTextoBiblico(chapters[ci][vi])).includes(q))results.push({bi,c:ci+1,v:vi+1,endv:vi+1,t:limpiarTextoBiblico(chapters[ci][vi]),ref:`${displayBook(b)} ${ci+1}:${vi+1}`})}box.innerHTML=results.length?results.map((r,i)=>`<div class="search-result" data-i="${i}"><strong>${r.ref}</strong>${formatBibleText(r.t)}</div>`).join(''):'<p>Sin resultados.</p>';$$('.search-result').forEach(el=>el.onclick=()=>openSearchResult(results[+el.dataset.i]))}
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
  $('#homeBooks')?.addEventListener('click',()=>{renderBooks();openBooksDrawer()});
  $('#homeSearch')?.addEventListener('click',openSearchDialog);
  $('#homeSaved')?.addEventListener('click',()=>{renderSavedDialog();$('#savedDialog').showModal()});
}
wireHomeActions();
$('#readingPointBtn').onclick=()=>{renderSavedDialog();$('#savedDialog').showModal()};
$('#addReadingPoint')?.addEventListener('click',ev=>{ev.preventDefault();ev.stopPropagation();toast('Guarda un versículo para usarlo como punto de lectura')});
$('#continueReading').onclick=()=>goToReadingPoint();
$('#clearReadingPoint')?.addEventListener('click',ev=>{ev.preventDefault();ev.stopPropagation();toast('El punto cambia al guardar otro versículo')});

function migrateImportedTitlesOneChapterForward(){
  if(localStorage.getItem('titlesChapterOffsetV125')==='1')return;
  const shifted={};
  for(const [bookKey,chapters] of Object.entries(state.importedTitles||{})){
    const book=state.books.find(b=>b.key===bookKey);
    const maxChapters=Number(book?.chapters||book?.chapterCount||0);
    for(const [chapter,items] of Object.entries(chapters||{})){
      const target=Number(chapter)+1;
      if(maxChapters&&target>maxChapters)continue;
      shifted[bookKey]=shifted[bookKey]||{};
      shifted[bookKey][String(target)]=[...(shifted[bookKey][String(target)]||[]),...(items||[])];
    }
  }
  state.importedTitles=shifted;
  localStorage.setItem('importedTitles',JSON.stringify(shifted));
  localStorage.setItem('titlesChapterOffsetV125','1');
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
const USFM_KEYS=['genesis','exodo','levitico','numeros','deuteronomio','josue','jueces','rut','1_samuel','2_samuel','1_reyes','2_reyes','1_cronicas','2_cronicas','esdras','nehemias','ester','job','salmos','proverbios','eclesiastes','cantares','isaias','jeremias','lamentaciones','ezequiel','daniel','oseas','joel','amos','abdias','jonas','miqueas','nahum','habacuc','sofonias','hageo','zacarias','malaquias','mateo','marcos','lucas','juan','hechos','romanos','1_corintios','2_corintios','galatas','efesios','filipenses','colosenses','1_tesalonicenses','2_tesalonicenses','1_timoteo','2_timoteo','tito','filemon','hebreos','santiago','1_pedro','2_pedro','1_juan','2_juan','3_juan','judas','apocalipsis'];
async function importarTodosLosTitulos(){
  const btn=$('#importTitles');
  if(btn){btn.disabled=true;btn.textContent='Descargando títulos…'}
  toast('Descargando todos los títulos. Puede tardar un poco');
  try{
    const urls=[
      'https://cdn.jsdelivr.net/gh/mrk214/bible-data-es-spa@main/data/es___spa___spa/RVR1960_vid_149.json',
      'https://raw.githubusercontent.com/mrk214/bible-data-es-spa/main/data/es___spa___spa/RVR1960_vid_149.json'
    ];
    let data=null,lastError=null;
    for(const url of urls){
      try{
        const res=await fetch(url,{cache:'no-store'});
        if(!res.ok)throw new Error(`HTTP ${res.status}`);
        data=await res.json();
        break;
      }catch(error){lastError=error}
    }
    if(!data)throw lastError||new Error('No se pudo descargar la fuente de títulos');
    const result={};
    (data.books||[]).forEach((book,bookIndex)=>{
      const key=USFM_KEYS[bookIndex];if(!key)return;
      (book.chapters||[]).forEach((chapter,chapterIndex)=>{
        const found=[];const items=chapter.items||[];
        for(let i=0;i<items.length;i++){
          const item=items[i]||{};
          if(!['section1','section2','heading1','heading2'].includes(item.type))continue;
          const titulo=(item.lines||[]).join(' ').replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
          if(!titulo)continue;
          let verse=Number((item.verse_numbers||[])[0]||0);
          if(!verse){for(let j=i+1;j<items.length;j++){const n=Number((items[j]?.verse_numbers||[])[0]||0);if(n){verse=n;break}}}
          if(!verse)verse=1;
          found.push({versiculo:verse,titulo});
        }
        if(found.length&&chapterIndex+2<=(book.chapters||[]).length){result[key]=result[key]||{};result[key][String(chapterIndex+2)]=found}
      });
    });
    state.importedTitles=result;localStorage.setItem('importedTitles',JSON.stringify(result));state.titles=mergeTitles(state.titles,result);render();
    const count=Object.values(result).reduce((a,c)=>a+Object.values(c).reduce((x,y)=>x+y.length,0),0);
    toast(`${count} títulos añadidos y guardados`);
    if(btn){btn.disabled=false;btn.textContent='Títulos completos instalados'};const s=$('#titlesStatus');if(s)s.textContent=`${count} títulos instalados y disponibles sin conexión`;localStorage.setItem('titlesPromptDone','1');
  }catch(error){console.error(error);toast('No se pudieron descargar los títulos');if(btn){btn.disabled=false;btn.textContent='Reintentar instalación de títulos'};const s=$('#titlesStatus');if(s)s.textContent='No se pudieron descargar. Comprueba la conexión y vuelve a intentarlo.'}
}
$('#importTitles')?.addEventListener('click',importarTodosLosTitulos);
function actualizarEstadoTitulos(){
  const count=Object.values(state.importedTitles||{}).reduce((a,c)=>a+Object.values(c||{}).reduce((x,y)=>x+(y||[]).length,0),0);
  const btn=$('#importTitles'),status=$('#titlesStatus');
  if(count>0){if(btn)btn.textContent='Títulos completos instalados';if(status)status.textContent=`${count} títulos instalados y disponibles sin conexión`}
}
setTimeout(()=>{
  actualizarEstadoTitulos();
  const hasTitles=Object.keys(state.importedTitles||{}).length>0;
  if(!hasTitles&&!localStorage.getItem('titlesPromptDone')){
    localStorage.setItem('titlesPromptDone','1');
    if(confirm('¿Deseas instalar ahora todos los títulos y subtítulos de la Biblia? Solo se descargarán una vez y después funcionarán sin conexión.')) importarTodosLosTitulos();
  }
},1200);
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

