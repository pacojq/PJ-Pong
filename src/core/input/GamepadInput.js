
class GamepadInput extends InputSource {

    constructor(gpIndex) {
        super();

        this.gpIndex = gpIndex;
        this.gp = navigator.getGamepads()[gpIndex];
    }


    update() {
        //super.update();

        this.checkKeysDown();
        this.checkKeysUp();
    }

    checkKeysDown() {

    }

}
