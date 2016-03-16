// This file is written in ES6 for learning purposes.
// because the rest of the app is written in ES5, this isn't consistent.

// init
const currentCacheName = "look-live-v4";

// Install
this.addEventListener('install', event => {

	// Cache
	event.waitUntil(
		caches.open('look-live-v4') // This means he streams the content into the file, so it's nog blocking
		.then(cache => {
			return cache.addAll([
				'./styles/style.min.css',
				// './js/app.js',
				'./img/header-320.jpg'
			]);
		})
	);

});

// Fetch
this.addEventListener('fetch', event => event.respondWith(
	caches.match(event.request).then(response => {
		return response || fetch(event.request).then(response => {
			return caches.open('look-live-v1').then(cache => {
				if ( event.request.method != "POST") {
					cache.put(event.request, response.clone())
				}
				return response;
			});
		});
	})
));

this.addEventListener('fetch', event => {
	event.respondWith(
		fetch(event.request).catch(fallback)
	);
	function fallback() {
		if ( isGetHtmlRequest(event.request) ) {
			return caches.match('/fallback.html');
		}
	};
});
function isGetHtmlRequest(request) {
	return (
		request.method === 'GET' && 
		request.headers.get('Accept').contains('text/html')
	);
};

// clear older cache in SW
this.addEventListener('activate', event => {

	event.waitUntil(

		caches.keys()
		.then(cacheNames => {

			return Promise.all(
				cacheNames
				.filter(cacheName => (cacheName.startsWith('look-live-')))
				.filter(cacheName => (cacheName !== currentCacheName))
				.map(cacheName => caches.delete(cacheName))
			)

		})

	);

});









