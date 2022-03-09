//devuelve un array de arrays, sirve para poder acceder a las propiedades del objeto y modificarlas ej cambiar a mayusculas los campos

const persona1={
    nombre:'angel',
    apellido:'RAMOS',
    edad:30,
    
};

console.log(Object.entries(persona1));

Object.entries(persona1).forEach(par=>{
    const clave=par[0];
    const valor=par[1]

    if(typeof valor==='string'){
        persona1[clave]=valor.toUpperCase();
    }
    
});

console.log(persona1);