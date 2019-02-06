class Model extends Entity {

    constructor(animation) {
        super();

        this.animation = animation;

        this.ox = this.animation.frameWidth / 2;
        this.oy = this.animation.frameHeight / 2;

        this.rotation = 0;
        this.imageAlpha = 1;
        this.imageIndex = 0;
        this.imageSpeed = 0;
        this._actualImageIndex = 0;
        this.xScale = 1;
    }

    setImageIndex(index) {
        this.imageIndex = index;
        this._actualImageIndex = index;
    }

    draw(x, y) {
        this.animation.draw(x, y, this);
    }

    postDraw() {
        // Update Anim
        this._actualImageIndex += this.imageSpeed;
        if (this._actualImageIndex >= this.animation.imageCount) {
            this._actualImageIndex %= this.animation.imageCount;
            this.onAnimationEnd();
        }
        this.imageIndex = Math.floor(this._actualImageIndex);
    }



/*
    _debugDraw(x, y) {
        context.strokeStyle="#FF0000";
        context.beginPath();
        //context.arc(x, y, 2, 0, 2*Math.PI);
        drawLine(x-1, y-1, x+1, y+1);
        drawLine(x-1, y+1, x+1, y-1);
        context.stroke();
    }
*/
    jumpToAnimation(animation) {
        this.animation = animation;
        this.imageIndex = 0;
        this._actualImageIndex = 0;
    }

    onAnimationEnd() {}


}
