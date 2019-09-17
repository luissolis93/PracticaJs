let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let numero = document.getElementById('numero');

eventListener();

function eventListener(){
    btnVerificar.addEventListener('click',ULAM);
}

function ULAM(){
    let resultado = '';
    let numeroAux = Number(numero.value);
    console.log(numeroAux);
    do{
        if(numeroAux%2==0){
            
            numeroAux/=2;
            resultado += `  ${numeroAux}  ` ;
        }else{            
            numeroAux=(numeroAux*3)+1;
            console.log(resultado);
            
            resultado += `${numeroAux}   ` ;
        }
        
    }while(numeroAux > 1);
    imprimirREsultado.innerHTML = resultado;


    
}