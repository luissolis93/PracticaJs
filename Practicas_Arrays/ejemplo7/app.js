let btnCalcular=document.getElementById('btnCalcular');
let limite=document.getElementById('limite');
let numero=document.getElementById('numero');
let imprimir=document.getElementById('imprimir');
let array=[];


eventListener();

function eventListener(){
    btnCalcular.addEventListener('click',calcular);
}



function calcular(){
    let lim=Number(limite.value);
    let num=Number(numero.value);
    let resultado="";
    let aux=0;

    resultado=`${num}`;
    aux=num;

    for(let x=0; x<(lim-1); x++){
        aux+=num;
        array[x]=aux;
        resultado+=`-${array[x]}`
    }

    imprimir.innerHTML=resultado;

    Swal.fire({
        title: 'Serie Terminada',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("./imagenes/imagen.gif")
          center left
          no-repeat
        `
      })





}