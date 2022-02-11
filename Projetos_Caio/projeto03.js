const prompt = require("prompt-sync")();
console.clear();
var regex2 = /[1-9]/;
var regex =
  /[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, x, z, y, w, ç]/;
let ensinoMedio = '';
let faculdade = '';
let prestarVestibular = ''
let escolaridade = [
  "Ensino médio completo",
  "Ensino médio incompleto",
  "Ensino superior completo",
];
let vestibular = ['Sim', 'Não']
let cursos = ["Inglês", "Informática", "CNH", "Não possui"];
let emprego = ["Formal", "Informal"];
let eventoAleatorioEstudos = [
  `Sua família teve uma emergência financeira e você interrompeu os estudos para trabalhar`,
];
let eventoAleatorioCursos = [
  `Devido a seu trabalho em tempo integral, você não põde fazer um curso complementar.`,
];
let eventoAleatorioEmprego = [
  `Você não possui muitas conexões no mercado de trabalho, o que criou um empecilho
para conseguir um trabalho formal.`,
];
let status = {
  esc: 0,
  cur: 0,
  empr: 0,
  total: 0,
  mudaEsc: function (esc1) {
    this.esc = esc1;
  },
  mudaCur: function (cur1) {
    this.cur = cur1;
  },
  mudaEmpr: function (empr1) {
    this.empr = empr1;
  },
  mudaTotal: function(total1) {
    this.total = total1;
  },
  statusfinal: function () {
    console.log(`
Seu status de Escolaridade é ${this.esc}/10
Seu status de Cursos Complementares é ${this.cur}/10
Seu status de Empregabilidade é ${this.empr}/10`);
  },
};
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
while (!regex2.test(nascimento) || nascimento < 1980 || nascimento >= 1999) {
  console.log(`Digite uma data válida! (Este jogo simulas os dias atuais,
digite uma data entre 1980 e 2000)`);
  nascimento = +prompt(`${nome}, em que ano você nasceu? `);
}
let etinia = prompt(
  `A cor de sua pele é preta ou branca? `
).toLowerCase();
while (etinia !== "branca" && etinia !== "preta") {
  console.log(`Por favor ${nome}, escolha entre as duas opções disponíveis!`);
  etinia = prompt(
    `Qual é a cor da sua pele? (Escolha entre "Preta" ou "Branca") `
  ).toLowerCase();
}
let sexo = prompt(`Você é homem ou mulher? `).toLowerCase();
while (sexo !== "homem" && sexo !== "mulher") {
  console.log(`Por favor ${nome}, escolha entre as duas opções disponíveis!`);
  sexo = prompt(`Qual é o seu sexo? (Homem ou mulher) `).toLowerCase();
}
let idade = 2022 - nascimento;
console.log();
console.log(
  `--------------------- Você tem ${idade} anos de idade ---------------------`
);
console.log();
if (sexo == "homem" && etinia == "branca") {
  console.log(`
Sendo um homem branco, você sempre teve maiores incentivos e oportunidades.
Por conta disso, praticamente todas as escolhas estão sob seu controle.
E eventos aleatórios que te prejudiquem, são extremamente raros! 
Seu futuro só depende de você!
        `);
    console.log(`----------------------------------------------------`)
    aleatoriedadeEstudos();
  } 
  else if (sexo == "homem" && etinia == "preta") {
  console.log(`
Sendo um homem preto, por conta do racismo,
você teve diversas portas fechadas durante a vida.
Você ainda possui alguma autonomia, 
mas algumas coisas estão além do seu controle! 
Você está bastante suscetível a eventos aleatórios que vão
impactar diretamente na sua vida.
        `);
  }
    else if (sexo == "mulher" && etinia == "branca") {
  console.log(`
Como mulher, você não foi muito incentivada a investir em sua carreira.
Mas, por ser uma pessoa branca, você ainda possui grande automonia. 
A maior parte de suas escolhas serão feitas por você e eventos aleatórios 
impactantes são comuns.
        `);
    }
      else if (sexo == "mulher" && etinia == "preta") {
  console.log(`
Sendo uma mulher preta, você enfrentou diversos tipos de discriminação.
Ao longo de sua tragetória, foi forçada a acreditar que era menos capaz e 
possui uma diminuição muito significativa das oportunidades de escolarização
e empregabilidade. Seu futuro está muito suscetível a eventos aleatórios que 
vão definir sua vida.
        `);
      }
