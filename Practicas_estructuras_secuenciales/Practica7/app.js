let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', obtenerhipo);
}

function obtenerhipo() {
    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);
    let res = 0;

    res=Math.sqrt(   (Math.pow(ladoA,2))+(Math.pow(ladoB,2))        );



    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = res;
}