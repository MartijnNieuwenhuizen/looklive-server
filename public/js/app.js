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
			    'feed': function() {

			    	feed.show();

			    },
			    'detail/:id': function(id) {

			    	detailPage.show(id);

			    }
			});

		}
	};

	var api = {
		call: function(url) {

			return new Promise(function(resolve, reject) {

				var request = new XMLHttpRequest();

				request.onloadend = function(response) {

					var data = request.response;
					resolve(data);					

				}

				request.onerror = reject;

				request.open('GET', url, true);
				request.send();

			});

		}
	};

	var feed = {
		show: function() {

			var url = '/api/feed';

			api.call(url)
				.then(function(response) {

				var data = response;
				template.display(data);
				detailPage.getAllLinks();

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
			mainInner.innerHTML = _data;

		}
	}

	var detailPage = {
		getAllLinks: function() {

			var links = document.querySelectorAll('.feedlist__item a');

			Array.prototype.forEach.call(links, function(links) {

				var link = links;
				link.addEventListener('click', detailPage.createNewLink, false);

			});

		},
		createNewLink: function(e) {
			e.preventDefault();

			var id = this.dataset.id;
			window.location.hash = '#detail/' + id;

		},
		show: function(id) {
			
			var _id = id;
			// var url = '/api/product/' + _id; 
			var url = '/api/appearance/' + _id;

			api.call(url)
				.then(function(response) {

					var data = response;
					template.display(data);
					shopSection.show();




				})
				.catch(function() {

					var error = {
						title: "Sorry, Cannot connect"
					};
					template.display(error);

				});

		}

	}
	var shopSection = {
		show: function() {

			var product = document.querySelectorAll('.product');

			if ( product.length ) {
				product[0].classList.add('product-active');

				var productIndicator = document.querySelectorAll('.product-indicator');
				var uuid = product[0].attributes[1].nodeValue;
				productIndicator[0].setAttribute('data-uuid', uuid);
				productIndicator[0].classList.add('product-indicator-active');

				Array.prototype.forEach.call(productIndicator, function(productIndicator) {

					productIndicator.addEventListener('click', showRelatedContent, false);

					function showRelatedContent() {

						var id = this.attributes[2].nodeValue;
						
						var activeEl = document.querySelector('.product-indicator-active');
						activeEl.classList.remove('product-indicator-active');

						var activeProduct = document.querySelector('.product-active');
						activeProduct.classList.remove('product-active');

						this.classList.add('product-indicator-active');


						var p = document.querySelector(".product[data-uuid='" + id + "']");
						p.classList.add('product-active');


					}

				});	
			}

		}
	}






































	app.launcher();

})();