//Verificar palindromo
let texto = prompt("Digite uma frase: ");

function ehPalindromo(texto) {
  textoLower = texto.toLowerCase();
  textoSemEspaco = textoLower.replace(/ /g, "");
  palindromo = textoSemEspaco.split("").reverse().join("");
  if (textoSemEspaco === palindromo) {
    console.log(texto + " É um palíndromo");
  } else {
    console.log(texto + " Não é um palíndromo");
  }
}

ehPalindromo(texto);
