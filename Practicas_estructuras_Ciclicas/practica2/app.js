let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');


eventListener();

function eventListener(){
    btnVerificar.addEventListener('click',numPares);
}

function numPares(){
    let resultado = '';
    for(let x=0; x<=100; x++){
        // resultado = x
        
        if(x%2==0){
            resultado = `${resultado}  ${x}  ` ;
        }else{
            resultado = `${resultado}  -  ` ;
        }
        
    }
    imprimirREsultado.innerHTML = resultado;


    
}