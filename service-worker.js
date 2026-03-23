self.addEventListener("install", event => {
  self.skipWaiting(); // 🔥 força ativação imediata
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim()); // 🔥 controla a página
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
