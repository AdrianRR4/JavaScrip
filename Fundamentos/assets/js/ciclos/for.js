

const heroes=['Batman','Superman','Aquaman','Linterna verde','Mujer maravilla'];

console.warn('Ciclo For tradicional');
for (let i = 0; i < heroes.length; i++) {
    const element = heroes[i];
    console.log(heroes[i]);
}

console.warn('For in');
for(let i in heroes){
    console.log(heroes[i]);
}

console.warn('For of');

for(let heroe of heroes){
        console.log(heroes);
}   