var myGameCloudSmall;
var myGameCloudBig;
var myGameObstacle;
var myBackgroundBack;
var myBackgroundForest;
var myBackgroundRoad;
var gameSpeed = 10;

setInterval(function () {
    gameSpeed *= 1.1;
    console.log(gameSpeed);
}, 100);

/** Startowanie gry i stworzenie jednego komponentu **/
function startGame() {
    gameArea.start();
    myGameCloudSmall = new component(100, 70, "img/cloud-1.png", 600, 50, 'img');
    myGameCloudBig = new component(100, 70, "img/cloud-2.png", 600, 30, 'img');
    myObstacle = new component(50, 70, "img/obstacle1.png", 500, 303, 'obstacle');
    myBackgroundBack = new component(600, 400, "img/country-back.png", 0, 0, 'background');
    myBackgroundForest = new component(600, 200, "img/country-forest.png", 0, 160, 'background');
    myBackgroundRoad = new component(600, 200, "img/country-road.png", 0, 200, 'background');
}

/** Funkcja która tworzy komponenty **/
function component(width, height, color, x, y, type) {
    this.type = type;
    if (type === 'img' || type === 'background' || type === 'obstacle') {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = gameArea.context;
        if (type === "img" || type === "background" || type === 'obstacle') {
            ctx.drawImage(this.image,
                this.x, this.y, this.width, this.height);
            if (type === "background") {
                ctx.drawImage(this.image,
                    this.x + this.width, this.y, this.width, this.height);
            }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    };
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type === "background") {
            if (this.x <= -(this.width)) {
                this.x = 0;
            }
        } else if (this.type === "img") {
            if (this.x <= -(this.width)) {
                this.x = 700;
            }
        } else if (this.type === "obstacle") {
            if (this.x <= -(this.width)) {
                this.x = 700;
            }
        }
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }

}


/** Tworzenie pola gry, już ruchomego i odświeżającego się **/
var gameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 600;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, gameSpeed);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.interval = setInterval(updateGameArea, 8000);

    }
};

/** Odświeżanie gry **/
function updateGameArea() {
    if (myGamePiece.crashWith(myObstacle)) {
        myGameArea.stop();
    } else {
        gameArea.clear();
        myBackgroundBack.speedX = -0.2;
        myBackgroundForest.speedX = -0.5;
        myBackgroundRoad.speedX = -1;
        myBackgroundBack.newPos();
        myBackgroundForest.newPos();
        myBackgroundRoad.newPos();
        myBackgroundBack.update();
        myBackgroundForest.update();
        myBackgroundRoad.update();
        myGameCloudSmall.x -= 0.8; //to odpowiada za przesuwanie się chmurki (komponentu), próba
        myGameCloudBig.x -= 0.4; //to odpowiada za przesuwanie się chmurki (komponentu), próba
        myGameObstacle.x -= 1; //to odpowiada za przesuwanie się chmurki (komponentu), próba
        myGameObstacle.update();
        myGameCloudSmall.update();
        myGameCloudBig.update();
        myGameCloudBig.newPos();
        myGameCloudSmall.newPos();
        myGameObstacle.newPos();
    }
}
