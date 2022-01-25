// let nomes = ['Caio', 'Natalia', 'Clara'];
// console.log(nomes)
// console.log();
// console.log(nomes.length);
// console.log();
// console.log(nomes[0]);
// console.log();
// console.log(nomes[0].length)

// let nomes2 = [
//   ["Caio", 20],
//   ["Natalia", 22],
//   ["Clara", 18],
// ];

// console.log(nomes2.length);
// console.log(nomes2[0]);
// console.log(nomes2[0][0]);

// nomes2[1] = "Natalinha";
// console.log(nomes2);
// console.log(nomes2.indexOf("Natalinha"));

// let novoNome = ("Cidinha");
// nomes2.push(novoNome);
// console.log(nomes2);

//Exercício 1
const prompt = require("prompt-sync")();
let num;
let pares = [];
let impares = [];
let numeros = [];
let contador = 1
while (contador <= 20){
    num = +prompt('Digite um número: ');
    numeros.push(num);
    contador++
    if(num % 2 == 0){
    pares.push(num)
 } else {
     impares.push(num)
 }
}
 console.log(`Todos os numeros: ${numeros}`)
 console.log(`Pares: ${pares}`)
 console.log(`Ímpares: ${impares}`)
;
