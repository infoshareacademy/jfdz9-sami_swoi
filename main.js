/* **********NAVIGATION********** */

$(function(){
    if( $(window).width() <= 767 ) {
        $('#menu li a').click(function(e){
            $('#menu').slideUp();
        });
        $('#label').click(function(e){
            $('#menu').slideToggle();
        });
    }
});

/*$( document ).ready(function() {
    $(".label").click(function() {
        $("#menu").slideToggle(function() {
            $("#menu").show();
        });
    });
}*/

/* **********GO UP BUTTON********** */

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