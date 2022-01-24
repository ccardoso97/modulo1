const prompt = require("prompt-sync")();

// Excercício 1
// Faça um Programa que peça dois números 
// e imprima o maior deles, e informe caso eles 
// sejam iguais.

// let num1 = +prompt("Digite um número ");
// let num2 = +prompt("Digite outro número ");
// console.log();
// if (num1 > num2){
//     console.log(num1 + " é maior que " + num2)
// } else if (num2 > num1){
//     console.log(num2 + " é maior que " + num1) 
// } else { 
//     console.log(num1 + " é igual à " + num2)
// }

// Exercício 2
// Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Em recuperação", se a média for entre cinco e sete;
// A mensagem "Reprovado", se a média for menor que cinco.

let nota1 = +prompt("Qual foi a nota em Matemática? ");
let nota2 = +prompt("Qual foi a nota em Português? ");
let nota3 = +prompt("Qual foi a nota em Física? ");
let nota4 = +prompt("Qual foi a nota em História? ");

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >=7){
    console.log(`Sua média foi: ${media}. Aprovado!`)
} else if (media >=5){
    console.log(`Sua média foi: ${media}. Recuperação!`)
} else if (media <5){
    console.log(`Sua média foi: ${media}. Reprovado!`)
}

// Exercício 3
// Faça um programa que leia dois números 
// e identifique se é par ou ímpar
// let numero = +prompt("Digite um número: ");
// if (numero % 2 == 0){
//     console.log("Este número é par!") 
// } else {
//     console.log("Este número é ímpar!")
// }

//Exercício 4
