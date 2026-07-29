
(()=>{
let parables=[];
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function plainTitle(t){return String(t||'Parábola').replace(/[\p{Extended_Pictographic}\uFE0F]/gu,'').replace(/\s+/g,' ').trim();}
function stripCodes(s){return String(s||'').replace(/\[\/?desplegable[^\]]*\]/gi,' ').replace(/\s+/g,' ').trim();}
function formatText(text){
 let src=String(text||'').replace(/\r/g,'');
 src=src.replace(/\[desplegable titulo="([^"]+)"\]([\s\S]*?)\[\/desplegable\]/gi,(m,title,body)=>`@@DETAILS:${title}@@${body}@@ENDDETAILS@@`);
 const chunks=src.split(/(@@DETAILS:[\s\S]*?@@ENDDETAILS@@)/g).filter(Boolean);
 return chunks.map(chunk=>{
   const dm=chunk.match(/^@@DETAILS:([\s\S]*?)@@([\s\S]*?)@@ENDDETAILS@@$/);
   if(dm)return `<details class="parable-scripture" open><summary>${esc(dm[1].trim())}</summary><div class="parable-scripture-body">${esc(dm[2].trim())}</div></details>`;
   return chunk.split(/\n{2,}/).map(p=>{
     p=p.trim(); if(!p)return'';
     const isHead=/^(🕊️\s*)?(✝️\s*)?(EXPLICACIÓN|FRASE RESUMEN|ENSEÑANZA|SIGNIFICADO)/i.test(p);
     return `<p${isHead?' class="parable-section-title"':''}>${esc(p).replace(/\n/g,'<br>')}</p>`;
   }).join('');
 }).join('');
}
window.openBiblicalParables=async function(){
 const screen=$('#biblicalParablesScreen'); if(!screen)return;
 document.querySelector('.app-shell')?.classList.add('hidden');
 screen.classList.remove('hidden');
 if(!parables.length){try{parables=await fetch('./biblical-parables.json?v=1.64.31',{cache:'no-store'}).then(r=>r.json())}catch(e){parables=[]}}
 $('#biblicalParablesHome').classList.remove('hidden'); $('#biblicalParableDetail').classList.add('hidden');
 renderBiblicalParables(); window.scrollTo(0,0);
}
window.closeBiblicalParables=function(){
 $('#biblicalParablesScreen')?.classList.add('hidden'); document.querySelector('.app-shell')?.classList.remove('hidden'); window.scrollTo(0,0);
}
window.renderBiblicalParables=function(){
 const q=($('#biblicalParablesSearch')?.value||'').trim().toLowerCase();
 const list=parables.filter(p=>(plainTitle(p.title)+' '+stripCodes(p.content)).toLowerCase().includes(q));
 $('#biblicalParablesCount').textContent=`${list.length} parábolas`;
 $('#biblicalParablesList').innerHTML=list.map((p,i)=>`<button class="biblical-parable-card" type="button" data-id="${esc(p.id)}"><strong>${esc(plainTitle(p.title))}</strong><span>Pulse para leer la parábola y su explicación</span></button>`).join('') || '<div class="biblical-parable-card"><strong>No se encontraron resultados</strong></div>';
 document.querySelectorAll('.biblical-parable-card[data-id]').forEach(b=>b.onclick=()=>openBiblicalParable(b.dataset.id));
}
window.openBiblicalParable=function(id){
 const p=parables.find(x=>x.id===id); if(!p)return;
 $('#biblicalParablesHome').classList.add('hidden'); const d=$('#biblicalParableDetail'); d.classList.remove('hidden');
 d.innerHTML=`<div class="parable-detail-top"><button type="button" id="parableBackBtn">← Parábolas</button></div><h1>${esc(plainTitle(p.title))}</h1><div class="parable-content">${formatText(p.content)}</div>`;
 $('#parableBackBtn').onclick=()=>{d.classList.add('hidden');$('#biblicalParablesHome').classList.remove('hidden');window.scrollTo(0,0)}; window.scrollTo(0,0);
}
})();
