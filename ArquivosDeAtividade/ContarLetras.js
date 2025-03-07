//Contar letras
let frase = prompt("Digite uma frase: ");

function contarLetras(texto) {
  fraseSemEspaco = frase.replace(/ /g, "");
  console.log(fraseSemEspaco.length);
}

contarLetras(frase);
