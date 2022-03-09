
/** 
const cursoJs=["intro a js", "variables y tipos", "conversion de tipos", "funciones"];

for(let i=0; i<cursoJs.length; i++){
        //console.log(`${i+1} ${cursoJs[i]}`);
        console.log( i+1,cursoJs[i])
}
*/
const semestres=[
        {
         semestr:'primero',       
         materias:6,
         creditos:10,
         aprobo:true
        },
        {
         semestr:'segundo',       
         materias:7,
         creditos:11,
         aprobo:false
               },
               {
               semestr:'tercer',       
               materias:8,
               creditos:14,
               aprobo:true
                     },
               
];

const nuevoObjeto= new Object();
let lista=[];
semestres.forEach(element => {

        element.aprobo
        console.log(element);
        
});