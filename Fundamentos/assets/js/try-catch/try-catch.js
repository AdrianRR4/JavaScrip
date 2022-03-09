
//throw rompe por complto el flujo de un códigp
const NUM_PIEZAS=10;
const PROB_ERROR=0.25;

let correctas=0;
let defectuosas=0;



const comprobarSiEsDefectuoso=()=>{
    return (Math.random()<PROB_ERROR);

};
 for(let i =1; i<=NUM_PIEZAS;i++){
     const esDefecutosa=comprobarSiEsDefectuoso();

     try{
   if(esDefecutosa) throw ` => Pieza ${i} defectuosa`;
   console.log(`Pieza ${i} fabricada`);
   correctas++;
     }catch (err){
        defectuosas++;
console.log(err);
     }

    console.log(`fabricadas:${NUM_PIEZAS}:`);
    console.log(`->Correctas:${correctas}}:`);
    console.log(`incorrectas:${defectuosas}}:`);
     


  
     
  
 }