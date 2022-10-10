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
    let testo;

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "fizzbuzz");
        background = "bg-fizzbuzz-color";
        testo = ("fizzbuzz")
    } else {
        if (i % 3 == 0) {
            console.log(i, "fizz");
            background = "bg-fizz-color";
            testo = ("fizz")
        }
        
        if (i % 5 == 0) {
            console.log(i, "buzz");
            background = "bg-buzz-color";
            testo = ("buzz")
        }
    }

    if (i % 3 != 0 && i % 5 != 0) {
        console.log(i);
        background = "bg-primary-color";
        testo = i
    }
    
    const cell = document.createElement("div");
    cell.classList.add("col-2");
    cell.classList.add(background);

    cell.innerHTML = testo;

    row.append(cell);
}

