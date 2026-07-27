const CACHE='biblia-estudio-v1.9';
const CORE=['./','./index.html','./styles.css?v=1.9','./app.js?v=1.9','./manifest.webmanifest?v=1.9','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./portada-cabecera.jpg','./index.json?v=1.9','./titulos.json?v=1.9'];
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
