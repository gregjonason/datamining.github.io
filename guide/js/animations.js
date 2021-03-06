/* Template: Ethority | Author: GD Themes | Version: 1.0.0  */
/*----------------------------------------------------------*/
(function($) {

"use strict";

$(document).ready(function() {

	// set default state
	$('.feature, .chapter-block, .product-sample, #cta #purchase-button, .testimonial, .price-table').addClass('opacity-zero');



	// animations
	$('#home img').addClass('animated slideInRight');

	$('#features').waypoint( function(){
		
		$('.feature').each(function(i){
			$(this).css({
				'animation-delay' : (i * 0.3) + "s",
				'-webkit-animation-delay' : (i * 0.3) + "s",
				'-moz-animation-delay' : (i * 0.3) + "s",
				'-ms-animation-delay' : (i * 0.3) + "s",
				'-o-animation-delay' : (i * 0.3) + "s"
			});
		});

		$('.feature')
			.removeClass('opacity-zero')
			.addClass('animated slideInRight opacity-one');

	}, {offset: 400});



	$('#overview').waypoint( function(){
		$('.chapter-block').each(function(i){
			$(this).css({
				'animation-delay' : (i * 0.1) + "s",
				'-webkit-animation-delay' : (i * 0.1) + "s",
				'-moz-animation-delay' : (i * 0.1) + "s",
				'-ms-animation-delay' : (i * 0.1) + "s",
				'-o-animation-delay' : (i * 0.1) + "s"
			});
		});

		$('.chapter-block')
			.removeClass('opacity-zero')
			.addClass('animated flipInY opacity-one');

	}, {offset: 400});

	$('.product-sample').waypoint( function(){
		$(this)
			.removeClass('opacity-zero')
			.addClass('animated slideInUp opacity-one');
	}, {offset: 800});




	$('#cta').waypoint( function(){
		$('#cta #purchase-button')
			.removeClass('opacity-zero')
			.addClass('animated bounceIn opacity-one');
	}, {offset: 550});




	$('#testimonials').waypoint( function(){
		$('.testimonial').each(function(i){
			$(this).css({
				'animation-delay' : (i * 0.3) + "s",
				'-webkit-animation-delay' : (i * 0.3) + "s",
				'-moz-animation-delay' : (i * 0.3) + "s",
				'-ms-animation-delay' : (i * 0.3) + "s",
				'-o-animation-delay' : (i * 0.3) + "s"
			});
		});

		$('.testimonial:nth-child(2n)')
			.removeClass('opacity-zero')
			.addClass('animated slideInRight opacity-one');
		$('.testimonial:nth-child(2n+1)')
			.removeClass('opacity-zero')
			.addClass('animated slideInLeft opacity-one');
	}, {offset: 400});




	$('#author').waypoint( function(){

	});

	$('#purchase').waypoint( function(){
		$('.price-table').each(function(i){
			$(this).css({
				'animation-delay' : (i * 0.1) + "s",
				'-webkit-animation-delay' : (i * 0.1) + "s",
				'-moz-animation-delay' : (i * 0.1) + "s",
				'-ms-animation-delay' : (i * 0.1) + "s",
				'-o-animation-delay' : (i * 0.1) + "s"
			});
		});

		$('.price-table:nth-child(1)')
			.removeClass('opacity-zero')
			.addClass('animated slideInLeft opacity-one');

		$('.price-table:nth-child(2)')
			.removeClass('opacity-zero')
			.addClass('animated slideInUp opacity-one');

		$('.price-table:nth-child(3)')
			.removeClass('opacity-zero')
			.addClass('animated slideInRight opacity-one');
	}, {offset: 400});

	$('#contact').waypoint( function(){

	});

	$('#footer').waypoint( function(){

	});

});
}(jQuery));
