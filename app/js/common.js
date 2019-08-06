$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('fast');
});
$(document).ready(function(){
    $('body').addClass('fixed');
    $('#burger,.discover-button').click(function(){
        $('.main-header').toggleClass('open-menu').removeClass('active');
        $('body').toggleClass('fixed');
        $('.menu-open-items').toggleClass('active');
        $('.menu-item').on('click', function(){
            $('.menu-open-items').removeClass('active');
            $('body').removeClass('fixed');

            $('.main-header').addClass('active').removeClass('open-menu');
        });





    });
   /* $('.achievements-items, .about-us-items, .article-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
    });*/
    
});