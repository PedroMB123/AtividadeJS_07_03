// Número aleatório
let min = parseFloat(prompt("Digite o valor mínimo: "));
let max = parseFloat(prompt("Digite o valor máximo: "));

function gerarNumeroAleatorio(min, max) {
  console.log(Math.random() * (max - min + 1) + min);
}

gerarNumeroAleatorio(min, max);
