

function saludar(nombre){
    console.log(arguments);
    console.log('hola' + nombre);
    //return 1
}
const retornoSaludar=saludar('Adrian', 34,true, 'México');

console.log({retornoSaludar});


function sumar(a,b){
    return a+b
}
console.log(sumar(234,6543));

const sumaFunFlecha=(a,b)=>{// Funcion de flecha
    return a+b
}
console.log('Suma en función de flecha',sumaFunFlecha(43,67));

const sumaFlechaCorta=(a,b)=>a+b;// Funcion de flecha version corta 

console.log('Suma con funcion de felcha resumida ',sumaFlechaCorta(65,684));

function getAleatorio(){
    return Math.random();
}
console.log('Número aleatorio:' ,getAleatorio());

const getAleatorioFlechaCorta=()=>Math.random();

console.log('Funcion flecha  aleatorio version corta  ',getAleatorioFlechaCorta());