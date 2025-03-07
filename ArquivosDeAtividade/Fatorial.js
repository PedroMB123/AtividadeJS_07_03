// Fatorial
let n = parseFloat(prompt("Digite um número para ser fatorado: "));
let num = 1;

function calcularFatorial(n, num) {
  for (let i = n; i > 1; i--) {
    num *= i;
  }
  return num;
}

console.log(calcularFatorial(n, num));
