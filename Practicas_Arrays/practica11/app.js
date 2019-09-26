let btnCalcular=document.getElementById('btnCalcular');
let btnBuscar=document.getElementById('btnBuscar');
let numero=document.getElementById('numero');
let imprimir=document.getElementById('imprimir');
let imprimir2=document.getElementById('imprimir2');
let arrayNumeros=[];
let resultado="";
let aux=0;


eventListener();

function eventListener(){
    btnCalcular.addEventListener('click',generar);
    btnBuscar.addEventListener('click',buscar);
}

function generar(){
    resultado="";
    resultado2="";
    num=Number(numero.value);
    for(let x=0; x<25; x++){
        num=Math.floor((Math.random() * 100) + 1);
        arrayNumeros[x]=num;        
    }
    console.log(arrayNumeros);
    
    
    for (let i =0; i <25; i++) {
        for (let j = 0; j<25-1; j++) {
            if (arrayNumeros[j] < arrayNumeros[j + 1]) {
                aux = arrayNumeros[j];
                arrayNumeros[j] = arrayNumeros[j + 1];
                arrayNumeros[j + 1] = aux;
                // res2+=`[${j}]=${array1[j]} <br>`
                
            }
        }
       
}

console.log(arrayNumeros);

for(let x=0; x<25; x++){
    resultado+=`[${x+1}]=${arrayNumeros[x]} <br>`
}

imprimir.innerHTML=resultado;

}

function buscar(){
    let centro=0;
    let inf=0;
    let sup=24;
    let num=Number(numero.value);

     while(inf<=sup){
       centro=(sup+inf)/2;
       if(arrayNumeros[centro]==num) return imprimir2.innerHTML=`numero encontrado en el centro`;
       else if(num < arrayNumeros [centro] ){
        return imprimir2.innerHTML=`numero encontrado en el limite inferior`;
          sup=centro-1;
       }
       else {
         inf=centro+1;
         return imprimir2.innerHTML=`numero encontrado en el limite superiror`;
       }
     }
      return imprimir2.innerHTML=`numero no encontrado`;
   

}





