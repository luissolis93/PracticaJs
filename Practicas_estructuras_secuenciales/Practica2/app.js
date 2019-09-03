let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', puntaje);
}

function puntaje() {

    let aciertos = Number(document.getElementById('aciertos').value);
    let fallos = Number(document.getElementById('fallos').value);
    let blanco = Number(document.getElementById('blanco').value);
    let res=0;

    res= ( (aciertos*4)+(fallos*-1)+(blanco*0) );



    let imprimirREsultado = document.getElementById('resultado');
    imprimirREsultado.innerHTML = res;

};