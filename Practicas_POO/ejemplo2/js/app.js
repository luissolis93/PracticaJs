let aceptar=document.getElementById('aceptar');
let aFavor=document.getElementById('aFavor');
let enContra=document.getElementById('enContra');
let abstencion=document.getElementById('abstencion');
let fin=document.getElementById('fin');
let salir=document.getElementById('salir');

let favor=0;
let contra=0;
let abs=0;
let total=0;

// let contAF=0;
// let contEC=0;
// let contABS=0;

let Vot = new votacion();

eventListener();

function eventListener(){
    aceptar.addEventListener('click',encuesta);
    enContra.addEventListener('click',conteoEncontra);
    abstencion.addEventListener('click',conteoAbstencion);
    fin.addEventListener('click',conteoFinalizar);
    aFavor.addEventListener('click',conteoAfavor);
    salir.addEventListener('click',conteoSalir);
}

function encuesta(){
    Vot.ocultarBotones();
}

function conteoAfavor(){
    // favor=Number(aFavor.value);
    favor++;
    console.log(favor);
    
    Vot.contarVotosFavor(favor);
}

function conteoEncontra(){    
    // contra=Number(enContra.value);
    contra++;
    console.log(contra);
    Vot.contarVotosEnContra(contra);

}

function conteoAbstencion(){
    // abs=Number(abstencion.value);
    abs++;
    console.log(abs);    
    Vot.contarVotosAbs(abs);

}

function conteoFinalizar(){
    total=favor+contra+abs;
    console.log(total);    
    Vot.mostrarTotal(total,favor,contra,abs);

}

function conteoSalir(){
    Vot.ocultarBotones2();

}