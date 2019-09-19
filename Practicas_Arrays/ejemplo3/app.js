let btnAgregar=document.getElementById('mostrar');
let elementos=[];
let cont=0;


eventListener();

function eventListener(){
    btnAgregar.addEventListener('click',agregarNum);
    
}

function agregarNum(){
    let valor=document.getElementById('numero');
    let i=0;

    for(i =0; i<elementos.length; i++){        
        
        if(Number(valor.value)===elementos[i]) return
    }
    elementos[i]= Number(valor.value);
    let imprimir="";

    for(let x=0; x<elementos.length; x++){
        imprimir+=`<li class="list-group-item">${elementos[x]} </li> `

    }

    document.getElementById('ListaImprimir').innerHTML=imprimir;



}