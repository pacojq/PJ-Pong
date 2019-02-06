class Button extends Model {

    constructor(animation, x, y) {
        super(animation);

        this.x = x;
        this.y = y;

        this.width = this.animation.frameWidth;
        this.height = this.animation.frameHeight;

        this.hasFocus = false;

        this.onClick = ()=>{};
    }


    postUpdate() {
        if (this.hasFocus) {
            if (input.isKeyReleased(KeyCode.ACCEPT))
                this.onClick();
        } 
    }

    containsPoint(pX, pY){
        if ( pY >= this.y - this.animation.frameWidth/2 &&
                pY <= this.y + this.animation.frameWidth/2 &&
                pX <= this.x + this.animation.frameHeight/2 &&
                pX >= this.x - this.animation.frameHeight/2){
            return true;
        }
        return false;
    }



}
