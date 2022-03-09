
//Puede ser usado para obtener valores numericos en un objeto

 const salarios={
    enero:923,
    febrero:1032,
    marzo:3245
};


let suma= Object.values(salarios).reduce((total,  actual)=>{
   return total+actual
});
console.log('resultado salarios',suma);