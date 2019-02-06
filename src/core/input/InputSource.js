
class InputSource {

    constructor() {

        this.held = [];
        this.pressed = [];
        this.released = [];

        this.pressedCount = [];
        this.releasedCount = [];

        for (var i = 0; i < KeyCode._keyCount; i ++) {
            this.held.push(false);
            this.pressed.push(false);
            this.released.push(false);

            this.pressedCount.push(0);
            this.releasedCount.push(0);
        }
    }


    update() {
        
        for (var i = 0; i < KeyCode._keyCount; i ++) {

            if (this.pressed[i]) {
                if (this.pressedCount[i] == 0)
                    this.pressedCount[i] = 1;

                else {
                    this.pressedCount[i] = 0;
                    this.pressed[i] = false;
                }
            }

            if (this.released[i]) {
                if (this.releasedCount[i] == 0)
                    this.releasedCount[i] = 1;

                else {
                    this.releasedCount[i] = 0;
                    this.released[i] = false;
                }
            }
        }
    }



    pressKey(key) {
        if (this.held[key])
            return;

        this.pressed[key] = true;
        this.held[key] = true;
    }

    releaseKey(key) {
        if (!this.held[key])
            return;

        this.released[key] = true;
        this.held[key] = false;
    }


    isKeyHeld(key) {
        return this.held[key];
    }

    isKeyPressed(key) {
        return this.pressed[key];
    }

    isKeyReleased(key) {
        return this.released[key];
    }
}