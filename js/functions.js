/* ************************************* FUNCTIONS *** */

$('.time-waste-img').mouseenter(function () {
    if ($(this).hasClass('1')) {
        $(this)
            .fadeOut(400, function () {
                $(this).attr('src', 'img/time-waste2.jpg');
                $(this).removeClass('1');
            })
            .fadeIn(400);
    } else {
        $(this)
            .fadeOut(400, function () {
                $(this).attr('src', 'img/time-waste.jpeg');
                $(this).addClass('1');
            })
            .fadeIn(400);
    }
});

