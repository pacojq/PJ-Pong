
var sounds = {
    hit : "res/sound/Hit_Hurt.wav",
    build : "res/sound/Build.wav",
    uiSound : "res/sound/UISound.wav"
}


class AudioManager {

    constructor() {
        this.musicaAmbiente = new Audio("res/sound/musica_ambiente.mp3");
        this.musicaAmbiente.loop = true;
    }

    playMusic() {
        //this.musicaAmbiente.play();
    }

    stopMusic() {
        //this.musicaAmbiente.pause();
        //this.musicaAmbiente.currentTime = 0;
    }

    playSfx( srcEfecto ) {
        var efecto = new Audio( srcEfecto );
        efecto.play();
    }

}