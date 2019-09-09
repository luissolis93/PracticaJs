let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let pres=document.getElementById('pres');


eventListener();

function eventListener(){
    pres.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',tipobus);
}

function tipobus(){
    let res=Number(pres.value);
    if(res==1500){             
        imprimirREsultado.innerHTML= `<p>Con un presupuesto de $${res} se puede viajar a México`
    }else if(res>=1600 && res<2400){            
        imprimirREsultado.innerHTML= `<p>Con un presupuesto de $${res} se puede viajar a México o P.V.`
    }else if(res>=2400 && res<3600){                
        imprimirREsultado.innerHTML= `<p>Con un presupuesto de $${res} se puede viajar a México, P.V. o Acapulco`
    }else if(res>=3600){     
        imprimirREsultado.innerHTML= `<p>Con un presupuesto de $${res} se puede viajar a México, P.V., Acapulco o Cancún`
    }else{
        imprimirREsultado.innerHTML= `<p>Con un presupuesto de $${res} debe quedarse en casa`
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