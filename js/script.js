console.log('JS OK')

// Steps

const display = document.getElementById('display');
let printNumber = ""

let numberList = '<ul class="row">'
let fizzClass = ""

// Stampo in console i numeri da 1 a 100

for(let i = 1; i <= 100; i++){

    // Se il modulo restituisce 0 (è divisibile per) associo la parola
    if(i % 5 == 0 && i % 3 == 0){
        printNumber = ' fizzbuzz';
        fizzClass = ' fb';
          
    }
    else if(i % 3 == 0){
        printNumber = ' fizz'; 
        fizzClass = ' f';   
    }
    else if(i % 5 == 0){
        printNumber = ' buzz';  
        fizzClass = ' b';  
    }

    // Altrimenti associo il numero attuale
    else{
        printNumber = ` ${i}`; 
        fizzClass = "";   
    }
    
    numberList += `<li class="col-4 col-sm-3 col-md-2 p-3"><div class="box${fizzClass}">${printNumber}</div></li>`
}

numberList += '</ul>'

display.innerHTML = numberList;
