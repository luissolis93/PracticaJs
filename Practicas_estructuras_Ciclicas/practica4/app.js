let btnVerificar=document.getElementById('btnVerificar');
let imp=document.getElementById('imprimir');

 eventListener();


function eventListener(){
    btnVerificar.addEventListener('click',km);
}

function km(){
    let n1=70;
    let n2=150;

    do{
        n1+=100;
        n2+=100;

    }while(n1!=n2);
    imp.innerHTML=`Se alcanzan en el KM ${n1}`
}