$(function(){
    if( $(window).width() <= 767 ) {
        $('#menu li a').on("click", function(){
            $('#menu').slideUp();
        });
        $('.label').on("click", function(){
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
