class GameLayer extends Layer {

    constructor() {
        super();
    }

    

    start(inputIndexOne, inputIndexTwo = -1) {

        audio.playMusic();

        this.ball = this.entityCreate(this.width/2, this.height/2, new BallEntity());
        this.ball.setModel(new BallModel());

        this.paddleLeft = this.entityCreate(32, this.height/2, new PaddleEntity(inputIndexOne));
        this.paddleLeft.setModel(new PaddleModel());

        this.paddleRight = this.entityCreate(this.width - 32, this.height/2, new PaddleEntity(inputIndexTwo));
        this.paddleRight.setModel(new PaddleModel());


        this.topBody = new Body(this.width, 4, this.width/2, 2, "TOP BODY");
        this.botBody = new Body(this.width, 4, this.width/2, this.height-2, "BOT BODY");
        this.leftBody = new Body(4, this.height, 2, this.height/2, "LEFT BODY");
        this.rightBody = new Body(4, this.height, this.width-2, this.height/2, "RIGHT BODY");

        this.space.addBody(this.topBody);
        this.space.addBody(this.botBody);
        this.space.addBody(this.leftBody);
        this.space.addBody(this.rightBody);
    }


    gameEnd(unitDefeated) {

        audio.stopMusic();

        // TODO

        setLayer(endLayer);
    }





    preUpdate() {
        this.entities.forEach(e => e.preUpdate());
    }

    earlyUpdate() {
        this.entities.forEach(e => e.earlyUpdate());
    }

    update() {
        this.entities.forEach(e => e.update());
    }

    lateUpdate() {
        this.entities.forEach(e => e.lateUpdate());
    }

    postUpdate() {
        this.entities.forEach(e => e.postUpdate());
    }





    preDraw() {
        
    }

    drawBegin() {
        
    }

    draw() {
        // Draw field
        drawRect(-1, -1, this.width+1, this.height+1, "#FFE5B4", true);
        drawLine(this.width/2, -1, this.width/2, this.height+1, "white", 2);
        
        // Draw Entities
        this.entities.forEach(e => e.draw());
    }

    drawEnd() {
        this.entities.forEach(e => e.drawEnd());
        /*
        this.topBody.draw();
        this.botBody.draw();
        this.leftBody.draw();
        this.rightBody.draw();
        */
    }

    drawGUI() {
        
    }

    postDraw() {
        this.entities.forEach(e => e.postDraw());
    }



}
