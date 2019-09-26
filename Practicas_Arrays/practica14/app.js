let btnCalcular=document.getElementById('btnCalcular');
let limite=document.getElementById('limite');
let imprimir=document.getElementById('imprimir');
let imprimir2=document.getElementById('imprimir2');
let tam=document.getElementById('tam');
let arrayNumeros=[];
let arrayOrdenado=[];
let aux=0;
let aux2=0;
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
    let tamanio=Number(tam.value);
    for(let x=0; x<tamanio; x++){
        num=Math.floor((Math.random() * 50) + 100);
        arrayNumeros[x]=num;        
        resultado+=`[${x+1}]=${arrayNumeros[x]} <br>`;
        imprimir.innerHTML=resultado;       
}

      for(let i=1; i<arrayNumeros.length; i++){
          aux=arrayNumeros[i];
          aux2=i-1;
          while((aux2>=0) && (aux<arrayNumeros[aux2])){
              arrayNumeros[aux2+1]=arrayNumeros[aux2];
              aux2--;

          }
          arrayNumeros[aux2+1]=aux;
      }

      for(let x=0; x<tamanio; x++){
        resultado2+=`[${x+1}]=${arrayNumeros[x]} <br>`;
      }
      imprimir2.innerHTML=resultado2;

}