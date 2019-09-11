let agregar=document.getElementById('btnAgregarAlm');
let agregarProm=document.getElementById('btnAgregarProm');
let numeroInput=0;



eventListener();

function eventListener(){
    agregar.addEventListener('click',AgregarFormGroup);
    agregarProm.addEventListener('click',CalcularPromedio);
}

function CalcularPromedio(){
    let suma=0;
    let promedio=0;
    for(let x=1; x<=numeroInput; x++){
        let edad= Number(document.getElementById(`edad${x}`).value);
        suma +=edad;
    }

    promedio=suma/numeroInput;
    let imprimir=document.getElementById('imprimir');
    imprimir.innerText=promedio;
}


function AgregarFormGroup(){
    numeroInput++;

    let divRow=document.createElement('div');
    divRow.setAttribute('class','row');

    let divCol=document.createElement('col');
    divCol.setAttribute('class','col-12');

    let divForm=document.createElement('div');
    divForm.setAttribute('class','form-group');

    let label=document.createElement('label');
    let textLabel=document.createTextNode(`Ingresa la edad del alumno ${numeroInput}`);
    label.appendChild(textLabel);



    let input=document.createElement('input');
    input.setAttribute('type','number')
    input.setAttribute('class','form-control');
    input.setAttribute('placeholder','Ingresa edad del alumno');
    input.setAttribute('id',`edad${numeroInput}`);


    let cajaAlm=document.getElementById('cajaAlm');
    cajaAlm.appendChild(divRow);

    divRow.appendChild(divCol);
    divCol.appendChild(divForm);
    divForm.appendChild(label);
    divForm.appendChild(input);










}







