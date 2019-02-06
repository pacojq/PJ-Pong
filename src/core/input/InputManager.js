
var KeyCode = {

    _keyCount: 10,

    RIGHT: 0,
    LEFT: 1,
    UP: 2,
    DOWN: 3,

    BUILDING: 4,
    BUILDING_CANCEL: 5,

    SUMMONING: 6,

    ACCEPT: 7,
    CANCEL: 8,

    BUILDING_CHANGE : 9,
  };


class InputManager {
    
    constructor() {

        console.log("Input initialization started.");

        this.inputs = [];
        this.mainInput = new KeyboardInput();
        this.inputs.push(this.mainInput);

        var allowsGp = this.gamepadAllowed();
        console.log("Allows Gamepad: "+ allowsGp);

        if (allowsGp) {
            window.addEventListener("gamepadconnected", this._onGamepadConnected.bind(this));
            window.addEventListener("gamepaddisconnected", this._onGamepadDisconnected.bind(this));
        }

        console.log("Input manager ready.");
    }


    gamepadAllowed() {
        return "getGamepads" in navigator;
    }



    update() {
        this.mainInput.update();
    }



    isKeyHeld(key) {
        return this.mainInput.isKeyHeld(key);
    }

    isKeyPressed(key) {
        return this.mainInput.isKeyPressed(key);
    }

    isKeyReleased(key) {
        return this.mainInput.isKeyReleased(key);
    }


    _onGamepadConnected(event) {

        console.log("GamePad connected: "+ event.gamepad.id);
        console.log("Number: "+ event.gamepad.index);

        this.inputs.push(new GamepadInput(event.gamepad.index));
    }

    _onGamepadDisconnected(event) {

        console.log("GamePad disconnected: "+ event.gamepad.id);
        console.log("Number: "+ event.gamepad.index);

        // TODO remove it
    }

}
