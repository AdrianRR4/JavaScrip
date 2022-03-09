


    let deck=[];
    let puntosJugador=0;
        puntosComputadora=0;
    const tipos=['C','D','H','S'];

    const especiales=['A','J','Q','K'];
    

    //Referencias de las constantes

    //Referencias HTML

    const btnPedir=document.querySelector('#btnPedir');
    console.log(btnPedir);

    const 

    //Esta constante crea una nuevo deck

    const crearDeck=()=>{

        for(let i =2; i<=10; i++){// crea una enumeracion del 1 al 10
          console.log(i);

          for (let tipo of tipos) {
             console.log(tipo);// imprime las letras 
            deck.push(i+tipo);// realiza la insercion del arreglo con la enumeracipon y lo concatena    

          }
        }

        for (let tipo of tipos) {
                for (let especial of especiales) {
                    deck.push(especial+tipo);
                    //console.log(especial);
                }
        }

        console.log('Ordenado',deck);

        deck = _.shuffle(deck);
        console.log('Desordenado',deck);
        return deck;
    }
    crearDeck();

    //Función para pedir una  carta 

    const pedirCarta=()=>{

        if(deck.length==0){
                throw('Ya no hay cartas ');
                
        }else {

        }
        const carta=deck.pop();// elimina la ultima posición del arreglo
        console.log(deck);
        console.log(carta);
        
        return carta
    }

/**Vaciar el arreglo con for 
 
for (let index = 0; index <=100; index++) {
    pediCarta();
    
} 
*/
 // conocer el valor de la carta tomada

 const valorCarta =(carta)=>{

    const valor=carta.substring(0,carta.length-1);
    //let puntos=0;
   
    return (isNaN(valor))?
            (valor==='A')?11:10
            :valor+1;
   
  

}
    /*** 

    if(isNaN(valor)){
            console.log('No es un número');

            puntos=(valor==='A')?   11:10;
    }else{
            console.log('Es un número');
            puntos=valor;
    }
    console.log(puntos*1);
    
*/


 const valor=valorCarta(pedirCarta());
 console.log({valor});


    btnPedir.addEventListener('click', ()=>{
        console.log('click');
            const carta=pedirCarta();

            puntosJugador= puntosJugador + valorCarta(carta);

            console.log(puntosJugador);
    });