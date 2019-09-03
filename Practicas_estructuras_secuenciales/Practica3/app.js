let btnCalcular = document.getElementById('btnCalcular');
let btncalcular2 = document.getElementById('btnCalcular2')

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', obtenerarea);
    btncalcular2.addEventListener('click', obtenersemiperimetro);
}

function obtenerarea() {
    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);
    let ladoC = Number(document.getElementById('ladoC').value);
    let semi = 0;
    let res = 0;

    semi=(ladoA+ladoB+ladoC)/2;
    res=Math.sqrt( semi*((semi-ladoA)*(semi-ladoB)*(semi-ladoC)));



    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = res;
}

function obtenersemiperimetro() {
    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);
    let ladoC = Number(document.getElementById('ladoC').value);
    let semi = 0;

    semi=(ladoA+ladoB+ladoC)/2;

    let imprimirResultado = document.getElementById('resultado2');

    imprimirResultado.innerHTML = semi;
}