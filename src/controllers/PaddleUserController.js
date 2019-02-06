
class PaddleUserController extends PaddleController {


    constructor(entity, inputIndex) {
        super(entity);
        this.inputIndex = inputIndex;
    }


    getDirection() {
        return (input.isKeyHeld(KeyCode.DOWN) - input.isKeyHeld(KeyCode.UP));
    }
}