// Change product section on detail page
(function() {	
	'use strict';
	
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
	 
})();


(function() {	
	'use strict';
	
	console.log("Foo");
	 
})();