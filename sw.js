// 保持 PWA 註冊需求，但不做任何強制快取攔截，避免卡住畫面
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});
