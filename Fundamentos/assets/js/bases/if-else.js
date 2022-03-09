
let a =12   ;

if(a>=10){
    console.log('A es mayor a 10');
}else {
    console.log('A es menor a 10')
}

console.log('Fin del programa');


const hoy=new Date();

let dia= hoy.getDay();

console.log(dia);
//If normal
if (dia==='1'){
        console.log('es lunes')
}else{
    console.log('no es lunes'); 
} 

//If else anidado

if (dia===1){
    console.log('es lunes')
}else if(dia===2){
console.log('es martes'); 
} else if(dia===3)
{
console.log('es miercoles')
}
else {
    console.log('no es lun, mar, mier')
}

dia=2;
const semana ={
    0: 'doming',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado'
}

console.log('Objeto',semana[dia]);


const semanaArr=['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];

console.log('Arreglo',semanaArr[4]||'dia no existente');