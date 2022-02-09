const prompt = require("prompt-sync")();
console.clear();
var regex2 = /[1-9]/;
var regex =
  /[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, x, z, y, w, ç]/;
let escolaridadeInicial = 0;
let cursosInicial = 0;
let empregabilidadeInicial = 0;
let escolaridade = [
  "Ensino médio completo",
  "Ensino médio incompleto",
  "Ensino superior completo",
];
let cursos = ["Inglês", "Informática", "CNH", "Não possui"];
let emprego = ["Formal", "Informal"];
console.log(`Olá, seja bem-vindo ao RPG Sociológico!
Neste jogo, TODAS as escolhas têm consequências 
e impactam no final! Por se tratar de um jogo no estilo RPG,
alguns dos eventos serão aleatórios, de modo a emular um dado!`);
console.log();
console.log(`Este é um jogo educativo, que tem a intenção de simular 
algumas situações que pessoas de diferentes etinias e sexos têm ao longo
de sua vida! A ideia não é ter um vencedor ou perdedor ao final, 
e sim ilustrar como condições sociais, que estão além de nossas 
escolhas, podem influenciar em nossa carreira escolar e profissional.`);
console.log(
  `--------------------------------------------------------------------`
);
console.log(
  `--------------------------Vamos começar!----------------------------`
);
let nome = prompt(`Qual o nome do seu personagem? `);
while (!regex.test(nome)) {
  console.log(`Por favor, digite um nome válido (Somente letras)!`);
  nome = prompt(`Qual o nome do seu personagem? `);
}
let nascimento = +prompt(`${nome}, em que ano você nasceu? `);
while (!regex2.test(nascimento) || nascimento < 1980 || nascimento >= 2022) {
  console.log(`Digite uma data válida! (Este jogo simulas os dias atuais,
digite uma data maior ou igual à 1980 e menor que 2022)`);
  nascimento = +prompt(`${nome}, em que ano você nasceu? `);
}
let etinia = prompt(
  `Qual é a cor da sua pele? (Preta ou Branca) `
).toLowerCase();
while (etinia !== "branca" && etinia !== "preta") {
  console.log(`Por favor ${nome}, escolha entre as duas opções disponíveis!`);
  etinia = prompt(
    `Qual é a cor da sua pele? (Escolha entre "Preta" ou "Branca") `
  ).toLowerCase();
}
let sexo = prompt(`Qual é o seu sexo? (Homem ou mulher) `).toLowerCase();
while (sexo !== "homem" && sexo !== "mulher") {
  console.log(`Por favor ${nome}, escolha entre as duas opções disponíveis!`);
  sexo = prompt(`Qual é o seu sexo? (Homem ou mulher) `).toLowerCase();
}
let anoInicio = nascimento + 6;
console.log();
console.log(
  `--------------------------- O ano é ${nascimento} ---------------------------`
);
console.log();
if (sexo == "homem" && etinia == "branca") {
  console.log(`
Sendo um homem branco, você sempre teve maiores incentivos e oportunidades.
Por conta disso, praticamente todas as escolhas estão sob seu controle.
E eventos aleatórios que te prejudiquem, são extremamente raros! 
Seu futuro só depende de você!
        `);
}
if (sexo == "homem" && etinia == "preta") {
  console.log(`
Sendo um homem preto, por conta do racismo,
você teve diversas portas fechadas durante a vida.
Você ainda possui alguma autonomia, 
mas algumas coisas estão além do seu controle! 
Você está bastante suscetível a eventos aleatórios que vão
impactar diretamente na sua vida.
        `);
}
if (sexo == "mulher" && etinia == "branca") {
  console.log(`
Como mulher, você não foi muito incentivada a investir em sua carreira.
Mas, por ser uma pessoa branca, você ainda possui grande automonia. 
A maior parte de suas escolhas serão feitas por você e eventos aleatórios 
impactantes são comuns.
        `);
}
if (sexo == "mulher" && etinia == "preta") {
  console.log(`
Sendo uma mulher preta, você enfrentou diversos tipos de discriminação.
Ao longo de sua tragetória, foi forçada a acreditar que era menos capaz e 
possui uma diminuição muito significativa das oportunidades de escolarização
e empregabilidade. Seu futuro está muito suscetível a eventos aleatórios que 
vão definir sua vida.
        `);
}
function status() {
  if (sexo == "homem" && etinia == "branca") {
    esc = escolaridadeInicial + 8;
    cur = cursosInicial + 8;
    empr = empregabilidadeInicial + 8;
    total = esc + cur + empr;
  }
  if (sexo == "homem" && etinia == "preta") {
    esc = escolaridadeInicial + 6;
    cur = cursosInicial + 6;
    empr = empregabilidadeInicial + 6;
    total = esc + cur + empr;
  }
  if (sexo == "mulher" && etinia == "branca") {
    esc = escolaridadeInicial + 4;
    cur = cursosInicial + 4;
    empr = empregabilidadeInicial + 4;
    total = esc + cur + empr;
  }
  if (sexo == "mulher" && etinia == "preta") {
    esc = escolaridadeInicial + 2;
    cur = cursosInicial + 2;
    empr = empregabilidadeInicial + 2;
    total = esc + cur + empr;
  }
  console.log(`
Seu status de Escolaridade é ${esc}/10
Seu status de Cursos Complementares é ${cur}/10
Seu status de Empregabilidade é ${empr}/10`);
}
status();
