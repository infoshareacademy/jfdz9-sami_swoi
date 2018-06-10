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
