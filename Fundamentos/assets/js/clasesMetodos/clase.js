
class Curso {
  constructor(titulo, dificultad) {
    this.titulo = titulo;
    this.dificultad = dificultad;
    this.lecciones=[];
  }
  agregarCurso(leccion){
    this.lecciones.push(leccion);
  }
  eliminarLeccion(){
    this.lecciones.pop();
  }

  get dificultad(){
      return this.dificultad;
  }
  set dificultad(){
      this.dificultad=nuevaDificultad;
  }
}

//creando una instancia de nuestra clase

const cursoJs= new Curso("Java Script", 1);

const cursoTs= new Curso('TypeScript',2);

console.log(cursoJs, cursoTs);