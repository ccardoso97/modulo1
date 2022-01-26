const prompt = require("prompt-sync")();

var repetir = "sim";
while (repetir == "sim") {
  console.clear();
  let elementos = ["PEDRA", "PAPEL", "TESOURA"];
  let vitoriaComputador = 0;
  let vitoriaUsuario = 0;
  let empate = 0;
  let nome = prompt(`Seja bem vindo! Qual o seu nome? `);
  let rodadasUsuario = +prompt(`
Olá, ${nome}, quantas rodadas você deseja jogar? `);
  while (rodadasUsuario == 0) {
    rodadasUsuario = +prompt(
      `Por favor, ${nome}, informe um valor maior que 0: `
    );
  }
  for (rodadas = 0; rodadas < rodadasUsuario; rodadas++) {
    console.log("--------------------------------------------------------");
    let usuario = prompt(
      "Escolha entre: Pedra, Papel ou Tesoura: "
    ).toUpperCase();
    let computador = Math.floor(Math.random() * elementos.length);

    while (
      usuario !== elementos[0] &&
      usuario !== elementos[1] &&
      usuario !== elementos[2]
    ) {
      console.log("Escolha entre as três opções disponíveis!");
      usuario = prompt(
        "Escolha entre: Pedra, Papel ou Tesoura: "
      ).toUpperCase();
    }
    console.log("--------------------------------------------------------");
    console.log(`${nome} selecionou: ${usuario}.`);
    console.log(`O computador selecionou: ${elementos[computador]}.`);

    if (usuario == "PEDRA" && computador == 0) {
      console.log("O jogo empatou!");
      empate++;
    }
    if (usuario == "PEDRA" && computador == 1) {
      console.log("O computador venceu!");
      vitoriaComputador++;
    }
    if (usuario == "PEDRA" && computador == 2) {
      console.log(`${nome} venceu!`);
      vitoriaUsuario++;
    }
    if (usuario == "PAPEL" && computador == 1) {
      console.log("O jogo empatou!");
      empate++;
    }
    if (usuario == "PAPEL" && computador == 0) {
      console.log(`${nome} venceu!`);
      vitoriaUsuario++;
    }
    if (usuario == "PAPEL" && computador == 2) {
      console.log("O computador venceu!");
      vitoriaComputador++;
    }
    if (usuario == "TESOURA" && computador == 2) {
      console.log("O jogo empatou!");
      empate++;
    }
    if (usuario == "TESOURA" && computador == 1) {
      console.log(`${nome} venceu!`);
      vitoriaUsuario++;
    }
    if (usuario == "TESOURA" && computador == 0) {
      console.log("O computador venceu!");
      vitoriaComputador++;
    }
  }
  console.log("--------------------------------------------------------");

  console.log(` 
            |Aqui estão os resultados: 
            |Empates: ${empate}
            |Vitórias de ${nome}: ${vitoriaUsuario}
            |Vitórias do computador: ${vitoriaComputador}
            `);
  console.log("--------------------------------------------------------");
  if (vitoriaUsuario > vitoriaComputador) {
    console.log(`
            Parabéns, ${nome}!!
            Você foi o campeão!
                    `);
  } else if (vitoriaComputador > vitoriaUsuario) {
    console.log(`
            Dessa vez não deu, ${nome}! 
            O computador foi campeão!
                    `);
  } else if (vitoriaUsuario == 0 && vitoriaComputador == 0) {
    console.log(`
            O jogo terminou empatado!
                    `);
  } else if (vitoriaUsuario == vitoriaComputador) {
    console.log(`
            O jogo terminou empatado!
                    `);
  };
  console.log("--------------------------------------------------------");
  repetir = prompt(`${nome}, deseja jogar novamente? `).toLowerCase();
  console.log();
  while (repetir !== "sim" && repetir !== "nao") {
    console.log(`Responda com 'Sim' ou 'Não'`);
    repetir = prompt(`Deseja jogar novamente? `).toLowerCase();
  }
  if (repetir == "nao") {
    console.log(`
            | Obrigado por jogar, ${nome}! |
                `);
  };
};
