let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let edad1=document.getElementById('edad1');
let edad2=document.getElementById('edad2');
let nombre1=document.getElementById('nombre1');
let nombre2=document.getElementById('nombre2');
let res=0;


eventListener();

function eventListener(){
    edad1.addEventListener('blur',validarDatos);
    edad2.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',verificarMayor);
}

function verificarMayor(){
    if(Number(edad1.value)>Number(edad2.value)){        
        imprimirREsultado.innerText = nombre1.value+' es mayor con '+Number(edad1.value)+" años";
    }else if(Number(edad1.value)<Number(edad2.value)){ 
        imprimirREsultado.innerText = nombre2.value+' es mayor con '+Number(edad2.value)+" años";  
    }else{
        imprimirREsultado.innerText = 'Ambos tiene la misma edad';
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