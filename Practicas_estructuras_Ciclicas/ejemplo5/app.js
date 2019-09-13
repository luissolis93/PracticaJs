let BtnAgregarArticulo = document.getElementById('BtnAgregarArticulo');
let BtnCalcularTotal = document.getElementById('BtnCalcularTotal');
let contador = 0;
let contadorArticulo = 0;

EventListener();

function EventListener() {
    BtnAgregarArticulo.addEventListener('click', AgregarINputArticulo);
    BtnCalcularTotal.addEventListener('click', CalcularTotal);
}

function AgregarINputArticulo() {

    contador++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let InputGroup = document.createElement('div');
    InputGroup.setAttribute('class', 'input-group mb-3');

    let InputArticulo = document.createElement('input');
    InputArticulo.setAttribute('tipe', 'text');
    InputArticulo.setAttribute('class', 'form-control');
    InputArticulo.setAttribute('placeholder', 'Ingresa el nombre del articulo');

    let InputGroupAppend = document.createElement('div');
    InputGroupAppend.setAttribute('class', 'input-group-append');

    let buttonAgregarPrecio = document.createElement('button');
    buttonAgregarPrecio.setAttribute('id', `BtnAgregarPrecio${contador}`)
    buttonAgregarPrecio.setAttribute('class', 'btn btn-outline-secondary');

    buttonAgregarPrecio.appendChild(document.createTextNode('Agregar Precio'))

    let listaArticulos = document.getElementById('listaArticulos');

    listaArticulos.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(InputGroup);
    InputGroup.appendChild(InputArticulo);
    InputGroup.appendChild(InputGroupAppend);
    InputGroupAppend.appendChild(buttonAgregarPrecio);

    EventListenerAgregarPrecio();

}

function EventListenerAgregarPrecio() {
    let btnAgregarPrecio = document.getElementById(`BtnAgregarPrecio${contador}`);
    btnAgregarPrecio.addEventListener('click', CrearInputPrecio);
}

function CrearInputPrecio(event) {
    // alert('Works');
    contadorArticulo++;
    event.target.setAttribute('disabled', 'true')

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let InputGroup = document.createElement('div');
    InputGroup.setAttribute('class', 'input-group mb-3');

    let InputPrecioArticulo = document.createElement('input');
    InputPrecioArticulo.setAttribute('id', `valorArticulo${contadorArticulo}`)
    InputPrecioArticulo.setAttribute('tipe', 'number');
    InputPrecioArticulo.setAttribute('class', 'form-control');
    InputPrecioArticulo.setAttribute('placeholder', 'Ingresa el precio del articulo');

    let listaArticulos = event.target.parentElement.parentElement.parentElement.parentElement

    listaArticulos.appendChild(DivCol);
    DivCol.appendChild(InputGroup);
    InputGroup.appendChild(InputPrecioArticulo);
}

function CalcularTotal() {

    let imprimir = document.getElementById('resultado');
    let suma = 0;
    for (let i = 1; i <= contadorArticulo; i++) {

        let valorInput = Number(document.getElementById(`valorArticulo${i}`).value);

        if (valorInput >= 200) {
            suma += valorInput * .85;
            imprimir.innerText = suma
        } else if (valorInput < 200 && valorInput >= 100) {
            suma += valorInput * .88;
            imprimir.innerText = suma
        } else {
            suma += valorInput * .90;
            imprimir.innerText = suma
        }
    }



}