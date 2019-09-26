let btnCalcular=document.getElementById('btnCalcular');
let limite=document.getElementById('limite');
let imprimir=document.getElementById('imprimir');
let imprimir2=document.getElementById('imprimir2');
let arrayNumeros=[];
let arrayPares=[];
let resultado="";
let resultado2="";


eventListener();

function eventListener(){
    btnCalcular.addEventListener('click',calcular);
}

function calcular(){
    resultado="";
    resultado2="";
    let num=0;
    for(let x=0; x<30; x++){
        num=Math.floor((Math.random() * 100) + 300);
        arrayNumeros[x]=num;        
        resultado+=`[${x+1}]=${arrayNumeros[x]} <br>`;
        imprimir.innerHTML=resultado;
        if(arrayNumeros[x]%2!=0){ 
            arrayPares[x]=arrayNumeros[x];
            resultado2+=`[${x+1}]=${arrayPares[x]} <br>`;
            imprimir2.innerHTML=resultado2;
        }         
}


   





}