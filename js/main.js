/////////////////  SCROLLUP JS      /////////////////////////////
$(document).ready(function(){
$('.back-to-top').hide(); 
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.header-area').addClass("sticky");
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
        $('.header-area').removeClass("sticky");
    }
});
if($(window).width() > 991){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1500) {
            $('.sidebar-column').addClass("sticky-sidebar");
        }
         else {
            $('.sidebar-column').removeClass("sticky-sidebar");
        }
        if ($(this).scrollTop() > 0) {//4500
            $('.sidebar-column').removeClass("sticky-sidebar");
        }
    });
}
$(".back-to-top").on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});
});
//////////////////////// horizontal-Menu - Sidenav-details//////////////////////////////////////////
$('.item-menu-toggle').click(function () {
    $('#Sidenav-mobile').addClass("left-0");
});
$('.closebtn').click(function () {
    $('#Sidenav-mobile').removeClass("left-0");
});
////////////////////////  search-box   //////////////////////////////////////////////
$('.item-search').click(function () {
    $('.search-box').removeClass("d-none");
});
$('.item-search-close').click(function () {
    $('.search-box').addClass("d-none");
});
//////////////////item-share-handler////////////////////////////////////////
$('a.icon-tabs-more').click(function () {
   $("a.btn").removeClass('d-none');
   $('a.icon-tabs-more').hide();  
});
// prodct details slider active
$('.product-large-slider').slick({
    fade: true,
    arrows: false,
    asNavFor: '.product-nav'
});

// product details slider nav active
$('.product-nav').slick({
    slidesToShow: 4,
    asNavFor: '.product-large-slider',
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-right"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-left"></i></button>',
    responsive: [{
        breakpoint: 576,
        settings: {
            slidesToShow: 3,
        }
    }]
});
// video prodct details slider active
$('.product-video-slider').slick({
    fade: true,
    arrows: false,
    asNavFor: '.product-nav-video'
});

// video product details slider nav active
$('.product-nav-video').slick({
    slidesToShow: 4,
    asNavFor: '.product-video-slider',
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-right"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-left"></i></button>',
    responsive: [{
        breakpoint: 576,
        settings: {
            slidesToShow: 3,
        }
    }]
});
/////////////////////////////////////////////
  $(document).ready(function() {
    $('.responsive').slick({
        infinite: true,
        speed: 300,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                // centerMode: true,
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: true,
                infinite: true,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                infinite: true,   
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });
});
///////////////////////////////////
$(document).ready(function() {
    $('.product-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                // centerMode: true,
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: true,
                infinite: true,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                infinite: true,   
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });
});
////////////////////////////

  