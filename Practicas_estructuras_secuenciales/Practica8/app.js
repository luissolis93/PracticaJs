let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', obtenerViaticos);
}

function obtenerViaticos() {
    let hotel = Number(document.getElementById('hotel').value);
    let comida = Number(document.getElementById('comida').value);
    let dias = Number(document.getElementById('dias').value);
    let res = 0;

    res=hotel+comida+(100*dias);

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = "$"+res;
}