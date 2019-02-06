class Camera {

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.target = null;

        this.width = canvas.width;
        this.height = canvas.height;
    }


    setTarget(target) {
        this.target = target;
    }

    update() {
        if (this.target == null)
            return;

        // Follow the target
        var targetX = IsoToScreenX(this.target.x, this.target.y) - this.width/2;
        var targetY = IsoToScreenY(this.target.x, this.target.y) - this.height/2;

        this.x += (targetX - this.x) * .1;
        this.y += (targetY - this.y) * .1;
    }

/*
    instanceOnScreen(instance){
        var xx = instance.x - this.x;
        var yy = instance.y - this.y;

        if (xx <= this.width && xx >= 0 &&
                yy <= this.height && yy >= 0 ){
            return true;
        }
        return false;
    }
*/
}