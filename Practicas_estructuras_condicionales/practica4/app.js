let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let nombre = document.getElementById('nombre');
let precio=document.getElementById('precio');
let clave=document.getElementById('clave');
let res=0;


eventListener();

function eventListener(){
    precio.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',descuento);
}

function descuento(){
    if(Number(clave.value)==01){   
        res=Number(precio.value)*.90;
        imprimirREsultado.innerHTML = "El precio final es $"+res+" "+nombre.value;
    }else if(Number(clave.value)==02){
        res=Number(precio.value)*.80;
        imprimirREsultado.innerHTML = "El precio final es $"+res+" "+nombre.value;
    }else{
        imprimirREsultado.innerHTML = "Clave invalida";
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