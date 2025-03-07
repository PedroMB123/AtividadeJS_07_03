// Fatorial
let n = parseFloat(prompt("Digite um número para ser fatorado: "));
let num = 1;

function calcularFatorial(n, num) {
  if (n > 0) {
    for (let i = n; i > 1; i--) {
      num *= i;
    }
    return num;
  } else {
    return "Não existe fatorial de número menor que 1";
  }
}

console.log(calcularFatorial(n, num));
