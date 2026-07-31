const CACHE='biblia-estudio-v2.8.11';
const CORE=['./','./index.html','./styles.css?v=2.8.11','./theme-overrides.css?v=2.8.11','./app.js?v=2.8.11','./manifest.webmanifest?v=2.8.11','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./cabecera-1.png','./cabecera-2.png','./cabecera-3.png','./cabecera-4.png','./barra-amanecer.png','./barra-dia.png','./barra-atardecer.png','./barra-noche.png','./icon-seguir.jpg','./icon-libros.jpg','./icon-buscar.jpg','./icon-guardados.jpg','./icon-versiculo-dia.jpg','./index.json?v=2.8.11','./dictionary-data.js?v=2.8.11','./versiculos-del-dia.json?v=2.8.11','./separador_etiope_transparente_final.png?v=2.8.11','./Lora-Regular.woff2','./Lora-Bold.woff2','./Lora-Italic.woff2','./Lora-BoldItalic.woff2','./biblical-characters-v2244.css?v=2.8.11','./biblical-characters-v2244.js?v=2.8.11','./biblical-characters-v2261.json?v=2.8.11','./biblical-parables-v16436.css?v=2.8.11','./biblical-parables-v16436.js?v=2.8.11','./biblical-parables.json?v=2.8.11','./biblical-guides-v16436.css?v=2.8.11','./biblical-guides-v16436.js?v=2.8.11','./biblical-guides.json?v=2.8.11','./biblical-prophecies.json?v=2.8.11','./biblical-places.json?v=2.8.11'];
self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).catch(()=>{}));
});
self.addEventListener('activate',event=>{
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('biblia-estudio-')&&k!==CACHE).map(k=>caches.delete(k)))),
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

  // La navegación busca primero una versión nueva y conserva index.html como respaldo offline.
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(async response=>{
      if(response?.ok)(await caches.open(CACHE)).put('./index.html',response.clone());
      return response;
    }).catch(()=>caches.match('./index.html')));
    return;
  }

  // Los recursos versionados y estáticos se sirven directamente desde caché.
  event.respondWith((async()=>{
    const cached=await caches.match(event.request);
    if(cached)return cached;
    try{
      const response=await fetch(event.request);
      if(response?.ok)(await caches.open(CACHE)).put(event.request,response.clone());
      return response;
    }catch(_){
      return Response.error();
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
