let btnAgregar=document.getElementById('agregar');
let btnMostrar=document.getElementById('mostrar');
let elementos=[];
let cont=0;


eventListener();

function eventListener(){
    btnAgregar.addEventListener('click',agregar);
    btnMostrar.addEventListener('click',promedioMostrar);
    
}

function agregar(){
    if(cont<10){
    let valorInput=document.getElementById('numero');
    elementos[cont]=Number(valorInput.value);
    console.log(elementos);

 valorInput.value="";
cont++;
    }
}

function promedioMostrar(){
    let promedio=0;
    for(let x=0; x<elementos.length; x++){
        promedio+=elementos[x];
        console.log(elementos[x]);
        
    }
    promedio/=elementos.length;

    cont=0;
    elementos=[];

    let imprimir=`<li class="list-group-item">El promedio es: ${promedio}</li>`

    document.getElementById('ListaImprimir').innerHTML=imprimir;
}