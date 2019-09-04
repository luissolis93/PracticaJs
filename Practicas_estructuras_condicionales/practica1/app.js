let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let imprimirREsultado2 = document.getElementById('imprimir2');
let edad1=document.getElementById('edad1');
let edad2=document.getElementById('edad2');
let res=0;


eventListener();

function eventListener(){
    edad1.addEventListener('blur',validarDatos);
    edad2.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',verificarMayor);
}

function verificarMayor(){
    console.log(edad1.value);
    console.log(edad2.value);
    if(Number(edad1.value)>Number(edad2.value)){        
        imprimirREsultado.innerText = 'Hermano 1 es mayor';
        res=Number(edad1.value)-Number(edad2.value);
        imprimirREsultado2.innerText = 'Hermano 1 es mayor por '+res+" años";
    }else if(Number(edad1.value)<Number(edad2.value)){
        imprimirREsultado.innerText = 'Hermano 2 es mayor';  
        res=Number(edad2.value)-Number(edad1.value);
        imprimirREsultado2.innerText = 'Hermano 2 es mayor por '+res+" años";  
    }else{
        imprimirREsultado.innerText = 'Ambos Hermanos tiene la misma edad';
    }
}

function validarDatos(event){
    // console.log(event.target.value);
    if(isNaN(event.target.value)){
        event.target.focus();
        imprimirREsultado.innerHTML = 'No es un número';
    }else{
        imprimirREsultado.innerHTML = '';
        imprimirREsultado2.innerHTML = '';
    }
}