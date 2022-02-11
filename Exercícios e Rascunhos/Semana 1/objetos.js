const prompt = require("prompt-sync")();

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
      this.total = total1
    },
    statusfinal: function () {
      console.log(`
  Seu status de Escolaridade é ${this.esc}/10
  Seu status de Cursos Complementares é ${this.cur}/10
  Seu status de Empregabilidade é ${this.empr}/10
  O total do seu status é de ${this.total}`);
    },
  };
  status.mudaEsc(3)
  status.mudaCur(1)
  status.mudaEmpr(1)
  status.mudaTotal(status.esc+status.cur+status.empr)
  status.statusfinal()
