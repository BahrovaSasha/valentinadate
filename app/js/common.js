$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('fast');
});
$(document).ready(function(){
    $('.achievements-items, .about-us-items, .article-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('body').addClass('fixed');
    $('#burger,.discover-button').click(function(){
        $('.main-header').toggleClass('open-menu').removeClass('active');
        // $('body').addClass('fixed');
        $('.menu-open-items').toggleClass('active');
        $('.menu-item').on('click', function(){
            $('.menu-open-items').removeClass('active');
            $('.main-header').addClass('active').removeClass('open-menu');
            $('body').removeClass('fixed');
        });
    });

    $(window).scroll(function() {
        if ( $(this).scrollTop() >= 100 ) {
            $('.main-header').addClass('active')
        } else if ( $(this).scrollTop() <= 100 ) {
            $('.main-header').removeClass('active');
        } else {
            $('main-header').addClass('active');
        }
    });

    $('.logo-wrap').click(function(){
        $('body,html').animate({
            scrollTop: $('.main-section').offset().top - 100
        }, 800);
        $('body').addClass('fixed');
    });

    $('.item-name').click(function() {
        $('body').removeClass('fixed');
    });
    $('tour-packages-table').removeClass('premium-active');
    $('.basic-btn').click(function () {
        $('.tour-packages-table').toggleClass('basic-active');
        $('.tour-packages-table').removeClass('premium-active');
        $('.tour-packages-table').removeClass('vip-active');
    });
    $('.premium-btn').click(function () {
        $('.tour-packages-table').toggleClass('premium-active');
        $('.tour-packages-table').removeClass('vip-active');
        $('.tour-packages-table').removeClass('basic-active');

    });
    $('.vip-btn').click(function () {
        $('.tour-packages-table').toggleClass('vip-active');
        $('.tour-packages-table').removeClass('premium-active');
        $('.tour-packages-table').removeClass('basic-active');
    });

});