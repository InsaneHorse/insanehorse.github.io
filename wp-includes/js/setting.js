jQuery(document).ready(function() {
	jQuery('#mycarousel').jcarousel({
		wrap:"both",
		scroll:1,
		animation:"slow"
	});
	
	function mycarousel_initCallback(carousel) {
		jQuery('#featured-next-button').bind('click', function() {
			carousel.next();
			return false;
		});
		
		jQuery('#featured-prev-button').bind('click', function() {
			carousel.prev();
			return false;
		});
		
		jQuery('.button-nav span').bind('click', function() {
			carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
			return false;
		});
	};
		
	
});

jQuery(document).ready(function() {
	jQuery('#mycarouse2').jcarousel({
		wrap:"both",
		scroll:1,
		animation:"slow"
	});
	
	function mycarousel_initCallback(carousel) {
		jQuery('#featured-next-button').bind('click', function() {
			carousel.next();
			return false;
		});
		
		jQuery('#featured-prev-button').bind('click', function() {
			carousel.prev();
			return false;
		});
		
		jQuery('.button-nav span').bind('click', function() {
			carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
			return false;
		});
	};
		
	
});