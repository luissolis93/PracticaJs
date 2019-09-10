let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let zona=document.getElementById('zona');
let peso=document.getElementById('peso');


eventListener();

function eventListener(){
    peso.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',envio);
}

function envio(){
    let costo=0;
    let Peso=Number(peso.value);
   
    if(Peso<5){
    if(zona.value=="AN"){
        costo=Peso*11;
        imprimirREsultado.innerHTML= `<p>El costo total de envio es $${costo}`

    }else if(zona.value=='AC'){
        costo=Peso*10;
        imprimirREsultado.innerHTML= `<p>El costo total de envio es $${costo}`

    }else if(zona.value=='AS'){
        costo=Peso*12;        
        imprimirREsultado.innerHTML= `<p>El costo total de envio es $${costo}`
    }else if(zona.value=='Europa'){
        costo=Peso*24;
        imprimirREsultado.innerHTML= `<p>El costo total de envio es $${costo}`
    }else if(zona.value=='Asia'){
        costo=Peso*27;
        imprimirREsultado.innerHTML= `<p>El costo total de envio es $${costo}`
        
    }
  }else{
    imprimirREsultado.innerHTML= `No se puede mandar paquete por exceso de peso`
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