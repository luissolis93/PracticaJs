let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let per=document.getElementById('personas');


eventListener();

function eventListener(){
    per.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',promedio);
}

function promedio(){
    let res=Number(per.value);
    if(res>=1 && res<=200){
        imprimirREsultado.innerHTML= `<p>El costo por platillo es de $95`
    }else if(res>200 && res<=300){
        imprimirREsultado.innerHTML= `<p>El costo por platillo es de $85`
    }else{
        imprimirREsultado.innerHTML= `<p>El costo por platillo es de $75`
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