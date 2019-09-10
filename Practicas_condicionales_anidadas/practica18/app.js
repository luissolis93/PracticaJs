let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let pres=document.getElementById('pres');


eventListener();

function eventListener(){
    pres.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',tipoRegalo);
}

function tipoRegalo(){
    let res=Number(pres.value);
    if(res>0 &&res<=10){             
        imprimirREsultado.innerHTML= `<p>Con un presupuesto de $${res} se regalar una tarjeta`
    }else if(res>=11 && res<=100){            
        imprimirREsultado.innerHTML= `<p>Con un presupuesto de $${res} se puede regalar una tarjeta o chocolates`
    }else if(res>=101 && res<=250){                
        imprimirREsultado.innerHTML= `<p>Con un presupuesto de $${res} se puede regalar una tarjeta, flores o chocolates`
    }else if(res>=251){     
        imprimirREsultado.innerHTML= `<p>Con un presupuesto de $${res} se puede regalar una tarjeta, flores, un anillo o chocolates`
    }else{
        imprimirREsultado.innerHTML= `<p>Con un presupuesto de $${res} no se puede regalar nada`
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