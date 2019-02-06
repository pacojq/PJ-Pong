

class Entity {

    constructor() {

        // * * * * * ALARM SYSTEM * * * * * //
        this._setAlarm = []; // used to hold future values
        this._alarm = [];
        for (var i = 0; i < 8; i ++) {
            this._alarm.push(-1);
            this._setAlarm.push(-1);
        }

        this.layer = null;

        this.model = null;
        this.body = null;
    }

    setModel(model) {
        console.log("new model!");
        this.model = model;
    }

    setBody(body) {
        console.log("new body!");
        this.body = body;
    }



    preUpdate() {}

    earlyUpdate() {}
    update() {}
    lateUpdate() {}

    postUpdate() {

        // * * * * * ALARM SYSTEM * * * * * //
        for (var i = 0; i < 8; i ++) {

            if (this._setAlarm[i] > -1) {
                this._alarm[i] = this._setAlarm[i];
                this._setAlarm[i] = -1;
            }
            if (this._alarm[i] == 0) {
                switch (i) {
                    case 0: this.alarm0(); break;
                    case 1: this.alarm1(); break;
                    case 2: this.alarm2(); break;
                    case 3: this.alarm3(); break;
                    case 4: this.alarm4(); break;
                    case 5: this.alarm5(); break;
                    case 6: this.alarm6(); break;
                    case 7: this.alarm7(); break;
                }
            }
            if (this._alarm[i] >= 0)
                this._alarm[i] --;
        }
    }


    preDraw() {}

    drawBegin() {}

    draw() {
        this.model.draw(this.body.x, this.body.y);
    }

    drawEnd() {
        //this.body.draw();
    }

    drawGUI() {}

    postDraw() {
        this.model.postDraw();
    }


    // * * * * * ALARM SYSTEM * * * * * //

    setAlarm(alarm, value) {
        if (alarm < 0 || alarm >= 8)
            return;

        value = Math.max(-1, value);
        this._setAlarm[alarm] = value;
    }

    alarm0() {}
    alarm1() {}
    alarm2() {}
    alarm3() {}
    alarm4() {}
    alarm5() {}
    alarm6() {}
    alarm7() {}

}