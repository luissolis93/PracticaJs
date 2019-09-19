let btnAgregar=document.getElementById('agregar');
let btnMostrar=document.getElementById('mostrar');
let elementos=[];
let cont=0;


eventListener();

function eventListener(){
    btnAgregar.addEventListener('click',agregar);
    btnMostrar.addEventListener('click',mostrar);
    
}

function agregar(){
    if(cont<10){
    let valorInput=document.getElementById('numero').value;

    elementos[cont]=valorInput;
    valorInput.value="";
    cont++;
    }
}

function mostrar(){
    let imprimir="";
    for(let x=0; x<elementos.length; x++){
        imprimir+=`<li clas="list-group-item">${elementos[x]} </li> `;
    }

    document.getElementById('ListaImprimir').innerHTML=imprimir;
}