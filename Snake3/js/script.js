// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// creo variabile inizalizzata a 0
let sum = 0;

// // ciclo 
// for(let i = 0; i < 5; i++){

//     // chiedo all'utente il humero
//     let userNumber = prompt ('Dimmi un numero');
//     // trasformo il numero 
//     userNumber = parseInt (userNumber);

//     // effettuo la somma
//     sum += userNumber;

// }

// console.log(sum)

let i = 0;

while ( i < 5) {

    // chiedo all'utente il humero
    let userNumber = prompt ('Dimmi un numero');

    // trasformo il numero 
    userNumber = parseInt (userNumber);

    // effettuo la somma
    sum += userNumber;

    i++;
}

console.log(sum)