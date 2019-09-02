let btnCalcuar = document.getElementById('btnCalcular');

//Se invoca funcion "eventListener"
eventListener();

//Se crea la funcion enentListener para encapsular los objetos que llevaran el metodo de "eventListener"
function eventListener() {
    btnCalcuar.addEventListener('click', ObtenerArea)
}


function ObtenerArea() {
    //Se obitne el valor de los input y se convierte su tipo de dato a Number y se le asigna el valor a la variable correspondiente.
    let Base = Number(document.getElementById('Base').value);
    let Altura = Number(document.getElementById('Altura').value);

    let resultado = 0;

    resultado = (Base * Altura) / 2;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado;



}