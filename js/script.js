let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

let numbersRandom = [];
let numeriProvati= [];
let numeriNonIndovinati = [];
let numeriIndovinati = []; 

numeroCasuale = '';

for (let i = 0; i < 5; i++) {
    const numeroCasuale = Math.floor(Math.random() * 100);
    numbersRandom.push(numeroCasuale);
    h2.innerHTML = numbersRandom;
    console.log(numeroCasuale);
}

function sparisceNumeri () {
    h2.innerHTML = '';
}


let numbers = '';

function chiedoNumero() {

    for (let i = 0; i < 5; i++) {
    numbers = parseInt(prompt('Inserisci uno dei 5 numeri'));
    numeriProvati.push(numbers);
    console.log(numeriProvati);
    }

    for (let z = 0; z < numeriProvati.length; z++) {

    if (!numbersRandom.includes(numeriProvati[z])) {
        numeriNonIndovinati.push(numeriProvati[z]);
        console.log(numeriNonIndovinati);
        const differenza = numbersRandom.length - numeriNonIndovinati.length;
        h2.innerHTML = 'i numeri indovinati sono ' + differenza;
    } else {
        numeriIndovinati.push(numeriProvati[z]);
        console.log(numeriIndovinati);
        h3.innerHTML = 'i numeri indovinati sono: ' + ' - ' + numeriIndovinati;
    }
  }
}

console.log(numbersRandom);


setTimeout(chiedoNumero, 30000);
setTimeout(sparisceNumeri, 28000);

