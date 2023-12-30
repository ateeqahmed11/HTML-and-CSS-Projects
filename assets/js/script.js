(function($){
	'use script';

    $('.scroll-area').click(function(){
        $('html').animate({
          'scrollTop' : 0,
        },700);
        return false;
  });
  $(window).on('scroll',function(){
        var a = $(window).scrollTop();
        if(a>400){
          $('.scroll-area').slideDown(300);
      }else{
          $('.scroll-area').slideUp(200);
      }
  });

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
  $(".client-review-full").owlCarousel({
    loop:true,
    center:false,
    items:2,
    autoplay: true,
    mouseDrag:false,
    nav:true,
    navText:['<span class="client-review-arrow"><i class="fas fa-chevron-left"></i></span>','<span class="client-review-arrow"><i class="fas fa-chevron-right"></i></span>'],
    smartSpeed:700,
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        867:{
            items:2
        }
    }
});

}(jQuery))