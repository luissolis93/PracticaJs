//esta linea crea a una valiable la cual se encarga de obtener por medio del objeto document el elemento buttoncon el id"btnCalcular".
let btnCalcular = document.getElementById('btnCalcular');

//por medio del método "addEventListener" se le asigno el evento clic al elemento button. Y al momento de ejecutar dicho evento se  ejecutara la funcuin suma.
btnCalcular.addEventListener('click', suma);

//bloque de codigo que se ejecuta hasta cuando se llama a llamar, mientras no sea invocada no realizara ninguna acccion en el codigo
function suma() {
    //Se obtendra los valores de los inputs por medio del metodo "value".
    let numero_1 = document.getElementById('Numero1').value;
    let numero2 = document.getElementById('Numero2').value;

    //Se  reasigna el valor de la variable numero_1 y numero2 convirtiendolo de String a Numero
    numero_1 = Number(numero_1);
    numero2 = Number(numero2);

    //Se declara variable resultado y se inicializa con valor '0' para especificar   que estipo numerico.
    let resultado = 0;

    //Despues de obtener los datos de los elementos input se realiza el proceso de suma y se le asigna dicho valor a la variable "resultado"
    resultado = numero_1 + numero2;

    //Se asigno a la variable "imprimirResultado" el elemento con el ID "resultado"
    let imprimirResultado = document.getElementById('resultado');

    //Por medio del metodo "innerHTML" se asigna el valor de la variable resultado para que se pueda imprimir en el elemento 
    imprimirResultado.innerHTML = resultado;

}