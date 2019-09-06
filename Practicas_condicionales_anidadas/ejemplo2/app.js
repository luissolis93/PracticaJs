let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let n1=document.getElementById('n1');


eventListener();

function eventListener(){
    n1.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',numeroDigitos);
}

function numeroDigitos(){
  let  numero1=Number(n1.value);
    // console.log(n1);
    
    if(numero1>=0 && numero1<=9){
        imprimirREsultado.innerHTML= `<p>El numero ${numero1} tiene 1 digito`
    }else if(numero1>=10 && numero1<=99){
        imprimirREsultado.innerHTML= `<p>El numero ${numero1} tiene 2 digitos`
    }else if(numero1>=100 && numero1<=999){
        imprimirREsultado.innerHTML= `<p>El numero ${numero1} tiene 3 digitos`
    }else{
        imprimirREsultado.innerHTML= `<p>ERROR`
    }
    // console.log(n1);
    
}

function validarDatos(event){
    if(isNaN(event.target.value)){
        event.target.focus();
        imprimirREsultado.innerHTML = 'No es un número';
    }else{
        imprimirREsultado.innerHTML = '';
    }
}