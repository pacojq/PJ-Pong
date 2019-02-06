


/*---------------------------------------------------------------/

                        GAMEPLAY FUNCTIONS

/---------------------------------------------------------------*/

function freezeGame(millis) {
    var start = Date.now();
    while (Date.now() - start < millis) {
        // wait
    }
}


function hexToRgba(hexString, alpha) {

    var c = hexString.substring(1).split('');
    if(c.length== 3){
        c= [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c= '0x'+c.join('');
    return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' + alpha + ')';
}






/*---------------------------------------------------------------/

                    RANDOMIZATION FUNCTIONS

/---------------------------------------------------------------*/

function chance(x) {
    return random() <= x;
}

function random() {
    return Math.random();
}

function irandom(x) {
    if (x < 0)
        return 0;

    return Math.min(Math.round(Math.random() * x), Math.floor(x)-1);
}

function randomRange(min, max) {
    if (max < min)
        return min;

    return min + irandom(max-min);
}

function choose(args) {
    return arguments[irandom(arguments.length)];
}






/*---------------------------------------------------------------/

                        MATH FUNCTIONS

/---------------------------------------------------------------*/

               // * * * * NUMBERS * * * * //

function roundToClosest(x, closestValue) {
    return Math.round(x/closestValue) * closestValue;
}

function clamp(value, min, max) {
    if (value < min)
        return min;
    if (value > max)
        return max;
    return value;
}


                // * * * * ANGLES * * * * //

function degToRads(deg) {
    return deg * (Math.PI / 180);
}

function radsToDeg(rad) {
    return (rad * 180) / Math.PI;
}

function distance(x0, y0, x1, y1) {
    return Math.sqrt( Math.pow(x1-x0, 2) + Math.pow(y1-y0, 2) );
}



function direction(x0, y0, x1, y1) {

    var deltaX = x1-x0;
    var deltaY = y1-y0;


    if (deltaX == 0) return 180 - Math.sign(deltaY) * 90; // Don't fuck with me, division by 0
    if (deltaY == 0) return 90 - Math.sign(deltaX) * 90;



    var degs = radsToDeg(Math.atan( Math.abs(deltaY) / Math.abs(deltaX) ));

    if (deltaY > 0) {
       if (deltaX > 0) return degs;     // 1st QUAD
       else return 180 - degs;          // 2ndQUAD
    }
    if (deltaY < 0) {
        if (deltaX < 0) return 180 + degs;  // 3rd QUAD
        else return 360 - degs;             // 4th QUAD
    }

    return 0;
}



function lengthdir_x(len, dir) {
    return len*Math.cos(degToRads(dir));
}

function lengthdir_y(len, dir) {
    return len*Math.sin(degToRads(dir));
}


                // * * * * MATRICES * * * * //

function createMatrix(i, j, defaultValue) {
    var m = [];
    for (var ii = 0; ii < i; ii++) {
        var row = [];
        for (var jj = 0; jj < j; jj++)
            row.push(defaultValue);
        m.push(row);
    }
    return m;
}

function rotateMatrix(m) {

    var newM = [];

    for (var i = 0; i < m[0].length; i++) {
        var row = [];
        for (var j = 0; j < m.length; j++)
            row.push(m[j][i]);
        newM.push(row);
    }
    return newM;
}


