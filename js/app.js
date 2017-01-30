$(document).ready(function(){
    $("#one-pl").click(function(){
        $(".landing-screen").css("display", "none");
        $(".choose-symbol").css("display","block");
    });

    $(".back-btn").click(function(){
        $(".landing-screen").css("display", "block");
        $(".choose-symbol").css("display","none");
    });

    $("#x").click(function(){
        $(".game-board").css("display","block");
        $(".landing-screen").css("display", "none");
        $(".choose-symbol").css("display","none");
        draw();
        
    });
});


function draw(){
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.strokeStyle = '#fff';

context.beginPath();
context.moveTo(0, 150);
context.lineTo(100, 150);
context.stroke();

 context.beginPath();
context.moveTo(100, 150);
context.lineTo(100, 50);
context.stroke();

context.beginPath();
context.moveTo(100, 150);
context.lineTo(200, 150);
context.stroke();

context.beginPath();
context.moveTo(200, 150);
context.lineTo(200, 50);
context.stroke();

context.beginPath();
context.moveTo(200, 150);
context.lineTo(300, 150);
context.stroke();

context.beginPath();
context.moveTo(100, 150);
context.lineTo(100, 250);
context.stroke();

context.beginPath();
context.moveTo(200, 150);
context.lineTo(200, 250);
context.stroke();

context.beginPath();
context.moveTo(0, 250);
context.lineTo(300, 250);
context.stroke();

context.beginPath();
context.moveTo(100, 250);
context.lineTo(100, 350);
context.stroke();

context.beginPath();
context.moveTo(200, 250);
context.lineTo(200, 350);
context.stroke();
}