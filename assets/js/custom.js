(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

    // START MENU JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >50) {
            $('.main-nav').addClass('menu-shrink');
        } else {
            $('.main-nav').removeClass('menu-shrink');
        }
    });		
    // END MENU JS

    // Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
    });


    // Team Slider JS
    $('.team-slider').owlCarousel({
        loop:true,
        margin: 30,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay:false,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });

    // Testimonial Slider JS
    $('.testimonial-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: false,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
    })

    // PRELOADER
    jQuery(window).on('load',function(){
        jQuery(".loader").fadeOut(500);
    });
    // WOW JS
    new WOW().init();

    // Back to top 
    $('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-pine"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 900);
        return false;
    });
    
    // Sorting Portfolio JS
    $('.container').mixItUp();










}); 	
})(jQuery);