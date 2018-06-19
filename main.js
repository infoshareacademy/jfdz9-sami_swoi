/* *****************NAVIGATION***************** */

$('.nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('#myBtn').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

/* *****************SHRINKING NAV ON SCROLL**** */

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});

/* *****************GO UP BUTTON*************** */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* *****************SMOOTH SCROLLING*********** */

var scroll = new SmoothScroll('a[href*="#"]');


