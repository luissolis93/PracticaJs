let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let seguro=document.getElementById('seguro');
let alcohol=document.getElementById('alcohol');
let lentes=document.getElementById('lentes');
let enfermedad=document.getElementById('enfermedad');
let edad=document.getElementById('edad');


eventListener();

function eventListener(){
    edad.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',tipoPoliza);
}

function tipoPoliza(){
    let res=0;
    let aux=0;
    let Edad=Number(edad.value);
      
    //Seguro tipo A
    if(seguro.value=='A'){ 
        aux=1200;
        res=1200*.10;
        aux=aux+res;
        if(alcohol.value=='Si'){
            res=1200*.05;
            aux=aux+res;
        }else{
            aux=aux;
        }

        if(lentes.value=='Si'){
            res=1200*.05;
            aux=aux+res;
        }else{
            aux=aux;
        }

        if(enfermedad.value=='Si' && Edad>40){
            res=1200*.20;
            aux=aux+res;
        }else{
            res=1200*.10;
            aux=aux+res;
        }
       //Seguro tipo B
    }else{
        aux=950;
        res=950*.10;
        aux=aux+res;
        if(alcohol.value=='Si'){
            res=950*.05;
            aux=aux+res;
        }else{
            aux=aux;
        }

        if(lentes.value=='Si'){
            res=950*.05;
            aux=aux+res;
        }else{
            aux=aux;
        }

        if(enfermedad.value=='Si' && Edad>40){
            res=950*.20;
            aux=aux+res;
        }else{
            res=950*.10;
            aux=aux+res;
        }

    }

    imprimirREsultado.innerHTML= `<p>El costo total de la poliza es de $${aux}`

    
    
}

function validarDatos(event){
    if(isNaN(event.target.value)){
        event.target.focus();
        imprimirREsultado.innerHTML = 'No es un número';
    }else{
        imprimirREsultado.innerHTML = '';
    }
}