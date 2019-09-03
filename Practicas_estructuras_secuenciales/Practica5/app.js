let btnCalcular = document.getElementById('btnCalcular');
let btncalcular2 = document.getElementById('btnCalcular2')

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', obtenerVolumen);
    btncalcular2.addEventListener('click', obtenerCosto);
}

function obtenerCosto() {
    let largo = Number(document.getElementById('largo').value);
    let ancho = Number(document.getElementById('ancho').value);
    let profun = Number(document.getElementById('profun').value);
    let lt = Number(document.getElementById('litro').value);
    let vol = 0;
    let res = 0;

    vol=(largo*ancho*profun)*1000;
    res=vol*lt;



    let imprimirResultado = document.getElementById('resultado2');

    imprimirResultado.innerHTML = "$"+res;
}

function obtenerVolumen() {
    let largo = Number(document.getElementById('largo').value);
    let ancho = Number(document.getElementById('ancho').value);
    let profun = Number(document.getElementById('profun').value);
    let vol = 0;

    vol=(largo*ancho*profun)*1000;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = vol + " lts";
}