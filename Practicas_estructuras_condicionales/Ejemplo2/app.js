let btnVerificar=document.getElementById('btnVerificar');


eventListener();

function eventListener(){
    btnVerificar.addEventListener('click',verificarMayor);
}

function verificarMayor(){
    let n1=Number(document.getElementById('n1').value);
    let n2=Number(document.getElementById('n2').value);
    let imprimirREsultado = document.getElementById('imprimir');

    if(n1>n2){        
        imprimirREsultado.innerHTML = 'Numero 1 es mayor';
    }else if(n1<n2){
        imprimirREsultado.innerHTML = 'Numero 2 es mayor';    
    }else{
        imprimirREsultado.innerHTML = 'Ambos son iguales';
    }
}