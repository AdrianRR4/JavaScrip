

const carros=['nisan','ford','chevrolet','Mazda'];


let i=0;

/*** 

while(i<carros.length){
    console.log(carros[i]);
    i++;
}

*/

while(carros[i]){
    if(i===1)  {
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}

console.warn('do While');


let j =5;
 
do{
    console.log(carros[j]);
        j++;
}while(carros[i]);