self.addEventListener('push', event => {
  console.log('[Service Worker] push recieved');
  const payload = JSON.parse(event.data.text());
  console.log('Payload: ',payload);

  self.pushUrl = payload.url;
  console.log('payload url: ',payload.url);
  console.log('push url: ', self.pushUrl);
  
  

  const title = payload.title;
  const options = payload.options;
  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] notification clicked');
  event.notification.close();

  event.waitUntil( clients.openWindow(self.pushUrl) );
})