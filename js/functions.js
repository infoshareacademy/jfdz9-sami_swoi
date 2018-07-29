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

var iconsArray = ['icons/aplikuj.png', 'icons/czas.png', 'icons/czytelne.png', 'icons/zaawansowane.png'];

// function randomIcon(iconsArray) {
//     return iconsArray[Math.floor(Math.random() * iconsArray.length)]
// }
for (i = 0; i < 20; i++) {
    // console.log(iconsArray[Math.floor(Math.random() * iconsArray.length)]); //losowanie 20 ikon
    var size = ((Math.random()*100) + 50).toFixed(); //losowy rozmiar
    var newDiv = $('<div>').css({
        'width': size + 'px',
        'height': size + 'px',
        'background-image': 'url(iconsArray[Math.floor(Math.random() * iconsArray.length)])',//tu będzie ikona,
        'background-size': '100%',
        'z-index': '0',
        'position': 'absolute'
    });
    // console.log(newDiv);
    $('#functions').append(newDiv);
}



