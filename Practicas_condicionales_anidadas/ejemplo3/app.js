let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let c1=document.getElementById('cal1');
let c2=document.getElementById('cal2');
let c3=document.getElementById('cal3');


eventListener();

function eventListener(){
    c1.addEventListener('blur',validarDatos);
    c2.addEventListener('blur',validarDatos);
    c3.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',promedio);
}

function promedio(){
    let res=Number(c1.value)+Number(c2.value)+Number(c3.value);
    res=res/3;
    if(res>=9 && res<=10){
        imprimirREsultado.innerHTML= `<p>La calificacion ${res} es aprobatoria`
    }else if(res>=6 && res<9){
        imprimirREsultado.innerHTML= `<p>La calificacion ${res} es regular`
    }else if(res<6){
        imprimirREsultado.innerHTML= `<p>La calificacion ${res} es reprobatoria`
    }else{
        imprimirREsultado.innerHTML= `<p>La calificacion ${res} es incorrecta`
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