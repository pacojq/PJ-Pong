// Lista de recursos a precargar



var res = {

    anim_ball_idle : "res/ball_idle.png",
    anim_ball_hit : "res/ball_hit.png",

    anim_paddle_idle : "res/paddle_idle.png"
};

var resValues = Object.values(res);
loadRes(0);

function loadRes(index){
    var img = new Image();
    img.src = resValues[index];
    img.onload = function(){
        if (index < resValues.length-1) {
            index++;
            loadRes(index);
        }
        else startGame();
    }
}