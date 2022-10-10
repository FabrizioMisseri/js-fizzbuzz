// Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//SOLUZIONE
//contatore da 1 a 100 con ciclo for
//ad ogni passaggio somma 1 e fai confronto <=100
//ad ogni iterazione esegui:
    //condizione se divisibile per 3 scrivi "fizz"
    //                         per 5 scrivi "buzz"
    //                         per entrambi "fizzbuzz"

const row = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    let background = "";

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "fizzbuzz");
        background = "bg-fizzbuzz-color";
        const cell = `<div class="col-2 ${background}">${"fizzbuzz"}</div>`;
        row.innerHTML += cell;

    } else {
        if (i % 3 == 0) {
            console.log(i, "fizz");
            background = "bg-fizz-color";
            const cell = `<div class="col-2 ${background}">${"fizz"}</div>`;
            row.innerHTML += cell;

        }
        
        if (i % 5 == 0) {
            console.log(i, "buzz");
            background = "bg-buzz-color";
            const cell = `<div class="col-2 ${background}">${"buzz"}</div>`;
            row.innerHTML += cell;

        }
    }

    if (i % 3 != 0 && i % 5 != 0) {
        console.log(i);
        background = "bg-primary-color"
        const cell = `<div class="col-2 ${background}">${i}</div>`;
        row.innerHTML += cell;

    }

}
