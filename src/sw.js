importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js')

workbox.routing.registerRoute(
  /.*\.(png|jpg|jpeg|svg|gif)/,
  new workbox.strategies.CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
      })
    ]
  })
)

workbox.routing.registerRoute(
  new RegExp('https://jsonplaceholder\\.typicode\\.com/users'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'users',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50
      })
    ]
  })
)
