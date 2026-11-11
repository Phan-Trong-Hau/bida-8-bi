// Service worker: trang và file của game luôn lấy bản mới nhất từ mạng (có bản lưu dự phòng khi mất mạng);
// thư viện từ CDN và font thì lấy từ bộ nhớ đệm cho nhanh.
const CACHE = 'bida8-v6';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req, { cache: 'no-cache' })
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
        .catch(() => caches.match(req).then(m => m || caches.match('./index.html')))
    );
  } else if (/(^|\.)(cdnjs\.cloudflare\.com|unpkg\.com|fonts\.googleapis\.com|fonts\.gstatic\.com)$/.test(url.hostname)) {
    e.respondWith(
      caches.match(req).then(m => m || fetch(req).then(res => {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
      }))
    );
  }
});
