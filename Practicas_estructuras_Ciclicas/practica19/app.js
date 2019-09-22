let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let numero=5;
let aux=0;
let auxSuma=5;
let cont=0;
let resultado = '';

eventListener();

function eventListener(){
    btnVerificar.addEventListener('click',serie);
}

function serie(){
        
    resultado = `  ${numero}  ` ;
    do{
    if(auxSuma<=1800){
        if(cont==0){
            numero+=2;
            resultado += `  -${numero}  ` ;
            cont=1;
            auxSuma+=numero;
        }else if(cont==1){
            numero+=3;
            resultado += `  -${numero}  ` ;
            cont=0;
            auxSuma+=numero;
        }        

    }
}while(auxSuma<=1800);
    imprimirREsultado.innerHTML = resultado;


    
}