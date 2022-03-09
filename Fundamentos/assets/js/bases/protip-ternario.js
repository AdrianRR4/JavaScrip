
const elMayor=(a,b)=>(a>b)?a:b;

console.log(elMayor(10,15));    

const tieneMembresia=(miembro)=> (miembro)?'2 dolares':'10 dolares';

 console.log(tieneMembresia(false));

 const amigo=true;
 const amigosArr=[

    'peter',
        'tony',
        'dr.strange',
        amigo? 'thor':'loki',
        (()=>'nick furry')(),
        elMayor(43,33)
 ];

 console.log(amigosArr);

 const nota=75;

 const grado=nota>= 95?'A+':

 nota>= 90?'A':
 nota>= 85?'B+':
 nota>= 80?'B':
 nota>= 75?'C+':
 nota>= 70?'C+': 'F'

 console.log({nota,grado})