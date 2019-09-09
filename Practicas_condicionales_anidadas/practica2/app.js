let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let bus=document.getElementById('bus');
// let km=document.getElementById('km');
let per=document.getElementById('personas');


eventListener();

function eventListener(){
    per.addEventListener('blur',validarDatos);
    // km.addEventListener('blur',validarDatos);
    btnVerificar.addEventListener('click',promedio);
}

function promedio(){
    let res=0;
    let personas=Number(per.value);
    //menor a 20 personas
    if(personas<20){
    if(bus.value=='A'){ 
        res=20*1.5;               
        imprimirREsultado.innerHTML= `<p>Viajaran ${personas} y el costo total de todo el viaje sera de ${res}`
    }else if(bus.value=='B'){            
        res=20*2;               
        imprimirREsultado.innerHTML= `<p>Viajaran ${personas} y el costo total de todo el viaje sera de ${res}`
    }else if(bus.value=='C'){                
        res=20*2.5;               
        imprimirREsultado.innerHTML= `<p>Viajaran ${personas} y el costo total de todo el viaje sera de ${res}`
    }else if(bus.value=='D'){     
        res=20*3;                          
        imprimirREsultado.innerHTML= `<p>Viajaran ${personas} y el costo total de todo el viaje sera de ${res}`
    }else{

    }
    //mayor a 20 personas
    }else{
        if(bus.value=='A'){ 
            res=personas*1.5;               
            imprimirREsultado.innerHTML= `<p>Viajaran ${personas} y el costo total de todo el viaje sera de ${res}`
        }else if(bus.value=='B'){            
            res=personas*2;               
            imprimirREsultado.innerHTML= `<p>Viajaran ${personas} y el costo total de todo el viaje sera de ${res}`
        }else if(bus.value=='C'){                
            res=personas*2.5;               
            imprimirREsultado.innerHTML= `<p>Viajaran ${personas} y el costo total de todo el viaje sera de ${res}`
        }else if(bus.value=='D'){     
            res=personas*3;                          
            imprimirREsultado.innerHTML= `<p>Viajaran ${personas} y el costo total de todo el viaje sera de ${res}`
        }else{
    
        }

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