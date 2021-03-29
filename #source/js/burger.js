$('.menu-header__burger').click(function(event) {
	$(this).toggleClass('active');
	if ($(this).hasClass('active')) {
		$('.menu-header__menu').slideDown(300);
	} else {
		$('.menu-header__menu').slideUp(300);
	}
	$('body').toggleClass('lock');
});