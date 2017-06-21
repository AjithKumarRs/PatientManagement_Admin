/*!
Theme Name: Trendy
Theme URI: http://themeforest.net/user/Medhati/portfolio
Author: Medhati
Author URI: http://themeforest.net/user/Medhati
Description: Trendy Multipurpose Coming Soon template
Copyright 2017, Medhati
*/
;(function(window) {
	'use strict';
/* ---------------------------------------------------------------------------
 * Preloader
 * --------------------------------------------------------------------------- */
$(window).load(function(){
	setTimeout(function(){$("header .content .row,footer").addClass("hidden")},100);
	setTimeout(function(){$(".preloader").addClass("end")},1800);
	setTimeout(function(){$(".global-overlay").addClass("show")},1900);
	setTimeout(function(){$("header .content .row,footer").removeClass("hidden")},2300);
});
/* ---------------------------------------------------------------------------
 * Rain Background
 * --------------------------------------------------------------------------- */
$(".rain").each(function() {
	function getURLParameter(name) {
		return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
	}
	var image = document.getElementById('rainy');
	image.onload = function() {
		var engine = new RainyDay('rain','rainy', window.innerWidth, window.innerHeight, 1, getURLParameter("blur") || 15);
		var preset = getURLParameter("preset") || 1;
		if (preset == 1) {
			engine.gravity = engine.GRAVITY_NON_LINEAR;
			engine.trail = engine.TRAIL_DROPS;
			engine.rain([ engine.preset(3, 3, 0.88), engine.preset(5, 5, 0.9), engine.preset(6, 2, 1) ], 100);
		} else if (preset == 2) {
			engine.gravity = engine.GRAVITY_NON_LINEAR;
			engine.trail = engine.TRAIL_DROPS;
			engine.VARIABLE_GRAVITY_ANGLE = Math.PI / 8;
			engine.rain([ engine.preset(0, 2, 0.5), engine.preset(4, 4, 1) ], 50);
		} else if (preset == 3) {
			engine.gravity = engine.GRAVITY_NON_LINEAR;
			engine.trail = engine.TRAIL_SMUDGE;
			engine.rain([ engine.preset(0, 2, 0.5), engine.preset(4, 4, 1) ], 50);
		}
	};
	image.crossOrigin = "anonymous";
	image.src="assets/img/rain.jpg";
});
/* ---------------------------------------------------------------------------
 * Bubble Background
 * --------------------------------------------------------------------------- */
$(".bubble").each(function() {
	$(".bubble").pobubble({
		color: "#ffffff",
		ammount: 7,
		min: .1,
		max: .3,
		time: 60,
		vertical:true,
		horizontal:true,
		style: 'circle'
	});
});
/* ---------------------------------------------------------------------------
 * Slider Background
 * --------------------------------------------------------------------------- */
$(".slider").each(function() {
	$('.slider').phoenix({
		delay: 6000,
		fullscreen: true,
		dots: false,
		keys: false,
	});
});
/* ---------------------------------------------------------------------------
 * Kenburn Background
 * --------------------------------------------------------------------------- */
$(".zoom").each(function() {
	$(".zoom").kenburnsy({
	  fullscreen: true
	});
});
/* ---------------------------------------------------------------------------
 * Countdown Timer
 * --------------------------------------------------------------------------- */
$(".countdown").each(function() {
	$('.countdown').countdown({
		//Set your target date here!
		day: 1,//Set your target Days
		month: 8,//Set your target Month
		year: 2017,//Set your target Year
		onChange: function() {m3dAnimate($('.digits span'));}
	});
	function m3dAnimate($el) {
		$el.each( function() {
			var $this = $(this),
				fieldText = $this.text(),
				fieldData = $this.attr('data-value'),
				fieldOld = $this.attr('data-old');
			if (typeof fieldOld === 'undefined') {
				$this.attr('data-old', fieldText);
			}
			if (fieldText != fieldData) {
				$this
					.attr('data-value', fieldText)
					.attr('data-old', fieldData)
					.addClass('animate');

				window.setTimeout(function() {
					$this
						.removeClass('animate')
						.attr('data-old', fieldText);
				}, 300);
			}
		});
	};
});
/* ---------------------------------------------------------------------------
 * Action button
 * --------------------------------------------------------------------------- */
$('.readmore').on('click', function(){
	$('header,aside,footer').toggleClass('blured');
	$('header,aside,footer').toggleClass('open');
	$('.body-wrap').toggleClass('open');
	$('.section-close').toggleClass('open');
	$('.overlay').toggleClass('active');
	$(".body-wrap").mCustomScrollbar("scrollTo","top",{scrollEasing:"easeInOutExpo",timeout:600});
});
$('[data-map="collapse"],.btn-map-close').on('click', function(){
	$('#map').toggleClass('open');
	$('.body-wrap').toggleClass('open');
	$('.loading').addClass('active').addClass('active2');
	setTimeout(function() {$('.loading').removeClass('active');},1000);
	setTimeout(function() {$('.loading').removeClass('active2');},2000);
	$('.btn-map-close').toggleClass('open');
});
$('.overlay,.section-close').on('click', function(){
	$('header,aside,footer').toggleClass('blured');
	$('header,aside,footer').toggleClass('open');
	$('.body-wrap').toggleClass('open');
	$('.overlay').toggleClass('active');
	$('.section-close').toggleClass('open');
});
/* ---------------------------------------------------------------------------
 * Lightbox
 * --------------------------------------------------------------------------- */
$(".card").each(function() {
	$('.card').nivoLightbox({
		effect: 'slideDown'    
	});				  
});
$(".card .box-front,.modal-content").each(function() {
	var attr = $(this).attr('data-image-src');
	if (typeof attr !== typeof undefined && attr !== false) {
		$(this).css('background-image', 'url('+attr+')');
	}
});
$(".background .solid").each(function() {
	var attr = $(this).attr('data-bg-color');
	if (typeof attr !== typeof undefined && attr !== false) {
		$(this).css('background-color', ''+attr+'');
	}
});
/* ---------------------------------------------------------------------------
 * Tooltip
 * --------------------------------------------------------------------------- */
$('[data-toggle="tooltip"]').tooltip({ animation: true});

/* ---------------------------------------------------------------------------
 * Scrollbar
 * --------------------------------------------------------------------------- */
$(window).load(function(){
	$(".body-wrap").mCustomScrollbar({
		theme:"minimal",
		setLeft: "0px",
		setRight: "0px",
		setTop: "0px",
		scrollbarPosition: "outside",
	});
});
$(window).resize(function() {
	$('.body-wrap,#map').css({'height':($(window).height())+'px'});
	$('.modal-content').css({'max-width':($(window).width())+'px'});
	$('#background').css({'width':($(window).width())+'px','height':($(window).height())+'px'});
});$(window).trigger('resize');
/* ---------------------------------------------------------------------------
 * Parallax
 * --------------------------------------------------------------------------- */
$("#background").each(function() {
	$('#background,header .parallax').parallax({
		scalarX: 25,
		scalarY: 15,
		frictionX: 0.1,
		frictionY: 0.1,
		calibrateX: false,
	});
});
/* ---------------------------------------------------------------------------
 * Contact Form
 * --------------------------------------------------------------------------- */
$("#contact").each(function() {
	jQuery.validator.addMethod('answercheck', function (value, element) {
		return this.optional(element) || /^\b10\b$/.test(value);//you can set your custom answer for example our answer is 10, format answer is "b10" or "bYOUR_ANSWER"
	}, "type the correct answer");
	$('#contactform').validate({
		highlight: function(element, errorClass) {
			$(element).fadeOut(function() {
				$(element).fadeIn();
			});
		},
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				digits: true,
				minlength: 8
			},
			message: {
				required: true,
				minlength: 5
			},
			answer: {
				required: true,
				answercheck: true
			}
		},
		messages: {
			/* you can use custom error for contact form
			name: {
				required: "come on, you have a name don't you?",
				minlength: "your name must consist of at least 3 characters"
			},
			email: {
				required: "no email, no message"
			},
			phone: {
				required: "Please enter your phone."
			},
			message: {
				required: "um...yea, you have to write something to send this form.",
				minlength: "thats all? really?"
			},*/
			answer: {
				required: "sorry, wrong answer!"
			}
		},
		submitHandler: function(form) {
			$(form).ajaxSubmit({
				type: "POST",
				data: $(form).serialize(),
				url: "assets/inc/contact.php",
				success: function() {
					setTimeout(function(){$("#contact .message-contact").addClass("bg-success")},300);
					setTimeout(function(){$('#contact .message-contact').prepend("<div><i class='me-message-1'></i>Thanks!We'll be in touch real soon!</div>")},300);
					setTimeout(function(){$("#contact .message-contact").addClass("open")},500);
					setTimeout(function(){$("#contact input").fadeTo("slow", 0.15).prop( "disabled", true );},2200);
					setTimeout(function(){$("#contact textarea").fadeTo("slow", 0.15).prop( "disabled", true );},2200);
					setTimeout(function(){$("#contact button").fadeTo("slow", 0.15).prop( "disabled", true );},2200);
					setTimeout(function(){$("#contact .message-contact").removeClass("open")},5000);
					setTimeout(function(){$('#contact .message-contact').removeClass('bg-success')},5100);
					setTimeout(function(){$('#contact .message-contact div').remove()},5200);
				},
				error: function() {
					setTimeout(function(){$("#contact .message-contact").addClass("bg-danger")},300);
					setTimeout(function(){$('#contact .message-contact').prepend("<div><i class='me-message-1'></i>Something went wrong!try submitting the form again!</div>")},300);
					setTimeout(function(){$("#contact .message-contact").addClass("open")},500);
					setTimeout(function(){$("#contact .message-contact").removeClass("open")},5000);
					setTimeout(function(){$('#contact .message-contact').removeClass('bg-danger')},5100);
					setTimeout(function(){$('#contact .message-contact div').remove()},5200);
				}
			});
		}
	});
});
/* ---------------------------------------------------------------------------
 * Newsletter
 * --------------------------------------------------------------------------- */
