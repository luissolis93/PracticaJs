let agregar=document.getElementById('btnAgregarEst');
let promedio=document.getElementById('btnProm');
let numeroInput=0;



eventListener();

function eventListener(){
    agregar.addEventListener('click',AgregarEstatura);
    promedio.addEventListener('click',CalcularPromedio);
}

function CalcularPromedio(){
    let suma=0;
    let promedio=0;
    for(let x=1; x<=numeroInput; x++){
        let estatura= Number(document.getElementById(`estatura${x}`).value);
        suma +=estatura;
    }

    promedio=suma/numeroInput;
    let imprimir=document.getElementById('imprimir');
    imprimir.innerText=promedio;
}


function AgregarEstatura(){
    numeroInput++;

    let divRow=document.createElement('div');
    divRow.setAttribute('class','row');

    let divCol=document.createElement('col');
    divCol.setAttribute('class','col-12');

    let divForm=document.createElement('div');
    divForm.setAttribute('class','form-group');

    let label=document.createElement('label');
    let textLabel=document.createTextNode(`Ingresar estatura ${numeroInput}`);
    label.appendChild(textLabel);



    let input=document.createElement('input');
    input.setAttribute('type','number')
    input.setAttribute('class','form-control');
    input.setAttribute('placeholder','Ingresa estatura a promediar');
    input.setAttribute('id',`estatura${numeroInput}`);


    let cajaEstatura=document.getElementById('estaturas');
    cajaEstatura.appendChild(divRow);

    divRow.appendChild(divCol);
    divCol.appendChild(divForm);
    divForm.appendChild(label);
    divForm.appendChild(input);


}