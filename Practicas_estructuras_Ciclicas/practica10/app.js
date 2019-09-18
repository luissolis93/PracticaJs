let btnAgregar=document.getElementById('btnAgregar');
let cont=0;
let aux1=0;
let aux2=0;
let aux3=0;
let aux4=0;
let suma=0;
let auxBreak=1;

let votoa=document.getElementById('votoa');
let votob=document.getElementById('votob');
let votoc=document.getElementById('votoc');
let votod=document.getElementById('votod');
 eventListener();


function eventListener(){
    btnAgregar.addEventListener('click',AgregarVoto);
}

function AgregarVoto(){
    let imprimir=document.getElementById('imprimir');
    let Votos=Number(document.getElementById('Votos').value);
    
    if(auxBreak==1 && Votos!=0){
    if(Votos==1){
    aux1++;
    cont++;

    votoa.innerHTML = `${aux1}`;

    CalcularVotos();
} else if(Votos==2){
    aux2++;
    cont+=1;

    votob.innerHTML = `${aux2}`;

    CalcularVotos();

}else if(Votos==3){
    aux3++;
    cont+=1;

    votoc.innerHTML = `${aux3}`;

    CalcularVotos();

}else if(Votos==4){
    aux3++;
    cont+=1;

    votod.innerHTML = `${aux3}`;

    CalcularVotos();

}else{
    imprimir.innerHTML="Voto invalido"
}
    }else{
        auxBreak=0;
        imprimir.innerHTML="Fin de la encuesta"
    }


function CalcularVotos(){
    let imprimirTotal=document.getElementById('total');
    for(let x=1; x<=cont; x++){
        // let valorObtenido=document.getElementById(`Venta${x}`).textContent;
        suma+=x;
        break;

    }
    imprimirTotal.innerHTML=`<span>Total de votos: ${cont} </span>`

}

}