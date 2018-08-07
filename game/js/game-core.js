var myGamePiece;
var myGameCloud;
var myBackground;

/** Startowanie gry i stworzenie jednego komponentu **/
function startGame() {
    gameArea.start();
    myGamePiece = new component(30, 30, "black", 10, 350);
    myGameCloud = new component(100, 70, "img/cloud-1.png", 600, 50, 'img');
}

/** Funkcja która tworzy komponenty, np. postać **/
function component(width, height, color, x, y, type) {
    this.type = type;
    if (type === 'img') {
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
        if (type === "img") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
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
    myGameCloud.x -= 1; //to odpowiada za przesuwanie się chmurki (komponentu), próba
    myGamePiece.update();
    myGameCloud.update();
}