$(function(){

	'use strict';

	var carousel  = function() {
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			stagePadding: 5,
			navText: ['<span class="icon-chevron-left">', '<span class="icon-chevron-right">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
	}
	carousel();

	var toggleMenu = function() {
		var aside = $('.js-strap-aside'),
			main = $('.js-strap-main');
		$('.js-strap-toggle').on('click', function(e) {
			aside.addClass('active');
			main.addClass('mobile-open');
			e.preventDefault();
		});
		$('.js-strap-close-menu').on('click', function(e) {
			aside.removeClass('active');
			main.removeClass('mobile-open');
			e.preventDefault();
		});

		$(document).mouseup(function(e) {
			var container = $(".strap-aside");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      aside.removeClass('active');
	      main.removeClass('mobile-open');
	    }
    });

	};
	toggleMenu();

	var contentWayPoint = function() {
		var i = 0;
		jQuery('.strap-animate').waypoint( function( direction ) {

			if( direction === 'down' && !jQuery(this.element).hasClass('strap-animated') ) {

				i++;

				jQuery(this.element).addClass('item-animate');
				setTimeout(function(){

					jQuery('body .strap-animate.item-animate').each(function(k){
						var el = jQuery(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn strap-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft strap-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight strap-animated');
							} else {
								el.addClass('fadeInUp strap-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	if ($('.strap-main').length > 0 ) {
		$('.strap-main').imagesLoaded( {

		  },
		  function() {
		  	if ($('.card').length > 0 ) {
		    	$('.card').addClass('img-loaded');
		    }
		  }
		);
	}



});
