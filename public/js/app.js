// Change product section on detail page
(function() {	
	'use strict';
	
	var app = {
		launcher: function() {

			router.watch();

		}
	};

	var router = {
		watch: function() {

			routie({
			    'feed': function() {

			    	feed.show();

			    },
			    'detail/:id': function(id) {

			    	// use id in api call

			    }
			});

		}
	};

	var api = {
		call: function() {

			return new Promise(function(resolve, reject) {

				var request = new XMLHttpRequest();

				request.onloadend = function(response) {

					var data = request.response;
					resolve(data);					

				}

				request.onerror = reject;

				request.open('GET', '/api/feed', true);
				request.send();

			});

		}
	};

	var feed = {
		show: function() {

			api.call()
				.then(function(response) {

				var data = response;
				template.show(data);

			});

			.catch(function() {

				var error = {
					title: "Sorry, Cannot connect"
				};

				mainInner.innerHTML = error;

			});

		}
	}

	var template = {
		display: function(data) {

			var _data = data;
			mainInner.innerHTML = _data;

		}
	}


	app.launcher();

})();