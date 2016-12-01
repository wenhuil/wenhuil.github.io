// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            //top: 0
        }
    })


    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    /***************** Waypoints ******************/

    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

    $(document).ready(function(){
    
        // hide .navbar first
        $("#mainNav").hide();
        var target_offset = $("#start-to-show-nav").offset().top;
        // fade in .navbar
        $(function () {
            $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > target_offset) {
                    $('#mainNav').fadeIn(100);
                } else {
                    $('#mainNav').fadeOut(300);
                }
            });
        });
    });

    $('#portfoliolist').mixItUp({
        animation: {
            effects: 'fade', /* fade scale */
            duration: 700 /* 600 */
        },
        selectors: {
            target: '.portfolio-item', /* .mix */
            filter: '.filter' /* .filter */
        }
    });

    var imageNum = 1;
    $('.logo').click(function() {
        switch(imageNum){
            case 1: 
                $(".logo").attr('src',"img/profile2.png"); 
                imageNum = 2; 
                break;
            case 2:
                $(".logo").attr('src',"img/profile.png");
                imageNum = 1;
                break;
        }
    });
    $('.logo').popover();
        
})(jQuery); // End of use strict

