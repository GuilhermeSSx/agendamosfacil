self.addEventListener('install', event => {
    // Força a ativação imediata do Service Worker após a instalação
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    // Toma controle das páginas imediatamente
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});