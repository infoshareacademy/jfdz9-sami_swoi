/* ************************************* FUNCTIONS *** */

$('.time-waste-img').mouseenter(function () {
    if ($(this).hasClass('1')) {
        $(this)
            .fadeOut(200, function () {
                $(this).attr('src', 'img/time-waste.jpeg');
                $(this).removeClass('1');
            })
            .fadeIn(200);
    } else {
        $(this)
            .fadeOut(200, function () {
                $(this).attr('src', 'img/time-waste2.jpg');
                $(this).addClass('1');
            })
            .fadeIn(200);
    }
});

$('.searching-img').mouseenter(function () {
    if ($(this).hasClass('1')) {
        $(this)
            .fadeOut(200, function () {
                $(this).attr('src', 'img/searching.jpeg');
                $(this).removeClass('1');
            })
            .fadeIn(200);
    } else {
        $(this)
            .fadeOut(200, function () {
                $(this).attr('src', 'img/searching2.jpg');
                $(this).addClass('1');
            })
            .fadeIn(200);
    }
});

$('.clear-requirements-img').mouseenter(function () {
    if ($(this).hasClass('1')) {
        $(this)
            .fadeOut(200, function () {
                $(this).attr('src', 'img/clear-requirements.jpeg');
                $(this).removeClass('1');
            })
            .fadeIn(200);
    } else {
        $(this)
            .fadeOut(200, function () {
                $(this).attr('src', 'img/clear-requrements2.jpg');
                $(this).addClass('1');
            })
            .fadeIn(200);
    }
});

$('.send-cv-img').mouseenter(function () {
    if ($(this).hasClass('1')) {
        $(this)
            .fadeOut(200, function () {
                $(this).attr('src', 'img/send-cv.jpeg');
                $(this).removeClass('1');
            })
            .fadeIn(200);
    } else {
        $(this)
            .fadeOut(200, function () {
                $(this).attr('src', 'img/send-cv2.jpg');
                $(this).addClass('1');
            })
            .fadeIn(200);
    }
});

// var lFollowX = 0,
//     lFollowY = 0,
//     x = 0,
//     y = 0,
//     friction = 1 / 30;
//
// function moveBackground() {
//     x += (lFollowX - x) * friction;
//     y += (lFollowY - y) * friction;
//
//     translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
//
//     $('.functions-content-subcontainers').css({
//         '-webit-transform': translate,
//         '-moz-transform': translate,
//         'transform': translate
//     });
//
//     window.requestAnimationFrame(moveBackground);
// }
//
// $(window).on('mousemove click', function(e) {
//
//     var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
//     var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
//     lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
//     lFollowY = (10 * lMouseY) / 100;
//
// });
//
// moveBackground();

 /*


var iconsArray = ['icons/aplikuj.png', 'icons/czas.png', 'icons/czytelne.png', 'icons/zaawansowane.png'];

// function randomIcon(iconsArray) {
//     return iconsArray[Math.floor(Math.random() * iconsArray.length)]
// }
for (i = 0; i < 20; i++) {
    // console.log(iconsArray[Math.floor(Math.random() * iconsArray.length)]); //losowanie 20 ikon
    var size = ((Math.random()*100) + 50).toFixed(); //losowy rozmiar
    var containerWidth = $('#functions').width();
    var containerHeight = $('#functions').height();
    var X = Math.floor(Math.random() * containerWidth);
    var Y = Math.floor(Math.random() * containerHeight);
    var newDiv = $('<div>').css({
        'width': size + 'px',
        'height': size + 'px',
        'top': X + 'px',
        'left': Y + 'px',
        'background-image': 'url(iconsArray[Math.floor(Math.random() * iconsArray.length)])',//tu będzie ikona,
        'background-size': '100%',
        'z-index': '0',
        'position': 'absolute',
        'color': 'black',
    });
    $('#functions').append(newDiv);
};




*/