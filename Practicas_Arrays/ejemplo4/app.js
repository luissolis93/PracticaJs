 let Btnarreglo = document.getElementById('Btnarreglo');



 EventListner();

 function EventListner() {
     Btnarreglo.addEventListener('click', fillArray)
 }

 function fillArray() {

     let InputValue = document.getElementById('TamañoArreglo');
     let dataArray = [];

     for (let i = 0; i < Number(InputValue.value); i++) {
         dataArray[i] = Math.floor(Math.random() * 10)
     }
     SumaValores(dataArray);
 }

 function SumaValores(dataArray) {

     let Datosimprimir = '';
     let Suma = 0;

     for (let i = 0; i < dataArray.length; i++) {
         Datosimprimir += `<li class="list-group-item">index${i}: ${dataArray[i]} </li>`
         Suma += dataArray[i]

     }
     document.getElementById('Suma').innerHTML = `La suma de todos los numeros es: ${Suma}`;
     imprimir.innerHTML = Datosimprimir



 }