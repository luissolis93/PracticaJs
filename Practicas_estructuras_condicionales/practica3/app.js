let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let LA=document.getElementById('ladoA');
let LB=document.getElementById('ladoB');
let LC=document.getElementById('ladoC');


eventListener();

function eventListener(){
    LA.addEventListener('blur',validarDatos);
    LB.addEventListener('blur',validarDatos);
    LC.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',tipodeTriangulo);
}

function tipodeTriangulo(){
    if((Number(LA.value)>Number(LC.value))&&(Number(LA.value)>Number(LB.value))&&(Number(LB.value)==Number(LC.value))){        
        imprimirREsultado.innerHTML = 'ES UN TRIANGULO ISOSELES';
    }else if((Number(LB.value)>Number(LC.value))&&(Number(LB.value)>Number(LA.value))&&(Number(LA.value)==Number(LC.value))){
        imprimirREsultado.innerHTML = 'ES UN TRIANGULO ISOSELES';
    }
    else if((Number(LC.value)>Number(LA.value))&&(Number(LC.value)>Number(LB.value))&&(Number(LB.value)==Number(LA.value))){
        imprimirREsultado.innerHTML = 'ES UN TRIANGULO ISOSELES';
    }
    else if((Number(LC.value)!=Number(LA.value))&&(Number(LC.value)!=Number(LB.value))&&(Number(LB.value)!=Number(LA.value))){
        imprimirREsultado.innerHTML = 'ES UN TRIANGULO ESCALENO';
    }else{
        imprimirREsultado.innerHTML = 'ES UN TRIANGULO EQUILATERO';
    }
    
}

function validarDatos(event){
    if(isNaN(event.target.value)){
        event.target.focus();
        imprimirREsultado.innerHTML = 'No es un número';
    }else{
        imprimirREsultado.innerHTML = '';
    }
}