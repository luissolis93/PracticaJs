class Prize{

   /*------------------
      Propiedades de Objetos
    ------------------*/
    positionX = 0;
    positionY = 0;
    sizeMargin=0;


    constructor(){
      this.CalculateSizeMargin();
    }
    
    /*------------------
      Metodos de objetos
    ------------------*/

    PositionX(positionX){
      this.positionX = positionX;
    }

    PositionY(positionY){
      this.positionY=positionY;
    }

    CalculateSizeMargin(){
      let marginContainer = window.getComputedStyle(document.getElementById('contenedor'));
      let marginleft = marginContainer.getPropertyValue('margin-left');
      this.sizeMargin = marginleft.substring(0,marginleft.length -2);
    // console.log(this.sizeMargin);

    }

  createElementImg(){

    let ImageCreate = document.createElement('img');
    ImageCreate.setAttribute('src','./imagenes/premio1.jpg');
   
    ImageCreate.style.width = "25px";

    let posX = (this.positionX-this.sizeMargin)+25;
    let posY = this.positionY;
  

    ImageCreate.style.left =`${posX}px`;
    ImageCreate.style.top = `${posY}px`

    document.getElementById('contenedor').appendChild(ImageCreate);
    
    return{ posX, posY}
    // return{ posX: posX, posY: posY} el nombre y las variables tienen el mismo nombre
  }
}

