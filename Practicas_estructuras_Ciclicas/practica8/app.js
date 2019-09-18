let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let numero = document.getElementById('numero');
// let cont=1;

eventListener();

function eventListener(){
    btnVerificar.addEventListener('click',fibonacci);
}

function fibonacci(){
    let ax = Number(numero.value);
    
    let resultado = '';
    let aux=0;
    let aux1=1;
    let aux2=0;
    
    resultado = `  ${aux2}  ` ;
    for(let i=1; i < ax; i++){ 
        aux=aux1+aux2; 
        resultado += `  -${aux}  ` ;
        aux1=aux2;
        aux2=aux;
    }
    imprimirREsultado.innerHTML = resultado;


    
}