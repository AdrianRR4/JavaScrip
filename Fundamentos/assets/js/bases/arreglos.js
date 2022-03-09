

//const arr=new Array(10);
//const arr=[];
//console.log(arr)

let videJuegos=['Mario bros','Mortal Kombat','Castelvania'];

console.log({videJuegos});

console.log(videJuegos[0]);

let arregloCosas=[

    true, 
    5+2,
    'que onda',
    null,
    function(){},
    ()=>{},
    {a:2},
    ['frezeer', 'cell','boo',
    ['broly','cualquier']]

];

console.log(arregloCosas)
console.log(arregloCosas[7][2]);
console.log(arregloCosas[7][2][1]);

function getRandom() {
    return Math.random();
  }
console.log( 'Random',getRandom())

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  console.log(getRandomInt(0,10))
 
  let a =Math.floor(Math.random()*1000)

console.log('valor de A:',a)
 if ( a<5){
console.log('a es menor')
 }else {
     console.log('a es mayor')
 }