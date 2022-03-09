

const facturas=[
    {
        precio:23,
        cantidad:1
    },
    {
        precio:54,
        cantidad:5
    },
    {
        precio:6,
        cantidad:24
    },
    {
        precio:98,
        cantidad:4
    },
    {
        precio:43,
        cantidad:3
    }


];

const IVA=1.21;

 const totalFactura=facturas.map(i=>i.precio *i.cantidad*IVA);
 console.log(totalFactura);

 totalFactura.forEach((i, index)=>console.log('elemento', index,i));

 const total=facturas.map(i=>i.precio*i.cantidad).reduce((a,b)=>{
   console.log(a,b);
    return  a+b
 });

 console.log(total);


 const totalReduce=facturas.map(i=>i.precio*i.cantidad).filter(i=>i>200);

 console.log(totalReduce);