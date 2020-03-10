importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

workbox.setConfig({
  debug: true
});

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// workbox.precaching.precacheAndRoute([
//   {url: '/', revision: '5x'}
// ]);
workbox.routing.registerRoute(
  // Homepage cache, this strategy makes sure we are getting new tokens
  '/',
  new workbox.strategies.NetworkFirst({
    cacheName: 'homepage-cache'
  })
);

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

self.addEventListener('push', function(event) {
  const promiseChain = self.registration.showNotification('Hello, World.');
  event.waitUntil(promiseChain);
});