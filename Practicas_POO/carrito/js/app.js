const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos= document.querySelector('#lista-carrito tbody');
const vaciaCarrito=document.getElementById('vaciar-carrito');

const objetcCar = new Carrito();


eventListener();

function eventListener(){
    cursos.addEventListener('click',GetCourse);
    carrito.addEventListener('click',deleteCourse);
    vaciaCarrito.addEventListener('click',VaciarCarritoCursos)
    document.addEventListener('DOMContentLoaded',MostrarCursosCarrito);
}

function MostrarCursosCarrito(){
    objetcCar.ShowLocalStorageCar();
}


function GetCourse(event){
    event.preventDefault();
    if(event.target.classList.contains('agregar-carrito')){
        let Course = event.target.parentElement.parentElement;
        
        objetcCar.readDataCourse(Course, listaCursos);   
             
        
    }
}

    function deleteCourse(event){
        objetcCar.EliminarCursoCarrito(event);
    }

    function VaciarCarritoCursos(){
        objetcCar.vaciaCarrito(listaCursos);
        Swal.fire({
            position: 'center',
            type: 'error',
            title: 'Carrito Vaciado',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000
          })

    }
    

