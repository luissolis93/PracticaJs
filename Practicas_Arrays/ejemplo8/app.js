let btnCalcular=document.getElementById('btnCalcular');
let limite=document.getElementById('limite');
let nombre=document.getElementById('nombre');
let imprimir=document.getElementById('imprimir');
let arrayNom=[];
let arrayLong=[];
let tam=true;
let contLetras=0;
let resultado="";
let lim=0;
let x=0;


eventListener();

function eventListener(){
    btnCalcular.addEventListener('click',calcular);
}

function calcular(){
    let nom=nombre.value;
    let lim=Number(limite.value);

    if(tam==true){
    for(x; x<lim; x++){
        arrayNom[x]=nom;
        arrayLong[x]=arrayNom[x].length;
        resultado+=`${arrayNom[x]}=[${arrayLong[x]}] <br>`;
        imprimir.innerHTML=resultado;
        x++;
        return;
        if(x==5){
            tam=false;
        }
    }
}else{
    console.log("limite de tamaño");
}

   





}