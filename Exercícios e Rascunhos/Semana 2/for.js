const prompt = require('prompt-sync')();

//EXERCICIO 3

let num = +prompt('Digite um numero para ter a sua tabuada: ')

for(let i = 1; i <= 10; i++){ //i é o contador. 10 é a quantidade 
    // de repetições. i++ adiociona +1 ao i a 
    //cada repetição e faz ele parar no 10.
    console.log(`${num} * ${i} = ${num*i}`) 
}
//
