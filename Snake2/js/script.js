// Calcola la somma e la media dei primi 10 numeri.

// variabile somma
let sum = 0;

for (let i = 1; i <= 10; i++){
    // analizzo i numeri
    let thisNumber = i

    // sommo i numeri
    sum += thisNumber;
    console.log('somma dei numeri', sum)

}

// somma dei numeri diviso il numero degli elementi
let media = sum / 10;

console.log('media', media)