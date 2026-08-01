(()=>{
const STORAGE='biblia_guias_crud_v16435';
let guides=[];
const GUIDE_IDS_BY_BOOK_V2820={"genesis":"mq189k74e19kqg","exodo":"mq18o6kz6j00l1","levitico":"mq18v33xs30y2a","numeros":"mq191gs6wfr7b0","deuteronomio":"mq19944izsypxx","josue":"mq19allbrruzzq","jueces":"mq19cja4i82uk0","rut":"mq19f4iyn19frs","1_samuel":"mq19hgzemminaq","2_samuel":"mq19k1n2cmwrtw","1_reyes":"mq19m2pj0vje93","2_reyes":"mq19rn9zjie94t","1_cronicas":"mq19tyrqcnpfyc","2_cronicas":"mq19xo7wkefakx","esdras":"mq19zowb7ouvw3","nehemias":"mq1a0picjtwdyi","ester":"mq1a26lacf0t0y","job":"mq1a5q5hqlzgul","salmos":"mq1adgfxp65wj2","proverbios":"mq1affanpikj1b","eclesiastes":"mq1agt5sk4n8qd","cantares":"mq1ai7gx0mxfvh","isaias":"mq1am8nws0d8p5","jeremias":"mq1ank6awoktb7","lamentaciones":"mq1aot6b6iuca0","ezequiel":"mq1as40zua0x8e","daniel":"mq1au3yltarg9p","oseas":"mq1avh2b4aslc6","joel":"mq1awwdclvwpqy","amos":"mq1ay3kqrq70cf","abdias":"mq1az78rdhd3iz","jonas":"mq1b0u86dcb1tp","miqueas":"mq1b2csjab29u4","nahum":"mq1b3oiqiw1lbg","habacuc":"mq1b4xtxg55bve","sofonias":"mq1bzxxwort7ks","hageo":"mq1c1awtu7tbtt","zacarias":"mq1c32iq0wn78q","malaquias":"mq1c54dc2gsr85","mateo":"mq1c8viydm77as","marcos":"mq1c967vtkw0hb","lucas":"mq1ccma6v2eop5","juan":"mq1ceah81ddbyq","hechos":"mq1che3kfjzpeo","romanos":"mq1ym5piynlofg","1_corintios":"mq1yni6umroyqm","2_corintios":"mq1yoqrfbq56dm","galatas":"mq1yqf7qlkowoj","efesios":"mq1yrs7qkq4dor","filipenses":"mq1ystvdnxn00p","colosenses":"mq1ytr94r0qqgn","1_tesalonicenses":"mq1yvex403cbwh","2_tesalonicenses":"mq1yws442t8gm9","1_timoteo":"mq1yy54b2osc2r","2_timoteo":"mq1z07jmjmz8x6","tito":"mq2fm2l7bln423","filemon":"mq2fo8hdjxlpue","hebreos":"mq2fq3dsb0acnk","santiago":"mq2fvfyhzr2dex","1_pedro":"mq2fxng3z9oohu","2_pedro":"mq2fyvoolenx0v","1_juan":"mq2g4wy5859q7b","2_juan":"mq2g70sqvxgj5d","3_juan":"mq2g7yu5ryhv1p","judas":"mq2g9r3ggh1k6j","apocalipsis":"mq2gdg7jusjcxw"};
let trash=[];
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function plainTitle(t){return String(t||'Entrada').replace(/[\p{Extended_Pictographic}\uFE0F]/gu,'').replace(/\s+/g,' ').trim();}
function stripCodes(s){return String(s||'').replace(/\[\/?desplegable[^\]]*\]/gi,' ').replace(/\s+/g,' ').trim();}
function uid(){return 'guide_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
function loadState(){try{return JSON.parse(localStorage.getItem(STORAGE)||'null')}catch(e){return null}}
function saveState(){localStorage.setItem(STORAGE,JSON.stringify({guides,trash}))}
async function ensureLoaded(){
 if(guides.length)return;
 let defaults=[];try{defaults=await fetch('./biblical-guides.json?v=2.1.5',{cache:'no-store'}).then(r=>r.json())}catch(e){}
 const state=loadState();
 if(state&&Array.isArray(state.guides)){guides=state.guides;trash=Array.isArray(state.trash)?state.trash:[]}
 else{guides=defaults;trash=[];saveState()}
}
function formatText(text){
 let src=String(text||'').replace(/\r/g,'');
 src=src.replace(/\[(desplegable|emergente)\s+titulo="([^"]+)"\]([\s\S]*?)\[\/\1\]/gi,(m,type,title,body)=>`@@BLOCK:${type.toLowerCase()}:${encodeURIComponent(title)}@@${body}@@ENDBLOCK@@`);
 const chunks=src.split(/(@@BLOCK:[\s\S]*?@@ENDBLOCK@@)/g).filter(Boolean);
 return chunks.map(chunk=>{
   const bm=chunk.match(/^@@BLOCK:(desplegable|emergente):([^@]+)@@([\s\S]*?)@@ENDBLOCK@@$/);
   if(bm){
     const type=bm[1], title=decodeURIComponent(bm[2]).trim(), body=bm[3].trim();
     if(type==='emergente') return `<button type="button" class="guide-popup-trigger" data-popup-title="${esc(title)}" data-popup-body="${esc(body)}">${esc(title)}</button>`;
     return `<details class="guide-scripture" open><summary>${esc(title)}</summary><div class="guide-scripture-body">${esc(body)}</div></details>`;
   }
   return chunk.split(/\n{2,}/).map(p=>{p=p.trim();if(!p)return'';const isHead=/^(🕊️\s*)?(✝️\s*)?(EXPLICACIÓN|FRASE RESUMEN|ENSEÑANZA|SIGNIFICADO)/i.test(p);return `<p${isHead?' class="guide-section-title"':''}>${esc(p).replace(/\n/g,'<br>')}</p>`}).join('');
 }).join('');
}
function bindGuidePopups(){document.querySelectorAll('.guide-popup-trigger').forEach(btn=>btn.onclick=()=>showGuidePopup(btn.dataset.popupTitle,btn.dataset.popupBody,btn))}
window.showGuidePopup=function(title,body,anchor){
  const wrap=document.createElement('div');
  wrap.className='guide-popup-overlay guide-popup-anchored';
  wrap.innerHTML=`<div class="guide-popup-card"><div class="guide-popup-head"><h2>${esc(title)}</h2><button type="button" aria-label="Cerrar">✕</button></div><div class="guide-popup-body">${esc(body).split('\n').join('<br>')}</div></div>`;
  document.body.appendChild(wrap);
  const card=wrap.querySelector('.guide-popup-card');
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
  wrap.querySelector('.guide-popup-head button').onclick=close;
  wrap.onclick=e=>{if(e.target===wrap)close()};
  window.addEventListener('resize',place);
  window.addEventListener('scroll',place,true);
  if(window.visualViewport){window.visualViewport.addEventListener('resize',place);window.visualViewport.addEventListener('scroll',place)}
}
function moduleTools(){return `<div class="module-crud-tools" style="display:grid!important;grid-template-columns:1fr 1fr!important;gap:14px!important;width:100%!important;margin:0 0 18px!important"><button type="button" class="crud-add section-main-dark-btn" style="appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;margin:0!important;padding:11px 20px!important;border:1.5px solid #a98534!important;border-radius:18px!important;background:linear-gradient(180deg,#303239 0%,#1b1d22 100%)!important;color:#f8f1df!important;-webkit-text-fill-color:#f8f1df!important;font-family:Lora,serif!important;font-weight:800!important;font-size:18px!important;line-height:1.1!important;text-shadow:0 1px 1px rgba(0,0,0,.55)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 4px 12px rgba(0,0,0,.28)!important;white-space:nowrap!important;cursor:pointer!important;width:100%!important" onclick="editBiblicalGuide()">＋ Añadir</button><button type="button" class="crud-trash section-main-dark-btn" style="appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;margin:0!important;padding:11px 20px!important;border:1.5px solid #a98534!important;border-radius:18px!important;background:linear-gradient(180deg,#303239 0%,#1b1d22 100%)!important;color:#f8f1df!important;-webkit-text-fill-color:#f8f1df!important;font-family:Lora,serif!important;font-weight:800!important;font-size:18px!important;line-height:1.1!important;text-shadow:0 1px 1px rgba(0,0,0,.55)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 4px 12px rgba(0,0,0,.28)!important;white-space:nowrap!important;cursor:pointer!important;width:100%!important" onclick="openGuidesTrash()">Papelera <span>${trash.length}</span></button></div>`}
window.openBiblicalGuides=async function(){const screen=$('#biblicalGuidesScreen');if(!screen)return;document.querySelector('.app-shell')?.classList.add('hidden');screen.classList.remove('hidden');await ensureLoaded();$('#biblicalGuidesHome').classList.remove('hidden');$('#biblicalGuideDetail').classList.add('hidden');renderBiblicalGuides();window.scrollTo(0,0)}
window.closeBiblicalGuides=function(){$('#biblicalGuidesScreen')?.classList.add('hidden');document.querySelector('.app-shell')?.classList.remove('hidden');window.scrollTo(0,0)}
window.renderBiblicalGuides=function(){
 const q=($('#biblicalGuidesSearch')?.value||'').trim().toLowerCase();const list=guides.filter(p=>(plainTitle(p.title)+' '+stripCodes(p.content)).toLowerCase().includes(q));
 let tools=$('#biblicalGuidesHome .module-crud-tools');if(!tools){$('#biblicalGuidesHome')?.insertAdjacentHTML('afterbegin',moduleTools())}else tools.outerHTML=moduleTools();
 $('#biblicalGuidesCount').textContent=`${list.length} temas`;
 $('#biblicalGuidesList').innerHTML=list.map(p=>`<button class="biblical-guide-card" type="button" data-id="${esc(p.id)}"><strong>${esc(plainTitle(p.title))}</strong><span>Pulse para abrir este tema de la guía</span></button>`).join('')||'<div class="biblical-guide-card"><strong>No se encontraron resultados</strong></div>';
 document.querySelectorAll('.biblical-guide-card[data-id]').forEach(b=>b.onclick=()=>openBiblicalGuide(b.dataset.id));
}
window.openBiblicalGuide=function(id,openedFromReader=false){const p=guides.find(x=>x.id===id);if(!p)return;$('#biblicalGuidesHome').classList.add('hidden');const d=$('#biblicalGuideDetail');d.classList.remove('hidden');d.innerHTML=`<div class="guide-detail-top" style="display:flex!important;flex-direction:column!important;align-items:flex-start!important;gap:14px!important;margin-bottom:14px!important"><div class="detail-nav-actions" style="display:flex!important;flex-wrap:wrap!important;align-items:center!important;justify-content:flex-start!important;gap:16px!important;width:auto!important;margin:0!important"><button type="button" id="guideBackBtn" class="study-detail-back" style="appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;margin:0!important;padding:11px 18px!important;border:1.5px solid #a98534!important;border-radius:18px!important;background:linear-gradient(180deg,#303239 0%,#1b1d22 100%)!important;color:#f8f1df!important;-webkit-text-fill-color:#f8f1df!important;font-family:Lora,serif!important;font-weight:800!important;font-size:18px!important;line-height:1.1!important;text-shadow:0 1px 1px rgba(0,0,0,.55)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 4px 12px rgba(0,0,0,.28)!important;white-space:nowrap!important;cursor:pointer!important">← Guía</button>${openedFromReader?'<button type="button" class="return-to-reader-btn" style="appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;margin:0!important;padding:11px 18px!important;border:1.5px solid #a98534!important;border-radius:18px!important;background:linear-gradient(180deg,#303239 0%,#1b1d22 100%)!important;color:#f8f1df!important;-webkit-text-fill-color:#f8f1df!important;font-family:Lora,serif!important;font-weight:800!important;font-size:18px!important;line-height:1.1!important;text-shadow:0 1px 1px rgba(0,0,0,.55)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 4px 12px rgba(0,0,0,.28)!important;white-space:nowrap!important;cursor:pointer!important" onclick="window.returnBiblicalEntityToChapter&&window.returnBiblicalEntityToChapter()">Volver al capítulo</button>':''}</div><div class="detail-crud-actions" style="display:flex!important;flex-wrap:wrap!important;align-items:center!important;justify-content:flex-start!important;gap:12px!important;width:auto!important;margin:0!important"><button type="button" class="crud-block" style="appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;margin:0!important;padding:11px 18px!important;border:1.5px solid #a98534!important;border-radius:18px!important;background:linear-gradient(180deg,#303239 0%,#1b1d22 100%)!important;color:#f8f1df!important;-webkit-text-fill-color:#f8f1df!important;font-family:Lora,serif!important;font-weight:800!important;font-size:18px!important;line-height:1.1!important;text-shadow:0 1px 1px rgba(0,0,0,.55)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 4px 12px rgba(0,0,0,.28)!important;white-space:nowrap!important;cursor:pointer!important" onclick="openGuideBlockMenu('${esc(p.id)}')">Bloque</button><button type="button" class="crud-edit" style="appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;margin:0!important;padding:11px 18px!important;border:1.5px solid #a98534!important;border-radius:18px!important;background:linear-gradient(180deg,#303239 0%,#1b1d22 100%)!important;color:#f8f1df!important;-webkit-text-fill-color:#f8f1df!important;font-family:Lora,serif!important;font-weight:800!important;font-size:18px!important;line-height:1.1!important;text-shadow:0 1px 1px rgba(0,0,0,.55)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 4px 12px rgba(0,0,0,.28)!important;white-space:nowrap!important;cursor:pointer!important" onclick="editBiblicalGuide('${esc(p.id)}')">Editar</button><button type="button" class="crud-delete" style="appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;margin:0!important;padding:11px 18px!important;border:1.5px solid #a85e61!important;border-radius:18px!important;background:linear-gradient(180deg,#303239 0%,#1b1d22 100%)!important;color:#f8f1df!important;-webkit-text-fill-color:#f8f1df!important;font-family:Lora,serif!important;font-weight:800!important;font-size:18px!important;line-height:1.1!important;text-shadow:0 1px 1px rgba(0,0,0,.55)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 4px 12px rgba(0,0,0,.28)!important;white-space:nowrap!important;cursor:pointer!important" onclick="deleteBiblicalGuide('${esc(p.id)}')">Eliminar</button></div></div><h1>${esc(plainTitle(p.title))}</h1><div class="guide-content">${formatText(p.content)}</div>`;bindGuidePopups();$('#guideBackBtn').onclick=()=>{d.classList.add('hidden');$('#biblicalGuidesHome').classList.remove('hidden');renderBiblicalGuides();window.scrollTo(0,0)};window.scrollTo(0,0)}
window.openBiblicalGuideForBookFromReader=async function(bookKey){
  const id=GUIDE_IDS_BY_BOOK_V2820[bookKey];
  if(!id)return;
  const screen=$('#biblicalGuidesScreen');if(!screen)return;
  document.querySelector('.app-shell')?.classList.add('hidden');
  screen.classList.remove('hidden');
  await ensureLoaded();
  $('#biblicalGuidesHome').classList.add('hidden');
  $('#biblicalGuideDetail').classList.remove('hidden');
  openBiblicalGuide(id,true);
}
window.editBiblicalGuide=function(id){const p=id?guides.find(x=>x.id===id):null;showCrudDialog(p?'Editar tema':'Añadir tema',`<label>Título<input id="crudGuideTitle" value="${esc(p?.title||'')}"></label><div class="crud-editor-block-row"><strong>Contenido completo</strong><button type="button" class="crud-block" onclick="openGuideBlockMenu('${esc(p?.id||'')}','editor')">Bloque</button></div><label><textarea id="crudGuideContent" rows="16">${esc(p?.content||'')}</textarea></label>`,()=>{const title=$('#crudGuideTitle').value.trim(),content=$('#crudGuideContent').value.trim();if(!title||!content){alert('Escriba el título y el contenido.');return false}if(p){p.title=title;p.content=content;p.updatedAt=Date.now()}else guides.unshift({id:uid(),title,content,updatedAt:Date.now(),favorite:false});saveState();closeCrudDialog();renderBiblicalGuides();if(p)openBiblicalGuide(p.id);return true})}
let blockContext={id:'',target:'direct',type:''};
window.openGuideBlockMenu=function(id,target='direct'){blockContext={id:id||'',target,type:''};closeGuideBlockOverlay();const wrap=document.createElement('div');wrap.id='guideBlockOverlay';wrap.className='block-overlay-v16435';wrap.innerHTML=`<div class="block-card-v16435"><h3>Bloque</h3><p>Elige el tipo de bloque que quieres crear.</p><div class="block-actions-v16435"><button type="button" onclick="closeGuideBlockOverlay()">Cancelar</button><button type="button" class="primary" onclick="openGuideBlockForm('desplegable')">Desplegable</button><button type="button" class="primary" onclick="openGuideBlockForm('emergente')">Emergente</button></div></div>`;document.body.appendChild(wrap)}
window.closeGuideBlockOverlay=function(){$('#guideBlockOverlay')?.remove()}
window.openGuideBlockForm=function(type){blockContext.type=type;let wrap=$('#guideBlockOverlay');if(!wrap){wrap=document.createElement('div');wrap.id='guideBlockOverlay';wrap.className='block-overlay-v16435';document.body.appendChild(wrap)}const pop=type==='emergente';wrap.innerHTML=`<div class="block-card-v16435"><h3>${pop?'Crear emergente':'Crear desplegable'}</h3><label>Título o referencia<input id="guideBlockTitle" type="text" placeholder=" San Mateo 13:31-32"></label><label>Contenido<textarea id="guideBlockContent" placeholder="Pega aquí el texto bíblico o el contenido del bloque..."></textarea></label><div class="block-actions-v16435"><button type="button" onclick="openGuideBlockMenu('${esc(blockContext.id)}','${esc(blockContext.target)}')">← Volver</button><button type="button" class="primary" onclick="saveGuideBlock()">Guardar bloque</button></div></div>`;setTimeout(()=>$('#guideBlockTitle')?.focus(),30)}
window.saveGuideBlock=function(){const title=($('#guideBlockTitle')?.value||'').trim(),body=($('#guideBlockContent')?.value||'').trim();if(!title){alert('Escribe un título o referencia.');return}if(!body){alert('Escribe el contenido del bloque.');return}const safe=title.replace(/"/g,"'");const block=`[${blockContext.type} titulo="${safe}"]\n${body}\n[/${blockContext.type}]`;if(blockContext.target==='editor'){const ta=$('#crudGuideContent');if(!ta){alert('No se ha encontrado el editor.');return}const old=ta.value.trim();ta.value=block+(old?'\n\n'+old:'');ta.dispatchEvent(new Event('input',{bubbles:true}))}else{const p=guides.find(x=>x.id===blockContext.id);if(!p){alert('No se ha encontrado la entrada.');return}const old=String(p.content||'').trim();p.content=block+(old?'\n\n'+old:'');p.updatedAt=Date.now();saveState();openBiblicalGuide(p.id)}closeGuideBlockOverlay()}
window.deleteBiblicalGuide=function(id){const i=guides.findIndex(x=>x.id===id);if(i<0)return;if(!confirm('¿Mover este tema de la guía a la papelera?'))return;trash.unshift({...guides[i],deletedAt:Date.now()});guides.splice(i,1);saveState();$('#biblicalGuideDetail').classList.add('hidden');$('#biblicalGuidesHome').classList.remove('hidden');renderBiblicalGuides();window.scrollTo(0,0)}
window.openGuidesTrash=function(){const rows=trash.map(x=>`<div class="trash-row"><strong>${esc(plainTitle(x.title))}</strong><div><button onclick="restoreGuide('${esc(x.id)}')">Restaurar</button><button class="danger" onclick="purgeGuide('${esc(x.id)}')">Eliminar definitivamente</button></div></div>`).join('')||'<p class="trash-empty">La papelera está vacía.</p>';showCrudDialog('Papelera de Guía',`<div class="trash-list">${rows}</div>${trash.length?'<button class="empty-trash" onclick="emptyGuidesTrash()">Vaciar papelera</button>':''}`,null,true)}
window.restoreGuide=function(id){const i=trash.findIndex(x=>x.id===id);if(i<0)return;const x=trash.splice(i,1)[0];delete x.deletedAt;guides.unshift(x);saveState();openGuidesTrash();renderBiblicalGuides()}
window.purgeGuide=function(id){if(!confirm('Esta acción no se puede deshacer. ¿Eliminar definitivamente?'))return;trash=trash.filter(x=>x.id!==id);saveState();openGuidesTrash();renderBiblicalGuides()}
window.emptyGuidesTrash=function(){if(!confirm('¿Vaciar toda la papelera? Esta acción no se puede deshacer.'))return;trash=[];saveState();openGuidesTrash();renderBiblicalGuides()}
function showCrudDialog(title,body,onSave,viewOnly=false){closeCrudDialog();const wrap=document.createElement('div');wrap.id='moduleCrudOverlay';wrap.className='module-crud-overlay';wrap.innerHTML=`<div class="module-crud-dialog"><div class="crud-dialog-head"><h2>${esc(title)}</h2><button type="button" onclick="closeCrudDialog()">✕</button></div><div class="crud-dialog-body">${body}</div>${viewOnly?'':`<div class="crud-dialog-foot"><button type="button" onclick="closeCrudDialog()">Cancelar</button><button type="button" class="save">Guardar</button></div>`}</div>`;document.body.appendChild(wrap);if(!viewOnly)wrap.querySelector('.save').onclick=onSave;}
window.closeCrudDialog=function(){$('#moduleCrudOverlay')?.remove()}
})();
