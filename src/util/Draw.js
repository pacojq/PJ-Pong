

function drawLine(x0, y0, x1, y1, col = "balck", width = 1) {
    context.beginPath();

    drawSetColor(col);
    context.lineWidth = width;

    context.moveTo(x0,y0);
    context.lineTo(x1,y1);
    context.stroke();

    drawSetColor("black");
}

function drawRect(x0, y0, x1, y1, col = "black", filled = false) {
    
    context.beginPath();
    drawSetColor(col);
    
    if (filled) {
        context.fillRect(x0, y0, x1-x0, y1-y0);
    }
    else {
        context.lineWidth="0.5";
        context.rect(x0, y0, x1-x0, y1-y0);
    }
    
    context.stroke();
    drawSetColor("black");
}


/**
 * @param x
 * @param y
 * @param text
 * @param textAlign (center/left/right)
 * @param textSize by default, 4
 */
function drawText(x, y, text, textAlign = "left", textSize = 4) {
    context.font="" + textSize + "px Consolas";
    context.textAlign = textAlign;
    context.fillText(text, x, y);    
}

function drawPlainImage(x, y, image) {
    drawImage(x, y, image, 0, 0, 0, 1);
}

function drawImage(x, y, image, imageOX, imageOY, rotation, alpha) {

    var rot = roundToClosest(rotation, 5);
    context.globalAlpha = alpha;

    if (rot == 0) {
        context.drawImage(image, x - imageOX, y - imageOY);
    }
    else {
        var radians = rot * (Math.PI / 180);

        context.translate(x, y);
        context.rotate(radians);

        context.drawImage(image, -imageOX, -imageOY);

        context.rotate(-radians);
        context.translate(-x, -y);
    }

    context.globalAlpha=1;
}

function drawSetAlpha(alpha) {
    context.globalAlpha = alpha;
}

function drawSetColor(color) {
    context.fillStyle = color;
    context.strokeStyle = color;
}