/* *****************NAVIGATION***************** */

$('.nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('#topBtn').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

/* *****************SHRINKING NAV ON SCROLL**** */
$(document).ready(function () {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.navbar').addClass('shrink');
        } else {
            $('.navbar').removeClass('shrink');
        }
    });
});

/* *****************GO UP BUTTON*************** */

$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});

/* *****************SMOOTH SCROLLING*********** */

var scroll = new SmoothScroll('a[href*="#"]');


