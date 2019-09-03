let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', convertirMetros);
}

function convertirMetros() {
    let pulg = Number(document.getElementById('pulgadas').value);
    let res = 0;

    res=pulg*.0254;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = res+"metros";
}