let btnAhorro=document.getElementById('btnAhorro');
let imprimir=document.getElementById('imprimir');

 eventListener();


function eventListener(){
    btnAhorro.addEventListener('click',ahorro);
    
}

function ahorro(){
    let ahorro=0;
    let aux=0;
    for(let x=1; x<=365; x++){
        aux=Math.pow(3,x);  
        console.log(aux);
              
        ahorro+=aux;
    }

    imprimir.innerText=`Ahorro anual es de $${ahorro}`;

    

}