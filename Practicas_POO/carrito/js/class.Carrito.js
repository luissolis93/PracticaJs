class Carrito{


    constructor(){
        this.LS= new LocalStorage();
    }

    readDataCourse(curso,listaCursos){
        const dataCourse={
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id')
        }
        
        this.addCourseCar(dataCourse,listaCursos);
        
    }

    addCourseCar(dataCourse, listaCursos){
        const row = document.createElement('tr');

        row.innerHTML=`
        <td>
        <img src="${dataCourse.imagen}" width=100>
        </td>

        <td>
        ${dataCourse.titulo}
        </td>

        <td>
        ${dataCourse.precio}
        </td>

        <td>
        <a href="#" class="borrar-curso" data-id="${dataCourse.id}"> X </a>
        </td>
        
        `;

        listaCursos.appendChild(row);  
        
        this.LS.SaveCourseLocalStorage(dataCourse);
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Curso Agregado',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000
          })
    }

    EliminarCursoCarrito(event){
        event.preventDefault();

        let curso, cursoId;

        if(event.target.classList.contains('borrar-curso')){
            curso = event.target.parentElement.parentElement;
            cursoId = curso.querySelector('a').getAttribute('data-id');
            curso.remove();
            this.LS.eliminarCursoLS(cursoId);
            Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Curso Eliminado',
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000
              })
        }
       
    }

    ShowLocalStorageCar(){
        let LS = new LocalStorage();
    
        let CoursesLS = this.LS.GetCoursesLocalStorage();
    
        CoursesLS.forEach(function(curso){
    
            const row = document.createElement('tr');
    
            row.innerHTML=`
            <td>
            <img src="${curso.imagen}" width=100>
            </td>
    
            <td>
            ${curso.titulo}
            </td>
    
            <td>
            ${curso.precio}
            </td>
    
            <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
            </td>
            
            `;
    
            listaCursos.appendChild(row);
    
        });
        
    }

    vaciaCarrito(listaCursos){
        // forma lenta
        // listaCursos.innerHTML="";
        while(listaCursos.firstChild){
            listaCursos.removeChild(listaCursos.firstChild);
        }

        this.LS.vaciarLocalStorage();
        



    }

}