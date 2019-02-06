class MenuLayer extends Layer {

    constructor() {
        super();
        this.start();
    }

    start() {

        audio.playMusic();

        var xx = this.width*0.3;
        var yy = this.height*0.35;
/*
        this.btnHaymakers = new Button(new Anim(res.factions_haymakers_icon, 1), xx, yy);
        yy += 32;
        this.btnOutcast = new Button(new Anim(res.factions_outcast_icon, 1), xx, yy);
*/
        this.selected = null;
    }

/*
    update() {

        if (input.isKeyPressed(KeyCode.ACCEPT)) {

            if (this.selected == null)
                this.selected = this.btnHaymakers;
            else {
                audio.playSfx(sounds.uiSound);

                this.startGame();
                return;
            }
        }


        else if (input.isKeyPressed(KeyCode.DOWN)) {
            audio.playSfx(sounds.uiSound);
            
            if (this.selected == null)
                this.selected = this.btnHaymakers;
            else if (this.selected == this.btnHaymakers)
                this.selected = this.btnOutcast;

        }


        else if (input.isKeyPressed(KeyCode.UP)) {
            audio.playSfx(sounds.uiSound);
            
            if (this.selected == null)
                this.selected = this.btnHaymakers;
            else if (this.selected == this.btnOutcast)
                this.selected = this.btnHaymakers;

        }
    }
*/

    startGame() {

        audio.stopMusic();
        
        setLayer(gameLayer);
        gameLayer.start(inputOne, inputTwo);
    }



    drawGUI() {

        drawSetColor("black");

        var xTitle = this.width/2;
        var yTitle = 24;
        var title = "CHOOSE A FACTION";
        drawText(xTitle, yTitle, title, "center", 12);


        if (this.selected != null) {

            drawSetAlpha(Math.sin(degToRads(currentTime()*5))*.5 + .5);
            drawText(this.width/2, this.height - 16, "[PRESS ENTER]", "center", 10);
            drawSetAlpha(1);
        }




        // HAYMAKERS
        if (this.selected == this.btnHaymakers) drawSetColor("red");
        else drawSetColor("black");

        this.btnHaymakers.draw(this.btnHaymakers.x, this.btnHaymakers.y);
        drawText(
            this.btnHaymakers.x + this.btnHaymakers.width/2 + 8,
            this.btnHaymakers.y + 4,
            "The Haymakers",
            "left",
            8);

        


        // OUTCAST
        if (this.selected == this.btnOutcast) drawSetColor("red");
        else drawSetColor("black");

        this.btnOutcast.draw(this.btnOutcast.x, this.btnOutcast.y);
        drawText(
            this.btnOutcast.x + this.btnOutcast.width/2 + 8,
            this.btnOutcast.y + 4,
            "The Outcast",
            "left",
            8);

    }


}
