// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const emailList = ["angelo@gmail.com", "pippo@gmail.com", "mario@gmail.com"];
// let emailUser = prompt("inserisci la tua email");

// let emailUser = document.getElementById("email-user");
let button = document.getElementById("button");
let emailOk = false

button.addEventListener("click", function() { 

    let emailUser = document.getElementById("email-user").value;
    
    for (let i = 0; i < emailList.length; i ++) {
    
        const element = emailList[i];
    
        if (emailUser == element) {
            emailOk = true
        }
    }
    
    if (emailOk == true ) {
        console.log("benvenuto " + emailUser);
    } else {
        console.log ("spiacente " + emailUser + " non sei registrato");
    }

}); 

