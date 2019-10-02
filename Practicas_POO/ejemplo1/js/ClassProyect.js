class proyectil{
    velocidadInicial=0;
    angulo=0;
    constructor(velocidadInicial,angulo){
        this.velocidadInicial=velocidadInicial;
        this.angulo=angulo;        
    }

    calcularVelX(t){
        let velX=0;
        velX=(this.velocidadInicial*Math.cos(this.angulo*(Math.PI/180)))*t;
        return velX;
    }

    calcularVelY(t){
        let velY=0;
        velY=(this.velocidadInicial*Math.sin(this.angulo*(Math.PI/180)));
        velY=velY*t-0.5*9.8*Math.pow(t,2);
        return velY;
    }

    crearSpan(PosX,PosY){
        let spanCreado=document.createElement('span');
        spanCreado.style.left=`${PosX}%`;
        spanCreado.style.bottom=`${PosY}%`;
        document.getElementById('contenedor').appendChild(spanCreado);
    }
}