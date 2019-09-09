let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let n1=document.getElementById('n1');
let n2=document.getElementById('n2');
let n3=document.getElementById('n3');


eventListener();

function eventListener(){
    n2.addEventListener('blur',validarDatos);
    n1.addEventListener('blur',validarDatos);
    n3.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',descendente);
}

function descendente(){
    if( (Number(n1.value)<Number(n2.value)) && (Number(n1.value)<Number(n3.value)) && (Number(n2.value)<Number(n3.value)) ){             
        imprimirREsultado.innerHTML= `<p>Orden descendente ${n1.value}-${n2.value}-${n3.value}`
    }else if( (Number(n1.value)<Number(n2.value)) && (Number(n1.value)<Number(n3.value)) && (Number(n3.value)<Number(n2.value)) ){             
        imprimirREsultado.innerHTML= `<p>Orden descendente ${n2.value}-${n1.value}-${n3.value}`
    }else if( (Number(n2.value)<Number(n1.value)) && (Number(n2.value)<Number(n3.value)) && (Number(n1.value)<Number(n3.value)) ){             
        imprimirREsultado.innerHTML= `<p>Orden descendente ${n2.value}-${n1.value}-${n3.value}`
    }else if( (Number(n2.value)<Number(n1.value)) && (Number(n2.value)<Number(n3.value)) && (Number(n3.value)<Number(n1.value)) ){             
        imprimirREsultado.innerHTML= `<p>Orden descendente ${n2.value}-${n3.value}-${n1.value}`
    }else if( (Number(n3.value)<Number(n1.value)) && (Number(n3.value)<Number(n2.value)) && (Number(n1.value)<Number(n2.value)) ){             
        imprimirREsultado.innerHTML= `<p>Orden descendente ${n3.value}-${n1.value}-${n2.value}`
    }else if( (Number(n3.value)<Number(n1.value)) && (Number(n3.value)<Number(n2.value)) && (Number(n2.value)<Number(n1.value)) ){             
        imprimirREsultado.innerHTML= `<p>Orden descendente ${n3.value}-${n2.value}-${n1.value}`
    }else{
        imprimirREsultado.innerHTML= `<p>Los números son iguales`
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