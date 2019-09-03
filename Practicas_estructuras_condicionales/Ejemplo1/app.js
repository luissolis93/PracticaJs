let btnVerificar=document.getElementById('btnVerificar');


eventListener();

function eventListener(){
    btnVerificar.addEventListener('click',verificarStatus);
}

function verificarStatus(){
    let calif=Number(document.getElementById('calif').value);
    let imprimirREsultado = document.getElementById('imprimir');

    if(calif>8){        
        imprimirREsultado.innerHTML = 'Aprobado';
    }else{
        let audio = document.getElementById('audio');
        audio.play();
        imprimirREsultado.innerHTML = 'Reprobado';
    }
}