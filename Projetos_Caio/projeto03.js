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
let cursoSuperior2 = 0;
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
let emprego = 0;
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
console.log();
skip = prompt(`Aperte 'ENTER' para continuar...`);
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
while (!regex2.test(nascimento) || nascimento < 1980 || nascimento > 2000) {
  console.log(`Digite uma data válida! (Este jogo simulas os dias atuais,
digite uma data entre 1980 e 2000)`);
  nascimento = +prompt(`${nome}, em que ano você nasceu? `);
}
var anoAtual = nascimento;
var idade = anoAtual - nascimento;
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
let personagem = {
  nomePersonagem: nome,
  etniaPersonagem: etinia,
  sexoPersonagem: sexo,
  caracteristicas: function () {
    console.log(
      `Seu nome é ${this.nomePersonagem},
Sua pele é ${this.etniaPersonagem},
Você é ${this.sexoPersonagem}.`
    );
    status.statusfinal();
  },
};
skip = prompt(`Tecle ENTER para continuar... `);
function consultar() {
  let consult = prompt(
    `Você deseja consultar as suas características e status? `
  ).toLowerCase();
  while (consult !== "sim" && consult !== "nao") {
    console.log("Responda com Sim ou Não.");
    consult = prompt(
      `Você deseja consultar as suas características e status? `
    ).toLowerCase();
  }
  if (consult == "sim") {
    personagem.caracteristicas();
    skip = prompt(`Tecle ENTER para continuar... `);
  } else if (consult == "nao") {
    skip = prompt(`Tecle ENTER para continuar... `);
  }
}
console.log();
console.clear();
console.log();
if (sexo == "homem" && etinia == "branca") {
  console.log(`
Sendo um homem branco, você sempre teve maiores incentivos e oportunidades.
Por conta disso, praticamente todas as escolhas estão sob seu controle.
E eventos aleatórios que te prejudiquem, são extremamente raros! 
Seu futuro só depende de você!
        `);

  skip = prompt(`Aperte 'ENTER' para continuar...`);
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`
  );
  aleatoriedadeEstudos();
  console.clear();
  consultar();
  console.clear();
  aleatoriedadeCursos();
  console.clear();
  consultar();
  console.clear();
  aleatoriedadeEmprego();
} else if (sexo == "homem" && etinia == "preta") {
  console.log(`
Sendo um homem preto, por conta do racismo,
você teve diversas portas fechadas durante a vida.
Você ainda possui alguma autonomia, 
mas algumas coisas estão além do seu controle! 
Você está bastante suscetível a eventos aleatórios que vão
impactar diretamente na sua vida.
        `);
  skip = prompt(`Aperte 'ENTER' para continuar...`);
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=`
  );
  aleatoriedadeEstudos();
  console.clear();
  consultar();
  console.clear();
  aleatoriedadeCursos();
  console.clear();
  consultar();
  console.clear();
  aleatoriedadeEmprego();
} else if (sexo == "mulher" && etinia == "branca") {
  console.log(`
Como mulher, você não foi muito incentivada a investir em sua carreira.
Mas, por ser uma pessoa branca, você ainda possui grande automonia. 
A maior parte de suas escolhas serão feitas por você e eventos aleatórios 
impactantes são comuns.
        `);
  skip = prompt(`Aperte 'ENTER' para continuar...`);
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
  aleatoriedadeEstudos();
  console.clear();
  consultar();
  console.clear();
  aleatoriedadeCursos();
  console.clear();
  consultar();
  console.clear();
  aleatoriedadeEmprego();
} else if (sexo == "mulher" && etinia == "preta") {
  console.log(`
Sendo uma mulher preta, você enfrentou diversos tipos de discriminação.
Ao longo de sua trajetória, foi forçada a acreditar que era menos capaz e 
possui uma diminuição muito significativa das oportunidades de escolarização
e empregabilidade. Seu futuro está muito suscetível a eventos aleatórios que 
vão definir sua vida.
        `);
  skip = prompt(`Aperte 'ENTER' para continuar...`);
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
  aleatoriedadeEstudos();
  console.clear();
  consultar();
  console.clear();
  aleatoriedadeCursos();
  console.clear();
  consultar();
  console.clear();
  aleatoriedadeEmprego();
}
function aleatoriedadeEstudos() {
  var anoAtual = nascimento + 15;
  var idade = anoAtual - nascimento;
  console.log(
    `Você tem ${idade} anos de idade e acabou de terminar o ensino fundamental `
  );
  if (sexo == "homem" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioEstudos) * 10);
    if (random == 1) {
      console.log(
        `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Sua família teve uma emergência financeira e você interrompeu 
os estudos para trabalhar!
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
      );
      skip = prompt(`Aperte 'ENTER' para continuar...`);
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
      skip = prompt(`Aperte 'ENTER' para continuar...`);
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
      skip = prompt(`Aperte 'ENTER' para continuar...`);
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
      skip = prompt(`Aperte 'ENTER' para continuar...`);
    } else {
      perguntasEstudo();
    }
  }
}
function faculdadealeatoria() {
  let random2 = Math.floor(Math.random(cursoSuperior) * cursoSuperior.length);
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
      skip = prompt(`Aperte 'ENTER' para continuar...`);
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
      skip = prompt(`Aperte 'ENTER' para continuar...`);
    } else {
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
      skip = prompt(`Aperte 'ENTER' para continuar...`);
    } else {
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
      skip = prompt(`Aperte 'ENTER' para continuar...`);
    } else {
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
      skip = prompt(`Aperte 'ENTER' para continuar...`);
      status.mudaTotal(status.esc + status.cur - status.mudaTotal);
      empregoinformal();
    } else {
      perguntasEmprego();
    }
  } else if (sexo == "homem" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioEmprego) * 10);
    if (random <= 3) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Você não possui muitas conexões no mercado de trabalho, o que 
criou um empecilho para conseguir um trabalho formal.
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
      skip = prompt(`Aperte 'ENTER' para continuar...`);
      status.mudaTotal(status.esc + status.cur - status.mudaTotal);
      empregoinformal();
    } else {
      perguntasEmprego();
    }
  } else if (sexo == "mulher" && etinia == "branca") {
    let random = Math.floor(Math.random(eventoAleatorioEmprego) * 10);
    if (random <= 2) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Você não possui muitas conexões no mercado de trabalho, o que 
criou um empecilho para conseguir um trabalho formal.
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
      skip = prompt(`Aperte 'ENTER' para continuar...`);
      status.mudaTotal(status.esc + status.cur - status.mudaTotal);
      empregoinformal();
    } else {
      perguntasEmprego();
    }
  } else if (sexo == "mulher" && etinia == "preta") {
    let random = Math.floor(Math.random(eventoAleatorioEmprego) * 10);
    if (random <= 5) {
      console.log(`
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Você não possui muitas conexões no mercado de trabalho, o que 
criou um empecilho para conseguir um trabalho formal.
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`);
      skip = prompt(`Aperte 'ENTER' para continuar...`);
      status.mudaTotal(status.esc + status.cur - status.mudaTotal);
      empregoinformal();
    } else {
      perguntasEmprego();
    }
  }
}
function perguntasEstudo() {
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
  console.log(
    `Nenhum evento aleatório aconteceu em sua vida, que pudesse 
atrapalhar seus estudos.`
  );
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
    var anoAtual = nascimento + 18;
    var idade = anoAtual - nascimento;
    console.log(
      `Você tem ${idade} anos de idade e acabou de terminar o Ensino Médio!`
    );
    faculdade = prompt(`Você se formou em uma faculdade? `).toLowerCase();
    while (faculdade !== "sim" && faculdade !== "nao") {
      console.log(`Responda com Sim ou Não.`);
      faculdade = prompt(`Você se formou em uma faculdade? `).toLowerCase();
    }

    if (faculdade == "sim") {
      faculdadealeatoria();
      status.mudaEsc(status.esc + 7);
      console.log();
      skip = prompt(`Aperte 'ENTER' para continuar...`);
      console.log();
    } else if (faculdade == "nao") {
      console.log(`Você resolveu não fazer faculdade. Suas oportunidades
de emprego, continuam as mesmas da escolha anterior.`);
    }
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
  var anoAtual = nascimento + 25;
  var idade = anoAtual - nascimento;
  console.log(
    `Você tem ${idade} anos de idade e está pensando em se capacitar mais!`
  );
  skip = prompt(`Aperte 'ENTER' para continuar...`);
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
  cursocompl = prompt(
    `Você deseja fazer algum curso complementar? `
  ).toLowerCase();
  while (cursocompl !== "sim" && cursocompl !== "nao") {
    console.log(`Escolha entre Sim ou Não.`);
    cursocompl = prompt(
      `Você deseja fazer algum curso complementar? `
    ).toLowerCase();
  }
  if (cursocompl == "nao") {
    console.log(`Você decidiu não fazer nenhum curso. Isso vai te
prejudicar na busca por uma posição no mercado de trabalho. Mas você ainda
pode conseguir boas oportunidades.`);
  }
  if (cursocompl == "sim") {
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
    );
    console.log(`
Qual curso você deseja fazer?
      
[1] - Inglês
[2] - Espanhol
[3] - Tirar CNH
      `);
    cursos = +prompt(`
Escolha entre as três opções: `);
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
    );
    while (!regex3.test(cursos)) {
      cursos = +prompt(`
Digite o número correspondente a opção desejada: `);
    }
    if (cursos == 1) {
      status.mudaCur(status.cur + 10);
      console.log(`
Você fez um curso de inglês! Dentre as opções, 
essa é a que mais agrega à sua educação.`);
      skip = prompt(`Aperte ENTER para continuar...`);
    } else if (cursos == 2) {
      status.mudaCur(status.cur + 7);
      console.log(`
Você fez um curso de espanhol! Não é a opção que mais 
agrega à sua educação, mas abre diversas portas!`);
      skip = prompt(`Aperte ENTER para continuar...`);
    } else if (cursos == 3) {
      status.mudaCur(status.cur + 3);
      console.log(`
Você fez o processo para tirar sua CNH. Esse curso não
agrega a sua capacitação, mas te proporciona algumas opções.`);
      skip = prompt(`Aperte ENTER para continuar...`);
    }
  }
}
function perguntasEmprego() {
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
  console.log(
    `Nada aconteceu em sua vida que te pudesse te condicionar à um emprego informal. 
Você possui chances de conseguir um emprego estável e bem remunerado, de acordo com 
os seus status de Escolaridade e Cursos Complementares`
  );
  var anoAtual = nascimento + 27;
  var idade = anoAtual - nascimento;
  console.log(`Você tem ${idade} anos de idade e está pronto para entrar 
  no mercado de trabalho!`);
  skip = prompt(`Aperte 'ENTER' para continuar...`);
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`
  );
  if (status.total >= 16) {
    console.log(`Parabéns! Você concluiu seus estudos com máximo
êxito! Devido a sua qualificação e seus contatos no mercado
você recebeu três ótimas propostas de emprego:
[1] - Emprego público na sua áreas de formação (${faculdadealeatoria.random2})
[2] - Gerência de banco
[3] - Representante de uma multinacional`);
    emprego = +prompt(`
Selecione a opção desejada: `);
    while (!regex3.test(emprego)) {
      emprego = +prompt(`Digite o número correspondente à opção desejada: `);
    }
    if (emprego == 1) {
      console.log(`Pouco depois de se formar, você já começou a atuar em sua área
com sua qualificação, sua posição já lhe proporciona uma grande remuneração e
muita estabilidade! Você se aposentou sem nunca ter ficado desempregado e
levou uma vida confortável!`);
    } else if (emprego == 2) {
      console.log(`Com um cargo importante em uma grande agência bancária de 
sua cidade, você usufruiu de uma vida repleta de oportunidades e conforto. 
Se aposentou cedo e pôde curtir seu tempo livre com a família.`);
    } else if (emprego == 3) {
      console.log(`Sendo um representante comercial desta grande empresa,
você conheceu muita gente em posições privilegiadas e que te proporcionaram
diversas oportunidades ao longo de sua vida. Você teve uma vida sem 
problemas financeiros e pôde proporcionar conforto para sua família`);
    }
  } else if (status.total == 11 && status.total <= 15) {
    console.log(`Você teve alguns problemas em sua, que te impediram de concluir
sua capacitação profissional com máximo êxito. Por conta disso, você recebeu 
três oportunidades medianas de emprego, que te proporcionam uma renda suficiente
para viver sem maiores dificuldades, porém com pouca estabilidade:
[1] - Gerente de supermercado
[2] - Supervisor de vendas
[3] - Assistente de Departamento Pessoal`);
    emprego = +prompt(`
Selecione a opção desejada: `);
    while (!regex3.test(emprego)) {
      emprego = +prompt(`Digite o número correspondente à opção desejada: `);
    }
    if (emprego == 1) {
      console.log(`Você conseguiu um cargo de chefia em uma unidade de uma rede
de supermercados. O emprego paga um salário suficiente para sustentar você
e seu cônjuge. Ao longo da sua vida, você passou por diversas lojas diferentes
e se aposentou tardimente, devido a períodos em que ficou desempregado(a).`);
    } else if (emprego == 2) {
      console.log(`Você supervisiona vendedores em uma loja de departamentos, um cargo
que te proporciona certa autonomia, porém com um salário mediano. Você se aposentou
mais tarde do que gostaria, devido a períodos em que ficou desempregado(a).`);
    } else if (emprego == 3) {
      console.log(`Sendo um assistente de Departamento Pessoal de uma empresa média, você
sempre se frustrou com um salário medíocre e nunca obteve uma promoção por não
ter uma formação na área. Você se aposentou tardiamente, devido a períodos em 
que ficou desempregado(a).`);
    }
  } else if (status.total <= 10) {
    console.log(`Você teve uma vida difícil e não consegiu se qualificar para empregos
    formais e com rendas satisfatórias. Devido à isso, teve que recorrer à empregos temporários
    ou informais. Decida qual deles deseja seguir
[1] - Entregador de aplicativo
[2] - Operador de telemarketing
[3] - Atendente de lanchonete`);
    emprego = +prompt(`
Selecione a opção desejada: `);
    while (!regex3.test(emprego)) {
      emprego = +prompt(`Digite o número correspondente à opção desejada: `);
    }
    if (emprego == 1) {
      console.log(`Você passou grande parte da sua vida entregando comida 
de bicicleta. Obteve uma renda suficiente para sobreviver, porém nunca usufruiu de 
nenhum luxo. Devido a informalidade, você se aposentou já idoso, com um salário 
menor do que o necessário para bancar as despesas médicas, o que te deixou endividado
até o fim da vida.`);
    } else if (emprego == 2) {
      console.log(`Você passou sua vida toda escutando reclamações e queixas de clientes
insatisfeitos com a sua empresa. Devido ao alto estresse, você teve problemas de saúde mental
e se aposentou com idade avançada. Podendo usufruir muito pouco de seu tempo livre e experenciando
grandes problemas fincanceiros.`);
    } else if (emprego == 3) {
      console.log(`Atendendo pessoas em uma lanchonete durante grande parte de sua vida, você
experimentou longos períodos desempregado(a) e uma rotina muito estressante. Se aposentou
idoso(a) e nunca pôde passar muito tempo com as pessoas que ama.`);
    }
  }
}
function empregoinformal() {
  var anoAtual = nascimento + 25;
  var idade = anoAtual - nascimento;
  console.log(`Você tem ${idade} anos de idade e está pronto para encarar
  o mercado de trabalho!`);
  console.log(`Você não possuía o network necessário para ingressar em um emprego
  com remuração justa e estabilidade. Por conta disso, você recebeu três propostas 
  de subemprego: 
[1] - Entregador de aplicativo
[2] - Operador de telemarketing
[3] - Atendente de lanchonete`);
  emprego = +prompt(`
Selecione a opção desejada: `);
  while (!regex3.test(emprego)) {
    emprego = +prompt(`Digite o número correspondente à opção desejada: `);
  }
  if (emprego == 1) {
    console.log(`Você passou grande parte da sua vida entregando comida 
de bicicleta. Obteve uma renda suficiente para sobreviver, porém nunca usufruiu de 
nenhum luxo. Devido a informalidade, você se aposentou já idoso, com um salário 
menor do que o necessário para bancar as despesas médicas, o que te deixou endividado
até o fim da vida.`);
  } else if (emprego == 2) {
    console.log(`Você passou sua vida toda escutando reclamações e queixas de clientes
insatisfeitos com a sua empresa. Devido ao alto estresse, você teve problemas de saúde mental
e se aposentou com idade avançada. Podendo usufruir muito pouco de seu tempo livre e experenciando
grandes problemas fincanceiros.`);
  } else if (emprego == 3) {
    console.log(`Atendendo pessoas em uma lanchonete durante grande parte de sua vida, você
experimentou longos períodos desempregado(a) e uma rotina muito estressante. Se aposentou
idoso(a) e nunca pôde passar muito tempo com as pessoas que ama.`);
  }
}
