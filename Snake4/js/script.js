// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const longArray = [1, 3 , 5, 7 , 9];

const shortArray = [2, 4, 6];

let i = 0;

while (longArray.length > shortArray.length){

    let casualNumber = Math.floor(Math.random() * 6) + 1;

    shortArray.push(casualNumber);

    i++;

}

console.log(shortArray)

