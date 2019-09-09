let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let tipo=document.getElementById('tipo');
let tamano=document.getElementById('tamano');
let precio=document.getElementById('precio');
let kg=document.getElementById('kg');
let per=document.getElementById('personas');


eventListener();

function eventListener(){
    precio.addEventListener('blur',validarDatos);
    kg.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',tipobus);
}

function tipobus(){
    let res=0;
    let aux=0;
    let kilo=Number(kg.value);
    if(tipo.value=='A' && tamano.value==1){
         res=Number(precio.value)+(kilo*.20);
        imprimirREsultado.innerHTML = `<p> El precio final de las uvas es ${res}`;
    }else if(tipo.value=='A' && tamano.value==2){
        res=Number(precio.value)+(kilo*.30);
        imprimirREsultado.innerHTML = `<p> El precio final de las uvas es ${res}`;
    }else if(tipo.value=='B' && tamano.value==1){
        res=Number(precio.value)-(kilo*.30);
        imprimirREsultado.innerHTML = `<p> El precio final de las uvas es ${res}`;
    }else if(tipo.value=='B' && tamano.value==2){
        res=Number(precio.value)-(kilo*.50);
        imprimirREsultado.innerHTML = `<p> El precio final de las uvas es ${res}`;
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