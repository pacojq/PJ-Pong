class Anim {

    constructor(filepath, imageCount) {

        this.image = new Image();
        this.image.src = filepath;
        this.image.onerror = () => {};

        this.imageCount = imageCount;

        this.frameWidth = this.image.width / imageCount;
        this.frameHeight = this.image.height;
    }

    draw(x, y, model) {

        var ox = model.ox;
        var oy = model.oy;
        var rot = roundToClosest(model.rotation, 5);

        //var drawX = x - ox;
        //var drawY = y - oy;

        var radians = rot * (Math.PI / 180);

        context.translate(x, y);
        context.rotate(radians);
        context.scale(model.xScale, 1);
        context.globalAlpha = model.imageAlpha;

        context.drawImage(
            this.image,
            model.imageIndex * this.frameWidth,
            0,
            this.frameWidth,
            this.frameHeight,

            -ox, //draw x 
            -oy, // draw y

            this.frameWidth,
            this.frameHeight);

            
        context.globalAlpha = 1;
        context.scale(model.xScale, 1);
        context.rotate(-radians);
        context.translate(-x, -y);
    }

    

}