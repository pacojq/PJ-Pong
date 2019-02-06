
class PaddleAICOntroller extends PaddleController {

    constructor(entity, inputIndex) {
        super(entity);
    }


    getDirection() {

        // We take the ball from GameLayer
        // No cast needed 'cause JavaScript
        var ball = this.entity.layer.ball;

        var dist = Math.abs(ball.body.x - this.entity.body.x);

        if (dist < 32)
            if (irandom(dist - 16) <= 0)
                return Math.sign(ball.body.y - this.entity.body.y);

        return 0;
    }


}