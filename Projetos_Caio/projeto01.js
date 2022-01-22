const prompt = require("prompt-sync")();

var repetir = "sim";
while (repetir == "sim") {
  console.clear();
  let nome = prompt(`Escolha um nome para o seu personagem: `);
  console.log(` 
${nome}, um fiscal da vigilância sanitária  
teve um grande problema,
algumas pessoas de sua cidade estavam ficando doentes 
pelo consumo de carnes estragadas.
Afim de ficalizar os açougues da região,
${nome} estabeleceu um questionário
com cinco critérios avaliativos 
pensados para classificar os estabelecimentos.
Ao fim da avaliação, ele poderia determinar se 
o estalecimento é: Ótimo, Bom, Regular, Ruim ou Péssimo.
Responda às seguintes perguntas para ser avaliado:`);
  console.log("-------------------------------------------------------");
  let estabelecimento = prompt(`Qual o nome do açougue? `);
  console.log();
  let higienePessoal = prompt(
    `Todos os funcionários de ${estabelecimento} estão com as mãos limpas? `
  ).toLowerCase();
  while (higienePessoal !== "nao" && higienePessoal !== "sim") {
    console.log("Responda com 'Sim' ou 'Não'");
    higienePessoal = prompt(
      `Todos os funcionários de ${estabelecimento} estão com as mãos limpas? `
    ).toLowerCase();
  }
  let limpezaDaLoja = prompt(
    "O chão, balcão e geladeiras foram higienizados corretamente? "
  ).toLowerCase();
  while (limpezaDaLoja !== "nao" && limpezaDaLoja !== "sim") {
    console.log("Responda com 'Sim' ou 'Não'");
    limpezaDaLoja = prompt(
      "O chão, balcão e geladeiras foram higienizados corretamente? "
    ).toLowerCase();
  }
  let ferramentas = prompt(
    "Todas as ferramentas estão afiadas? "
  ).toLowerCase();
  while (ferramentas !== "nao" && ferramentas !== "sim") {
    console.log("Responda com 'Sim' ou 'Não'");
    ferramentas = prompt("Todas as ferramentas estão afiadas? ").toLowerCase();
  }
  let seguranca = prompt(
    "Os uniformes, toucas e luvas estão dentro dos padrões? "
  ).toLowerCase();
  while (seguranca !== "nao" && seguranca !== "sim") {
    console.log("Responda com 'Sim' ou 'Não'");
    seguranca = prompt(
      "Os uniformes, toucas e luvas estão dentro dos padrões? "
    ).toLowerCase();
  }
  let produtos = prompt(
    "Os produtos estão todos dentro da validade e armazenados de maneira correta? "
  ).toLowerCase();
  while (produtos !== "nao" && produtos !== "sim") {
    console.log("Responda com 'Sim' ou 'Não'");
    produtos = prompt(
      "Os produtos estão todos dentro da validade e armazenados de maneira correta? "
    ).toLowerCase();
  }

  let respostasSim = 0;
  let respostasNao = 0;
  if (higienePessoal == "sim") {
    respostasSim++;
  }
  if (higienePessoal == "nao") {
    respostasNao++;
  }
  if (limpezaDaLoja == "sim") {
    respostasSim++;
  }
  if (limpezaDaLoja == "nao") {
    respostasNao++;
  }
  if (ferramentas == "sim") {
    respostasSim++;
  }
  if (ferramentas == "nao") {
    respostasNao++;
  }
  if (seguranca == "sim") {
    respostasSim++;
  }
  if (seguranca == "nao") {
    respostasNao++;
  }
  if (produtos == "sim") {
    respostasSim++;
  }
  if (produtos == "nao") {
    respostasNao++;
  }
  console.log("-------------------------------------------------------");

  console.log(`Critério(s) aprovado(s): ${respostasSim}.`);
  if (respostasNao !== 0) {
    console.log(`Critério(s) reprovado(s): ${respostasNao}.`);
  }

  console.log("-------------------------------------------------------");

  if (respostasSim == 0) {
    console.log(
      `Péssimo! O ${estabelecimento} será interditado imediatamente!`
    );
  } else if (respostasSim == 1 && 2) {
    console.log(
      `Ruim! O ${estabelecimento} será multado e deve se adequar as regras sanitárias!`
    );
  } else if (respostasSim == 3) {
    console.log(
      `Regular! O ${estabelecimento} passará por uma vistoria técnica e deverá se readequar!`
    );
  } else if (respostasSim == 4) {
    console.log(`Bom! O ${estabelecimento} está de acordo com as normas, sendo necessárias 
    apenas algumas correções!`);
  } else if (respostasSim == 5) {
    console.log(`Ótimo! O ${estabelecimento} é um exemplo entre os açougues 
e receberá um certificado de honra ao mérito!`);
  }
  console.log("-------------------------------------------------------");
  console.log(`Fim da avaliação de ${estabelecimento}.`);
  console.log("-------------------------------------------------------");

  repetir = prompt(
    "Você deseja avaliar um novo estabelecimento? "
  ).toLowerCase();
}
console.log();
