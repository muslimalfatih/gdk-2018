const staticCachesName = 'static-v11'
const fileToCaches = [
  '/index.html',
  '/calculator/index.html',
  '/calculator/app.css',
  '/calculator/app.js',
  '/images/logo-MF.png',
  '/images/muslimalfatih-af.jpg',
  '/mapbox/index.html',
  '/mapbox/app.css'
]

// Install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCachesName).then((cache) => {
      return cache.addAll(fileToCaches)
    })
  )
})

self.addEventListener('activate', () => {
  console.log('Active')
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if(response) {
          return response;
        }
        return fetch(event.request).then(response => {
          return caches.open(staticCachesName).then(cache => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        });
      })
      .catch(error => {
        console.log(error)
      })
  )
})