class Layer extends Entity {

    constructor() {
        super();

        this.width = canvas.width;
        this.height = canvas.height;

        this.entities = [];
        this.space = new Space();
    }


    _update() {
        this.preUpdate();

        this.earlyUpdate();
        this.update();
        this.lateUpdate();

        this.postUpdate();
    }

    _draw() {
        this.preDraw();

        this.drawBegin();
        this.draw();
        this.drawEnd();

        this.drawGUI();

        this.postDraw();
    }

    entityCreate(x, y, entity) {
        this.entities.push(entity);
        entity.layer = this;
        entity.body.x = x;
        entity.body.y = y;
        this.space.addBody(entity.body);
        return entity;
    }

}