class LocalStorage{

    constructor(){}


    SaveCourseLocalStorage(curso){
        let ArrayCursos=this.GetCoursesLocalStorage();
        ArrayCursos.push(curso)
        localStorage.setItem('courses',JSON.stringify(ArrayCursos));
    }

    GetCoursesLocalStorage(){
        let cursosLS;

        if(localStorage.getItem('courses')===null){
            cursosLS =[];
        }else{
            cursosLS=JSON.parse(localStorage.getItem('courses'));
        }

        return cursosLS;

    }

    eliminarCursoLS(cursoID){
        let cursosLS;

        cursosLS= this.GetCoursesLocalStorage();
        cursosLS.forEach(function(cursoLS,index){
            if(cursoLS.id === cursoID){
                cursosLS.splice(index,1);
            }

        });

        localStorage.setItem('courses',JSON.stringify(cursosLS));

    }

    vaciarLocalStorage(){
        localStorage.clear();
    }





}