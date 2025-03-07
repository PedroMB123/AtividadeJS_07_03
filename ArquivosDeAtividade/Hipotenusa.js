// Hipotenusa
let num1 = parseFloat(prompt("Digite o primeiro valor: "));
let num2 = parseFloat(prompt("Digite o segundo valor: "));

function calcularHipotenusa() {
  let num3 = Math.pow(num1, 2) + Math.pow(num2, 2);
  console.log(Math.sqrt(num3));
}

calcularHipotenusa();
