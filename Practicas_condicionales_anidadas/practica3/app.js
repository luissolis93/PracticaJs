let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let hrs=document.getElementById('hrs');


eventListener();

function eventListener(){
    hrs.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',estacionamiento);
}

function estacionamiento(){
    let res=0;
    let numH=Number(hrs.value);
    if(numH<=2){ 
        res=numH*5;               
        imprimirREsultado.innerHTML= `<p>Costo de la tarifa de estacionamiento es de $${res} `
    }else if(numH>2 && numH<=5){        
        let aux=0;
        aux=numH-2
        numH=numH-aux;    
        res=(numH*5)+(aux*4);               
        imprimirREsultado.innerHTML= `<p>Costo de la tarifa de estacionamiento es de $${res} `
    }else if(numH>5 && numH<=10){        
        let aux=0,
        aux2=0;
        aux=numH-5;
        aux2=numH-aux-2;
        numH=numH-aux2-aux;    
        res=(numH*5)+(aux*3)+(aux2*4);               
        imprimirREsultado.innerHTML= `<p>Costo de la tarifa de estacionamiento es de $${res} `
    }else if(numH>10){        
        let aux=0,
        aux2=0,
        aux3=0;
        aux=numH-10;
        aux2=numH-aux-5;
        aux3=numH-aux2-aux-2;
        numH=numH-aux2-aux-aux3;    
        res=(numH*5)+(aux*2)+(aux2*3)+(aux3*4);               
        imprimirREsultado.innerHTML= `<p>Costo de la tarifa de estacionamiento es de $${res} `
    }else{

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