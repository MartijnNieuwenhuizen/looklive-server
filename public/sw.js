// Install
this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('look-live-v1').then(function(cache) {
        	// cache the html, css and js
            return cache.addAll([
                './',
                './styles/style.min.css',
                './js/app.js',
            ]);
        })
    )
});

this.addEventListener('message', function(event) {
		
	caches.open('look-live-v2').then(function(cache) {

		var data = JSON.parse(event.data);
        return cache.addAll(data);

	})

});