function aleatoriedadeEstudos() {
  if (sexo == "homem" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioEstudos) * 10);
    if (random == 1) {
      console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=
    Sua família teve uma emergência financeira e você interrompeu 
    os estudos para trabalhar!
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`);
      status.mudaEsc(status.esc -3);
      status.statusfinal();
    }
    else {
      perguntas();
    };
  }
  else if (sexo == "homem" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioEstudos) * 10);
    if (random <= 3) {
      console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=
    Sua família teve uma emergência financeira e você interrompeu 
    os estudos para trabalhar!
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`);
      status.mudaEsc(status.esc -5);
      status.statusfinal();
      }
   }
  else if (sexo == "mulher" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioEstudos) * 10);
    if (random <= 2) {
      console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=
    Sua família teve uma emergência financeira e você interrompeu 
    os estudos para trabalhar!
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`);
      status.mudaEsc(status.esc -3);
      status.statusfinal();
      }
    }
  else if (sexo == "mulher" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioEstudos) * 10);
    if (random <= 5) {
      console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=
    Sua família teve uma emergência financeira e você interrompeu 
    os estudos para trabalhar!
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`);
      status.mudaEsc(status.esc -3);
      status.statusfinal();
      }
   }
}
function aleatoriedadeCursos() {
  if (sexo == "homem" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioCursos) * 10);
    if (random == 1) {
      console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=
      Devido a seu trabalho em tempo integral, você não pôde 
      fazer um curso complementar.
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`);
      status.mudaCur(status.esc -3);
      status.statusfinal();
    }
  }
  else if (sexo == "homem" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioCursos) * 10);
    if (random <= 3) {
      console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=
      Devido a seu trabalho em tempo integral, você não pôde 
      fazer um curso complementar.
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`);
      status.mudaCur(status.esc -3);
      status.statusfinal();
      }
   }
  else if (sexo == "mulher" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioCursos) * 10);
    if (random <= 2) {
      console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=
      Devido a seu trabalho em tempo integral, você não pôde 
      fazer um curso complementar.
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`);
      status.mudaCur(status.esc -3);
      status.statusfinal();
      }
    }
  else if (sexo == "mulher" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioCursos) * 10);
    if (random <= 5) {
      console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=
      Devido a seu trabalho em tempo integral, você não pôde 
      fazer um curso complementar.
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`);
      status.mudaCur(status.esc -3);
      status.statusfinal();
      }
   }
}
function aleatoriedadeEmprego() {
  if (sexo == "homem" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioEmprego) * 10);
    if (random == 1) {
      console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=
      Você não possui muitas conexões no mercado de trabalho, o que 
      criou um empecilho para conseguir um trabalho formal.
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`);
      status.mudaEmpr((status.cur + status.esc)-3);
      status.statusfinal();
    }
  }
  else if (sexo == "homem" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioEmprego) * 10);
    if (random <= 3) {
      console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=
      Você não possui muitas conexões no mercado de trabalho, o que 
      criou um empecilho para conseguir um trabalho formal.
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`);
    status.mudaEmpr((status.cur + status.esc)-3);
      status.statusfinal();
      }
   }
  else if (sexo == "mulher" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioEmprego) * 10);
    if (random <= 2) {
      console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=
      Você não possui muitas conexões no mercado de trabalho, o que 
      criou um empecilho para conseguir um trabalho formal.
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`);
    status.mudaEmpr((status.cur + status.esc)-3);
      status.statusfinal();
      }
    }
  else if (sexo == "mulher" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioEmprego) * 10);
    if (random <= 5) {
      console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=
      Você não possui muitas conexões no mercado de trabalho, o que 
      criou um empecilho para conseguir um trabalho formal.
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`);
    status.mudaEmpr((status.cur + status.esc)-3);
      status.statusfinal();
      }
   }
}
function perguntas() {
    console.log(`Até o momento, nenhum problema aconteceu em sua
  vida, que pudesse atrapalhar seus estudos.`)
  ensinoMedio = prompt(`Você terminou o Ensino Médio? `).toLowerCase();
    while (ensinoMedio !== 'sim' && ensinoMedio !== 'nao' ){
      console.log(`Responda com Sim ou Não.`)
      ensinoMedio = prompt(`Você terminou o Ensino Médio? `).toLowerCase();
    }
      if (ensinoMedio == 'nao'){
        console.log(`Você não concluiu a formação básica. Por conta disso, 
      você provavelmente vai se limitar a empregos com baixas remunerações 
      e instáveis. Também não há possibilidade de ingressar 
      em um curso superior.`)
      }
      if (ensinoMedio == 'sim'){
        console.log(`Você completou a sua formação básica,
      você está apto a se candidatar a algumas vagas de emprego formal,
      mas a grande parte das oportunidades são temporárias ou informais`)
        status.mudaEsc(status.esc + 3)
        }   
        faculdade = prompt(`Você se formou em uma faculdade? `).toLowerCase();
          while (faculdade !== 'sim' && faculdade !== 'nao' ){
            console.log(`Responda com Sim ou Não.`)
            faculdade = prompt(`Você se formou em uma faculdade? `).toLowerCase();
      } 
          if (faculdade == 'sim') {
        console.log(`Parabéns! Com um curso superior em seu currículo,
        diversas portas se abriram. Agora sua chance de conseguir um
        emprego formal e estável, estão muito maiores!`)
        status.mudaEsc(status.esc + 7)
          }
          else if (faculdade == 'nao') {
            console.log(`Você resolveu não fazer faculdade. Suas oportunidades
            de emprego, continuam as mesmas da escolha anterior.`)
          }    
      }   
status.statusfinal()
    
