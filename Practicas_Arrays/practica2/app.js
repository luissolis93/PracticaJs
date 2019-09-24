let btnCalcular=document.getElementById('btnCalcular');
let limite=document.getElementById('limite');
let nombre=document.getElementById('nombre');
let imprimir=document.getElementById('imprimir');
let arrayNom=[];
let arrayVocales=[];
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
        if(arrayNom[x].charAt(0)=='a' || arrayNom[x].charAt(0)=='A'){ 
            arrayVocales[x]=arrayNom[x];
            resultado+=`${arrayVocales[x]} <br>`;
            imprimir.innerHTML=resultado;
            x++;
            return; 
        }else if(arrayNom[x].charAt(0)=='e' || arrayNom[x].charAt(0)=='E'){ 
            arrayVocales[x]=arrayNom[x];
            resultado+=`${arrayVocales[x]} <br>`;
            imprimir.innerHTML=resultado;
            x++;
            return; 
        }else if(arrayNom[x].charAt(0)=='i' || arrayNom[x].charAt(0)=='I'){ 
            arrayVocales[x]=arrayNom[x];
            resultado+=`${arrayVocales[x]} <br>`;
            imprimir.innerHTML=resultado;
            x++;
            return; 
        }else if(arrayNom[x].charAt(0)=='o' || arrayNom[x].charAt(0)=='O'){ 
            arrayVocales[x]=arrayNom[x];
            resultado+=`${arrayVocales[x]} <br>`;
            imprimir.innerHTML=resultado;
            x++;
            return; 
        }else if(arrayNom[x].charAt(0)=='U' || arrayNom[x].charAt(0)=='u'){ 
            arrayVocales[x]=arrayNom[x];
            resultado+=`${arrayVocales[x]} <br>`;
            imprimir.innerHTML=resultado;
            x++;
            return; 
        }        
        
    }
}if(x==lim){   
    Swal.fire({
        type: 'error',
        title: 'Exedio el numero de palabras...',
        text: 'favor de aumentar el numero de palabras a evaluar',
      })
}

   





}