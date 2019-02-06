class GuiDisparos extends Modelo {

    constructor(x, y) {
        super(imagenes.icono_recolectable, x, y);
        
        this.valor = "";
    }

    dibujar (){
        var drawX = this.x - this.ancho/2;
        var drawY = this.y - this.alto/2;
        contexto.drawImage(this.imagen, drawX, drawY);

        contexto.font = "20px Arial";
        contexto.fillStyle = "white";
        contexto.textAlign = "left";
        contexto.fillText(this.valor, this.x + this.ancho/2 + 4, this.y + this.alto/5);
    }



}
