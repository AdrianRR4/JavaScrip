//valores primitivos (string, number, undefine, null, boolean) son pasados por valor y los objetos son pasados por referencia

let a =10;
let b =a;
a=30;
console.log({a,b}); 

let juan={
    nombre:'Juan'
}
let ana =juan; 
ana.nombre='Ana';
console.log({juan, ana});

const cambiarNombre=(...persona)=>{
    persona.nombre='Rosa'
    return persona;
}

let peter={nombre: 'peter'};
let tony=cambiarNombre(peter);


console.log({peter, tony});


///Arreglos  utilizando operador spred

const frutas =['Manzanas','Pera','Piña'];

console.time('slice');
const otrasFrutas =frutas.slice();
console.timeEnd('slice');

console.time    ('spread');
const otrasFrutas2 =[...frutas];
console.timeEnd('spread');



otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});