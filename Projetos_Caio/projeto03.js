const prompt = require("prompt-sync")();
console.clear();
var regex2 = /[1-9]/
var regex = /[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, x, z, y, w, ç]/;
console.log(`Olá, seja bem-vindo ao RPG Sociológico!
Neste jogo, TODAS as escolhas têm consequências 
e impactam no final! Por se tratar de um jogo no estilo RPG,
alguns dos atributos serão aleatórios, de modo a emular um dado!`);
console.log();
console.log(`Este é um jogo educativo, que tem a intenção de simular 
algumas situações que pessoas de diferentes etinias e sexos têm ao longo
de sua vida! A ideia não é ter um vencedor ou perdedor ao final, 
e sim ilustrar como condições sociais, que estão além de nossas 
escolhas, podem influenciar em nossa carreira escolar e profissional.`);
console.log(`--------------------------------------------------------------------`)
console.log(`--------------------------Vamos começar!----------------------------`)
let nome = prompt(`Qual o nome do seu personagem? `)
while (!regex.test(nome)){
    console.log(`Por favor, digite um nome válido (Somente letras)!`)
    nome = prompt(`Qual o nome do seu personagem? `)
}
let nascimento = +prompt(`${nome}, em que ano você nasceu? `)
while (!regex2.test(nascimento) || nascimento < 1980){
    console.log(`Digite uma data válida! (Este jogo simulas os dias atuais,
    digite uma data maior ou igual à 1980 e somente com números)`)
    nascimento = +prompt(`${nome}, em que ano você nasceu? `)
}
let etinia = prompt(`Qual é a cor da sua pele? (Preta ou Branca) `).toLowerCase();
while (etinia !== 'branca' && etinia !== 'preta'){
    console.log(`Por favor ${nome}, escolha entre as duas opções disponíveis!`)
    etinia = prompt(`Qual é a cor da sua pele? (Escolha entre "Preta" ou "Branca") `).toLowerCase();
}
let sexo = prompt(`Qual é o seu sexo? (Homem ou mulher)`).toLowerCase();
while (sexo !== 'homem' && sexo !== 'mulher'){
    console.log(`Por favor ${nome}, escolha entre as duas opções disponíveis!`)
    sexo = prompt(`Qual é o seu sexo? (Homem ou mulher) `).toLowerCase();
}   
let anoInicio = nascimento + 6
console.log(`Olá, ${nome}, você é um(a) ${sexo}, de pele ${etinia}. Sua jornada se inicia no ano ${anoInicio}! Bom jogo!`);
console.log()
console.log(`---------------------------- ${anoInicio} ------------------------------`)




