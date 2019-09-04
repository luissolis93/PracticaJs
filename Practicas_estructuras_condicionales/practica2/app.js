let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let n1=document.getElementById('lun');
let n2=document.getElementById('mar');
let n3=document.getElementById('juev');
let n4=document.getElementById('vier');
let n5=document.getElementById('sab');
let n6=document.getElementById('mier');
let res=0;


eventListener();

function eventListener(){
    n1.addEventListener('blur',validarDatos);
    n2.addEventListener('blur',validarDatos);
    n3.addEventListener('blur',validarDatos);
    n4.addEventListener('blur',validarDatos);
    n5.addEventListener('blur',validarDatos);
    n6.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',unidadesHechas);
}

function unidadesHechas(){

    res=Number(n1.value)+Number(n2.value)+Number(n3.value)+Number(n4.value)+Number(n5.value)+Number(n6.value);
    console.log(res);
    if(res>=100){
        
        imprimirREsultado.innerHTML = 'Recibira incentivos';
    }else{
        imprimirREsultado.innerHTML = 'NO Recibira incentivos';
    }
    
}

function validarDatos(event){
    if(isNaN(event.target.value)){
        event.target.focus();
        imprimirREsultado.innerHTML = 'No es un número';
    }else{
        imprimirREsultado.innerHTML = '';
    }
}