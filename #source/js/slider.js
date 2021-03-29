// ======== Стандартная настройка слайдера ========

$('.testimonial-slider').slick({
    slidesToShow: 3,
    swipeToSlide: true,
    dots: true,
    speed: 1000,
    arrows: false,
    responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 1,
          centerMode: true
	      }
	    },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
	  ]
});

// ======== /Стандартная настройка слайдера ========