$(document).ready(function(){
    $("#one-pl").click(function(){
        $(".landing-screen").css("display", "none");
        $(".choose-symbol").css("display","block");
    });

    $(".back-btn").click(function(){
        $(".landing-screen").css("display", "block");
        $(".choose-symbol").css("display","none");
    });
});