

const array=['a','b', 'c','d','c','e','a','g','a','d','z'];

array.forEach(element=>{
    console.log(element);
});

let contador={};

array.forEach(element=>{
    if (contador[element]){
      contador[element]++;
    }else{
        contador[element]=1;
        contador[element]=1;
    }
});

console.log(contador);

