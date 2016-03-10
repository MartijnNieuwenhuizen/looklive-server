// Change product section on detail page
(function() {	
	'use strict';

	var mainInner = document.querySelector('main');
	
	var app = {
		launcher: function() {

			router.watch();

		}
	};

	var router = {
		watch: function() {

			routie({
				'': function() {

			    	window.location.hash = '#feed';

			    },
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
				template.display(data);

			})
			.catch(function() {

				var error = {
					title: "Sorry, Cannot connect"
				};
				template.display(error);

			});

		}
	}

	var template = {
		display: function(data) {

			var _data = data;
			console.log(_data);
			mainInner.innerHTML = _data;

		}
	}


	app.launcher();

})();