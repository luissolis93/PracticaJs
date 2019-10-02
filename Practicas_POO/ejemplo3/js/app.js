let car=document.getElementById('car');

eventListener();


function eventListener(){
    car.addEventListener('keypress',moveCar);
}

function moveCar(event){
    console.log(event);
    

}