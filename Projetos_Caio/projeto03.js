const prompt = require("prompt-sync")();
console.clear();
var regex3 = /[1-3]/;
var regex2 = /[1-9]/;
var regex =
  /[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, x, z, y, w, ç]/;
let ensinoMedio = "";
let faculdade = "";
let cursocompl = "";
let cursoSuperior = [
  "Direito",
  "Pedagogia",
  "Medicina",
  "Ciências da Computação",
  "Marketing",
];
let cursoSuperior2 = 0 
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
  total: 0,
  mudaEsc: function (esc1) {
    this.esc = esc1;
  },
  mudaCur: function (cur1) {
    this.cur = cur1;
  },
  mudaTotal: function (total1) {
    this.total = total1;
  },
  statusfinal: function () {
    console.log(`
Seu status de Escolaridade é ${this.esc}/10
Seu status de Cursos Complementares é ${this.cur}/10`);
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
while (!regex2.test(nascimento) || nascimento < 1980 || nascimento > 1999) {
  console.log(`Digite uma data válida! (Este jogo simulas os dias atuais,
digite uma data entre 1980 e 2000)`);
  nascimento = +prompt(`${nome}, em que ano você nasceu? `);
}
let etinia = prompt(`A cor de sua pele é preta ou branca? `).toLowerCase();
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
console.clear();
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
  console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`
  );
  aleatoriedadeEstudos();
  console.clear();
  aleatoriedadeCursos();
} else if (sexo == "homem" && etinia == "preta") {
  console.log(`
Sendo um homem preto, por conta do racismo,
você teve diversas portas fechadas durante a vida.
Você ainda possui alguma autonomia, 
mas algumas coisas estão além do seu controle! 
Você está bastante suscetível a eventos aleatórios que vão
impactar diretamente na sua vida.
        `);
  console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`
  );
  aleatoriedadeEstudos();
  console.clear();
  aleatoriedadeCursos();
} else if (sexo == "mulher" && etinia == "branca") {
  console.log(`
Como mulher, você não foi muito incentivada a investir em sua carreira.
Mas, por ser uma pessoa branca, você ainda possui grande automonia. 
A maior parte de suas escolhas serão feitas por você e eventos aleatórios 
impactantes são comuns.
        `);
  console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
  aleatoriedadeEstudos();
  console.clear();
  aleatoriedadeCursos();
} else if (sexo == "mulher" && etinia == "preta") {
  console.log(`
Sendo uma mulher preta, você enfrentou diversos tipos de discriminação.
Ao longo de sua tragetória, foi forçada a acreditar que era menos capaz e 
possui uma diminuição muito significativa das oportunidades de escolarização
e empregabilidade. Seu futuro está muito suscetível a eventos aleatórios que 
vão definir sua vida.
        `);
  console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
  aleatoriedadeEstudos();
  console.clear();
  aleatoriedadeCursos();
}
function aleatoriedadeEstudos() {
  if (sexo == "homem" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioEstudos) * 10);
    if (random == 1) {
      console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Sua família teve uma emergência financeira e você interrompeu 
os estudos para trabalhar!
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
skip = prompt(`Aperte 'ENTER' para continuar...`)
    } else {
      perguntasEstudo();

    }
  } else if (sexo == "homem" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioEstudos) * 10);
    if (random <= 3) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Sua família teve uma emergência financeira e você interrompeu 
os estudos para trabalhar!
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
skip = prompt(`Aperte 'ENTER' para continuar...`)   
    } else {
      perguntasEstudo();
    }
  } else if (sexo == "mulher" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioEstudos) * 10);
    if (random <= 2) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Sua família teve uma emergência financeira e você interrompeu 
os estudos para trabalhar!
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
skip = prompt(`Aperte 'ENTER' para continuar...`)
    } else {
      perguntasEstudo();
    }
  } else if (sexo == "mulher" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioEstudos) * 10);
    if (random <= 5) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Sua família teve uma emergência financeira e você interrompeu 
os estudos para trabalhar!
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
skip = prompt(`Aperte 'ENTER' para continuar...`)
    } else {
      perguntasEstudo();
    }
  }
}
function faculdadealeatoria() {
  let random2 = Math.floor(Math.random(cursoSuperior)*cursoSuperior.length);
  if (random2 == 0) {
    cursoSuperior2 = "Direito";
  } else if (random2 == 1) {
    cursoSuperior2 = "Pedagogia";
  } else if (random2 == 2) {
    cursoSuperior2 = "Medicina";
  } else if (random2 == 3) {
    cursoSuperior2 = "Ciências da Computação";
  } else if (random2 == 4) {
    cursoSuperior2 = "Marketing";
  }
  console.log(`Parabéns, ${nome}. Você se formou em ${cursoSuperior2}! Com um curso superior em seu currículo,
diversas portas se abriram. Agora sua chance de conseguir um
emprego formal e estável, estão muito maiores!`);
}
function aleatoriedadeCursos() {
  if (sexo == "homem" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioCursos) * 10);
    if (random == 1) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Você não pôde fazer um curso complementar, pois você não possuía dinheiro suficiente
para pagar. Isso vai te prejudicar na busca por um emprego.
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
skip = prompt(`Aperte 'ENTER' para continuar...`)
    } else {
      perguntasCursos();
    }
  } else if (sexo == "homem" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioCursos) * 10);
    if (random <= 3) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Você não pôde fazer um curso complementar, pois você não possuía dinheiro suficiente
para pagar. Isso vai te prejudicar na busca por um emprego.
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
skip = prompt(`Aperte 'ENTER' para continuar...`)
    }
    else {
      perguntasCursos();
    }
  } else if (sexo == "mulher" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioCursos) * 10);
    if (random <= 2) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Você não pôde fazer um curso complementar, pois você não possuía dinheiro suficiente
