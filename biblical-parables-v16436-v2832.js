(()=>{
const STORAGE='biblia_parabolas_crud_v16433';
let parables=[];
let trash=[];
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function plainTitle(t){return String(t||'Parábola').replace(/[\p{Extended_Pictographic}\uFE0F]/gu,'').replace(/\s+/g,' ').trim();}
function stripCodes(s){return String(s||'').replace(/\[\/?desplegable[^\]]*\]/gi,' ').replace(/\s+/g,' ').trim();}
function uid(){return 'par_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
function loadState(){try{return JSON.parse(localStorage.getItem(STORAGE)||'null')}catch(e){return null}}
function saveState(){localStorage.setItem(STORAGE,JSON.stringify({parables,trash}))}
async function ensureLoaded(){
 if(parables.length)return;
 let defaults=[];try{defaults=await fetch('./biblical-parables.json?v=2.1.5',{cache:'no-store'}).then(r=>r.json())}catch(e){}
 const state=loadState();
 if(state&&Array.isArray(state.parables)){parables=state.parables;trash=Array.isArray(state.trash)?state.trash:[]}
 else{parables=defaults;trash=[];saveState()}
}
function formatText(text){
 let src=String(text||'').replace(/\r/g,'');
 src=src.replace(/\[(desplegable|emergente)\s+titulo="([^"]+)"\]([\s\S]*?)\[\/\1\]/gi,(m,type,title,body)=>`@@BLOCK:${type.toLowerCase()}:${encodeURIComponent(title)}@@${body}@@ENDBLOCK@@`);
 const chunks=src.split(/(@@BLOCK:[\s\S]*?@@ENDBLOCK@@)/g).filter(Boolean);
 return chunks.map(chunk=>{
   const bm=chunk.match(/^@@BLOCK:(desplegable|emergente):([^@]+)@@([\s\S]*?)@@ENDBLOCK@@$/);
   if(bm){
     const type=bm[1], title=decodeURIComponent(bm[2]).trim(), body=bm[3].trim();
     if(type==='emergente') return `<button type="button" class="parable-popup-trigger" data-popup-title="${esc(title)}" data-popup-body="${esc(body)}">${esc(title)}</button>`;
     return `<details class="parable-scripture" open><summary>${esc(title)}</summary><div class="parable-scripture-body">${esc(body)}</div></details>`;
   }
   return chunk.split(/\n{2,}/).map(p=>{p=p.trim();if(!p)return'';const isHead=/^(🕊️\s*)?(✝️\s*)?(EXPLICACIÓN|FRASE RESUMEN|ENSEÑANZA|SIGNIFICADO)/i.test(p);return `<p${isHead?' class="parable-section-title"':''}>${esc(p).replace(/\n/g,'<br>')}</p>`}).join('');
 }).join('');
}
function bindParablePopups(){document.querySelectorAll('.parable-popup-trigger').forEach(btn=>btn.onclick=()=>showParablePopup(btn.dataset.popupTitle,btn.dataset.popupBody,btn))}
window.showParablePopup=function(title,body,anchor){
  const wrap=document.createElement('div');
  wrap.className='parable-popup-overlay parable-popup-anchored';
  wrap.innerHTML=`<div class="parable-popup-card"><div class="parable-popup-head"><h2>${esc(title)}</h2><button type="button" aria-label="Cerrar">✕</button></div><div class="parable-popup-body">${esc(body).split('\n').join('<br>')}</div></div>`;
  document.body.appendChild(wrap);
  const card=wrap.querySelector('.parable-popup-card');
  const place=()=>{
    if(!anchor||!anchor.isConnected) return;
    const vv=window.visualViewport;
    const viewportTop=vv?vv.offsetTop:0;
    const viewportHeight=vv?vv.height:window.innerHeight;
    const viewportBottom=viewportTop+viewportHeight;
    const r=anchor.getBoundingClientRect();
    const gap=8,pad=10,maxW=Math.min(620,window.innerWidth-pad*2);
    wrap.style.setProperty('display','block','important');
    wrap.style.setProperty('padding','0','important');
    card.style.setProperty('position','fixed','important');
    card.style.setProperty('bottom','auto','important');
    card.style.setProperty('right','auto','important');
    card.style.setProperty('transform','none','important');
    card.style.setProperty('margin','0','important');
    card.style.setProperty('width',maxW+'px','important');
    card.style.setProperty('left',Math.max(pad,Math.min(r.left,window.innerWidth-maxW-pad))+'px','important');
    card.style.setProperty('visibility','hidden','important');
    requestAnimationFrame(()=>{
      const naturalH=Math.min(card.scrollHeight,Math.max(160,viewportHeight-pad*2));
      const below=viewportBottom-r.bottom-gap;
      const above=r.top-viewportTop-gap;
      const openBelow=below>=Math.min(naturalH,260)||below>=above;
      const available=Math.max(140,openBelow?below:above);
      const h=Math.min(naturalH,available);
      const top=openBelow?r.bottom+gap:Math.max(viewportTop+pad,r.top-gap-h);
      card.style.setProperty('max-height',h+'px','important');
      card.style.setProperty('top',top+'px','important');
      card.style.setProperty('visibility','visible','important');
    });
  };
  place();
  const close=()=>{
    window.removeEventListener('resize',place);
    window.removeEventListener('scroll',place,true);
    if(window.visualViewport){window.visualViewport.removeEventListener('resize',place);window.visualViewport.removeEventListener('scroll',place)}
    wrap.remove();
  };
  wrap.querySelector('.parable-popup-head button').onclick=close;
  wrap.onclick=e=>{if(e.target===wrap)close()};
  window.addEventListener('resize',place);
  window.addEventListener('scroll',place,true);
  if(window.visualViewport){window.visualViewport.addEventListener('resize',place);window.visualViewport.addEventListener('scroll',place)}
}
function moduleTools(){return `<div class="module-crud-tools"><button type="button" class="crud-add" onclick="editBiblicalParable()">＋ Añadir</button><button type="button" class="crud-trash" onclick="openParablesTrash()">Papelera <span>${trash.length}</span></button></div>`}
window.openBiblicalParables=async function(){const screen=$('#biblicalParablesScreen');if(!screen)return;document.querySelector('.app-shell')?.classList.add('hidden');screen.classList.remove('hidden');await ensureLoaded();$('#biblicalParablesHome').classList.remove('hidden');$('#biblicalParableDetail').classList.add('hidden');renderBiblicalParables();window.scrollTo(0,0)}
window.closeBiblicalParables=function(){$('#biblicalParablesScreen')?.classList.add('hidden');document.querySelector('.app-shell')?.classList.remove('hidden');window.scrollTo(0,0)}
window.renderBiblicalParables=function(){
 const q=($('#biblicalParablesSearch')?.value||'').trim().toLowerCase();const list=parables.filter(p=>(plainTitle(p.title)+' '+stripCodes(p.content)).toLowerCase().includes(q));
 let tools=$('#biblicalParablesHome .module-crud-tools');if(!tools){$('#biblicalParablesHome')?.insertAdjacentHTML('afterbegin',moduleTools())}else tools.outerHTML=moduleTools();
 $('#biblicalParablesCount').textContent=`${list.length} parábolas`;
 $('#biblicalParablesList').innerHTML=list.map(p=>`<button class="biblical-parable-card" type="button" data-id="${esc(p.id)}"><strong>${esc(plainTitle(p.title))}</strong><span>Pulse para leer la parábola y su explicación</span></button>`).join('')||'<div class="biblical-parable-card"><strong>No se encontraron resultados</strong></div>';
 document.querySelectorAll('.biblical-parable-card[data-id]').forEach(b=>b.onclick=()=>openBiblicalParable(b.dataset.id));
}
window.openBiblicalParable=function(id,openedFromReader=false){const p=parables.find(x=>x.id===id);if(!p)return;$('#biblicalParablesHome').classList.add('hidden');const d=$('#biblicalParableDetail');d.classList.remove('hidden');d.innerHTML=`<div class="parable-detail-top"><div class="detail-nav-actions"><button type="button" id="parableBackBtn" class="study-detail-back">← Parábolas</button>${openedFromReader?'<button type="button" class="return-to-reader-btn" onclick="window.returnBiblicalEntityToChapter&&window.returnBiblicalEntityToChapter()">Volver al capítulo</button>':''}</div><div class="detail-crud-actions"><button type="button" class="crud-block" onclick="openParableBlockMenu('${esc(p.id)}')">Bloque</button><button type="button" class="crud-edit" onclick="editBiblicalParable('${esc(p.id)}')">Editar</button><button type="button" class="crud-delete" onclick="deleteBiblicalParable('${esc(p.id)}')">Eliminar</button></div></div><h1>${esc(plainTitle(p.title))}</h1><div class="parable-content">${formatText(p.content)}</div>`;bindParablePopups();$('#parableBackBtn').onclick=()=>{d.classList.add('hidden');$('#biblicalParablesHome').classList.remove('hidden');renderBiblicalParables();window.scrollTo(0,0)};window.scrollTo(0,0)}
window.editBiblicalParable=function(id){const p=id?parables.find(x=>x.id===id):null;showCrudDialog(p?'Editar parábola':'Añadir parábola',`<label>Título<input id="crudParableTitle" value="${esc(p?.title||'')}"></label><div class="crud-editor-block-row"><strong>Contenido completo</strong><button type="button" class="crud-block" onclick="openParableBlockMenu('${esc(p?.id||'')}','editor')">Bloque</button></div><label><textarea id="crudParableContent" rows="16">${esc(p?.content||'')}</textarea></label>`,()=>{const title=$('#crudParableTitle').value.trim(),content=$('#crudParableContent').value.trim();if(!title||!content){alert('Escriba el título y el contenido.');return false}if(p){p.title=title;p.content=content;p.updatedAt=Date.now()}else parables.unshift({id:uid(),title,content,updatedAt:Date.now(),favorite:false});saveState();closeCrudDialog();renderBiblicalParables();if(p)openBiblicalParable(p.id);return true})}
let blockContext={id:'',target:'direct',type:''};
window.openParableBlockMenu=function(id,target='direct'){blockContext={id:id||'',target,type:''};closeParableBlockOverlay();const wrap=document.createElement('div');wrap.id='parableBlockOverlay';wrap.className='block-overlay-v16434';wrap.innerHTML=`<div class="block-card-v16434"><h3>Bloque</h3><p>Elige el tipo de bloque que quieres crear.</p><div class="block-actions-v16434"><button type="button" onclick="closeParableBlockOverlay()">Cancelar</button><button type="button" class="primary" onclick="openParableBlockForm('desplegable')">Desplegable</button><button type="button" class="primary" onclick="openParableBlockForm('emergente')">Emergente</button></div></div>`;document.body.appendChild(wrap)}
window.closeParableBlockOverlay=function(){$('#parableBlockOverlay')?.remove()}
window.openParableBlockForm=function(type){blockContext.type=type;let wrap=$('#parableBlockOverlay');if(!wrap){wrap=document.createElement('div');wrap.id='parableBlockOverlay';wrap.className='block-overlay-v16434';document.body.appendChild(wrap)}const pop=type==='emergente';wrap.innerHTML=`<div class="block-card-v16434"><h3>${pop?'Crear emergente':'Crear desplegable'}</h3><label>Título o referencia<input id="parableBlockTitle" type="text" placeholder=" San Mateo 13:31-32"></label><label>Contenido<textarea id="parableBlockContent" placeholder="Pega aquí el texto bíblico o el contenido del bloque..."></textarea></label><div class="block-actions-v16434"><button type="button" onclick="openParableBlockMenu('${esc(blockContext.id)}','${esc(blockContext.target)}')">← Volver</button><button type="button" class="primary" onclick="saveParableBlock()">Guardar bloque</button></div></div>`;setTimeout(()=>$('#parableBlockTitle')?.focus(),30)}
window.saveParableBlock=function(){const title=($('#parableBlockTitle')?.value||'').trim(),body=($('#parableBlockContent')?.value||'').trim();if(!title){alert('Escribe un título o referencia.');return}if(!body){alert('Escribe el contenido del bloque.');return}const safe=title.replace(/"/g,"'");const block=`[${blockContext.type} titulo="${safe}"]\n${body}\n[/${blockContext.type}]`;if(blockContext.target==='editor'){const ta=$('#crudParableContent');if(!ta){alert('No se ha encontrado el editor.');return}const old=ta.value.trim();ta.value=block+(old?'\n\n'+old:'');ta.dispatchEvent(new Event('input',{bubbles:true}))}else{const p=parables.find(x=>x.id===blockContext.id);if(!p){alert('No se ha encontrado la parábola.');return}const old=String(p.content||'').trim();p.content=block+(old?'\n\n'+old:'');p.updatedAt=Date.now();saveState();openBiblicalParable(p.id)}closeParableBlockOverlay()}
window.deleteBiblicalParable=function(id){const i=parables.findIndex(x=>x.id===id);if(i<0)return;if(!confirm('¿Mover esta parábola a la papelera?'))return;trash.unshift({...parables[i],deletedAt:Date.now()});parables.splice(i,1);saveState();$('#biblicalParableDetail').classList.add('hidden');$('#biblicalParablesHome').classList.remove('hidden');renderBiblicalParables();window.scrollTo(0,0)}
window.openParablesTrash=function(){const rows=trash.map(x=>`<div class="trash-row"><strong>${esc(plainTitle(x.title))}</strong><div><button onclick="restoreParable('${esc(x.id)}')">Restaurar</button><button class="danger" onclick="purgeParable('${esc(x.id)}')">Eliminar definitivamente</button></div></div>`).join('')||'<p class="trash-empty">La papelera está vacía.</p>';showCrudDialog('Papelera de Parábolas',`<div class="trash-list">${rows}</div>${trash.length?'<button class="empty-trash" onclick="emptyParablesTrash()">Vaciar papelera</button>':''}`,null,true)}
window.restoreParable=function(id){const i=trash.findIndex(x=>x.id===id);if(i<0)return;const x=trash.splice(i,1)[0];delete x.deletedAt;parables.unshift(x);saveState();openParablesTrash();renderBiblicalParables()}
window.purgeParable=function(id){if(!confirm('Esta acción no se puede deshacer. ¿Eliminar definitivamente?'))return;trash=trash.filter(x=>x.id!==id);saveState();openParablesTrash();renderBiblicalParables()}
window.emptyParablesTrash=function(){if(!confirm('¿Vaciar toda la papelera? Esta acción no se puede deshacer.'))return;trash=[];saveState();openParablesTrash();renderBiblicalParables()}
function showCrudDialog(title,body,onSave,viewOnly=false){closeCrudDialog();const wrap=document.createElement('div');wrap.id='moduleCrudOverlay';wrap.className='module-crud-overlay';wrap.innerHTML=`<div class="module-crud-dialog"><div class="crud-dialog-head"><h2>${esc(title)}</h2><button type="button" onclick="closeCrudDialog()">✕</button></div><div class="crud-dialog-body">${body}</div>${viewOnly?'':`<div class="crud-dialog-foot"><button type="button" onclick="closeCrudDialog()">Cancelar</button><button type="button" class="save">Guardar</button></div>`}</div>`;document.body.appendChild(wrap);if(!viewOnly)wrap.querySelector('.save').onclick=onSave;}
window.closeCrudDialog=function(){$('#moduleCrudOverlay')?.remove()}
})();
