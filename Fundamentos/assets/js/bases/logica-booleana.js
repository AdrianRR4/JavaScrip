

const regresaTrue=()=>{
    console.log('regresa true');
    return true;
}

const regresaFalse=()=>{
    console.log('regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);


console.log('Primera true',regresaTrue());

console.log('Segunda funcion', !regresaFalse());

console.warn('And');
console.log(true && true);
console.log(true&& false);

console.log('===========');

console.log(regresaFalse() &&  regresaTrue());
console.log(regresaTrue() &&  regresaFalse());

console.log('4 condiciones ', true && true && true && false);

console.log('Or'); //siempre regresa true

console.log(true||false);
console.log(false||false);


console.log( regresaTrue()|| regresaFalse() );

console.log('4 condiciones ', true|| true || true || false);


console.warn('Asingnaciones');

const soyUndefined=undefined;
const soyNull=null;
const soyFalse=false;


const a1=true && 'Hola mundo' && 150;
const a2='hola' && 'mundo' && soyFalse && true;
const a3=soyFalse && 'ya no soy falso'
const a4=soyFalse && soyUndefined && soyNull && 'ya no soy falso de nuevo';
const a5=soyFalse ||soyUndefined|| regresaTrue()||'ya no soy falso de nuevo'||true;

console.log({a1,a2, a3, a4,a5 })