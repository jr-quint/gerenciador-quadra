self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('gerenciador-quadra-v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/assets/css/bootstrap-icons.css',
        '/assets/css/bootstrap.min.css',
        '/assets/css/main.css',
        '/assets/icons/fonts/bootstrap-icons.woff',
        '/assets/icons/fonts/bootstrap-icons.woff2',
        '/assets/icons/img/favicon.png',
        '/assets/icons/img/icon-192x192.png',
        '/assets/icons/img/icon-512x512.png',
        '/assets/js/app.js',
        '/assets/js/bootstrap.bundle.min.js',
        '/assets/js/config.js',
        '/assets/js/Database.js',
        '/assets/js/fila.js',
        '/assets/js/grupo.js',
        '/assets/js/jogador.js',
        '/assets/js/notificacao.js',
        '/assets/js/quadra.js',
        '/assets/js/time.js',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Se encontrado no cache, retorna
      if (cachedResponse) {
        return cachedResponse;
      }
      // Caso contrário, faz a requisição normalmente
      return fetch(event.request);
    })
  );
});
