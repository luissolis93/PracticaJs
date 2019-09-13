let btnVerificar=document.getElementById('btnVerificar');
let btnAgregar=document.getElementById('btnAgregar');
let n=document.getElementById('numero');
// let n2=document.getElementById('numero');
let agregar=document.getElementById('agregar');
// let agregar2=document.getElementById('agregar');
let imprmen=document.getElementById(`menores`);
let impmay=document.getElementById(`mayores`);
let contMen=0;
let contMay=0;


 eventListener();


function eventListener(){
    btnVerificar.addEventListener('click',EvaluarNum);
    // btnAgregar.addEventListener('click',AgregarNumeros);
}

// function AgregarNumeros(){
//     agregar=Number(agregar.value);
//     btnAgregar.setAttribute('disabled',"true");
//     btnVerificar.removeAttribute('disabled')
//     agregar2.setAttribute('disabled','true');
//     n2.removeAttribute('disabled')
//     for(let x=1; x<=agregar; x++){
//         EvaluarNum();
//     }
// }

function EvaluarNum(){
     n = Number(numero.value);
    if(n <= 0){
    contMen++;
    imprmen.innerHTML="Menores o iguales a 0: ";

    let spanMenor=document.createElement('span');
    spanMenor.setAttribute('id',`menor`);
    
    let textospanMenor=document.createTextNode(`${contMen}`);
    spanMenor.appendChild(textospanMenor);

    let imprimirSpanMen=document.getElementById(`menores`);

    imprimirSpanMen.appendChild(spanMenor);
   }else{
       
    contMay++;
    impmay.innerHTML=" Mayores a 0: ";

    let spanMayor=document.createElement('span');
    spanMayor.setAttribute('id',`mayor`);
    
    let textospanMayor=document.createTextNode(`${contMay}`);
    spanMayor .appendChild(textospanMayor);

    let imprimirSpanMay=document.getElementById(`mayores`);

    imprimirSpanMay.appendChild(spanMayor);

   }
}