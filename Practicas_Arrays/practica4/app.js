let btnCalcular=document.getElementById('btnCalcular');
let imprimir=document.getElementById('imprimir');
let imprimir2=document.getElementById('imprimir2');
let array1=[];
let array2=[];
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
    for(let x=0; x<10; x++){
        num=Math.floor((Math.random() * 50) + 50);
        array1[x]=num;        
        resultado+=`[${x+1}]=${array1[x]} <br>`;
        imprimir.innerHTML=resultado;
        
        array2[x]=array1[x]*0.5;
        resultado2+=`[${x+1}]=${array2[x]} <br>`;
        imprimir2.innerHTML=resultado2;
                 
}


   





}