para pagar. Isso vai te prejudicar na busca por um emprego.
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
skip = prompt(`Aperte 'ENTER' para continuar...`)
    }
    else {
      perguntasCursos();
    }
  } else if (sexo == "mulher" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioCursos) * 10);
    if (random <= 5) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Você não pôde fazer um curso complementar, pois você não possuía dinheiro suficiente
para pagar. Isso vai te prejudicar na busca por um emprego.
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
skip = prompt(`Aperte 'ENTER' para continuar...`)
    }
    else {
      perguntasCursos();
    }
  }
}
function aleatoriedadeEmprego() {
  if (sexo == "homem" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioEmprego) * 10);
    if (random == 1) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Você não possui muitas conexões no mercado de trabalho, o que 
criou um empecilho para conseguir um trabalho formal.
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
skip = prompt(`Aperte 'ENTER' para continuar...`)
status.mudaTotal((status.esc+status.cur)-2);
    }
  } else if (sexo == "homem" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioEmprego) * 10);
    if (random <= 3) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Você não possui muitas conexões no mercado de trabalho, o que 
criou um empecilho para conseguir um trabalho formal.
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
skip = prompt(`Aperte 'ENTER' para continuar...`)
status.mudaTotal((status.esc+status.cur)-2);
    }
  } else if (sexo == "mulher" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioEmprego) * 10);
    if (random <= 2) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Você não possui muitas conexões no mercado de trabalho, o que 
criou um empecilho para conseguir um trabalho formal.
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
skip = prompt(`Aperte 'ENTER' para continuar...`)
status.mudaTotal((status.esc+status.cur)-2);
    }
  } else if (sexo == "mulher" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioEmprego) * 10);
    if (random <= 5) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Você não possui muitas conexões no mercado de trabalho, o que 
criou um empecilho para conseguir um trabalho formal.
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
skip = prompt(`Aperte 'ENTER' para continuar...`)
status.mudaTotal((status.esc+status.cur)-2);
    }
  }
}
function perguntasEstudo() {
  console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
  console.log(
`Nenhum evento aleatório aconteceu em sua vida, que pudesse 
atrapalhar seus estudos.`);
  console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
  ensinoMedio = prompt(`Você terminou o Ensino Médio? `).toLowerCase();
  while (ensinoMedio !== "sim" && ensinoMedio !== "nao") {
    console.log(`Responda com Sim ou Não.`);
    ensinoMedio = prompt(`Você terminou o Ensino Médio? `).toLowerCase();
  }
  console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
  if (ensinoMedio == "nao") {
    console.log(`Você não concluiu a formação básica. Por conta disso, 
você provavelmente vai se limitar a empregos com baixas remunerações 
e instáveis. Também não há possibilidade de ingressar 
em um curso superior.`);
    console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
    );
  }
  if (ensinoMedio == "sim") {
    console.log(`Você completou a sua formação básica,
você está apto a se candidatar a algumas vagas de emprego formal,
mas a grande parte das oportunidades são temporárias ou informais`);
    console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
    );
    status.mudaEsc(status.esc + 3);
  }
  faculdade = prompt(`Você se formou em uma faculdade? `).toLowerCase();
  while (faculdade !== "sim" && faculdade !== "nao") {
    console.log(`Responda com Sim ou Não.`);
    faculdade = prompt(`Você se formou em uma faculdade? `).toLowerCase();
  }
  if (faculdade == "sim") {
    faculdadealeatoria();
    status.mudaEsc(status.esc + 7);
    console.log();
    skip = prompt(`Aperte 'ENTER' para continuar...`)
    console.log();
  } else if (faculdade == "nao") {
    console.log(`Você resolveu não fazer faculdade. Suas oportunidades
de emprego, continuam as mesmas da escolha anterior.`);
  }
  console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
}
function perguntasCursos() {
  console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
  console.log(`Desde quando você terminou os estudos, nada aconteceu para
te impedir de fazer um curso complementar.`);
skip = prompt(`Aperte 'ENTER' para continuar...`)
  console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
  cursocompl = prompt(`Você deseja fazer algum curso complementar? `).toLowerCase();
    while (cursocompl !== 'sim' && cursocompl !== 'nao') {
      console.log(`Escolha entre Sim ou Não.`); 
      cursocompl = prompt(`Você deseja fazer algum curso complementar? `).toLowerCase();
    }
    if (cursocompl == 'nao') {
      console.log(`Você decidiu não fazer nenhum curso. Isso vai te
prejudicar na busca por uma posição no mercado de trabalho. Mas você ainda
pode conseguir boas oportunidades.`)
    }
    if (cursocompl == 'sim') {
      console.log(
`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)
      console.log(`
Qual curso você deseja fazer?
      
[1] - Inglês
[2] - Espanhol
[3] - Tirar CNH
      `)
      cursos = +prompt(`
Escolha entre as três opções: `)
console.log(
  `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
)
      while(!regex3.test(cursos)){
        cursos = +prompt(`
Digite o número correspondente a opção desejada: `)
      }
      if (cursos == 1){
        status.mudaCur(status.cur + 10);
        console.log(`
Você fez um curso de inglês! Dentre as opções, 
essa é a que mais agrega à sua educação.`)
      }
      else if (cursos == 2){
        status.mudaCur(status.cur + 7);
        console.log(`
Você fez um curso de espanhol! Não é a opção que mais 
agrega à sua educação, mas abre diversas portas!`)
      }
      else if (cursos == 3){
        status.mudaCur(status.cur + 3);
        console.log(`
Você fez o processo para tirar sua CNH. Esse curso não
agrega a sua capacitação, mas te proporciona algumas opções.`)
      }

    }
}
function emprego () {

}
status.statusfinal();
