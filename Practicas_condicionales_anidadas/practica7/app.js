let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let n1=document.getElementById('n1');


eventListener();

function eventListener(){
    n1.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',presupuesto);
}

function presupuesto(){
    let unidades=Math.floor((Number(n1.value)%100)%10);
    let centenas=Math.floor((Number(n1.value)/100));
    if( unidades==centenas ){             
        imprimirREsultado.innerHTML= `<p>El número es capicuo`
    }else{
        imprimirREsultado.innerHTML= `<p>El numero no es capicua`
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