let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let n1=document.getElementById('n1');
let n2=document.getElementById('n2');


eventListener();

function eventListener(){
    n1.addEventListener('blur',validarDatos);
    n2.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',verificarMayor);
}

function verificarMayor(){
    if(Number(n1.value)>Number(n2.value)){        
        imprimirREsultado.innerText = 'Numero 1 es mayor';
    }else if(Number(n1.value)<Number(n2.value)){
        imprimirREsultado.innerText = 'Numero 2 es mayor';    
    }else{
        imprimirREsultado.innerText = 'Ambos números son iguales son iguales';
    }
}

function validarDatos(event){
    console.log(event.target.value);
    if(isNaN(event.target.value)){
        event.target.focus();
        imprimirREsultado.innerHTML = 'No es un número';
    }else{
        imprimirREsultado.innerHTML = '';
    }
}