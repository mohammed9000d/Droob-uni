$(document).ready(function() {

    $('#image-background, #play-icon').on('click', function(ev) {
        $("#video")[0].src += "?autoplay=1";
        $('#image-background, #play-icon').remove();
    });

    $('#slide-content-down .home-main-js, #slide-content .home-main-js').on('click', function(ev) {
        $('#learn_more_about_uni').removeClass('active show');
        $('.university-data.tab-pane').removeClass('active show');
        $('#uni-single-content #home-main').addClass('active show');
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    $('#learn-more').on('click', function(ev) {
        $('#uni-single-content #home-main').removeClass('active show');
        $('#learn_more_about_uni').addClass('active show');
        document.body.scrollTop = 150; // For Safari
        document.documentElement.scrollTop = 150; // For Chrome, Firefox, IE and Opera
    });

    // Sticky nav
    $(window).scroll(function(){
        var sticky = $('nav.navbar#top-nav'),
            scroll = $(window).scrollTop();

        if (scroll >= 300)
            sticky.addClass('sticky');
        else
            sticky.removeClass('sticky');
    });

    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:false,
        margin:10,
        nav:true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    function recalcCarouselWidth(carousel) {
        var $stage = carousel.find('.owl-stage'),
             stageW = $stage.width(),
         $el = $('.owl-item'),
         elW = 0;
        $el.each(function() {
            elW += $(this)[0].getBoundingClientRect().width;
        });
        if ( elW > stageW ) {
         console.log('elW maggiore di stageW: ' +  elW + ' > ' + stageW);
         $stage.width( Math.ceil( elW ) );
        }
    }

    $(window).on('resize', function(e){
        recalcCarouselWidth( $('.owl-carousel.common-search') );
    }).resize();
    $('.owl-carousel.common-search').on('refreshed.owl.carousel', function(event) {
         recalcCarouselWidth( $('.owl-carousel') );
    });
    $('.owl-carousel.common-search').on('onResize.owl.carousel', function(event) {
        recalcCarouselWidth( $('.owl-carousel') );
    });

    //toggleClass dropdown-modal

    $('#dropdown-modal #slideClick .collegs-majors').click(function(e){
        $('#dropdown-modal #slide-content').toggleClass('slideJs');
        $('#other-click #Polygon_9_js').toggleClass('Polygon_9_rotate');
    });

    $('#dropdown-modal-top-mobile #slideClick-top-mobile .collegs-majors').click(function(e){
        $('#dropdown-modal-down-mobile #slide-content').removeClass('slideJs');
        $('#dropdown-modal-top-mobile #slide-content').toggleClass('slideJs');
        $('#dropdown-modal-top-mobile #other-click #Polygon_9_js').toggleClass('Polygon_9_rotate');
    });

    $('#dropdown-modal-down-mobile #slideClick-down-mobile .collegs-majors').click(function(e){
        $('#dropdown-modal-top-mobile #slide-content').removeClass('slideJs');
        $('#dropdown-modal-down-mobile #slide-content').toggleClass('slideJs');
        $('#dropdown-modal-down-mobile #other-click #Polygon_9_js').toggleClass('Polygon_9_rotate');
    });

    // Animation Search Input
    $('#input-hero-search').click(function(event) {
        if($('#input-hero-search-text').css('display') == 'none'){
            event.preventDefault();
        }

        $('#input-hero-search-text').show();
        $('#input-hero-search-text').focus();
    });

    $('#input-hero-search-text').on('focusout', function () {
        if($('#input-hero-search-text').css('display') == 'inline-block'){
            $('#input-hero-search-text').hide();
            return true;
        }

      });

    //   Hover on Slide images (Universities/Majors)
    // $('#hover-background figure').hover(function () {
    //     $('.common-search .owl-item .university-item img').css('visibility', 'hidden');
    // });

  //

    $('.disabled-linj--js').click(function() {
         $('#top-nav-collapse').removeClass('show');
    });

    $('#slide-content-down .nav-item .nav-link, #slide-content .nav-item .nav-link').click(function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    $('#dropdown-modal-top-mobile .nav-item .nav-link, #dropdown-modal-down-mobile .nav-item .nav-link').click(function() {
        document.body.scrollTop = 250; // For Safari
        document.documentElement.scrollTop = 350; // For Chrome, Firefox, IE and Opera
    });


    <!-- Messenger Chat plugin Code -->

    <!-- Your Chat plugin code -->

    // var chatbox = document.getElementById('fb-customer-chat');
    // chatbox.setAttribute("page_id", "104199904864134");
    // chatbox.setAttribute("attribution", "page_inbox");
    // window.fbAsyncInit = function() {
    //     FB.init({
    //         xfbml            : true,
    //         version          : 'v11.0'
    //     });
    // };
    //
    // (function(d, s, id) {
    //     var js, fjs = d.getElementsByTagName(s)[0];
    //     if (d.getElementById(id)) return;
    //     js = d.createElement(s); js.id = id;
    //     js.src = 'https://connect.facebook.net/ar_AR/sdk/xfbml.customerchat.js';
    //     fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));


});
