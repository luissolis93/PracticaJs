let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let calif1=document.getElementById('calif1');
let calif2=document.getElementById('calif2');
let calif3=document.getElementById('calif3');
let calif4=document.getElementById('calif4');


eventListener();

function eventListener(){
    calif2.addEventListener('blur',validarDatos);
    calif1.addEventListener('blur',validarDatos);
    calif3.addEventListener('blur',validarDatos);
    calif4.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',presupuesto);
}

function presupuesto(){
    let promedio=Number(calif1.value)+Number(calif2.value)+Number(calif3.value);
    if( (Number(calif1.value)<Number(calif2.value)) && (Number(calif1.value)<Number(calif3.value)) 
    && (Number(calif1.value)<Number(calif4.value))){     
        let promedio=(Number(calif2.value)+Number(calif3.value)+Number(calif4.value))/3;        
        imprimirREsultado.innerHTML= `<p>El promedio es ${promedio}`
    }else if( (Number(calif2.value)<Number(calif1.value)) && (Number(calif2.value)<Number(calif3.value)) 
    && (Number(calif2.value)<Number(calif4.value))){     
        let promedio=(Number(calif1.value)+Number(calif3.value)+Number(calif4.value))/3;        
        imprimirREsultado.innerHTML= `<p>El promedio es ${promedio}`
    }
    else if( (Number(calif3.value)<Number(calif1.value)) && (Number(calif3.value)<Number(calif2.value)) 
    && (Number(calif3.value)<Number(calif4.value))){     
        let promedio=(Number(calif1.value)+Number(calif2.value)+Number(calif4.value))/3;        
        imprimirREsultado.innerHTML= `<p>El promedio es ${promedio}`
    }
    else{    
        let promedio=(Number(calif1.value)+Number(calif2.value)+Number(calif3.value))/3;        
        imprimirREsultado.innerHTML= `<p>El promedio es ${promedio}`
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