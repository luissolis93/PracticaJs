let btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', costo);

function costo() {

    let valor1 = document.getElementById('metros').value;
    let valor2 = document.getElementById('costo').value;

    valor1 = Number(valor1);
    valor2 = Number(valor2);


    let result = 0;

    result = valor1 * valor2;
    console.log(result);


    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = ('$') + result;
}