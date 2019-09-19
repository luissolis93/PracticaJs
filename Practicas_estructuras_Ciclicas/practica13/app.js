let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let numero = document.getElementById('numero');
let cont=0;

eventListener();

function eventListener(){
    btnVerificar.addEventListener('click',primos);
}

function primos(){
    let n = Number(numero.value);  
    let aux=0;
    let resultado = '';

    for(let i=1; i<=n; i++){
            for(let j =n ; j== 1 ; j--){
                
                
            }
        }

  
   


      


imprimirREsultado.innerHTML = resultado;
}
