class EndLayer extends Layer {

    constructor() {
        super();
        
        this.text = "";
        this.color = "";
    }

    victory() {
        this.text = "VICTORY";
        this.color = "green";
    }

    defeat() {
        this.text = "DEFEAT";
        this.color = "red";
    }


    update() {

        if (input.isKeyPressed(KeyCode.ACCEPT)) {
            audio.playSfx(sounds.uiSound);
            setLayer(menuLayer);
        }
    }


    drawGUI() {

        drawSetColor(this.color);
        drawText(this.width/2, this.height/2, this.text, "center", 12);
        drawSetColor("black");

        drawSetAlpha(Math.sin(degToRads(currentTime()*5))*.5 + .5);
        drawText(this.width/2, this.height - 16, "[PRESS ENTER]", "center", 10);
        drawSetAlpha(1);
    }


}
