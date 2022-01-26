const prompt = require('prompt-sync')(); 

let elementos = ['PEDRA','PAPEL','TESOURA'];
let pedra = elementos[0];
let papel = elementos[1];
let tesoura = elementos[2];
let vitoriaComputador = 0
let vitoriaUsuario = 0
let empate = 0
let usuario = prompt("Escolha entre: Pedra, Papel ou Tesoura: ").toUpperCase();
let computador = Math.floor(Math.random() * (elementos.length));

    while(usuario !== elementos[0] && usuario !== elementos[1] && usuario !== elementos[2]){
         console.log('Escolha entre as três opções disponíveis!')
         usuario = prompt("Escolha entre: Pedra, Papel ou Tesoura: ").toUpperCase();
    }
console.log('--------------------------------------------------------');
console.log(`O computador selecionou: ${elementos[computador]}.`);
console.log(`Você selecionou: ${usuario}.`)

    if(usuario == 'PEDRA' && computador == 0){
        console.log('O jogo empatou!')
        empate++
    } 
    if (usuario == 'PEDRA' && computador == 1){
        console.log('O computador venceu!')
        vitoriaComputador++
    } 
    if (usuario == 'PEDRA' && computador == 2){
        console.log('Você venceu!')
        vitoriaUsuario++
    } 
    if(usuario == 'PAPEL' && computador == 1){
        console.log('O jogo empatou!')
        empate++   
    } 
    if(usuario == 'PAPEL' && computador == 0){
        console.log('Você venceu!')
        vitoriaUsuario++   
    } 
    if(usuario == 'PAPEL' && computador == 2){
        console.log('O computador venceu!')
        vitoriaComputador++   
    } 
    if (usuario == 'TESOURA' && computador == 2){
        console.log('O jogo empatou!')
        empate++
    } 
    if (usuario == 'TESOURA' && computador == 1){
        console.log('Você venceu!')
        vitoriaUsuario++
    } 
    if (usuario == 'TESOURA' && computador == 0){
        console.log('O computador venceu!')
        vitoriaComputador++
    } 

console.log('--------------------------------------------------------')

console.log(`
            |Aqui estão os resultados: 
            |Empates: ${empate}
            |Suas vitórias: ${vitoriaUsuario}
            |Vitórias do computador: ${vitoriaComputador}
            `);


