// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const button = document.getElementById("button");

button.addEventListener("click", function(){
    let randNumberOne = Math.floor(Math.random() * 6)+1;
    console.log (randNumberOne);

    let randNumberTwo = Math.floor(Math.random() * 6)+1;
    console.log (randNumberTwo);

    const winner = document.getElementById("risultato");
      

    if (randNumberOne > randNumberTwo) {
        winner.innerHTML = `${randNumberOne} - ${randNumberTwo} - Player Win`

    }else if (randNumberOne < randNumberTwo) {
        winner.innerHTML = `${randNumberOne} - ${randNumberTwo} - Pc Win`
    }else {
        winner.innerHTML= ("Draw");
    }
}); 
