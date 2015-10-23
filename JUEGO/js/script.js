window.onload=function ()
{
    var Direccion = { QUIETO:10, ARRIBA: 1, ABAJO:2 };
function Controles(){    
    this.ARRIBA=false;
    this.ABAJO=false;
    this.W=false;
    this.S=false;

    var self=this;
    document.body.onkeydown=function(e){
        switch(e.keyCode)
        {
            case 38: //Arriba
                e.preventDefault();
                self.ARRIBA=true;
                break;
            case 40: //Abajo
                e.preventDefault();
                self.ABAJO=true;
                break;
            case 87: //W
                e.preventDefault();
                self.W=true;
                break;
            case 83: //S
                e.preventDefault();
                self.S=true;
                break;
            
        }
    };
    document.body.onkeyup=function(e){
        switch(e.keyCode)
        {
            case 38: //Arriba
                e.preventDefault();
                self.ARRIBA=false;
                break;
            case 40: //Abajo
                e.preventDefault();
                self.ABAJO=false;
                break;
            case 87: //W
                e.preventDefault();
                self.W=false;
                break;
            case 83: //S
                e.preventDefault();
                self.S=false;
                break;
            
        }
    };
}
    var canvas = nom_div("canvas");
    var puntuacion = 00;
    var context = canvas.getContext("2d");
    var dimensiones =
        {
        w : 760,
        h : 500
        };

                      
    var ubicaBall= [100, (dimensiones.w / 2) -25, dimensiones.w -150];
    posBolaPuso = [];
    
    context.font = "normal 20px Arial";
    context.fillStyle = "white"
    context.fillText("00", dimensiones.w -50, 20);
    //cañon
    var canyon = nom_div("canyon");
    context.drawImage(canyon, (dimensiones.w / 2)-75 , (dimensiones.h)-200,150,200);
    //bolas
    var balls = [];
    var existe = false;
    for (var i = 1; i <=3; i++) 
        {
        balls.push({ src: nom_div("bola_" + i)});
        
            do {
                    existe = false;
                    var posBola = Math.floor(Math.random()* 3);
                    context.drawImage(balls[i - 1].src, ubicaBall[posBola], 0, 50, 50);
                    for (var c = 0; c < posBolaPuso.length; c++) 
                    {

                     if (posBolaPuso[c] === posBola) 
                                 {
                                    existe = true;
                                    break;
                                }
                }

                                if (!existe)  
                                    {
                                    break;
                                    }

            } while (1);
            posBolaPuso.push(posBola);
      context.drawImage(balls[i - 1].src, ubicaBall[posBola],0,50,50);
}
       
  // bola cañon
  context.drawImage(balls[0].src, (dimensiones.w/ 2) -25, (dimensiones.h) -250, 50, 50);
    //var image = nom_div("source");
    //context.drawImage(image, 0,0,760,500);
    function nom_div(id)
    {
        return  document.getElementById(id);
    }

}
