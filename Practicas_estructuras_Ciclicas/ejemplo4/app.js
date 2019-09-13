let btnAgregarAhorro=document.getElementById('btnAgregarAhorro');
let cont=0;


 eventListener();


function eventListener(){
    btnAgregarAhorro.addEventListener('click',AgregarAhorro);
}

function AgregarAhorro(){

    if(cont < 12){
    cont++;

    let ahorro=Number(document.getElementById('ahorroMensual').value);

    let spanAhorro=document.createElement('span');
    spanAhorro.setAttribute('id',`AhorroMensual${cont}`);
    console.log(spanAhorro);
    
    let textospan=document.createTextNode(`${ahorro}`);
    spanAhorro.appendChild(textospan);

    let imprimirSpan=document.getElementById(`mes${cont}`);

    imprimirSpan.appendChild(spanAhorro);

    CalcularAhorro();
}


function CalcularAhorro(){
    let imprimirTotal=document.getElementById('total');
    let suma=0;
    for(let x=1; x<=cont; x++){
        let valorObtenido=document.getElementById(`AhorroMensual${x}`).textContent;
        console.log(valorObtenido);
        
        suma+=Number(valorObtenido);

    }
    imprimirTotal.innerHTML=`<span> $${suma} </span>`

    // let spantTotal=document.createElement('span');
    // let textototal=document.createTextNode(` $${suma}`)

    // spantTotal.appendChild(textototal);
    // imprimirTotal.appendChild(spantTotal)

}






}