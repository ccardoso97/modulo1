const prompt = require("prompt-sync")();

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
Responda às seguintes perguntas para ser avaliado:
`);
let estabelecimento = prompt(`Qual o nome do açougue? `);
console.log ();
let higienePessoal = prompt(`Todos os funcionários de ${estabelecimento} estão com as mãos limpas? `).toLowerCase();
let limpezaDaLoja = prompt('O chão, balcão e geladeiras foram higienizados corretamente? ').toLowerCase();
let ferramentas = prompt('Todas as ferramentas estão afiada? ').toLowerCase();
let seguranca = prompt('Os uniformes, toucas e luvas estão dentro dos padrões? ').toLowerCase();
let produtos = prompt('Os produtos estão todos dentro da validade e armazenados de maneira correta? ').toLowerCase();

let respostas = 0 
if (higienePessoal == 'sim'){respostas = respostas + 1};
if (limpezaDaLoja == 'sim'){respostas = respostas + 1};
if (ferramentas == 'sim'){respostas = respostas + 1};
if (seguranca == 'sim'){respostas = respostas + 1};
if (produtos == 'sim'){respostas = respostas + 1};

console.log(`A quantidade de respostas 'Sim' foi: ${respostas}.`);
if (respostas == 0){
    console.log(`Péssimo! O ${estabelecimento} será interditado imediatamente!`);
} else if (respostas == 1 && 2){
    console.log(`Ruim! O ${estabelecimento} será multado e deve se adequar as regras sanitárias!`);
} else if (respostas == 3){
    console.log(`Regular! O ${estabelecimento} passará por uma vistoria técnica e deverá se readequar!`);
} else if (respostas == 4){
    console.log(`Bom! O ${estabelecimento} está de acordo com as normas, sendo necessárias 
    apenas algumas correções!`);
} else if (respostas == 5){
    console.log(`Ótimo! O ${estabelecimento} é um exemplo entre os açougues e receberá um certificado 
    de honra ao mérito!`);
} console.log ();
console.log(`Fim da avaliação de ${estabelecimento}.`);
console.log();
