let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let cal=document.getElementById('cal');


eventListener();

function eventListener(){
    cal.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',diadeSemana);
}

function diadeSemana(){
    let calif=Number(cal.value);
    if(calif==10){
        imprimirREsultado.innerHTML = 'La calificacion es A';
    }else if(calif==9){
        imprimirREsultado.innerHTML = 'La calificacion es B';
    }
    else if(calif==8){
        imprimirREsultado.innerHTML = 'La calificacion es C';
    }
    else if(calif==7 || calif==6){
        imprimirREsultado.innerHTML = 'La calificacion es D';
    }
    else if(calif>=0 && calif<=5){
        imprimirREsultado.innerHTML = 'La calificacion es F';
    }
    else {
        imprimirREsultado.innerHTML = 'Calificacion incorrecta';
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