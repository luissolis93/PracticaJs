let btnCalcular = document.getElementById('btnCalcular');
let botoncalcular = document.getElementById('btnCalcular2')

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', obtenerarea);
    botoncalcular.addEventListener('click', obtenerareasimplificada);
}

function obtenerarea() {
    console.time('obtenerarea');
    //Se declara un elemento constante el cual funcionara para obtener el cálculo de pi
    const Pi = 3.1416;
    let radio = Number(document.getElementById('RadioCirculo').value);

    let resultado = 0;

    resultado = Pi * (radio * radio);

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado;
    console.timeEnd('obtenerarea')
}

function obtenerareasimplificada() {
    console.time('obtenerareasimplificada');

    let radio = Number(document.getElementById('RadioCirculo').value);

    let = resultado = 0;

    //Se invoca el objeto math y se utiliza su propiedad PI(el cual nos manda el valor de dicha constante) y metodo pow(eleva un elemento numerico hacia la potencia que se le solicita)
    resultado = Math.PI * Math.pow(radio, 2);

    let Resultadoimprimir = document.getElementById('resultado');
    Resultadoimprimir.innerHTML = resultado;
    console.timeEnd('obtenerareasimplificada');
}