class Persona {
  static _conteo = 0;
  static get getConteo() {
    return Persona._conteo + " instancias";
  }
  static get getMensaje() {
    console.log("soy un metodo estático");
  }
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";
  constructor(nombre = "sin data", codigo = "sin data", frase = "sin data") {
    console.log("Hola!");
    this.frase = frase;
    this.codigo = codigo;
    this.nombre = nombre;

    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida;
  }

  get getcomidaFavorita() {
    return `la comida favorita de ${this.nombre} es la ${this.comida}`;
  }

  quienSoy() {
    console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }
  miFrase() {
    this.quienSoy();
    console.log(`${this.nombre} y mi frase es ${this.frase}`);
  }
}

const spiderman = new Persona("Peter", "Spiderman", "que hay");

spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = "el pay";
console.log(spiderman);

console.log(spiderman.getcomidaFavorita);
console.log("conteo estatico  ", Persona.getConteo);

console.log(Persona.getMensaje);
