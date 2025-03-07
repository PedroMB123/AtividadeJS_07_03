//Inverter string
let texto = prompt("Digite uma frase: ");

function inverterString(texto) {
  console.log(texto.split("").reverse().join(""));
}

inverterString(texto);
