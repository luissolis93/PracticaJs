let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let p1=document.getElementById('precio1');
let p2=document.getElementById('precio2');
let p3=document.getElementById('precio3');
let p4=document.getElementById('precio4');
let presu=document.getElementById('presu');


eventListener();

function eventListener(){
    p2.addEventListener('blur',validarDatos);
    p1.addEventListener('blur',validarDatos);
    p3.addEventListener('blur',validarDatos);
    p4.addEventListener('blur',validarDatos);
    presu.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',presupuesto);
}

function presupuesto(){
    let presupuesto=Number(presu.value);
    let total=Number(p1.value)+Number(p2.value)+Number(p3.value)+Number(p4.value);
    if( presupuesto<total ){             
        imprimirREsultado.innerHTML= `<p>El precio esta fuera del presupuesto`
    }else{
        imprimirREsultado.innerHTML= `<p>El precio esta dentro del presupuesto`
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