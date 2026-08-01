/* V2.261 · Buscador de personajes ordenado por relevancia.
   El diseño y la navegación permanecen en JavaScript; los datos están en biblical-characters-v2261.json. */
let BIBLICAL_CHARACTER_CATEGORIES_V2242=[];
let BIBLICAL_CHARACTERS_V2242=[];
window.BIBLICAL_CHARACTERS_V2242=BIBLICAL_CHARACTERS_V2242;
let biblicalCharactersLoadedV2252=false;
let biblicalCharactersLoadErrorV2252="";
let biblicalCategoryV2242="Todos";
const BIBLICAL_CHAR_STORAGE_V16433="biblia_personajes_crud_v16433";
let biblicalCharactersTrashV16433=[];

async function loadBiblicalCharactersV2252(){
  if(biblicalCharactersLoadedV2252)return BIBLICAL_CHARACTERS_V2242;
  try{
    const response=await fetch("biblical-characters-v2261.json?v=2.1.5",{cache:"no-store"});
    if(!response.ok)throw new Error("HTTP "+response.status);
    const payload=await response.json();
    if(!payload||!Array.isArray(payload.categories)||!Array.isArray(payload.characters))throw new Error("Formato JSON no válido");
    BIBLICAL_CHARACTER_CATEGORIES_V2242=payload.categories;
    const stored=loadBiblicalCharactersCrudV16433();
    if(stored&&Array.isArray(stored.characters)){
      BIBLICAL_CHARACTERS_V2242=stored.characters;
      biblicalCharactersTrashV16433=Array.isArray(stored.trash)?stored.trash:[];
    }else{
      BIBLICAL_CHARACTERS_V2242=payload.characters;
      biblicalCharactersTrashV16433=[];
      saveBiblicalCharactersCrudV16433();
    }
    window.BIBLICAL_CHARACTERS_V2242=BIBLICAL_CHARACTERS_V2242;
    biblicalCharactersLoadedV2252=true;
    biblicalCharactersLoadErrorV2252="";
    if(typeof renderHomeV9019==="function")try{renderHomeV9019()}catch(e){}
    const view=document.getElementById("biblicalCharactersViewV2242");
    if(view&&!view.classList.contains("hidden"))renderBiblicalCharactersV2242();
    return BIBLICAL_CHARACTERS_V2242;
  }catch(error){
    biblicalCharactersLoadErrorV2252="No se pudieron cargar los personajes bíblicos.";
    console.error("Error cargando biblical-characters-v2261.json",error);
    const list=document.getElementById("biblicalCharactersListV2242");
    if(list)list.innerHTML='<div class="biblical-empty-v2242">No se pudieron cargar los personajes. Cierre y vuelva a abrir la aplicación.</div>';
    throw error;
  }
}
void loadBiblicalCharactersV2252();
function normalizeBiblicalTextV2242(v){return String(v||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
function escapeBiblicalHtmlV2242(v){return String(v||"").replace(/[&<>"']/g,function(c){return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[c]})}
let biblicalCharactersReturnScreenV16427="home";
function hideMainPanelsForBiblicalV2242(){
  const home=document.getElementById('homeScreen');
  const reader=document.getElementById('readerScreen');
  biblicalCharactersReturnScreenV16427=(reader&&!reader.classList.contains('hidden'))?'reader':'home';
  if(home)home.classList.add('hidden');
  if(reader)reader.classList.add('hidden');
}
async function openBiblicalCharactersV2242(){
  hideMainPanelsForBiblicalV2242();
  document.body.classList.add('biblical-characters-fullscreen-v2243');
  const screen=document.getElementById('biblicalCharactersScreen'); if(screen)screen.classList.remove('hidden');
  const home=document.getElementById('biblicalCharactersHomeV2242'); if(home)home.classList.remove('hidden');
  const detail=document.getElementById('biblicalCharacterDetailV2242'); if(detail)detail.classList.add('hidden');
  if(!biblicalCharactersLoadedV2252){const list=document.getElementById('biblicalCharactersListV2242');if(list)list.innerHTML='<div class="biblical-empty-v2242">Cargando personajes…</div>';try{await loadBiblicalCharactersV2252()}catch(e){return;}}
  renderBiblicalCharactersV2242(); window.scrollTo({top:0,behavior:'smooth'});
}
function closeBiblicalCharactersV2242(){
  document.body.classList.remove('biblical-characters-fullscreen-v2243');
  const screen=document.getElementById('biblicalCharactersScreen'); if(screen)screen.classList.add('hidden');
  const home=document.getElementById('homeScreen');
  const reader=document.getElementById('readerScreen');
  if(biblicalCharactersReturnScreenV16427==='reader'&&reader)reader.classList.remove('hidden');
  else if(home)home.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}
function selectBiblicalCategoryV2242(cat){biblicalCategoryV2242=cat;renderBiblicalCharactersV2242()}
function renderBiblicalCharactersV2242(){
  renderBiblicalCharactersToolsV16433();
  const cats=document.getElementById('biblicalCharactersCategoriesV2242');
  if(cats)cats.innerHTML=BIBLICAL_CHARACTER_CATEGORIES_V2242.map(function(c){return '<button type="button" class="biblical-category-v2242 '+(c===biblicalCategoryV2242?'active':'')+'" onclick="selectBiblicalCategoryV2242('+JSON.stringify(c).replace(/"/g,'&quot;')+')">'+escapeBiblicalHtmlV2242(c)+'</button>'}).join('');
  const input=document.getElementById('biblicalCharactersSearchV2242'); const q=normalizeBiblicalTextV2242(input&&input.value);
  const result=BIBLICAL_CHARACTERS_V2242.filter(function(p){
    if(biblicalCategoryV2242!=='Todos'&&p.categoria!==biblicalCategoryV2242)return false;
    if(!q)return true;
    return normalizeBiblicalTextV2242([p.nombre,p.categoria,p.quienFue,p.importante,p.aprendizaje,p.apariciones,p.frase,p.relacionCristo,p.cronologia,p.canon,p.contextoRapido,(p.mapa||[]).join(" "),(p.cristoClaves||[]).join(" "),(p.lecturas||[]).join(" ")].join(' ')).includes(q);
  }).sort(function(a,b){
    if(!q)return a.nombre.localeCompare(b.nombre,'es');
    function score(p){
      const nombre=normalizeBiblicalTextV2242(p.nombre);
      if(nombre===q)return 0;                         // Coincidencia exacta: Samuel
      if(nombre.startsWith(q+' '))return 1;          // Samuel profeta / Samuel, hijo de...
      if(nombre.startsWith(q))return 2;              // Comienzo del nombre
      if(nombre.split(/[^a-z0-9]+/).includes(q))return 3; // Palabra completa dentro del nombre
      if(nombre.includes(q))return 4;                // Parte del nombre
      const resumen=normalizeBiblicalTextV2242([p.categoria,p.quienFue,p.contextoRapido].join(' '));
      if(resumen.includes(q))return 5;                // Campos principales
      return 6;                                      // Resto de la ficha
    }
    const diff=score(a)-score(b);
    return diff||a.nombre.localeCompare(b.nombre,'es');
  });
  const title=document.getElementById('biblicalCharactersListTitleV2242'); if(title)title.textContent=biblicalCategoryV2242==='Todos'?'Todos los personajes':biblicalCategoryV2242;
  const count=document.getElementById('biblicalCharactersCountV2242'); if(count)count.textContent=result.length+' '+(result.length===1?'personaje':'personajes');
  const list=document.getElementById('biblicalCharactersListV2242'); if(!list)return;
  list.innerHTML=result.length?result.map(function(p){return '<button class="biblical-character-row-v2242" type="button" onclick="openBiblicalCharacterDetailV2242('+JSON.stringify(p.id).replace(/"/g,'&quot;')+')"><span><strong>'+escapeBiblicalHtmlV2242(p.nombre)+'</strong><small>'+escapeBiblicalHtmlV2242(p.quienFue)+'</small></span><span class="arrow">›</span></button>'}).join(''):'<div class="biblical-empty-v2242">No se han encontrado personajes.</div>';
}
function openBiblicalCharacterDetailV2242(id,openedFromReader){
  const p=BIBLICAL_CHARACTERS_V2242.find(function(x){return x.id===id}); if(!p)return;
  const home=document.getElementById('biblicalCharactersHomeV2242'); if(home)home.classList.add('hidden');
  const d=document.getElementById('biblicalCharacterDetailV2242'); if(!d)return;
  const tags=[p.categoria]; if(p.tipoCristo)tags.push('✝ Figura relacionada con Cristo');
  let openedFromBible=openedFromReader===true||window.__biblicalEntityOpenedFromReader===true;
  try{openedFromBible=openedFromBible||sessionStorage.getItem('biblicalEntityOpenedFromReader')==='1'}catch(_){ }
  const returnToChapterButton=openedFromBible
    ? '<button class="return-to-reader-btn" style="appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;margin:0!important;padding:11px 18px!important;border:1.5px solid var(--study-btn-border,#a98534)!important;border-radius:18px!important;background:var(--study-btn-bg,linear-gradient(180deg,#303239 0%,#1b1d22 100%))!important;color:var(--study-btn-text,#f8f1df)!important;-webkit-text-fill-color:var(--study-btn-text,#f8f1df)!important;font-family:Lora,serif!important;font-weight:800!important;font-size:18px!important;line-height:1.1!important;text-shadow:var(--study-btn-shadow,0 1px 1px rgba(0,0,0,.55))!important;box-shadow:var(--study-btn-box-shadow,inset 0 1px 0 rgba(255,255,255,.08),0 4px 12px rgba(0,0,0,.28))!important;white-space:nowrap!important;cursor:pointer!important" type="button" onclick="window.returnBiblicalEntityToChapter&&window.returnBiblicalEntityToChapter()">Volver al capítulo</button>'
    : '';
  d.innerHTML='<div class="biblical-detail-toolbar-v16433" style="display:flex!important;flex-direction:column!important;align-items:flex-start!important;gap:14px!important;margin-bottom:14px!important"><div class="biblical-detail-nav-v288" style="display:flex!important;flex-wrap:wrap!important;align-items:center!important;justify-content:flex-start!important;gap:16px!important;width:auto!important;margin:0!important"><button class="btn soft biblical-detail-back-v2242" style="appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;margin:0!important;padding:11px 18px!important;border:1.5px solid var(--study-btn-border,#a98534)!important;border-radius:18px!important;background:var(--study-btn-bg,linear-gradient(180deg,#303239 0%,#1b1d22 100%))!important;color:var(--study-btn-text,#f8f1df)!important;-webkit-text-fill-color:var(--study-btn-text,#f8f1df)!important;font-family:Lora,serif!important;font-weight:800!important;font-size:18px!important;line-height:1.1!important;text-shadow:var(--study-btn-shadow,0 1px 1px rgba(0,0,0,.55))!important;box-shadow:var(--study-btn-box-shadow,inset 0 1px 0 rgba(255,255,255,.08),0 4px 12px rgba(0,0,0,.28))!important;white-space:nowrap!important;cursor:pointer!important" type="button" onclick="backBiblicalCharactersV2242()">← Personajes</button>'+returnToChapterButton+'</div><div class="detail-crud-actions" style="display:flex!important;flex-wrap:wrap!important;align-items:center!important;justify-content:flex-start!important;gap:12px!important;width:auto!important;margin:0!important"><button type="button" class="crud-edit" style="appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;margin:0!important;padding:11px 18px!important;border:1.5px solid var(--study-btn-border,#a98534)!important;border-radius:18px!important;background:var(--study-btn-bg,linear-gradient(180deg,#303239 0%,#1b1d22 100%))!important;color:var(--study-btn-text,#f8f1df)!important;-webkit-text-fill-color:var(--study-btn-text,#f8f1df)!important;font-family:Lora,serif!important;font-weight:800!important;font-size:18px!important;line-height:1.1!important;text-shadow:var(--study-btn-shadow,0 1px 1px rgba(0,0,0,.55))!important;box-shadow:var(--study-btn-box-shadow,inset 0 1px 0 rgba(255,255,255,.08),0 4px 12px rgba(0,0,0,.28))!important;white-space:nowrap!important;cursor:pointer!important" onclick="editBiblicalCharacterV16433('+JSON.stringify(p.id).replace(/"/g,'&quot;')+')">Editar</button><button type="button" class="crud-delete" style="appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;margin:0!important;padding:11px 18px!important;border:1.5px solid #a85e61!important;border-radius:18px!important;background:var(--study-btn-bg,linear-gradient(180deg,#303239 0%,#1b1d22 100%))!important;color:var(--study-btn-text,#f8f1df)!important;-webkit-text-fill-color:var(--study-btn-text,#f8f1df)!important;font-family:Lora,serif!important;font-weight:800!important;font-size:18px!important;line-height:1.1!important;text-shadow:var(--study-btn-shadow,0 1px 1px rgba(0,0,0,.55))!important;box-shadow:var(--study-btn-box-shadow,inset 0 1px 0 rgba(255,255,255,.08),0 4px 12px rgba(0,0,0,.28))!important;white-space:nowrap!important;cursor:pointer!important" onclick="deleteBiblicalCharacterV16433('+JSON.stringify(p.id).replace(/"/g,'&quot;')+')">Eliminar</button></div></div>'+
  '<div class="biblical-detail-top-v2242"><h1>'+escapeBiblicalHtmlV2242(p.nombre)+'</h1>'+(p.contextoRapido?'<div class="biblical-quick-context-v2249">'+escapeBiblicalHtmlV2242(p.contextoRapido)+'</div>':'')+'<p>'+escapeBiblicalHtmlV2242(p.frase)+'</p><div class="biblical-detail-tags-v2242">'+tags.map(function(t){return '<span>'+escapeBiblicalHtmlV2242(t)+'</span>'}).join('')+'</div></div>'+
  biblicalDetailCardV2242('Quién fue',p.quienFue)+biblicalDetailCardV2242('Lo más importante de su vida',p.importante)+biblicalDetailCardV2242('Qué podemos aprender de él o ella',p.aprendizaje)+biblicalDetailCardV2242('Dónde aparece en la Biblia',p.apariciones)+(p.relacionCristo?biblicalDetailCardV2242('Relación con Cristo',p.relacionCristo):'')+biblicalListCardV2250('Cristo en esta historia',p.cristoClaves,'✝')+(p.tipoCristo?biblicalDetailCardV2242('Figura o vínculo profético',p.tipoCristo):'')+biblicalListCardV2250('Para seguir leyendo',p.lecturas,'')+biblicalDetailCardV2242('Cronología',p.cronologia)+(p.canon?biblicalDetailCardV2242('Fuente',p.canon):'')+biblicalMapCardV2247(p.mapa)+biblicalRelatedCardV2244(p.relacionados)+biblicalDetailCardV2242('Frase para recordarlo',p.frase);
  d.classList.remove('hidden'); window.scrollTo({top:0,behavior:'smooth'});
}
function biblicalDetailCardV2242(title,body){return '<section class="biblical-detail-card-v2242"><h2>'+escapeBiblicalHtmlV2242(title)+'</h2><p>'+escapeBiblicalHtmlV2242(body)+'</p></section>'}


function biblicalListCardV2250(title,items,icon){if(!items||!items.length)return '';return '<section class="biblical-detail-card-v2242 biblical-list-card-v2250"><h2>'+escapeBiblicalHtmlV2242(title)+'</h2><ul>'+items.map(function(item){return '<li><span aria-hidden="true">'+escapeBiblicalHtmlV2242(icon||'•')+'</span><span>'+escapeBiblicalHtmlV2242(item)+'</span></li>'}).join('')+'</ul></section>'}

function biblicalMapCardV2247(lines){if(!lines||!lines.length)return '';return '<section class="biblical-detail-card-v2242 biblical-map-card-v2247"><h2>Familia y relaciones</h2><div class="biblical-map-v2247 biblical-map-didactic-v2249" aria-label="Relaciones familiares o históricas explicadas">'+lines.map(function(line){var parts=String(line).split(' — ');return parts.length>1?'<div class="biblical-relation-row-v2249"><strong>'+escapeBiblicalHtmlV2242(parts.shift())+'</strong><span>'+escapeBiblicalHtmlV2242(parts.join(' — '))+'</span></div>':'<div class="biblical-relation-plain-v2249">'+escapeBiblicalHtmlV2242(line)+'</div>'}).join('')+'</div></section>'}

function biblicalRelatedCardV2244(ids){if(!ids||!ids.length)return '';const items=ids.map(function(id){const x=BIBLICAL_CHARACTERS_V2242.find(function(p){return p.id===id});return x?'<button type="button" class="biblical-related-v2244" onclick="openBiblicalCharacterDetailV2242('+JSON.stringify(x.id).replace(/"/g,'&quot;')+')">'+escapeBiblicalHtmlV2242(x.nombre)+' <span>›</span></button>':''}).filter(Boolean).join('');return items?'<section class="biblical-detail-card-v2242"><h2>Personajes relacionados</h2><div class="biblical-related-list-v2244">'+items+'</div></section>':''}
function backBiblicalCharactersV2242(){const d=document.getElementById('biblicalCharacterDetailV2242');if(d)d.classList.add('hidden');const h=document.getElementById('biblicalCharactersHomeV2242');if(h)h.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'})}


/* V2.252: datos migrados a JSON con carga offline mediante service worker. */


/* V1.64.34 · Añadir, editar, eliminar y papelera de Personajes */
function loadBiblicalCharactersCrudV16433(){try{return JSON.parse(localStorage.getItem(BIBLICAL_CHAR_STORAGE_V16433)||'null')}catch(e){return null}}
function saveBiblicalCharactersCrudV16433(){localStorage.setItem(BIBLICAL_CHAR_STORAGE_V16433,JSON.stringify({characters:BIBLICAL_CHARACTERS_V2242,trash:biblicalCharactersTrashV16433}))}
function biblicalCharacterUidV16433(){return 'char_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
function renderBiblicalCharactersToolsV16433(){const home=document.getElementById('biblicalCharactersHomeV2242');if(!home)return;let tools=document.getElementById('biblicalCharactersCrudToolsV16436');if(!tools){home.insertAdjacentHTML('afterbegin','<div id="biblicalCharactersCrudToolsV16436" class="module-crud-tools" style="display:grid!important;grid-template-columns:1fr 1fr!important;gap:14px!important;width:100%!important;margin:0 0 18px!important"><button type="button" class="crud-add section-main-dark-btn" style="appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;margin:0!important;padding:11px 20px!important;border:1.5px solid var(--study-btn-border,#a98534)!important;border-radius:18px!important;background:var(--study-btn-bg,linear-gradient(180deg,#303239 0%,#1b1d22 100%))!important;color:var(--study-btn-text,#f8f1df)!important;-webkit-text-fill-color:var(--study-btn-text,#f8f1df)!important;font-family:Lora,serif!important;font-weight:800!important;font-size:18px!important;line-height:1.1!important;text-shadow:var(--study-btn-shadow,0 1px 1px rgba(0,0,0,.55))!important;box-shadow:var(--study-btn-box-shadow,inset 0 1px 0 rgba(255,255,255,.08),0 4px 12px rgba(0,0,0,.28))!important;white-space:nowrap!important;cursor:pointer!important;width:100%!important" onclick="editBiblicalCharacterV16433()">＋ Añadir</button><button type="button" class="crud-trash section-main-dark-btn" style="appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;margin:0!important;padding:11px 20px!important;border:1.5px solid var(--study-btn-border,#a98534)!important;border-radius:18px!important;background:var(--study-btn-bg,linear-gradient(180deg,#303239 0%,#1b1d22 100%))!important;color:var(--study-btn-text,#f8f1df)!important;-webkit-text-fill-color:var(--study-btn-text,#f8f1df)!important;font-family:Lora,serif!important;font-weight:800!important;font-size:18px!important;line-height:1.1!important;text-shadow:var(--study-btn-shadow,0 1px 1px rgba(0,0,0,.55))!important;box-shadow:var(--study-btn-box-shadow,inset 0 1px 0 rgba(255,255,255,.08),0 4px 12px rgba(0,0,0,.28))!important;white-space:nowrap!important;cursor:pointer!important;width:100%!important" onclick="openBiblicalCharactersTrashV16433()">Papelera <span id="biblicalCharactersTrashCountV16436">0</span></button></div>');tools=document.getElementById('biblicalCharactersCrudToolsV16436')}const count=document.getElementById('biblicalCharactersTrashCountV16436');if(count)count.textContent=String(biblicalCharactersTrashV16433.length)}
function characterFormV16433(p){p=p||{};return '<label>Nombre<input id="crudCharNombre" value="'+escapeBiblicalHtmlV2242(p.nombre||'')+'"></label><label>Categoría<input id="crudCharCategoria" value="'+escapeBiblicalHtmlV2242(p.categoria||'Otros')+'"></label><label>Contexto rápido<textarea id="crudCharContexto">'+escapeBiblicalHtmlV2242(p.contextoRapido||'')+'</textarea></label><label>Quién fue<textarea id="crudCharQuien">'+escapeBiblicalHtmlV2242(p.quienFue||'')+'</textarea></label><label>Lo más importante de su vida<textarea id="crudCharImportante">'+escapeBiblicalHtmlV2242(p.importante||'')+'</textarea></label><label>Qué podemos aprender<textarea id="crudCharAprendizaje">'+escapeBiblicalHtmlV2242(p.aprendizaje||'')+'</textarea></label><label>Dónde aparece en la Biblia<textarea id="crudCharApariciones">'+escapeBiblicalHtmlV2242(p.apariciones||'')+'</textarea></label><label>Relación con Cristo<textarea id="crudCharCristo">'+escapeBiblicalHtmlV2242(p.relacionCristo||'')+'</textarea></label><label>Cronología<input id="crudCharCronologia" value="'+escapeBiblicalHtmlV2242(p.cronologia||'')+'"></label><label>Fuente<input id="crudCharCanon" value="'+escapeBiblicalHtmlV2242(p.canon||'')+'"></label><label>Frase para recordarlo<textarea id="crudCharFrase">'+escapeBiblicalHtmlV2242(p.frase||'')+'</textarea></label><label>Familia y relaciones (una por línea)<textarea id="crudCharMapa">'+escapeBiblicalHtmlV2242((p.mapa||[]).join('\n'))+'</textarea></label><label>Lecturas (una por línea)<textarea id="crudCharLecturas">'+escapeBiblicalHtmlV2242((p.lecturas||[]).join('\n'))+'</textarea></label>'}
function editBiblicalCharacterV16433(id){const p=id?BIBLICAL_CHARACTERS_V2242.find(x=>x.id===id):null;showCharacterCrudDialogV16433(p?'Editar personaje':'Añadir personaje',characterFormV16433(p),function(){const nombre=document.getElementById('crudCharNombre').value.trim();if(!nombre){alert('Escriba el nombre del personaje.');return}const obj=p||{id:biblicalCharacterUidV16433(),relacionados:[],cristoClaves:[],tipoCristo:''};obj.nombre=nombre;obj.categoria=document.getElementById('crudCharCategoria').value.trim()||'Otros';obj.contextoRapido=document.getElementById('crudCharContexto').value.trim();obj.quienFue=document.getElementById('crudCharQuien').value.trim();obj.importante=document.getElementById('crudCharImportante').value.trim();obj.aprendizaje=document.getElementById('crudCharAprendizaje').value.trim();obj.apariciones=document.getElementById('crudCharApariciones').value.trim();obj.relacionCristo=document.getElementById('crudCharCristo').value.trim();obj.cronologia=document.getElementById('crudCharCronologia').value.trim();obj.canon=document.getElementById('crudCharCanon').value.trim();obj.frase=document.getElementById('crudCharFrase').value.trim();obj.mapa=document.getElementById('crudCharMapa').value.split('\n').map(x=>x.trim()).filter(Boolean);obj.lecturas=document.getElementById('crudCharLecturas').value.split('\n').map(x=>x.trim()).filter(Boolean);if(!p)BIBLICAL_CHARACTERS_V2242.unshift(obj);if(!BIBLICAL_CHARACTER_CATEGORIES_V2242.includes(obj.categoria))BIBLICAL_CHARACTER_CATEGORIES_V2242.push(obj.categoria);saveBiblicalCharactersCrudV16433();closeCharacterCrudDialogV16433();renderBiblicalCharactersV2242();if(p)openBiblicalCharacterDetailV2242(p.id)})}
function deleteBiblicalCharacterV16433(id){const i=BIBLICAL_CHARACTERS_V2242.findIndex(x=>x.id===id);if(i<0||!confirm('¿Mover este personaje a la papelera?'))return;biblicalCharactersTrashV16433.unshift({...BIBLICAL_CHARACTERS_V2242[i],deletedAt:Date.now()});BIBLICAL_CHARACTERS_V2242.splice(i,1);saveBiblicalCharactersCrudV16433();backBiblicalCharactersV2242();renderBiblicalCharactersV2242()}
function openBiblicalCharactersTrashV16433(){const rows=biblicalCharactersTrashV16433.map(x=>'<div class="trash-row"><strong>'+escapeBiblicalHtmlV2242(x.nombre)+'</strong><div><button onclick="restoreBiblicalCharacterV16433('+JSON.stringify(x.id).replace(/"/g,'&quot;')+')">Restaurar</button><button class="danger" onclick="purgeBiblicalCharacterV16433('+JSON.stringify(x.id).replace(/"/g,'&quot;')+')">Eliminar definitivamente</button></div></div>').join('')||'<p class="trash-empty">La papelera está vacía.</p>';showCharacterCrudDialogV16433('Papelera de Personajes','<div class="trash-list">'+rows+'</div>'+(biblicalCharactersTrashV16433.length?'<button class="empty-trash" onclick="emptyBiblicalCharactersTrashV16433()">Vaciar papelera</button>':''),null,true)}
function restoreBiblicalCharacterV16433(id){const i=biblicalCharactersTrashV16433.findIndex(x=>x.id===id);if(i<0)return;const x=biblicalCharactersTrashV16433.splice(i,1)[0];delete x.deletedAt;BIBLICAL_CHARACTERS_V2242.unshift(x);saveBiblicalCharactersCrudV16433();openBiblicalCharactersTrashV16433();renderBiblicalCharactersV2242()}
function purgeBiblicalCharacterV16433(id){if(!confirm('Esta acción no se puede deshacer. ¿Eliminar definitivamente?'))return;biblicalCharactersTrashV16433=biblicalCharactersTrashV16433.filter(x=>x.id!==id);saveBiblicalCharactersCrudV16433();openBiblicalCharactersTrashV16433();renderBiblicalCharactersV2242()}
function emptyBiblicalCharactersTrashV16433(){if(!confirm('¿Vaciar toda la papelera? Esta acción no se puede deshacer.'))return;biblicalCharactersTrashV16433=[];saveBiblicalCharactersCrudV16433();openBiblicalCharactersTrashV16433();renderBiblicalCharactersV2242()}
function showCharacterCrudDialogV16433(title,body,onSave,viewOnly){closeCharacterCrudDialogV16433();const wrap=document.createElement('div');wrap.id='characterCrudOverlay';wrap.className='module-crud-overlay';wrap.innerHTML='<div class="module-crud-dialog"><div class="crud-dialog-head"><h2>'+escapeBiblicalHtmlV2242(title)+'</h2><button type="button" onclick="closeCharacterCrudDialogV16433()">✕</button></div><div class="crud-dialog-body">'+body+'</div>'+(viewOnly?'':'<div class="crud-dialog-foot"><button type="button" onclick="closeCharacterCrudDialogV16433()">Cancelar</button><button type="button" class="save">Guardar</button></div>')+'</div>';document.body.appendChild(wrap);if(!viewOnly)wrap.querySelector('.save').onclick=onSave}
function closeCharacterCrudDialogV16433(){document.getElementById('characterCrudOverlay')?.remove()}
