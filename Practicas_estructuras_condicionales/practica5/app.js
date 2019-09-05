let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let precio=document.getElementById('cantidad');
let res=0;


eventListener();

function eventListener(){
    precio.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',descuento);
}

function descuento(){
    if(Number(precio.value)>1000){   
        res=Number(precio.value)*.80;
        imprimirREsultado.innerHTML = "El precio final es $"+res;
    }else{
        res=Number(precio.value);
        imprimirREsultado.innerHTML = "El precio final es $"+res;
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