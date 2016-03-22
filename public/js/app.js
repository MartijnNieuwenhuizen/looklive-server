// Change product section on detail page
(function() {	
	'use strict';

	var HTMLElements = {
		main: document.querySelector('main')
	};
	
	var app = {
		launcher: function() {

			font.check();
			router.watch();

		}
	};

	var router = {
		watch: function() {

			routie({
				'feed': function(id) {

			    	window.location.hash = 'feed/amount=10'

			    },
			    'feed/:id': function(id) {

			    	feed.show(id);

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
		show: function(id) {

			var url = '/api/feed?' + id;

			api.call(url)
				.then(function(response) {

				var data = response;
				template.display(data);
				detailPage.getAllLinks();
				feed.loadMore(id);


			})
			.catch(function() {

				var error = {
					title: "Error",
					message: "Sorry, We cannot get the right content for you, please try again later"
				};
				template.render(error);

			});

		},
		loadMore: function(id) {

			var query = id;
			var amount = query.slice(7);

			var loadMoreButton = document.querySelector('.load-more');
			loadMoreButton.onclick = function() {

				var newAmount = Number(amount) + 10;

				window.location.hash = 'feed/amount=' + newAmount;

				event.preventDefault();

			}

		}
	}

	var template = {
		display: function(data) {

			var _data = data;
			HTMLElements.main.innerHTML = _data;

		},
		render: function(data, htmlTemplate) {
			
			var _data = data;
			var template = htmlTemplate;

			var htmlHeader = document.createElement('header');
			var htmlTitle = document.createElement('h1');
			var htmlMessage = document.createElement('p');

			if ( _data.title ) {
				htmlTitle.innerHTML = _data.title;
			}
			if ( _data.message ) {
				htmlMessage.innerHTML = _data.message;
			}

			htmlHeader.appendChild(htmlTitle);
			htmlHeader.appendChild(htmlMessage);

			HTMLElements.main.innerHTML = ""; // For development purposes
			HTMLElements.main.appendChild(htmlHeader);  

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
	};
	// Original code by crocodillon.com -> http://crocodillon.com/blog/non-blocking-web-fonts-using-localstorage
	var font = {
		check: function() {
			// check if your browser supports the nessasary JS
			if ( ('querySelector' in document) && ('localStorage' in window)  && ('addEventListener' in window) ) {
				
				var key = 'fonts';

				var cache = window.localStorage.getItem(key);

				if (cache) {
					font.getFont(cache, key);
				}
				if (!cache) {
					window.addEventListener('load', font.setFont, false);
				}

			}
		},
		getFont: function(cache, key) {

			var code = 'e90ba95faca6e63b5516ed839f4514ec';
			var key = 'fonts';
	    	var _cache = JSON.parse(cache);

	      	font.insertFont(_cache.value);

		},
		setFont: function() {
			
			var key = 'fonts';
	  		
	  		var request = new XMLHttpRequest();
	        var	response;
	    	
	    	request.open('GET', '../font/fonts.e76d5d86b650cf0dc199b94edba280e0.woff.json', true);
	    	request.onload = function() {

      			response = JSON.parse(this.response);
      			font.insertFont(response.value);
      			window.localStorage.setItem(key, this.response);

	    	};

		    request.send();

		},
		insertFont: function(value) {
			
		  	var style = document.createElement('style');
		  	style.innerHTML = value;
		  	document.head.appendChild(style);
		}
	}

	app.launcher();

})();