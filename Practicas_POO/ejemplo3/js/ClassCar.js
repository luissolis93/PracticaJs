class Car{

   /*------------------
      Propiedades de Objetos
    ------------------*/

  posisionX = 0;
  posisionY = 0;

  constructor(posisionX,posisionY){
    // propiedad = parametro;
    this.posisionX=posisionX;
    this.posisionY=posisionY
  }

    /*------------------
      Metodos de objetos
    ------------------*/

    moveRight(img){
      // console.log(img)
      img.src = "./imagenes/SmallCar.png";
      img.style.width="62px";
      img.style.height="31px";
      img.style.left=`${this.posisionX++}%`;
    }

    moveLeft(img){
      // console.log(img)
      img.src = "./imagenes/SmallCar3.png";
      img.style.width="62px";
      img.style.height="31px";
      img.style.left=`${this.posisionX--}%`;
    }

    moveTop(img){
      // console.log(img)
      img.src = "./imagenes/SmallCar4.png";
      img.style.height="62px";
      img.style.width="31px";
      img.style.top=`${this.posisionY--}%`;
    }
    
    moveBottom(img){
      // console.log(img)
      img.src = "./imagenes/SmallCar2.png";
      img.style.height="62px";
      img.style.width="31px";
      img.style.top=`${this.posisionY++}%`;
    }

    currenPosition(arrayPositionPrize, image){

      let PositionXCar = image.x;
      let PositionYCar = image.y;

     

      for(let i=0; i<arrayPositionPrize.length; i++){
        let PositionXPrize = arrayPositionPrize[i].posX;
        let PositionYPrize = arrayPositionPrize[i].posY;

        console.log('coordenadas Carrito', PositionXCar, PositionYCar);
        console.log('coordenadas Premio', PositionXPrize, PositionYPrize);

        if(PositionXCar >= PositionXPrize - 25 && PositionXCar <= PositionXPrize + 25 
          && PositionYCar >= PositionYPrize -25 && PositionYCar <= PositionYPrize -25)
        {
          return true;
        }
        
      }return false;
    }



  
}