
class BallEntity extends Entity {

    constructor() {
        super();

        this.hSpd = 2;
        this.vSpd = 2;

        this.hSpdNext = 0;
        this.vSpdNext = 0;

        this.setBody(new Body(12, 12));
        this.body.onCollision = (hSign, vSign) => this._onCollision(hSign, vSign);
    }

    update() {
        super.update();

        this.body.move(this.hSpd, this.vSpd);
    }


    _onCollision(hSign, vSign) {

        freezeGame(5);

        if (hSign != 0) {
            this.hSpd = -this.hSpd;
            freezeGame(5);
            this.model.jumpToAnimation(this.model.animHitHoriz);
            this.model.xScale = -this.model.xScale;
        }
        if (vSign != 0)
            this.vSpd = -this.vSpd;  
    }
}