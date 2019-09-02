let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', areaterreno);
}

function areaterreno() {

    let ladoA = Number(document.getElementById('LadoA').value);
    let ladoB = Number(document.getElementById('LadoB').value);
    let ladoC = Number(document.getElementById('LadoC').value);

    let ResultadoAreaRectangulo = 0,
        ResultadoAreaTriangulo = 0,
        ResultadoSumarAreas = 0;


    ResultadoAreaRectangulo = ladoB * ladoC;
    ResultadoAreaTriangulo = ((ladoA - ladoC) * ladoB) / 2;
    ResultadoSumarAreas = ResultadoAreaRectangulo + ResultadoAreaTriangulo;

    let imprimirREsultado = document.getElementById('resultado');
    imprimirREsultado.innerHTML = ResultadoSumarAreas;

};