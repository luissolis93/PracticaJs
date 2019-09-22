let Btnarreglo = document.getElementById('Btnarreglo');

EventListener();

function EventListener() {
    Btnarreglo.addEventListener('click', FillAray);
}

/*------------------
  Inicia parte de la aplicacion por Fuerza bruta
------------------*/

function FillAray() {
    let inputValue = document.getElementById('TamañoArreglo');
    let arrayPrimeNumber = [];
    let contadorfor = 0
    console.time('inicioForfuerzabruta')

    for (let x = 0; x < Number(inputValue.value); x++) {
        contadorfor++
        let NumberPrimeRandom = isPrime();
        if (NumberPrimeRandom === null) {
            x--
        } else {
            arrayPrimeNumber[x] = NumberPrimeRandom
        }
    }
    console.log(arrayPrimeNumber)
    console.log(contadorfor)
    console.timeEnd('inicioForfuerzabruta')

    let maximo = 0;
    for (let x = 0; x <= arrayPrimeNumber.length; x++) {
        if (maximo < arrayPrimeNumber[x]) {
            maximo = arrayPrimeNumber[x]
        }
    }
    console.log(maximo)

}

function isPrime() {

    let NumberRandom = Math.floor(Math.random() * 1000) + 1;


    for (let i = 2; i < NumberRandom; i++) {
        if (NumberRandom % i == 0) {
            return null;
        }
    }
    return NumberRandom;

}

/*------------------
  Termina aplicacion Fuerza Bruta
------------------*/

/*------------------
  Inicia aplicacion resuelta por paradigma dinamico
------------------*/
// let ArrayNumberPrimeDinamyv=[];

// function FillArayDinamyc(){

//   let PrimeNumber = 0;
//   for(let i=0;i<=PrimeNumber;i++){
//     PrimeNumber++
//     if(PrimeNumber %i==0){
//       ArrayNumberPrimeDinamyv
//     }

//   }

// }