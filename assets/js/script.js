(function($){
	'use script';

    var mixer = mixitup('.portfolio-full');
	var mixer = mixitup('.portF', {
		selectors: {
			target: '.blog-item'
		},
		animation: {
			duration: 100
		}
	});

    $('.portfolio-item a.zoom').magnificPopup({
        type: 'image',
         gallery: {
          enabled: true
        }
  });

}(jQuery))