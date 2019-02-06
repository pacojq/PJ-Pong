
class KeyboardInput extends InputSource {

    constructor() {
        super();
        window.addEventListener('keydown', this.onKeyboardKeyDown.bind(this), false);
        window.addEventListener('keyup', this.onKeyboardKeyUp.bind(this), false);
    }

    onKeyboardKeyDown(event) {

        console.log("Key down:" + event.key);

        switch (event.key) {

            case "d":
            case "ArrowRight":
                this.pressKey(KeyCode.RIGHT);
                break;

            case "a":
            case "ArrowLeft":
                this.pressKey(KeyCode.LEFT);
                break;

            case "w":
            case "ArrowUp":
                this.pressKey(KeyCode.UP);
                break;

            case "s":
            case "ArrowDown":
                this.pressKey(KeyCode.DOWN);
                break;

            case " ":
                this.pressKey(KeyCode.BUILDING);
                this.pressKey(KeyCode.ACCEPT);
                break;

            case "Escape":
                this.pressKey(KeyCode.BUILDING_CANCEL);
                this.pressKey(KeyCode.CANCEL);
                break;

            case "e":
                this.pressKey(KeyCode.SUMMONING);
                break;

            case "Enter":
                this.pressKey(KeyCode.ACCEPT);
                break;

            
            case "Shift":
                this.pressKey(KeyCode.BUILDING_CHANGE);
                break;
        }
    }

    onKeyboardKeyUp(event) {

        console.log("Key up:" + event.key);

        switch (event.key) {

            case "d":
            case "ArrowRight":
                this.releaseKey(KeyCode.RIGHT);
                break;

            case "a":
            case "ArrowLeft":
                this.releaseKey(KeyCode.LEFT);
                break;

            case "w":
            case "ArrowUp":
                this.releaseKey(KeyCode.UP);
                break;

            case "s":
            case "ArrowDown":
                this.releaseKey(KeyCode.DOWN);
                break;

            case " ":
                this.releaseKey(KeyCode.BUILDING);
                this.releaseKey(KeyCode.ACCEPT);
                break;

            case "Escape":
                this.releaseKey(KeyCode.BUILDING_CANCEL);
                this.releaseKey(KeyCode.CANCEL);
                break;

            case "e":
                this.releaseKey(KeyCode.SUMMONING);
                break;

            case "Enter":
                this.releaseKey(KeyCode.ACCEPT);
                break;

            
            case "Shift":
                this.releaseKey(KeyCode.BUILDING_CHANGE);
                break;
        }
    }

}
