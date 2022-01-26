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
// let num;
// let pares = [];
// let impares = [];
// let todos = [];
// let contador = 1
// while (contador <= 20){
//     num = +prompt(`Digite o ${contador}º número: `);
//     todos.push(num);
//     contador++
//     if(num % 2 == 0){
//     pares.push(num)
//  } else {
//      impares.push(num)
//  }
// }
//  console.log(`Todos os numeros: ${todos}`)
//  console.log(`Pares: ${pares}`)
//  console.log(`Ímpares: ${impares}`)
// ;

// Exercício 2
let num;
let pessoa1 = [];
let pessoa2 = [];
let pessoa3 = [];
let pessoa4 = [];
let pessoa5 = [];

let num1 = +prompt(`Digite a idade da 1ª pessoa em anos: `)
    if (num1 !== 0 && num1 <=150) {
    pessoa1.push(num1)
}
num1 = +prompt(`Digite a altura da 1ª pessoa em cm: `)
    if (num1 !== 0) {
        pessoa1.push(num1)
    }
let num2 = +prompt(`Digite a idade da 2ª pessoa em anos: `)
    if (num2 !== 0 && num2 <=150) {
    pessoa2.push(num2)
}
num2 = +prompt(`Digite a altura da 2ª pessoa em cm: `)
    if (num2 !== 0) {
    pessoa2.push(num2)
}
let num3 = +prompt(`Digite a idade da 3ª pessoa em anos: `)
    if (num3 !== 0 && num3 <=150) {
    pessoa3.push(num3)
}
num3 = +prompt(`Digite a altura da 3ª pessoa em cm: `)
    if (num3 !== 0) {
    pessoa3.push(num3)
}
let num4 = +prompt(`Digite a idade da 4ª pessoa em anos: `)
    if (num4 !== 0 && num4 <=150) {
    pessoa4.push(num4)
}
num4 = +prompt(`Digite a altura da 4ª pessoa em cm: `)
    if (num4 !== 0) {
    pessoa4.push(num4)
}
let num5 = +prompt(`Digite a idade da 5ª pessoa em anos: `)
    if (num5 !== 0 && num5 <=150) {
    pessoa5.push(num5)
}
num5 = +prompt(`Digite a altura da 5ª pessoa em cm: `)
    if (num5 !== 0) {
    pessoa5.push(num5)
}
console.log();
console.log(`A média de altura das 5 pessoas é: ${Math.floor(pessoa1[1] + pessoa2[1] + 
    pessoa3[1] + pessoa4[1] + pessoa5[1]) / 5} cm`)
console.log();
console.log(`A média de idade das 5 pessoas é: ${Math.floor(pessoa1[0] + pessoa2[0] + 
    pessoa3[0] + pessoa4[0] + pessoa5[0]) / 5} anos de idade`)