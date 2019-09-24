let numero=document.getElementById('numero');
let  printString="";
let arrayLetras=[];

fillArray();
eventListener();

function eventListener(){
    numero.addEventListener('change',obtenerLetra);
}


function fillArray(){
    for(let i=0; i<=25; i++){
        arrayLetras[i] = String.fromCharCode(i+65);


    }
    console.log(arrayLetras);
    
}

function obtenerLetra(event){
    let value=Number(numero.value);
    if(value>=0 && value<26){
    printString+=`<li class="list-group-item">${arrayLetras[value]}</li> `
    document.getElementById('alertPrint').innerHTML=printString;
    }else{
        swal.fire({
            type:'error',
            title:'Limite de Rango',
            text:'Ingresar solo numeros de 0 a 25'
        })
    }

    numero.value="";   

}