$("#newsletter").each(function() {
	var $form = $('#newsletter');
	$('#newsletter .submit').on('click', function(event) {
		if (event)
			event.preventDefault();
		register($form);
	});
	function register($form) {
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			cache: false,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			error: function(err) {
				setTimeout(function(){$('.modal #newsletter').before("<h4 class='text-danger' style='display:none'>Could not connect to server. Please try again later!</h4>")},100);
				setTimeout(function(){$(".modal .text-danger").delay(0).slideDown("slow")},300);
				setTimeout(function(){$('.modal .text-danger').delay(0).slideUp("fast");},5000);
				setTimeout(function(){$('.modal .text-danger').remove('h4');},5200);
			},
			success: function(data) {
				if (data.result != "success") {
					var message = data.msg.substring(4);
					setTimeout(function(){$('.modal #newsletter').before("<h4 class='text-danger' style='display:none'>Something went wrong!<br>"+ message +"</h4>")},100);
					setTimeout(function(){$(".modal .text-danger").delay(0).slideDown("slow")},300);
					setTimeout(function(){$('.modal .text-danger').delay(0).slideUp("fast");},5000);
					setTimeout(function(){$('.modal .text-danger').remove('h4');},5200);
					
				} else {
					var message = data.msg.substring(4);
					setTimeout(function(){$('.modal #newsletter').before("<h4 class='text-success' style='display:none'>Awesome! We sent you a confirmation email!</h4>")},100);
					setTimeout(function(){$(".modal .text-success").delay(0).slideDown("slow")},300);
					setTimeout(function(){$('.modal .text-success').delay(0).slideUp("fast");},5000);
					setTimeout(function(){$('.modal .text-success').remove('h4');},5200);
					
				}
			}
		});
	}
});


})(window);