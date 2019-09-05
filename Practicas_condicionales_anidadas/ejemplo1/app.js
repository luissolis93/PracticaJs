let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let n1=document.getElementById('n1');
let n2=document.getElementById('n2');
let n3=document.getElementById('n3');


eventListener();

function eventListener(){
    n1.addEventListener('blur',validarDatos);
    n2.addEventListener('blur',validarDatos);
    n3.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',numeroMayor);
}

function numeroMayor(){
    if(Number(n1.value)>Number(n2.value) && Number(n1.value)>Number(n3.value)){
        // imprimirREsultado.innerHTML = 'El número mayor es '+n1.value;
        n1=Number(n1.value);
        imprimirREsultado.innerHTML= `<p>El numero mayor es ${n1}`
    }else if(Number(n2.value)>Number(n1.value) && Number(n2.value)>Number(n3.value)){
        imprimirREsultado.innerHTML = 'El número mayor es '+n2.value;
    }else if(Number(n3.value)>Number(n1.value) && Number(n3.value)>Number(n2.value)){
        imprimirREsultado.innerHTML = 'El número mayor es '+n3.value;
    }else{
        imprimirREsultado.innerHTML = 'Todos los números son iguales';
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