let btnVerificar=document.getElementById('btnVerificar');
let imprimirImpar = document.getElementById('imprimirImpar');
let imprimirPar = document.getElementById('imprimirPar');
let msj = document.getElementById('msj');
let numero = document.getElementById('numero');
let cont=0;
let contPos=0;
let contNum=0
let positivos=0;
let numeros=0;
let impar=0;
let x=0;

eventListener();

function eventListener(){
    btnVerificar.addEventListener('click',ParImpar);
}

function ParImpar(){
    let numeroAux = Number(numero.value);

    // do{
    if(cont!=100){
        if(numeroAux>0){
            positivos+=numeroAux;  
            numeros+=numeroAux;          
            contPos++;
            contNum++;
            msj.innerHTML=`Positivo`;
            cont++;
            x++;
            positivos=positivos/contPos;
            numeros=numeros/contNum;
        }else{
            numeros+=numeroAux;            
            contNum++;
            contPos++;
            msj.innerHTML=`Negativo`;
            cont++;
            x++;
            numeros=numeros/contNum;
        }
}else{
    msj.innerHTML=`Limite Numeros`;
}
    // }while(x<=cont);

    

    if(cont!=5){
    imprimirImpar.innerHTML = `Promedio positivos ${positivos}`;
    imprimirPar.innerHTML = `Promedio todos los numeros ${numeros}`;
    }


    
}