let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let num=document.getElementById('num');


eventListener();

function eventListener(){
    num.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',diadeSemana);
}

function diadeSemana(){
    let DS=Number(num.value);
    if(DS==1){
        imprimirREsultado.innerHTML = 'Es Lunes';
    }else if(DS==2){
        imprimirREsultado.innerHTML = 'Es Martes';
    }
    else if(DS==3){
        imprimirREsultado.innerHTML = 'Es Miercoles';
    }
    else if(DS==4){
        imprimirREsultado.innerHTML = 'Es Jueves';
    }
    else if(DS==5){
        imprimirREsultado.innerHTML = 'Es Viernes';
    }
    else if(DS==6){
        imprimirREsultado.innerHTML = 'Es Sabado';
    }
    else if(DS==7){
        imprimirREsultado.innerHTML = 'Es Domingo';
    }
    else {
        imprimirREsultado.innerHTML = 'Dia incorrecto';
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