
/**Forma de decarar una función */
function saludar(nombre){
    console.log(arguments);//propiedad que tienen todas las funciones "tradicionales"
    console.log('hola' + nombre);
}
saludar('Adrian', 34,true, 'México');//enviando argumentos de más

/** Forma de declarar una función con constante */

const saludar2=function(nombre){
    console.log('Hola'+nombre)
}
saludar2('Adrian');

/**Funciones de flecha */

const saludarConFlecha=()=>{
    console.log('Hola en funcion de flecha')
}
saludarConFlecha();