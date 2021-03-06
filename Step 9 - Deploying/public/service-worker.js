importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

workbox.setConfig({
  debug: true
});

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {url: '/', revision: '10'}
]);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        headers: {
          'Content-Type': ['text/css', 'application/javascript']
        }
      })
    ]
  })
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })  
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })  
);

workbox.routing.registerRoute(
  /^https:\/\/fortunecookieapi\.herokuapp\.com/,
  new workbox.strategies.NetworkFirst({
    cacheName: 'fortune-data',
  })  
);

self.addEventListener('push', function(e) {
  var body = 'Push message no payload';
  
  if (e.data) {
    try{
      body = JSON.parse(e.data.text());
      console.log('notification', body);
    } catch(e) {
      console.log('invalid message json');
    }
  } 

  e.waitUntil(
    self.registration.showNotification(body.title || '', body)
  );
});