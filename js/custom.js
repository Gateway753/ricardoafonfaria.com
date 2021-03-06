$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: (target.offset().top - 65)
			}, "slow", "easeInOutQuart");
			return false;
		}
	}
});

$('.js-scroll-trigger').click(function() {
	$('.navbar-collapse').collapse('hide');
});

$('body').scrollspy({
	target: '#navigation',
	offset: $("#navigation").outerHeight()
});

window.onscroll = function() { fillprogressbars() };
function fillprogressbars() {
	if ($(window).scrollTop() > $('#skills').scrollTop()) {
		$(".progress-bar").css('-webkit-transition', 'width 2.5s ease-in-out');
		$(".progress-bar").css('transition', 'width 2.5s ease-in-out');
		$("#bootstrap").css('width', '50%');
		$("#css").css('width', '50%');
		$("#html").css('width', '50%');
		$("#ai").css('width', '75%');
		$("#java").css('width', '40%');
		$("#js").css('width', '20%');
		$("#lr").css('width', '50%');
		$("#ps").css('width', '50%');
		$("#php").css('width', '20%');
		$("#swift").css('width', '20%');
		$("#wordpress").css('width', '20%');
	}
	else {
		$(".progress-bar").css('-webkit-transition', 'width 0s ease-in-out');
		$(".progress-bar").css('transition', 'width 0s ease-in-out');
		$("#bootstrap").css('width', '0%');
		$("#css").css('width', '0%');
		$("#html").css('width', '0%');
		$("#ai").css('width', '0%');
		$("#java").css('width', '0%');
		$("#js").css('width', '0%');
		$("#lr").css('width', '0%');
		$("#ps").css('width', '0%');
		$("#php").css('width', '0%');
		$("#swift").css('width', '0%');
		$("#wordpress").css('width', '0%');
	}
}