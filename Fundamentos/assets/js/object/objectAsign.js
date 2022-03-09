
//clona un objeto simple sencillos, en objetos anidados los cambios que se realcen en el objeto original tambien se reflejaran en el clonado

const persona1={
    nombre:'angel',
    apellido:'RAMOS',
    edad:30,
    altura:1.78,
    direccion:{
        calle:'Av. siempre viva',
        ciudad:'Aguascalientes',
        pais:'México'
    },
    facturacion:{
        calle:'Lomas taurinas'
    }
    
};

const personaClonada={

}
Object.assign(personaClonada, persona1);

persona1.nombre='Roberto';
persona1.apellido='Ramos'
persona1.direccion.pais='Marruecos'



console.log(persona1);
console.log(personaClonada);