

const miArray=[1,2,3,4
]

console.log(miArray[0]);
console.log(typeof miArray);
//console.log(miArray.length); conocer la longitud de un array

/** 
miArray.push(9);
console.log(miArray);// push siempre lo ingresa al final del arreglo 

const ultimoElemento=miArray.pop(); //elimina el ultimo elemento del arreglo y lo devuelve como valor 
console.log(ultimoElemento);

const primerElemento= miArray.shift(); // elimina el primer elemento del arreglo y como en pop lo devuelve como valor 
console.log(primerElemento);

miArray.unshift(0);  // se agrega un elemento al principio del arreglo
console.log(miArray);

miArray.splice(5, 0, 'que hay'); // incerta un elemento en la posición que se requiera
console.log(miArray);
*/
//ForEach realiza una acción pero no devuelve nada 
miArray.forEach((elem, index)=>{  
console.log(Number(elem)+2, index );
})

// Map devuelve un nuvo array

let pruebaArr= miArray.map(i=> i*3);

console.log('Nuevo Arreglo',pruebaArr);