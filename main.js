/* ************* MOBILE - NAVIGATION ************* */

$('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$('#topBtn').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

/* *****************SHRINKING NAV ON SCROLL**** */

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('.navbar').addClass('shrink');
        } else {
            $('.navbar').removeClass('shrink');
        }
    });
});

/*
/!* SCROLLING BACK TO TOP ON RELOAD *!/
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
*/
/*
/!* NAV NOT CHANGING ON RELOAD*!/
$(window).scroll(ScrollChange);

function ScrollChange() {
    if ($(document).scrollTop() > 100) {
        $('.navbar').addClass('shrink');
    } else {
        $('.navbar').removeClass('shrink');
    }
}

$(document).ready(function () {
    ScrollChange();
});
*/

/* **SMOOTH SCROLLING & NAV LINK HIGHLIGHTING** */

/* *****************GO UP BUTTON*************** */

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('#topBtn').fadeIn('slow');
        } else {
            $('#topBtn').fadeOut('slow');
        }
    });

    $('#topBtn').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

});