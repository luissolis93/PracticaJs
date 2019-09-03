let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', distancia);
}

function distancia() {

    let puntoAX = Number(document.getElementById('puntoAX').value);
    let puntoAY = Number(document.getElementById('puntoAY').value);
    let puntoBX = Number(document.getElementById('puntoBX').value);    
    let puntoBY = Number(document.getElementById('puntoBY').value);
    let res=0;

    res= Math.sqrt((Math.pow((puntoAX-puntoBX),2)) + (Math.pow((puntoAY-puntoBY),2)) ) ;



    let imprimirREsultado = document.getElementById('resultado');
    imprimirREsultado.innerHTML = res;

};