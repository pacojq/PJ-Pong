
class PaddleEntity extends Entity {
    
    constructor(inputIndex) {
        super();

        this.controller = null;
        if (inputIndex < 0)
            this.controller = new PaddleAICOntroller(this);
        else this.controller = new PaddleUserController(this, inputIndex);

        this.spd = 0;
        this.maxSpd = 2;
        this.acc = 1.2;
        this.friction = 0.95;
        this.direction = 0;

        this.setBody(new Body(16, 64));
    }

    update() {
        super.update();

        this.direction = this.controller.getDirection();

        if (this.direction == 0) {
            this.spd *= this.friction;
            if (Math.abs(this.spd) < 0.1)
                this.spd = 0;
        }
        else {
            if (Math.sign(this.spd) != Math.sign(this.direction))
                this.spd = this.direction * 0.1;

            this.spd *= this.acc;
            if (Math.abs(this.spd) > this.maxSpd)
                this.spd = Math.sign(this.spd) * this.maxSpd;
        }

        this.body.move(0, this.spd);
    }

}