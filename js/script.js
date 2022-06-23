console.log('JS OK')

// Steps

const display = document.getElementById('display');
let printNumber = ""

let numberList = '<ul>'

// Stampo in console i numeri da 1 a 100

for(let i = 1; i <= 100; i++){

    // Se il modulo restituisce 0 (è divisibile per) associo la parola
    if(i % 5 == 0 && i % 3 == 0){
        printNumber = ' fizzbuzz';     
    }
    else if(i % 3 == 0){
        printNumber = ' fizz';    
    }
    else if(i % 5 == 0){
        printNumber = ' buzz';    
    }

    // Altrimenti associo il numero attuale
    else{
        printNumber = ` ${i}`;    
    }
    
    numberList += `<li>${printNumber}</li>`
}

numberList += '</ul>'

display.innerHTML = numberList;
