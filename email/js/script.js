// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const emailList = ["angelo@gmail.com", "pippo@gmail.com", "mario@gmail.com"];
// let emailUser = prompt("inserisci la tua email");

// let emailUser = document.getElementById("email-user");
let button = document.getElementById("button");

const result = document.getElementById("risultato");


button.addEventListener("click", function() { 
    let emailOk = false;
    let emailUser = document.getElementById("email-user").value;
    
    for (let i = 0; i < emailList.length; i ++) {
    
        const element = emailList[i];
    
        if (emailUser == element) {
            emailOk = true;
        }
    }
    
    if (emailOk == true ) {
        result.innerHTML =`benvenuto ${emailUser}`;
    } else {
        result.innerHTML =`spiacente ${emailUser} non sei registrato`;
    }
    emailUser = document.getElementById("email-user").value = "";
}); 
