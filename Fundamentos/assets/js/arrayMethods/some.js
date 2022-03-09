

const meses=['Enero','Febrero','Marzo','Abril','Mayo', 'Junio'];

const carrito=[
    {nombre:'tablet',precio: 1800, marca:'Lenovo'},
    {nombre:'alexa',precio: 600,marca:'amazon'},
    {nombre:'XboxOne',precio: 5800, marca: 'microsoft'},
    {nombre:'Smart Tv',precio: 6000, marca: 'samsung'},
    {nombre:'Refrigerador',precio: 7900, marca: 'LG'},
];

//Comprobar si un valor exsite en un arreglo

meses.forEach((mes)=>{
if(mes=='Marzo'){
    console.log('Existe');
}else{
    console.log('no existe');
}
//console.log(mes);
})

const resultado=meses.includes('Febrero');// devuelve un valor booleano, solo funciona en arreglos planos
console.log(resultado);

const existe= carrito.some(producto=> producto.marca=='Monitor curvo'
);
console.log(existe);

const existe2=meses.some(mes=>mes==='Junio');

console.log(existe2);