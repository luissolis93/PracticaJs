let btnSalario=document.getElementById('btnSalario');
let salario=document.getElementById('salario');
let cont=6;

 eventListener();


function eventListener(){
    btnSalario.addEventListener('click',Salario);
    
}

function Salario(){
    let aux=0;
    let salario1=Number(salario.value);
    
    //console.log(aux);
    let spanAux
    console.log(salario);
    for(let x=1;x<=cont; x++){
        aux=salario1*.10;
        //console.log(aux);
        
        salario1=salario1+aux;
        salario1=Math.round(salario1*100)/100;
        let span=document.getElementById(`anio${x}`);
        spanAux = span;
        //console.log(spanAux);
        
        spanAux.innerText=`${salario1}`;
    }


}




