let pizzas =[
    {
        id:1,
        name:'Hawaina',
        hasMeat:false,
        prices:{
            small:30,
            medium:45,
            big:60
        }
    },
    {
        id:2,
        name:'Carnivora',
        hasMeat:true,
        prices:{
            small:40,
            medium:80,
            big:120
        }
    },
    {
        id:3,
        name:'Vegetariana',
        hasMeat:false,
        prices:{
            small:25,
            medium:40,
            big:60
        }
    },
    {
        id:4,
        name:'Barbacoa',
        hasMeat:false,
        prices:{
            small:30,
            medium:50,
            big:90
        }
    },
]

console.log(pizzas);

// Crear una función que retorne las pizzas cuyo precio mediano sean mayor o igual a 50

let pizzaGT50=() =>{
        return pizzas.filter((pizza) =>{
            if( pizza.prices.medium>=50) return true
            return false
        })
}
console.log(pizzaGT50())