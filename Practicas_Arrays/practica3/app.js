let btnCalcular=document.getElementById('btnCalcular');
let limite=document.getElementById('limite');
let numero=document.getElementById('numero');
let imprimir=document.getElementById('imprimir');
let imprimir2=document.getElementById('imprimir2');
let arrayNumeros=[];
let arrayPares=[];
let tam=true;
let contLetras=0;
let resultado="";
let resultado2="";
let lim=0;
let x=0;
let y=0;


eventListener();

function eventListener(){
    btnCalcular.addEventListener('click',calcular);
}

function calcular(){
    let num=numero.value;
    let lim=Number(limite.value);

    if(tam==true){
    for(x; x<lim; x++){
        arrayNumeros[x]=num;        
        resultado+=`${arrayNumeros[x]} <br>`;
        imprimir.innerHTML=resultado;
        if(arrayNumeros[x]%2==0){ 
            arrayPares[x]=arrayNumeros[x];
            resultado2+=`${arrayPares[x]} <br>`;
            imprimir2.innerHTML=resultado2;
        }  
        x++;
        return; 
        
    }

}if(x==lim){   
    Swal.fire({
        type: 'error',
        title: 'Exedio el numero de palabras...',
        text: 'favor de aumentar el numero de palabras a evaluar',
      })
}
   





}