

let personajes={
    nombre:'Tony Stark',
    codName:'IronMan',
    vivo:false,
    edad:40,
    cords:{
        last:34.23,
        lng:118.93
    },
    trajes:['Mark I','Mark IV', 'Hulk Buster'],
    direccion:{
        zip:'1323, 545',
        ubicacion:'Malibum, California'
    },
    'ultima-pelicula':'Infinity War'
};
//formas de mostrar las propiedades de un objeto
console.log(personajes);
console.log(personajes.codName);
console.log(personajes['codName']);
console.log(personajes.edad);

console.log(personajes.cords);
console.log(personajes.cords.last);
console.log(personajes.trajes.length);
console.log('ultimo traje', personajes.trajes[personajes.trajes.length-1]);

const x='vivo';
console.log('Vivo', personajes[x]);
//const y='vivo';
//console.log('Muerto', personajes[y]);

console.log('Ultima película:', personajes['ultima-pelicula']);

/*Mas detalles de los objetos literales */

//Agregar una propiedad nueva a un objeto 

personajes.vehiculo=true;
console.log(personajes);

//borrar una propiedad de un objeto

delete personajes.edad;
console.log(personajes);

//mostrar un objeto en forma de arreglo como pares ejemplo "nombre:valor"

const entriesPares=Object.entries(personajes.trajes);
console.log(entriesPares);

//bloquear uno objeto 

Object.freeze(personajes);

personajes.dinero=89999943249;

//Obtener los nombres de las propiedades de un objeto

const propiedades= Object.getOwnPropertyNames(personajes);
console.log(propiedades);

//Obtener los valores de las propiedades de un objeto

const valoresPropiedades=Object.values(personajes);
console.log(propiedades,valoresPropiedades);