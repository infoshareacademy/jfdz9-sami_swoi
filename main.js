/* ********************************* MOBILE - NAVIGATION *** */
$('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$('#topBtn').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

/* ***************************** SHRINKING NAV ON SCROLL *** */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('.navbar').addClass('shrink');
            $('.navbar-brand img').css('width', '220px');
        } else {
            $('.navbar').removeClass('shrink');
            $('.navbar-brand img').css('width', '');
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

/* ******************************* NAV LINK HIGHLIGHTING *** */
// Cache selectors
let lastId,
    topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        let item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    let fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    let cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    let id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});

/* ************************************ SMOOTH SCROLLING *** */
$('a[href^="#"]').on('click', function (event) {
    let target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 600);
    }
});

$("#logo").click(function () {
    $("html, body").animate({scrollTop: 0}, "slow");
    return false;
});

/* **************************************** GO UP BUTTON *** */
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

<<<<<<< HEAD
});

// WINDOW OPENER

const newWnd = window.open();
newWnd.opener = null;

/* ************************************* FORM VALIDATION *** */

$(document).ready(function () {

    $('input#mail').focusout(function () {
        email_validate();
    });
    
    function email_validate() {
        let pattern = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        let mail = $('mail').val();

        if(mail !== '') {
            if (pattern.test(mail)) {
                $('#success').css('display', 'block');
            }
        }
    }
});
=======
});
>>>>>>> b5ab21d0c692b973ba2356e585e6961f0dfabfd9
