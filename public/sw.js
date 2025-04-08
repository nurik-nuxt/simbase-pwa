const CACHE_NAME = 'simbase-v1';
const ASSETS_CACHE = 'assets-v1';

// Ресурсы, которые нужно кэшировать сразу
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  // Добавьте другие важные ресурсы вашего приложения
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      // Кэширование основных ресурсов
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(PRECACHE_URLS);
      }),
      // Кэширование ассетов
      caches.open(ASSETS_CACHE).then((cache) => {
        // Здесь можно добавить дополнительные ассеты
      })
    ]).then(() => {
      return self.skipWaiting();
    })
  );
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      // Удаление старых кэшей
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName.startsWith('simbase-') && cacheName !== CACHE_NAME;
            })
            .map((cacheName) => {
              return caches.delete(cacheName);
            })
        );
      }),
      // Начать контролировать все открытые вкладки
      self.clients.claim()
    ])
  );
});

// Обработка запросов
self.addEventListener('fetch', (event) => {
  // Пропускаем не GET запросы
  if (event.request.method !== 'GET') return;

  // Пропускаем запросы к API
  if (event.request.url.includes('/api/')) return;

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          // Возвращаем кэшированный ответ
          return response;
        }

        // Делаем сетевой запрос
        return fetch(event.request.clone())
          .then((response) => {
            // Проверяем валидность ответа
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Кэшируем ответ
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Если запрос не удался и это запрос на страницу,
            // возвращаем офлайн-страницу
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            return null;
          });
      })
  );
});

// Обработка push-уведомлений
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        url: data.url
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Обработка клика по уведомлению
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.notification.data.url) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
}); 