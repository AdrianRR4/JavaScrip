
const newListProduct=[1,2,3];
const carrito=[
    {nombre:'tablet',precio: 1800, marca:'Lenovo'},
    {nombre:'alexa',precio: 600,marca:'amazon'},
    {nombre:'XboxOne',precio: 5800, marca: 'microsoft'},
    {nombre:'Smart Tv',precio: 6000, marca: 'samsung'},
    {nombre:'Refrigerador',precio: 7900, marca: 'LG'},
];

//MAP

console.warn('For Each');
carrito.forEach(dato=>{
    
    if(dato.precio>5000){
        let bajoPrecio=[];
        bajoPrecio.push(dato.precio);
console.log(dato.nombre);
console.log(bajoPrecio);
    }  
});

const found=newListProduct.find(element=>{
    element==2
});
console.log(found);


/// MAP
console.warn('MAP');

carrito.map(function(producto){
    console.log(producto.marca);
});

const newArr=carrito.map(producto=>{
return `${producto.marca} - Precio:${producto.precio}`
});
console.log(newArr);
