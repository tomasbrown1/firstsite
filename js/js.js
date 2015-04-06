$(function() {
	var $red = $('#redbox');
	var $green = $('#greenbox');
	var $blue = $('#bluebox');
	
	$red.on('click', function() {
			$('header, footer').removeClass("backgroundred backgroundgreen backgroundblue").addClass("backgroundred");
	});
	
	$green.on('click', function() {
			$('header, footer').removeClass("backgroundred backgroundgreen backgroundblue").addClass("backgroundgreen");
	});
	
	$blue.on('click', function() {
			$('header, footer').removeClass("backgroundred backgroundgreen backgroundblue").addClass("backgroundblue");
	});

	
	var $menu = $('.menu');
	var $button = $('.button');

	$menu.hide()
	
	$button.on('click', function() {
		$menu.slideToggle(300);
	});
	
});