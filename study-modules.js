/* Mi Biblia de Estudio V1.65.0 · Personajes, Guía y Parábolas · offline */
(()=>{
'use strict';
const K={guides:'bibliaStudyGuidesV1650',parables:'bibliaStudyParablesV1650'};
let mode='guides', chars=[], cat='Todos', currentId='';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const norm=s=>String(s??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const getItems=m=>{try{return JSON.parse(localStorage.getItem(K[m])||'[]')}catch{return[]}};
const setItems=(m,v)=>localStorage.setItem(K[m],JSON.stringify(v));
function selectedText(){
  try{
    const verses=[...document.querySelectorAll('.verse.selected')];
    if(!verses.length)return '';
    return verses.map(v=>v.innerText.trim()).join('\n');
  }catch{return ''}
}
function openDialog(){const d=$('studyModulesDialog'); if(!d)return; d.showModal();}
function closeDialog(){const d=$('studyModulesDialog');if(d?.open)d.close()}
window.closeStudyModulesV1650=closeDialog;
window.openStudyModuleV1650=async function(m){mode=m;currentId='';openDialog();await render();};
async function loadChars(){
 if(chars.length)return;
 try{const r=await fetch('biblical-characters-v2261.json?v=1.65.0',{cache:'no-store'});const j=await r.json();chars=Array.isArray(j.characters)?j.characters:[];}catch(e){chars=[]}
}
async function render(){
 const title=$('studyModulesTitle'), sub=$('studyModulesSub'), body=$('studyModulesBody');
 if(mode==='characters'){
  title.textContent=' Personajes Bíblicos';sub.textContent='Quién fue cada personaje, por qué es importante y qué enseñanza nos deja.';await loadChars();renderCharacters(body);return;
 }
 const isG=mode==='guides';title.textContent=isG?' Guía':' Parábolas';sub.textContent=isG?'Guarde y organice guías de estudio bíblico.':'Guarde y estudie las parábolas del Señor.';
 renderItems(body);
}
function renderItems(body){
 const isG=mode==='guides', items=getItems(mode).sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0));
 body.innerHTML=`<div class="module-tools"><button class="module-primary" onclick="newStudyItemV1650()"> Nueva ${isG?'guía':'parábola'}</button><input id="moduleSearchV1650" type="search" placeholder="Buscar ${isG?'guía o código (ej. G1)':'parábola o código (ej. P1)'}" oninput="filterStudyItemsV1650()"></div><div id="moduleItemsV1650" class="module-list"></div>`;
 drawItems(items);
}
function drawItems(items){
 const box=$('moduleItemsV1650');if(!box)return;
 const q=norm($('moduleSearchV1650')?.value||''); const prefix=mode==='guides'?'G':'P';
 const filtered=items.filter((x,i)=>!q||norm(`${prefix}${items.length-i} ${x.title} ${x.content}`).includes(q));
 box.innerHTML=filtered.length?filtered.map((x,i)=>`<button class="module-row" onclick="editStudyItemV1650('${esc(x.id)}')"><span><strong>${esc(x.title||'Sin título')}</strong><small>${prefix}${items.length-i} · ${esc((x.content||'').slice(0,105))}</small></span><b>›</b></button>`).join(''):'<div class="module-empty">Todavía no hay elementos guardados.</div>';
}
window.filterStudyItemsV1650=()=>drawItems(getItems(mode).sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0)));
window.newStudyItemV1650=()=>showEditor({id:'',title:mode==='guides'?'Nueva guía':'Nueva parábola',content:selectedText(),favorite:false});
window.editStudyItemV1650=id=>{const x=getItems(mode).find(i=>i.id===id);if(x)showEditor(x)};
function showEditor(x){currentId=x.id||'';const body=$('studyModulesBody');body.innerHTML=`<div class="module-editor"><label>Título<input id="moduleTitleV1650" value="${esc(x.title||'')}"></label><label>Contenido<textarea id="moduleContentV1650" placeholder="Escriba o pegue aquí…">${esc(x.content||'')}</textarea></label><div class="module-editor-actions"><button onclick="discardStudyItemV1650()">↩ Descartar</button><button onclick="pasteStudyItemV1650()"> Pegar</button>${currentId?'<button class="danger" onclick="deleteStudyItemV1650()"> Eliminar</button>':''}<button class="module-primary" onclick="saveStudyItemV1650()"> Guardar</button></div></div>`;}
window.discardStudyItemV1650=()=>render();
window.pasteStudyItemV1650=async()=>{try{$('moduleContentV1650').value=await navigator.clipboard.readText()}catch{alert('No se pudo leer el portapapeles. Mantenga pulsado y use Pegar.')}};
window.saveStudyItemV1650=()=>{const a=getItems(mode), now=Date.now(), id=currentId||`${mode}-${now}`;const obj={id,title:$('moduleTitleV1650').value.trim()||(mode==='guides'?'Nueva guía':'Nueva parábola'),content:$('moduleContentV1650').value.trim(),updatedAt:now};const n=a.findIndex(x=>x.id===id);n>=0?a[n]=obj:a.push(obj);setItems(mode,a);currentId='';render();};
window.deleteStudyItemV1650=()=>{if(!confirm('¿Eliminar definitivamente este elemento?'))return;setItems(mode,getItems(mode).filter(x=>x.id!==currentId));currentId='';render();};
function renderCharacters(body){
 const cats=['Todos',...new Set(chars.map(x=>x.categoria).filter(Boolean))];
 body.innerHTML=`<div class="module-tools"><input id="charSearchV1650" type="search" placeholder="Buscar personaje, libro o categoría…" oninput="renderCharactersListV1650()"></div><div class="character-cats">${cats.map(c=>`<button class="${c===cat?'active':''}" onclick="setCharacterCatV1650('${esc(c)}')">${esc(c)}</button>`).join('')}</div><div id="characterListV1650" class="module-list"></div>`;renderCharList();
}
window.setCharacterCatV1650=c=>{cat=c;renderCharacters($('studyModulesBody'))};
window.renderCharactersListV1650=renderCharList;
function renderCharList(){const q=norm($('charSearchV1650')?.value||'');const list=chars.filter(p=>(cat==='Todos'||p.categoria===cat)&&(!q||norm([p.nombre,p.categoria,p.quienFue,p.importante,p.aprendizaje,p.apariciones].join(' ')).includes(q))).sort((a,b)=>a.nombre.localeCompare(b.nombre,'es'));const box=$('characterListV1650');if(box)box.innerHTML=list.length?list.map(p=>`<button class="module-row" onclick="openCharacterV1650('${esc(p.id)}')"><span><strong>${esc(p.nombre)}</strong><small>${esc(p.quienFue||'')}</small></span><b>›</b></button>`).join(''):'<div class="module-empty">No se han encontrado personajes.</div>'}
window.openCharacterV1650=id=>{const p=chars.find(x=>x.id===id);if(!p)return;const card=(t,v)=>v?`<section class="character-card"><h3>${esc(t)}</h3><p>${esc(v)}</p></section>`:'';$('studyModulesBody').innerHTML=`<button class="module-back" onclick="renderStudyModuleV1650()">← Personajes</button><article class="character-detail"><h2>${esc(p.nombre)}</h2><p class="character-quote">${esc(p.frase||'')}</p>${card('Quién fue',p.quienFue)}${card('Lo más importante de su vida',p.importante)}${card('Qué podemos aprender',p.aprendizaje)}${card('Dónde aparece en la Biblia',p.apariciones)}${card('Relación con Cristo',p.relacionCristo)}${card('Cronología',p.cronologia)}${card('Fuente',p.canon)}</article>`};
window.renderStudyModuleV1650=render;
})();
