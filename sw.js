const CACHE='biblia-estudio-v3.1.137';
const CORE=[".\/bible-storage-idb.js", ".\/bible-app-loader.js", "./1_corintios.json", "./1_cronicas.json", "./1_juan.json", "./1_pedro.json", "./1_reyes.json", "./1_samuel.json", "./1_tesalonicenses.json", "./1_timoteo.json", "./2_corintios.json", "./2_cronicas.json", "./2_juan.json", "./2_pedro.json", "./2_reyes.json", "./2_samuel.json", "./2_tesalonicenses.json", "./2_timoteo.json", "./3_juan.json", "./Lora-Bold.woff2", "./Lora-BoldItalic.woff2", "./Lora-Italic.woff2", "./Lora-Regular.woff2", "./abdias.json", "./amos.json", "./apocalipsis.json", "./app-icon.png", "./app.js", "./apple-touch-icon.png", "./barra-amanecer.png", "./barra-atardecer.png", "./barra-dia.png", "./barra-noche.png", "./biblical-characters-v2244-v2835.js", "./biblical-characters-v2244.css", "./biblical-characters-v2261.json", "./biblical-festivities.json", "./biblical-guides-v16436-v2835.js", "./biblical-guides-v16436.css", "./biblical-guides.json", "./biblical-parables-v16436-v2835.js", "./biblical-parables-v16436.css", "./biblical-parables.json", "./biblical-places.json", "./biblical-prophecies.json", "./cabecera-1.png", "./cabecera-2.png", "./cabecera-3.png", "./cabecera-4.png", "./cantares.json", "./colosenses.json", "./daniel.json", "./deuteronomio.json", "./dictionary-data.js", "./eclesiastes.json", "./efesios.json", "./esdras.json", "./ester.json", "./exodo.json", "./ezequiel.json", "./filemon.json", "./filipenses.json", "./galatas.json", "./genesis.json", "./habacuc.json", "./hageo.json", "./hebreos.json", "./hechos.json", "./icon-192.png", "./icon-512.png", "./icon-buscar.jpg", "./icon-guardados.jpg", "./icon-libros.jpg", "./icon-seguir.jpg", "./icon-versiculo-dia.jpg", "./index.html", "./index.json", "./isaias.json", "./jeremias.json", "./job.json", "./joel.json", "./jonas.json", "./josue.json", "./juan.json", "./judas.json", "./jueces.json", "./lamentaciones.json", "./levitico.json", "./lucas.json", "./malaquias.json", "./manifest.webmanifest", "./marcos.json", "./mateo.json", "./miqueas.json", "./nahum.json", "./nehemias.json", "./numeros.json", "./oseas.json", "./progress-map.css", "./progress-map.js", "./proverbios.json", "./romanos.json", "./rut.json", "./salmos.json", "./santiago.json", "./separador_etiope_transparente_final.png", "./sofonias.json", "./styles.css", "./theme-overrides.css", "./tito.json", "./versiculos-del-dia.json", "./zacarias.json"];

CORE.push('./bible-storage-idb-safe-v3119.js','./bible-app-loader-safe-v3119.js');

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    for (const url of CORE) {
      try {
        const response = await fetch(url, { cache: 'reload' });
        if (!response.ok) throw new Error(String(response.status));
        await cache.put(url, response);
      } catch (error) {
        console.error('No se pudo precargar', url, error);
        throw error;
      }
    }
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(key => key.startsWith('biblia-estudio-') && key !== CACHE)
        .map(key => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    // Mantiene visible la versión instalada mientras una nueva queda esperando.
    // Así el usuario ve el aviso y decide entre «Actualizar ahora» o «Más tarde».
    event.respondWith((async () => {
      const cachedIndex = await caches.match('./index.html', { ignoreSearch: true });
      if (cachedIndex) return cachedIndex;
      try {
        const network = await fetch(event.request, { cache: 'no-store' });
        if (network?.ok) {
          (await caches.open(CACHE)).put('./index.html', network.clone());
          return network;
        }
      } catch (_) {}
      return Response.error();
    })());
    return;
  }

  event.respondWith((async () => {
    // The app requests JSON files with ?v=..., so ignore query strings.
    const cached = await caches.match(event.request, { ignoreSearch: true });
    if (cached) return cached;

    try {
      const network = await fetch(event.request);
      if (network?.ok) {
        await (await caches.open(CACHE)).put(event.request, network.clone());
      }
      return network;
    } catch (_) {
      return Response.error();
    }
  })());
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const all = await clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of all) {
      if ('focus' in client) {
        client.postMessage({ type: 'OPEN_DAILY_VERSE' });
        return client.focus();
      }
    }
    return clients.openWindow('./?dailyVerse=1');
  })());
});
