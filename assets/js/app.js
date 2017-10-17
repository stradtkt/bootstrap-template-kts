$(document).ready(function() {
	var $window = $(window);
	$('section[data-type="background"]').each(function() {
		var $bgobj = $(this);
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coords = '50% ' + yPos + 'px';
			$bgobj.css({backgroundPosition: coords});
		});
	});
});
$(document).ready(function() {
	var $window = $(window);
	$('header[data-type="background"]').each(function() {
		var $bgobj = $(this);
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coords = '50% ' + yPos + 'px';
			$bgobj.css({backgroundPosition: coords});
		});
	});
});
$(document).ready(function() {
$('a.btn-1').click(function () {
$('#myModal1').modal('show');
});
$('a.btn-2').click(function () {
$('#myModal2').modal('show');
});
$('a.btn-3').click(function () {
$('#myModal3').modal('show');
});
$('a[href="#"]').click(function() {
    $('html,body').animate({
        scrollTop: $('section[id="header-section"]').offset().top},
        'slow');
	});
$('a[href="#first-section"]').click(function() {
    $('html,body').animate({
        scrollTop: $('section[id="first-section"]').offset().top},
        'slow');
	});
$('a[href="#third-section"]').click(function() {
	$('html,body').animate({
        scrollTop: $('section[id="third-section"]').offset().top},
        'slow');
	});
$('a[href="#fifth-section"]').click(function() {
	$('html,body').animate({
        scrollTop: $('section[id="fifth-section"]').offset().top},
        'slow');
	});
$('a[href="#seventh-section"]').click(function() {
	$('html,body').animate({
		scrollTop: $('section[id="seventh-section"]').offset().top},
		'slow');
});
});
