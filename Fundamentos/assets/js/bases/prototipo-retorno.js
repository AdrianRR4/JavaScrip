
function crearPersona(nombre, apellido){

    return 
    {
        nombre:nombre;
        apellido:apellido;
    }
}

const persona= crearPersona('Adrian', 'Ramos');
console.log(persona);

/**Version corta */

const funcionFlechaCorta=(edad,sexo)=>({edad, sexo});//para regresar un nuevo objeto se utiliza parentesis 

console.log();

function imprimeArgumentos(){
    console.log('argumentos 1',arguments);
}
imprimeArgumentos(10,'hola',false, [1,2,3]);

const imprimeArgumentosDos=(edad,...args)=>{
    //console.log({edad,args});
    return(args)
}
 const [numero, txt, booleano, objeto] =imprimeArgumentosDos(01,'que onda', true,{nombre:'Topot',apellid:'X'});

console.log({numero, txt, booleano, objeto});

const {apellido}= crearPersona('Adrian', 'Ramos');
console.log({apellido});