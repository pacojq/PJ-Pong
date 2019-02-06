
class Body {

    constructor(width, height, x = 0, y = 0, name = "body") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.name = name;
        this.space = null;

        this.onCollision = (hSign, vSign) => {};
    }

    move(hSpd, vSpd) {
        this.space.move(this, hSpd, vSpd);
    }

    draw() {
        drawRect(
            this.x - this.width/2,
            this.y - this.height/2,
            this.x + this.width/2,
            this.y + this.height/2,
            "red"
            );
    }


    collides(other) {

        var right =  this.x + this.width/2 >= other.x - other.width/2;
        var left =   this.x - this.width/2 <= other.x + other.width/2;
        var bottom = this.y + this.height/2 >= other.y - other.height/2;
        var top =    this.y - this.height/2 <= other.y + other.height/2;

        return right && top && left && bottom;
    }

    getCollisionHSign(other) {
        var right =  this.x + this.width/2 >= other.x - other.width/2;
        var left =   this.x - this.width/2 <= other.x + other.width/2;

        return right - left;
    }

    getCollisionVSign(other) {
        var bottom = this.y + this.height/2 >= other.y - other.height/2;
        var top =    this.y - this.height/2 <= other.y + other.height/2;

        return bottom - top;
    }

}