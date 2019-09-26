let btnCalcular=document.getElementById('btnCalcular');
let cadena=document.getElementById('cadena');
let imprimir=document.getElementById('imprimir');
let imprimir2=document.getElementById('imprimir2');


eventListener();

function eventListener(){
    btnCalcular.addEventListener('click',encriptar);
}

function encriptar(){
    let cadena2 = cadena.value;
    let ascci=[];
    let ascciConver=[];
    let cadena3="";
    let cadena4="";
    for(let x=0; x<cadena2.length; x++){
        ascci [x]= cadena2.charCodeAt(x)+3;
        cadena3+=`${ascci[x]}-`;
    }
     imprimir.innerHTML=cadena3;
    // for(let x=0; x<cadena3.length; x++){
    //     ascciConver[x]= cadena4.fromCharCode(x);
    //     cadena4+=`${ascciConver[x]}`;
    // }

    // imprimir2.innerHTML=cadena4;
    
}