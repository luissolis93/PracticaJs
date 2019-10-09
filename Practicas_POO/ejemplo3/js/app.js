
eventListener();
 
let arrayPositionPrize = []
function eventListener(){
  document.addEventListener('keydown', MoveCar);
  document.getElementById('contenedor').addEventListener('click', SetPrize);
  // ImagenCarro.addEventListener('keypress', MoveCar);
}


let car = new Car(0,0);

function MoveCar(event){
  let image = document.getElementById('car');
  // console.log(event);

  switch(event.key){

    case 'ArrowRight':
      car.moveRight(image);
      break;

    case 'ArrowLeft':
      car.moveLeft(image);
      break;

    case 'ArrowUp':
      car.moveTop(image);
      break;
    
    case 'ArrowDown':
      car.moveBottom(image);
      break;
  }
  if(arrayPositionPrize.length>0){
    let resultado = car.currenPosition(arrayPositionPrize, image)

    console.log(resultado)
  }

}

function SetPrize(event){
  let prize = new Prize();
  // console.log(event.x, event.y);

  prize.PositionX(event.x);
  prize.PositionY(event.y);

  arrayPositionPrize.push(prize.createElementImg());

  // console.log(arrayPositionPrize)

}
