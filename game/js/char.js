var canWidth = 0;
var canHeight = 0;

// var x = 50;
// var y = 237;

var player = {
    x: 50,
    y: 237,
    jumping: false,
    jumpingHeight: 0,
};

var srcX;
var srcY;

var sheetWidth = 794;
var sheetHeight = 143;

var cols = 8;
var rows = 1;
var licznik = 0;

var width = sheetWidth / cols;
var height = sheetHeight / rows;

var currentFrame = 0;

var character = new Image();
character.src = "img/sprite-small.png";

var canvas = document.getElementById('canvas');

canvas.width = canWidth;
canvas.height = canHeight;

var ctx = canvas.getContext('2d');

function updateFrame() {
    animatePlayer();
    if (player.jumping === true) {
        handleJumping()
    }

}

function animatePlayer() {
    licznik = licznik + 1 % 60;
    if (licznik % 6 === 0) {
        currentFrame = ++currentFrame % cols;

        srcX = currentFrame * width;
        srcY = 0;
    }
}

function handleJumping() {

    player.jumpingHeight += 1;// gravity
    player.y += player.jumpingHeight;
    player.jumpingHeight *= 0.95;// friction

    // if rectangle is falling below floor line
    if (player.y > 237) {
        player.jumping = false;
        player.y = 237;
        player.jumpingHeight = 0;
    }
}

function jumpAnimation(event) {

    if (event.code === "Space" && player.jumping === false) {
        player.jumpingHeight -= 25;
        console.log("JUMP");
        player.jumping = true;
    }
}


function drawImage() {
    updateFrame();
    ctx.drawImage(character, srcX, srcY, width, height, player.x, player.y, width, height);
    requestAnimationFrame(drawImage);


}

window.addEventListener("keydown", jumpAnimation);
requestAnimationFrame(drawImage);
