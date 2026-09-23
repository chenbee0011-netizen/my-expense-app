self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.match('index.html').then((cache) => {
      return cache;
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
