$(function() {
	var $red = $('#redbox');
	var $green = $('#greenbox');
	var $blue = $('#bluebox')
	
	$red.on('click', function() {
			$('header, footer').removeClass("backgroundred backgroundgreen backgroundblue").addClass("backgroundred");
	})
	
	$green.on('click', function() {
			$('header, footer').removeClass("backgroundred backgroundgreen backgroundblue").addClass("backgroundgreen");
	})
	
	$blue.on('click', function() {
			$('header, footer').removeClass("backgroundred backgroundgreen backgroundblue").addClass("backgroundblue");
	})

	
});