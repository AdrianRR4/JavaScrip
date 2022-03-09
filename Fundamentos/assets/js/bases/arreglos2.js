

let juegos=['Mario Car', 'Crash','Spider Man','Metal Slug'];

console.log('Total de arreglo', juegos.length);

    let primero =juegos[2-1];
    let ultimo=juegos[juegos.length-1];

    console.log({primero, ultimo});

    juegos.forEach((elemento, indice,nuevoArreglo)=>{
        console.log(elemento,indice,nuevoArreglo);
    });


    let nuevaLongitud=juegos.push('Resident Evil');
    console.log({nuevaLongitud,juegos});

    nuevaLongitud=juegos.unshift('Luigi Mansion');
    console.log({nuevaLongitud, juegos})

  let juegoBorrado=juegos.pop();
  console.log({juegoBorrado,juegos});

  let pos=-1;
  let juegosBorrados=juegos.splice(pos,2);
  console.log({juegosBorrados,juegos});

  let ejemploIndex=juegos.indexOf('Crash');
  console.log(ejemploIndex);    
