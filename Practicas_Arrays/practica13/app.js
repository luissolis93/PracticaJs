let btnAgregar=document.getElementById('btnAgregar');
let btnCalcular=document.getElementById('btnCalcular');
let imprimir=document.getElementById('imprimir');
let tipo=document.getElementById('tipo');
let cont=0;

eventListener();

function eventListener(){
    btnAgregar.addEventListener('click',addElements);
    btnCalcular.addEventListener('click',calcularArray);
}

function addElements(){
    if(cont<5){
    let li=document.createElement('li');
    li.setAttribute('class','list-group-item mb-2');

    let input=document.createElement('input');
    input.setAttribute('class','form-control');
    input.setAttribute('id',`listArrayR${cont}`);
    input.setAttribute('placeholder','Ingrese un digito');

    document.getElementById('Arraylist1').appendChild(li);
    li.appendChild(input);

    let li2=document.createElement('li');
    li2.setAttribute('class','list-group-item mb-2');

    let input2=document.createElement('input');
    input2.setAttribute('class','form-control');
    input2.setAttribute('id',`listArrayL${cont}`);
    input2.setAttribute('placeholder','Ingrese un digito');

    document.getElementById('Arraylist2').appendChild(li2);
    li2.appendChild(input2);
    cont++;
    }else{
        swal.fire({
            type:'error',
            title:'Error',
            text:'Limite de valores exedido'
        })
    }
}

function calcularArray(){
    let array1=[];
    let array2=[];
    let array3=[];
    let res="";

    for(let i=0; i<cont; i++){
        array1[i]=Number(document.getElementById(`listArrayR${i}`).value);
        array2[i]=Number(document.getElementById(`listArrayL${i}`).value);

        if(isNaN(array1[i]) || isNaN(array2[i])){
            Swal.fire({
                type: 'error',
                title: 'Caracter Invalido...',
                text: 'Se ha ingresado un digito incorrecto',
              })

              array1=[];
              array2=[];
              document.getElementById(`listArrayR${i}`).focus();
              return;
        }
    }
    console.log(array1);
    console.log(array2);
    array3=array1.concat(array2);
    imprimir.innerHTML=`[${array3}]`;

}