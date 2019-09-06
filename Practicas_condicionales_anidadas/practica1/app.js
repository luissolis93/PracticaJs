let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let pre=document.getElementById('precio');

eventListener();

function eventListener(){
    pre.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',promedio);
}

function promedio(){
    let res=Number(pre.value);
    if(res>3600){
        res=res*.84;
        imprimirREsultado.innerHTML= `<p>El precio con descuento del traje es ${res}`
    }else{
        res=res*.93;
        imprimirREsultado.innerHTML= `<p>El precio con descuento del traje es ${res}`
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