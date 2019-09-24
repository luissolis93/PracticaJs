let btnCalcular=document.getElementById('btnCalcular');
let limite=document.getElementById('limite');
let imprimir=document.getElementById('imprimir');
let imprimir2=document.getElementById('imprimir2');
let arrayNumeros=[];
let arrayPares=[];
let resultado="";
let resultado2="";
let lim=0;


eventListener();

function eventListener(){
    btnCalcular.addEventListener('click',calcular);
}

function calcular(){
    resultado="";
    resultado2="";
    let num=0;
    let lim=Number(limite.value);
    for(let x=0; x<lim; x++){
        num=Math.floor((Math.random() * 100) + 1);
        arrayNumeros[x]=num;        
        resultado+=`[${x}]=${arrayNumeros[x]} <br>`;
        imprimir.innerHTML=resultado;
        if(arrayNumeros[x]%2==0){ 
            arrayPares[x]=arrayNumeros[x];
            resultado2+=`[${x}]=${arrayPares[x]} <br>`;
            imprimir2.innerHTML=resultado2;
        }         
}


   





}