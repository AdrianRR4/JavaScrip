
const dia=6;
const horaActual=11;


let horaApertura;
let mensaje;

if(dia==0 ||dia ==6){
    console.log('fin de semana');
    horaApertura=9;
}else{
    console.log('dia semana');
    horaApertura=11;
}

console.log({horaApertura});

if(horaActual>=horaApertura){
    mensaje='Esta abierto';
}else{
    mensaje=`Esta cerrado, hoy abrimos a las ${horaApertura}`;
}