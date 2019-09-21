let btnVerificar=document.getElementById('btnVerificar');
let imprimirImpar = document.getElementById('imprimirImpar');
let imprimirPar = document.getElementById('imprimirPar');
let msj = document.getElementById('msj');
let numero = document.getElementById('numero');
let cont=0;
let contPar=0;
let par=0;
let impar=0;

eventListener();

function eventListener(){
    btnVerificar.addEventListener('click',ParImpar);
}

function ParImpar(){
    let numeroAux = Number(numero.value);

    if(cont!=5){
        if(numeroAux%2==0){
            par+=numeroAux;            
            contPar++;
            msj.innerHTML=`Par`;
            cont++;
            par=par/contPar;
        }else{
            impar+=numeroAux;
            msj.innerHTML=`Impar`;
            cont++;
        }
}else{
    msj.innerHTML=`Limite Numeros`;
}
    

    if(cont!=5){
    imprimirImpar.innerHTML = `${impar}`;
    imprimirPar.innerHTML = `${par}`;
    }


    
}
