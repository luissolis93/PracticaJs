class votacion {
    contAF=0;
    contEC=0
    contAbs=0;
    total=0;

    // constructor (contAF,contEC,contAbs,total){
    //     this.contAF=contAF;
    //     this.contEC=contEC;
    //     this.contAbs=contAbs;
    //     this.total=total;

    // }

    ocultarBotones (){
    document.getElementById('aFavor').removeAttribute('disabled');
    document.getElementById('enContra').removeAttribute('disabled');
    document.getElementById('abstencion').removeAttribute('disabled');
    document.getElementById('fin').removeAttribute('disabled');
    document.getElementById('aceptar').setAttribute('disabled','true');
    document.getElementById('salir').setAttribute('disabled','true');
    document.getElementById('pregunta').setAttribute('disabled','true');
    }

    ocultarBotones2 (){
        document.getElementById('aceptar').setAttribute('disabled','true');
        Swal.fire('Encuesta Cancelada')
        }

    contarVotosFavor(cont){
        this.contAF=cont;
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          })
          
          Toast.fire({
            type: 'success',
            title: 'Voto a Favor Registrado'
          })
        return this.contAF;
    }

    contarVotosEnContra(cont){
        this.contEC=cont;
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          })
          
          Toast.fire({
            type: 'success',
            title: 'Voto en Contra Registrado'
          })
        return this.contEC;
    }

    contarVotosAbs(cont){
        this.contAbs =cont;
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          })
          
          Toast.fire({
            type: 'success',
            title: 'Voto en Abstención Registrado'
          })        
        return this.contAbs;
    }

    mostrarTotal (totalVotos,fav,con,abs){
        total=totalVotos;
        if(fav>con && fav>abs){
            Swal.fire({
                title: 'Ganador!',
                text: `A favor es el ganador con ${fav} de ${totalVotos} votos`,
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false
              })

        }else if (con>fav && con>abs){
            Swal.fire({
                title: 'Ganador!',
                text: `En contra es el ganador con ${con} de ${totalVotos} votos`,
                imageUrl: 'https://picsum.photos/200/300?grayscale',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false
              })

        }else if (abs>fav && abs>con){
            Swal.fire({
                title: 'Ganador!',
                text: `Abstencion es el ganador con ${abs} de ${totalVotos} votos`,
                imageUrl:'https://picsum.photos/200/300/?blur' ,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false
              })

        }else if (fav==con){
            let x=Math.floor(Math.random() * 11);  
            let y=Math.floor(Math.random() * 11);  
            console.log(x,y);
            
            if(x>y){
            Swal.fire({
                title: 'Ganador!',
                text: `A Favor es el ganador con ${fav} de ${totalVotos} votos`,
                imageUrl:'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false
              })
            }else{
                Swal.fire({
                    title: 'Ganador!',
                    text: `En contra es el ganador con ${con} de ${totalVotos} votos`,
                    imageUrl: 'https://picsum.photos/200/300?grayscale',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    animation: false
                  })

            }

        }

        return total;
    }



    
}