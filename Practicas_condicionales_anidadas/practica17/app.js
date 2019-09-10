let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let salario=document.getElementById('sueldo');
let anos=document.getElementById('anos');


eventListener();

function eventListener(){
    salario.addEventListener('blur',validarDatos);
    anos.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',bonoMensual);
}

function bonoMensual(){
    let sal=Number(salario.value);
    let an=Number(anos.value);
    let aux=sal;

    if(an>2 && an<5){
        sal=sal*.20;
        aux=aux+sal;

    }else if(an>5){
        sal=sal*.30;
        aux=aux+sal;
    }else{
        imprimirREsultado.innerHTML= `<p>No aplica para bono de antiguedad`
    }

    sal=Number(salario.value);

    if(sal<1000){
        sal=sal*.25;
        aux=aux+sal;
    }else if(sal>1000 && sal<=3500){
        sal=sal*.15;
        aux=aux+sal;
    }else if(sal>3500){
        sal=sal*.10;
        aux=aux+sal;    
    }
    
    else{
        imprimirREsultado.innerHTML= `<p>No aplica para bono de salario`
    }

    imprimirREsultado.innerHTML= `<p>El salario final es de $${aux}`
    


  
    
}

function validarDatos(event){
    if(isNaN(event.target.value)){
        event.target.focus();
        imprimirREsultado.innerHTML = 'No es un número';
    }else{
        imprimirREsultado.innerHTML = '';
    }
}