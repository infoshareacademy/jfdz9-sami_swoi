var myGamePiece;
var myGameCloud;
var myBackgroundBack;
var myBackgroundForest;
var myBackgroundRoad;

/** Startowanie gry i stworzenie jednego komponentu **/
function startGame() {
    gameArea.start();
    myGamePiece = new component(180, 210, "img/run-t.gif", 10, 200, 'img');
    myGameCloud = new component(100, 70, "img/cloud-1.png", 600, 50, 'img');
    myBackgroundBack = new component(600, 400, "img/country-back.png", 0, 0, 'background');
    myBackgroundForest = new component(600, 200, "img/country-forest.png", 0, 160, 'background');
    myBackgroundRoad = new component(600, 200, "img/country-road.png", 0, 200, 'background');
}

/** Funkcja która tworzy komponenty **/
function component(width, height, color, x, y, type) {
    this.type = type;
    if (type === 'img' || type === 'background') {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = gameArea.context;
        if (type === "img" || type === "background") {
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
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type === "background") {
            if (this.x === -(this.width)) {
                this.x = 0;
            }
        }
    }
}

/** Tworzenie pola gry, już ruchomego i odświeżającego się **/
var gameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 600;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

/** Odświeżanie gry **/
function updateGameArea() {
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
    myGameCloud.x -= 1; //to odpowiada za przesuwanie się chmurki (komponentu), próba
    myGamePiece.update();
    myGameCloud.update();
}