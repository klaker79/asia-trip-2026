const CACHE_NAME = 'asia-trip-v3';
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
    './setup.html',
    './css/setup.css',
    './js/setup.js',
    './js/data/trip.js',
    './js/data/guides.js',
    './js/data/transport.js',
    './js/data/reference.js',
    './js/utils/helpers.js',
    './js/components/countdown.js',
    './js/components/flights.js',
    './js/components/hotels.js',
    './js/components/transport.js',
    './js/components/weather.js',
    './js/components/finance.js',
    './js/components/prepare.js',
    './js/components/explore.js',
    './icon-192.png',
    './icon-512.png'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', e => {
    // Network-first for API calls, cache-first for assets
    if (e.request.url.includes('api.frankfurter') || e.request.url.includes('api.open-meteo') || e.request.url.includes('openweathermap')) {
        e.respondWith(
            fetch(e.request)
                .then(res => {
                    const clone = res.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
                    return res;
                })
                .catch(() => caches.match(e.request))
        );
    } else {
        e.respondWith(
            caches.match(e.request).then(cached => cached || fetch(e.request))
        );
    }
});
