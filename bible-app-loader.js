const version='3.1.62';

function loadClassicScript(source){
  return new Promise((resolve,reject)=>{
    const script=document.createElement('script');
    script.src=source;
    script.onload=resolve;
    script.onerror=()=>reject(new Error('No se pudo cargar '+source));
    document.head.appendChild(script);
  });
}

try{
  window.__BIBLE_STORAGE_BOOTSTRAP_V1__=await window.BibleStorageV1.bootstrap();
  await loadClassicScript('app.js?v='+version);
  await loadClassicScript('progress-map.js?v='+version);
}catch(error){
  console.error('No se pudo iniciar el almacenamiento ampliado de la Biblia',error);
  const panel=document.createElement('div');
  panel.style.cssText='position:fixed;inset:0;z-index:999999;background:#111;color:#fff;padding:32px;font:18px/1.5 system-ui;display:flex;align-items:center;justify-content:center;text-align:center';
  panel.innerHTML='<div><h1 style="font-size:24px">No se han modificado sus datos</h1><p>No se pudo abrir el almacenamiento ampliado. Cierre las otras ventanas de la Biblia y vuelva a abrir la aplicación.</p><p style="opacity:.75">'+String(error&&error.message||error)+'</p></div>';
  document.body.appendChild(panel);
}

window.addEventListener('biblia-storage-error',event=>{
  const message=event?.detail?.message||'No se pudo guardar el último cambio';
  if(typeof window.toast==='function')window.toast(message);
  else console.error(message);
});
