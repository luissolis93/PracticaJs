let grados=document.getElementById('grados');
let vel=document.getElementById('vel');
let calcular=document.getElementById('calcular');

eventListener();

function eventListener(){
    calcular.addEventListener('click',parabola);
}

async function parabola(){
velocidad=Number(vel.value);
grad=Number(grados.value);

if(grad>0 && grad<=90){

let proyectil = new Proyectil(velocidad, grad);
console.log(proyectil.velocidadInicial);
console.log(proyectil.angulo);
for (let tiempo = 0; tiempo <= 15; tiempo += 0.01) {
    let posicionx=proyectil.calcularVelocidadX(tiempo);
    let posiciony=proyectil.calcularVelocidadY(tiempo);

    if((posicionx>=0 && posiciony>=0)&&(posiciony<=100 && posicionx<=100)){
    // proyectil.crearSpan(posicionx,posiciony);
    await stop(proyectil,posicionx,posiciony)
}

}
}
}

function stop(proyectil,posicionx,posiciony){
    return new Promise((res,rej)=>{
        setTimeout(()=>
        res(proyectil.crearSpan(posicionx,posiciony),200))
    })
}