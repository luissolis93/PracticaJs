let btnPagos=document.getElementById('btnPagos');
let Total=document.getElementById('total');


 eventListener();


function eventListener(){
    btnPagos.addEventListener('click',Pagos);
}

function Pagos(){
    let total=10;
    for(let x=1; x<=20; x++){
        let Monto = document.getElementById(`monto${x}`);
        
        Monto.innerText=`${total}`;
        total*=2;
    }
    Total.innerHTML=`${total}`;

}