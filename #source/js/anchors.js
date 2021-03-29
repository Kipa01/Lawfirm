// ======== Плавное проявление всего контента на сайте при загрузке ========

$('body').hide().fadeIn(1200); 

// ======== /Плавное проявление всего контента на сайте при загрузке ========

// ======== Плавный скролл при нажати на "якорь" ========

var scrollLink = $('.scroll');
scrollLink.click(function(e) {
	e.preventDefault();
	$('body, html').animate({
		scrollTop: $(this.hash).offset().top - $('.header').height() // Если подключен fullpage, то надо удалить "- $('.header').height()"
	}, 1000);
});

// ======== /Плавный скролл при нажати на "якорь" ========

// ======== Изменение цвета при достижении соответсвующего блока ========

 $(window).scroll(function() {
 	var scrollBarLocation = $(this).scrollTop();
 	console.log(scrollBarLocation);
 	scrollLink.each(function() {
 		var sectionOffset = $(this.hash).offset().top;
 		if (sectionOffset <= scrollBarLocation) {
 			$(this).parent().addClass('active');
 			$(this).parent().siblings().removeClass('active');
 		}
 	})
 });

 // ======== /Изменение цвета при достижении соответсвующего блока ========
