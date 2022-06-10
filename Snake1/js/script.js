// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

// creo array vuoto
let toOdd = [];

// creo variabile per la somma
let sum = 0;


// avvio il ciclo che continuerà fino a che la somma non sarà inferiore a 50
while (sum < 50) {
    
// chiedo un numero all'utente
let userNumber = prompt ('dimmi un numero');

//  trasformo il numero 
userNumber = parseInt(userNumber);

// sommo i numeri dati dall'utente
sum += userNumber

// aggiungo i numeri dati all'array
toOdd.push(userNumber)
}

// controllo cosa c'è dentro l'array
console.log(toOdd)


