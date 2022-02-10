const prompt = require("prompt-sync")();
//1

// console.log('O primeiro programa a gente nunca esquece!')


//2 

// console.log(`
// Nome: Caio Luiz Cardoso Oliveira
// Endereço: Rua Santa Clara, 95, Costa Carvalho
// CEP: 36070-120
// Tel.: 32 9 91394691
// `);

//3

// console.log(`
// Eu tinha uma galinha; 
// Que se chamava Marylou;
// Um dia fiquei com fome;
// E papei a Marylou; 
// Marylou, Marylou;
// Tinha cara de babaca;
// Marylou, Marylou;
// Botava ovo pela cloaca...
// `);


let objeto = {
    nome: 'Gabriel',
    idade: 20,
    cidade:'Londrina',
    mudaCidade: function(nova){
        this.cidade = nova
    },
    bio: function(){
        console.log(`O nome é ${this.nome}, tem ${this.idade} anos e mora em ${this.cidade}`);
    }
}
objeto.bio();
objeto.mudaCidade("Juiz de Fora")
objeto.bio();