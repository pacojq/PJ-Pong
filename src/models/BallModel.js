
class BallModel extends Model {

    constructor(x, y) {
        super(new Anim(res.anim_ball_idle, 1), x, y);

        this.animIdle = new Anim(res.anim_ball_idle, 1);
        this.animHitHoriz = new Anim(res.anim_ball_hit, 4);

        this.imageSpeed = 0.2;
    }

    onAnimationEnd() {
        console.log("Animation end!");
        if (this.animation == this.animHitHoriz)
            this.jumpToAnimation(this.animIdle);
    }

}
