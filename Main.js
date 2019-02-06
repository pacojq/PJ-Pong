// Canvas y context del Canvas
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");



// Inicio capas y bucle del juego
var _currentLayer;
var __newLayer;

var menuLayer;
var gameLayer;

var input;
var audio;

function startGame() {
    console.log("Starting game");

    input = new InputManager();
    audio = new AudioManager();

    gameLayer = new GameLayer();
    menuLayer = new MenuLayer();
    endLayer = new EndLayer();

    // TODO setLayer(menuLayer);

    setLayer(gameLayer);
    gameLayer.start(0);

    setInterval(loop, 1000 / TARGET_FPS);
}


function setLayer(layer) {
    __newLayer = layer;
}





const TARGET_FPS = 60;
var DeltaTime = 0;
var __loopCount = 0, __lastLoop = new Date, __thisLoop;

var __currentTime = 0;

function loop() {

    if (__newLayer != undefined) {
        _currentLayer = __newLayer;
        __newLayer = undefined;
    }

    // Get the input
    input.update();

    // Update the game
    _currentLayer._update();

    // Draw the game
    context.clearRect(0, 0, canvas.width, canvas.height);
    _currentLayer._draw();


    // Update delta time
    DeltaTime = (__thisLoop=new Date()) - __lastLoop;
    __lastLoop = __thisLoop;
/*
    if (__loopCount ++ >= TARGET_FPS) {
        console.log("FPS: " + getFPS());
        __loopCount = 0;
    }
*/
    __currentTime ++;
}



function getFPS() {
    return (1/DeltaTime)*1000;
}

function currentTime() {
    return __currentTime;
}






// Cambio de escalado
window.addEventListener('load', __resize, false);

function __resize() {
    console.log("Resizing...");

    //canvas.width = this.canvas.width*2;
    //canvas.height = this.canvas.height*2;
    //context.scale(2,2);

    var escaladoAncho = parseFloat(window.innerWidth / canvas.width);
    var escaladoAlto = parseFloat(window.innerHeight / canvas.height);

    var scale = Math.floor( Math.min(escaladoAncho, escaladoAlto) );

    canvas.width = this.canvas.width*scale;
    canvas.height = this.canvas.height*scale;

    context.scale(scale, scale);

    __setpixelated(context);

    console.log("New scale=" + scale);
}

function __setpixelated(context){
    context['imageSmoothingEnabled'] = false;       /* standard */
    context['mozImageSmoothingEnabled'] = false;    /* Firefox */
    context['oImageSmoothingEnabled'] = false;      /* Opera */
    context['webkitImageSmoothingEnabled'] = false; /* Safari */
    context['msImageSmoothingEnabled'] = false;     /* IE */
}
