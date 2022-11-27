(function ($) {

    'use strict';

    // Navbar
    function initNavbar() {
        // $(".navbar-nav .nav-item a").bind('click', function(event) {
        //     setTimeout(() => {
        //         $(".navbar-nav .nav-item a").removeClass('active');
        //         $(this).addClass('active');
        //     }, 500);
        // });

        // $(".navbar-brand").bind('click', function(event) {
        //     setTimeout(() => {
        //         $(".navbar-nav .nav-item a").removeClass('active');
        //     }, 500);
        // });

  		$('.mainpage-hash').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 92)
            }, 500, 'easeOutQuad');
            event.preventDefault();
        });
    }
    
    //Scrollspy
	function initScrollspy() {
		$("#navbarCollapse").scrollspy({
		    offset:20
		});
	}
    function init() {
        initNavbar();
        // initSticky();
        initScrollspy();
        // initMagnificPopup();
        // initContactForm();
        // Waves.init();
    }

    $(document).ready(function(){
        init(); 
    });

    // init();

})(jQuery)