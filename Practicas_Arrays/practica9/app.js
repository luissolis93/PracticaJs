let btnCalcular=document.getElementById('btnCalcular');
let imprimir=document.getElementById('imprimir');
let imprimir2=document.getElementById('imprimir2');
let array1=[];
let res1="";
let res2="";
let aux=0;


eventListener();

function eventListener(){
    btnCalcular.addEventListener('click',ordenar);
}

function ordenar(){
    for(let x=0; x<10; x++){
        array1[x]=x;
        res1+=`[${x}]=${array1[x]} <br>`
    }
    imprimir.innerHTML=res1;

    for (let i =0; i <10; i++) {
        for (let j = 0; j<10-1; j++) {
            if (array1[j] < array1[j + 1]) {
                aux = array1[j];
                array1[j] = array1[j + 1];
                array1[j + 1] = aux;
                // res2+=`[${j}]=${array1[j]} <br>`
                
            }
        }
        // imprimir2.innerHTML=res2;
    }
    for(let x=0; x<10; x++){
        // array1[x]=x;
        res2+=`[${x}]=${array1[x]} <br>`
    }
    imprimir2.innerHTML=res2;
    
}