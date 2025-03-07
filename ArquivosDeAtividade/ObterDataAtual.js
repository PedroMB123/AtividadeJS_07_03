// Obter Data atual
let data = new Date();

function obterDataAtual(data) {
  return data.toLocaleDateString("pt-BR");
}

console.log(obterDataAtual(data));
