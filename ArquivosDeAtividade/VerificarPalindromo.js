//Verificar palindromo
let texto = prompt("Digite uma frase: ");

function ehPalindromo(texto) {
  textoLower = texto.toLowerCase();
  textoSemEspaco = textoLower.replace(/ /g, "");
  palindromo = textoSemEspaco.split("").reverse().join("");
  if (textoSemEspaco === palindromo) {
    return texto + " É um palíndromo";
  } else {
    return texto + " Não é um palíndromo";
  }
}

console.log(ehPalindromo(texto));
