// const cacheName = 'regBadminton';
// self.addEventListener("install", installEvent => {
//   installEvent.waitUntil(
//     caches.open(cacheName).then(cache => {
//       cache.addAll([
//         "/",
//         "/index.html",
//         "/Course.js",
//         "/script.js",
//         "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
//         "/styles.css"
//       ]);
//     })
//   );
// });

// self.addEventListener("fetch", fetchEvent => {
//   fetchEvent.respondWith(
//     caches.match(fetchEvent.request).then(res => {
//       return res || fetch(fetchEvent.request);
//     })
//   );
// });

self.addEventListener('push', event => {
  console.log('[Service Worker] push recieved');
  const notification = JSON.parse(event.data.text());
  console.log('Notification: ',notification);
  const title = notification.title;
  console.log('Title: ',notification.title);
  console.log('Options: ',notification.options);
  const options = JSON.parse(notification.options);

  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] notification clicked');
  event.notification.close();
})