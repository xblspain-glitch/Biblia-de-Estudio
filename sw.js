const CACHE='biblia-estudio-v2.0.2';
const CORE=['./','./index.html','./styles.css?v=2.0.2','./theme-overrides.css?v=2.0.2','./app.js?v=2.0.2','./manifest.webmanifest?v=2.0.2','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./cabecera-1.png','./cabecera-2.png','./cabecera-3.png','./cabecera-4.png','./barra-amanecer.png','./barra-dia.png','./barra-atardecer.png','./barra-noche.png','./icon-seguir.jpg','./icon-libros.jpg','./icon-buscar.jpg','./icon-guardados.jpg','./icon-versiculo-dia.jpg','./index.json?v=2.0.2','./titulos.json?v=2.0.2','./titles-data.js?v=2.0.2','./biblical-dictionary.json?v=2.0.2','./dictionary-data.js?v=2.0.2','./versiculos-del-dia.json?v=2.0.2','./separador_etiope_transparente_final.png?v=2.0.2','./Lora-Regular.woff2','./Lora-Bold.woff2','./Lora-Italic.woff2','./Lora-BoldItalic.woff2','./biblical-characters-v2244.css?v=2.0.2','./biblical-characters-v2244.js?v=2.0.2','./biblical-characters-v2261.json?v=261','./biblical-parables-v16436.css?v=2.0.2','./biblical-parables-v16436.js?v=2.0.2','./biblical-parables.json?v=2.0.2','./biblical-guides-v16436.css?v=2.0.2','./biblical-guides-v16436.js?v=2.0.2','./biblical-guides.json?v=2.0.2'];
self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).catch(()=>{}));
});
self.addEventListener('activate',event=>{
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),
    self.clients.claim()
  ]));
});

self.addEventListener('message',event=>{
  if(event.data?.type==='SKIP_WAITING')self.skipWaiting();
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==location.origin)return;
  event.respondWith((async()=>{
    try{
      const response=await fetch(event.request,{cache:'no-store'});
      if(response&&response.ok){
        const cache=await caches.open(CACHE);
        cache.put(event.request,response.clone());
      }
      return response;
    }catch(_){
      return (await caches.match(event.request)) || (await caches.match('./index.html'));
    }
  })());
});

self.addEventListener('notificationclick',event=>{
  event.notification.close();
  event.waitUntil((async()=>{
    const all=await clients.matchAll({type:'window',includeUncontrolled:true});
    for(const client of all){if('focus'in client){client.postMessage({type:'OPEN_DAILY_VERSE'});return client.focus()}}
    return clients.openWindow('./?dailyVerse=1');
  })());
});
