// for(int i=0; i<M.length; i++){
//     int vecesQueSeRepite = 0;
//     for(int j=0; j<M.length; j++){
//     if(M[i] == M[j])
//     vecesQueSeRepite++;
//     }
//     if(vecesQueSeRepite > maximaVecesQueSeRepite){
//     moda = M[i];
//     maximaVecesQueSeRepite = vecesQueSeRepite;
//     }
//     }
    
//     System.out.println("La moda es "+moda+" y se repitió "+maximaVecesQueSeRepite+" veces.");
//     }
//     }

//boton
let btnCalcular=document.getElementById('btnCalcular');
let btnCalcular2=document.getElementById('btnCalcular2');
//alerts
let limite=document.getElementById('limite');
let numero=document.getElementById('numero');
let media=document.getElementById('media');
let moda=document.getElementById('moda');
let mediana=document.getElementById('mediana');
let arreglo=document.getElementById('arreglo');
let varianza=document.getElementById('varianza');
let desv=document.getElementById('desv');
//arrays
let arrayNum=[];
let aux=0;
let tam=true;
let resultado="";
let lim=0;
let x=0;


eventListener();

function eventListener(){
    btnCalcular.addEventListener('click',agregar);
    btnCalcular2.addEventListener('click',calcular);

}

function agregar(){
    let num=Number(numero.value);
    let lim=Number(limite.value);

    if(tam==true){
        //Array
    for(x; x<lim; x++){
        arrayNum[x]=num;        
        resultado+=`${arrayNum[x]} <br>`;
        arreglo.innerHTML=resultado;
        x++;
        return; 
    }
}
if(x==lim){   
    Swal.fire({
        type: 'error',
        title: 'Exedio el numero de palabras...',
        text: 'favor de aumentar el numero de palabras a evaluar',
      })
}}


//media
// function calcular(){
//     let lim=Number(limite.value);
    
//       //Promedio
//       for(let i=0; i<lim; i++){  
//         aux+=arrayNum[i];     
// }
// aux/=lim;
// media.innerHTML=`Media ${aux}`;

// }


//moda
function calcular(){
    let lim=Number(limite.value);
    let vecesQueSeRepite=0;
    let maximaVecesQueSeRepite=0;
    let moda=0;
    
    for(let i=0; i<arrayNum.length; i++){
             vecesQueSeRepite = 0;
            for(let j=1; j<arrayNum.length-1; j++){
            if(arrayNum[i] == arrayNum[j]){
            vecesQueSeRepite++;
            }
            if(vecesQueSeRepite > maximaVecesQueSeRepite){
            moda = arrayNum[i];
            maximaVecesQueSeRepite = vecesQueSeRepite;
            }
            }
            
            media.innerHTML=`Moda ${aux}`;
            }}
            






// media.innerHTML=`Media ${aux}`;








