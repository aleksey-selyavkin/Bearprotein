$(document).ready(function(){

		// show/hide sub-menu
	// show/hide catalog
	$('#menu-catalog').click(function () {
		$(this).css({'backgroundColor': '#fff',
			'color': '#1f8bcc',
			'textAlign': 'center',
			'padding': '0'});
		$('.sub-menu-catalog').show();
		$('#menu-goal, #menu-brands').css({'backgroundColor': '',
			'color': '',
			'textAlign': '',
			'padding': ''});
		$('.sub-menu-goal, .sub-menu-brands').hide();
		return false;
	});
	$('body').click(function () {
		$('#menu-catalog').css({'backgroundColor': '',
			'color': '',
			'textAlign': '',
			'padding': ''});
		$('.sub-menu-catalog').hide();
	});
	// show/hide goal
	$('#menu-goal').click(function () {
		$(this).css({'backgroundColor': '#fff',
			'color': '#1f8bcc',
			'textAlign': 'center',
			'padding': '0'});
		$('.sub-menu-goal').show();
		$('#menu-catalog, #menu-brands').css({'backgroundColor': '',
			'color': '',
			'textAlign': '',
			'padding': ''});
		$('.sub-menu-catalog, .sub-menu-brands').hide();
		return false;
	});
	$('body').click(function () {
		$('#menu-goal').css({'backgroundColor': '',
			'color': '',
			'textAlign': '',
			'padding': ''});
		$('.sub-menu-goal').hide();
	});
	// show/hide brands
	$('#menu-brands').click(function () {
		$(this).css({'backgroundColor': '#fff',
			'color': '#1f8bcc',
			'textAlign': 'center',
			'padding': '0'});
		$('.sub-menu-brands').show();
		$('#menu-catalog, #menu-goal').css({'backgroundColor': '',
			'color': '',
			'textAlign': '',
			'padding': ''});
		$('.sub-menu-catalog, .sub-menu-goal').hide();
		return false;
	});
	$('body').click(function () {
		$('#menu-brands').css({'backgroundColor': '',
			'color': '',
			'textAlign': '',
			'padding': ''});
		$('.sub-menu-brands').hide();
	});
	// show/hide basket
	$('#basket').click(function () {
		$('.basket-review').show();
		return false;
	});
	$('.basket-review').click(function () {
		$('.basket-review').show();
		return false;
	});
	$('body').click(function () {
		$('.basket-review').hide();
	});

	// slider
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		nav: true,
		navText: ""
	});

	// show/hide social icons
	$('.icon.share').click(function () {
		$('.catalog-social').hide();
		$(this).find('.catalog-social').show();
		return false;
	});
	$('body').click(function () {
		$('.catalog-social').hide();
	});
	
});