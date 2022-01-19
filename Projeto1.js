const prompt = require("prompt-sync")();

console.log(` 
Um fiscal da vigilância sanitária teve um grande problema,
algumas pessoas de sua cidade estavam ficando doentes 
pelo consumo de carnes estragadas,
afim de ficalizar os açougues da região,
o fiscal estabeleceu um questionário
com cinco critérios avaliativos 
pensados para classificar os estabelecimentos.
Ao fim da avaliação, ele poderia determinar se 
o estalecimento é: Ótimo, Bom, Regular, Ruim ou Péssimo.
Responda às seguintes perguntas para ser avaliado:
`);

let higienePessoal = +prompt('Todos os funcioários estão com as mãos limpas? ');
let limpezaDaLoja = +prompt('As ferramentas e o ambiente foram higienizados? ');
let ferramentas = +prompt('Todas as ferramentas estão afiadas? ');
let seguranca = +prompt('Os uniformes, toucas e luvas estão dentro dos padrões? ');
let produtos = +prompt('As carnes estão dentro dos padões sanitários? ')
console.log();



