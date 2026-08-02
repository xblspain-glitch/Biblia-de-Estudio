const CACHE='biblia-estudio-v3.1.0';
const CORE=['./','./index.html','./styles.css?v=3.1.0','./theme-overrides.css?v=3.1.0','./app.js?v=3.1.0','./manifest.webmanifest?v=3.1.0','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./cabecera-1.png','./cabecera-2.png','./cabecera-3.png','./cabecera-4.png','./barra-amanecer.png','./barra-dia.png','./barra-atardecer.png','./barra-noche.png','./icon-seguir.jpg','./icon-libros.jpg','./icon-buscar.jpg','./icon-guardados.jpg','./icon-versiculo-dia.jpg','./index.json?v=3.1.0','./dictionary-data.js?v=3.1.0','./versiculos-del-dia.json?v=3.1.0','./separador_etiope_transparente_final.png?v=3.1.0','./Lora-Regular.woff2','./Lora-Bold.woff2','./Lora-Italic.woff2','./Lora-BoldItalic.woff2','./biblical-characters-v2244.css?v=3.1.0','./biblical-characters-v2244-v2835.js?v=3.1.0','./biblical-characters-v2261.json?v=3.1.0','./biblical-parables-v16436.css?v=3.1.0','./biblical-parables-v16436-v2835.js?v=3.1.0','./biblical-parables.json?v=3.1.0','./biblical-guides-v16436.css?v=3.1.0','./biblical-guides-v16436-v2835.js?v=3.1.0','./biblical-guides.json?v=3.1.0','./biblical-prophecies.json?v=3.1.0','./biblical-places.json?v=3.1.0',
];
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(
      keys
        .filter(key=>key.startsWith('biblia-estudio-v')&&key!==CACHE_NAME)
        .map(key=>caches.delete(key))
    );
    await self.clients.claim();

    const clients=await self.clients.matchAll({
      type:'window',
      includeUncontrolled:true
    });
    for(const client of clients){
      client.postMessage({
        type:'BIBLIA_UPDATE_READY',
        version:'3.1.0'
      });
    }
  })());
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
      if(response?.ok)(await caches.open(CACHE)).put(response.clone());
      return response;
    }).catch(()=>caches.match()));
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


self.addEventListener('message',event=>{
  if(event.data?.type==='BIBLIA_FORCE_ACTIVATE'){
    self.skipWaiting();
  }
});
