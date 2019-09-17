let btnAgregarSalario=document.getElementById('btnAgregarSalario');
let sal=document.getElementById('salario');
let cont=0;


 eventListener();


function eventListener(){
    btnAgregarSalario.addEventListener('click',AgregarSalario);
}

function AgregarSalario(){

    if(cont < 6){
    cont++;

    let salario=Number(document.getElementById('salarioSemanal').value)*Number(sal.value);
    console.log(salario);

    let spanSalario=document.createElement('span'); 
    spanSalario.setAttribute('id',`SalarioSemanal${cont}`);
        
    let textospan=document.createTextNode(`${salario}`);
    spanSalario.appendChild(textospan);

    let imprimirSpan=document.getElementById(`dia${cont}`);

    imprimirSpan.appendChild(spanSalario);

    CalcularSalario();
}


function CalcularSalario(){
    let imprimirTotal=document.getElementById('total');
    let suma=0;
    for(let x=1; x<=cont; x++){
        let valorObtenido=document.getElementById(`SalarioSemanal${x}`).textContent;
        suma+=Number(valorObtenido);

    }
    imprimirTotal.innerHTML=`<span> $${suma} </span>`

}

}