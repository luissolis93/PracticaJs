let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', distancia);
}

function distancia() {

    let vel = Number(document.getElementById('vel').value);
    let dis = Number(document.getElementById('dis').value);

    let res=0;


    res=vel*dis;

    let imprimirREsultado = document.getElementById('resultado');
    imprimirREsultado.innerHTML = res + " metros";

};