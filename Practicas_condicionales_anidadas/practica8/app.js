let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let n1=document.getElementById('n1');
let n2=document.getElementById('n2');


eventListener();

function eventListener(){
    n2.addEventListener('blur',validarDatos);
    n1.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',multiplos);
}

function multiplos(){
    let num1=Number(n1.value);
    let num2=Number(n2.value);
   if(num1>num2){
    if( num1%num2==0 ){             
        imprimirREsultado.innerHTML= `<p>Los números ${num1} y ${num2} son multiplos`
    }else{
        imprimirREsultado.innerHTML= `<p>Los números ${num1} y ${num2} NO son multiplos`
    }
   }else{
    if( num2%num1==0 ){             
        imprimirREsultado.innerHTML= `<p>Los números ${num1} y ${num2} son multiplos`
    }else{
        imprimirREsultado.innerHTML= `<p>Los números ${num1} y ${num2} NO son multiplos`
    }
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