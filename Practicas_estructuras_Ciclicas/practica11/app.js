let btnVerificar=document.getElementById('btnVerificar');
let imprimirREsultado = document.getElementById('imprimir');
let numero = document.getElementById('numero');
let cont=0;

eventListener();

function eventListener(){
    btnVerificar.addEventListener('click',primos);
}

function primos(){
    let ax = Number(numero.value);  
    let aux=ax;  
    let resultado = '';

    for(let x=0; x<=aux; x++){

    for(let i=1; i < (ax+1); i++){
         if(ax%i==0){
            cont++;
            }
    }
    if(cont!=2){
        cont=0;
        ax--;

    }else{
        resultado += `  ${ax}-  ` ;
        ax--;
        cont=0;
    }


}
resultado += `  1  ` ;

imprimirREsultado.innerHTML = resultado;
}




// for(i=1;i<(n+1);i++){
//     if(n%i==0){
//         a++;
//        }
//     }
//     if(a!=2){
//          cout<<"No es Primo";
//        }else{
//            cout<<"Si es Primo";
//     }