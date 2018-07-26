(function () {
    var actualDate = (new Date().getTime()) / 1000;
    var expTime = actualDate - localStorage.getItem('cookie date');

    $('.cookies-akcept').click(function() {
        var cookieDate = (new Date().getTime()) / 1000;
        $('.cookies').fadeOut();
        localStorage.setItem('cookie', 'saved');
        localStorage.setItem('cookie date', 'cookieDate');
    });

    if (expTime > 10000000000000000) {
        $('.cookies').show();
        localStorage.setItem('cookie', 'empty');
    }

    if (localStorage.getItem('cookie') === 'saved') {
        $('.cookies').hide();
    }

})();