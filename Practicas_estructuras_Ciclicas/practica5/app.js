let btnAgregarVenta=document.getElementById('btnAgregarVenta');
// let venta=document.getElementById('venta');
let cont=0;
let aux1=0;
let aux2=0;
let aux3=0;
let suma=0;

let venta1=document.getElementById('Ventas1');
let venta2=document.getElementById('Ventas2');
let venta3=document.getElementById('Ventas3');
 eventListener();


function eventListener(){
    btnAgregarVenta.addEventListener('click',AgregarVenta);
}

function AgregarVenta(){
    cont=0;
    let ventas=Number(document.getElementById('venta').value);
    if(cont<3){
        // cont++;
    if(ventas>1000){
    aux1++;
    cont++;

    venta1.innerHTML = `${aux1}`;

    CalcularVentas();
} else if(ventas>500 && ventas<=1000){
    aux2++;
    cont+=2;

    venta2.innerHTML = `${aux2}`;

    CalcularVentas();

}else if(ventas<=500){
    aux3++;
    cont+=3;

    venta3.innerHTML = `${aux3}`;

    CalcularVentas();

    }
}


function CalcularVentas(){
    let imprimirTotal=document.getElementById('total');
    let ventas=Number(document.getElementById('venta').value);
    for(let x=1; x<=cont; x++){
        // let valorObtenido=document.getElementById(`Venta${x}`).textContent;
        suma+=ventas;
        break;

    }
    imprimirTotal.innerHTML=`<span> $${suma} </span>`

}

}