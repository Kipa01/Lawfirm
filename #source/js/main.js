$(document).ready(function() {
	//@prepros-append burger.js
	//@prepros-append slick.min.js
	//@prepros-append slider.js
	//@prepros-append anchors.js
	
	AOS.init({
	  // Global settings:
	  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	  initClassName: 'aos-init', // class applied after initialization
	  animatedClassName: 'aos-animate', // class applied on animation
	  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


	  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	  offset: 120, // offset (in px) from the original trigger point
	  delay: 0, // values from 0 to 3000, with step 50ms
	  duration: 800, // values from 0 to 3000, with step 50ms
	  easing: 'ease', // default easing for AOS animations
	  once: true, // whether animation should happen only once - while scrolling down
	  mirror: false, // whether elements should animate out while scrolling past them
	  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

	});

	// $('.menu-header__link').click(function() {
	// 	$(this).parent().addClass('active');
	// 	$(this).parent().siblings().removeClass('active');
	// });

	// if ($('.menu-header__list').closest('body-main')) {
	// 	$('.menu-header__list li:nth-child(1)').addClass('active');
	// 	$('.menu-header__list li:nth-child(1)').siblings().removeClass('active');
	// }
	// if ($('.menu-header__list').closest('body-about')) {
	// 	$('.menu-header__list li:nth-child(2)').addClass('active');
	// 	$('.menu-header__list li:nth-child(2)').siblings().removeClass('active');
	// }

	// ======== Попап с видео ========

	$('.intro__play').click(function () {
		$('.video').toggleClass('active');
		$('body').addClass('lock');
	})
	$('.why__play').click(function () {
		$('.video').toggleClass('active');
		$('body').addClass('lock');
	})
	$('.video__close').click(function () {
		$('.video').toggleClass('active');
		$('body').removeClass('lock');
		var video = document.querySelector("video");
		video.pause();
		video.currentTime = 0;
	})

	// ======== /Попап с видео ========

	// ======== Анимация увеличения числа ========
	
	var target_block = $(".stat-why"); // ищем блок, в котором будут элементы анимации 
	var blockStatus = true;
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('.header').addClass('scroll');
		} else {
			$('.header').removeClass('scroll');
		}
		var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
		if(scrollEvent && blockStatus) {
			blockStatus = false; // запрещаем повторное выполнение функции до следующей перезагрузки страницы.
			$('.stat-why__current').each(function () { // сама анимация
				$(this).prop('Counter',0).animate({
				  	Counter: $(this).attr('data-val')
				}, {
				  	duration: 3500,
				  	easing: 'swing',
				  	step: function (now) {
					 	$(this).text(Math.ceil(now));
					}
				});
			});
		};
	});

	// ======== /Анимация увеличения числа ========

});