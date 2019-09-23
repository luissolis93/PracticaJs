btnAgregar=document.getElementById('btnAgregar');
btnCalcular=document.getElementById('btnCalcular');
let cont=0;

eventListener();

function eventListener(){
    btnAgregar.addEventListener('click',addElements);
    btnCalcular.addEventListener('click',calcularArray);
}

function addElements(){
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

    // input.removeAttribute('id');
    // input.setAttribute('id',`listArrayL${cont}`);

    // document.getElementById('Arraylist2').appendChild(li);
    // li.appendChild(input);


    cont++;
}

function calcularArray(){
    let array1=[];
    let array2=[];
    let array3=[];

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

    for(let x=0; x<array1.length; x++){
        array3[x]=array1[x]+array2[x];
    }

    let concatenar="";
    for(let y=0; y<array1.length; y++){
        concatenar+=`<li class="list-group-item"> ${array3[y]}          </li>`;
    }
    document.getElementById('Arraylist3').innerHTML=concatenar;

}