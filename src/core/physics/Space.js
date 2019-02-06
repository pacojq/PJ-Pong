
class Space {

    constructor() {
        this.bodies = [];
    }

    addBody(body) {
        body.space = this;
        this.bodies.push(body);
    }

    move(body, hSpd, vSpd) {

        var startX = body.x;
        var startY = body.y;
        
        body.x = startX + hSpd;
        body.y = startY + vSpd;

        var objCollision = null;

        for (var i = 0; i < this.bodies.length; i++) {
            var other = this.bodies[i];
            if (other == body)
                continue;

            if (body.collides(other)) {
                console.log("Collision with: " + other.name);
                objCollision = other;
                break;
            }
        }

        if (objCollision == null)
            return;

        // Handle the collision

        body.x = startX;
        body.y = startY;

        var hSign = body.getCollisionHSign(other);
        var vSign = body.getCollisionVSign(other);

        this._approach(body, other, hSpd, vSpd);

        body.onCollision(hSign, vSign);

        

        /*
        var dist = distance(0, 0, hSpd, vSpd);
        var dir = direction(0, 0, hSpd, vSpd);

        for (var i = 0; i < d; i += 0.1) {
            // TODO
        }
        */
    }

    _approach(body, other, hSpd, vSpd) {

        var startX = body.x;
        var startY = body.y;

        var dist = distance(0, 0, hSpd, vSpd);
        var dir = direction(0, 0, hSpd, vSpd);

        for (var i = 0; i < dist; i += .1) {
            
            body.x = startX + lengthdir_x(i, dir);
            body.y = startY + lengthdir_y(i, dist);

            if (body.collides(other)) {
                body.x = startX + lengthdir_x(i - .1, dir);
                body.y = startY + lengthdir_y(i - .1, dist);
                break;
            }
        }
    }

}