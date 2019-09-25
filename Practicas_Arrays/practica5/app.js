let btnCalcular=document.getElementById('btnCalcular');
let imprimir=document.getElementById('imprimir');
let array=[];
let resultado="";


eventListener();

function eventListener(){
    btnCalcular.addEventListener('click',calcular);
}

function calcular(){
    resultado="";
    let contador=0;
    let numero=1;
    for(let i=1; i<=1000; i++){
        for(let j=1; j<=1000; j++){        
            if((i % j) == 0){
                contador++;
            }
            
    }
    if(contador <= 2){
        resultado+=`${i}-`
    }
    contador=0;
}

    imprimir.innerHTML=resultado;


   





}