// Obter Hora Atual
let data = new Date();

function obterHoraAtual() {
  if (data.getSeconds() < 10) {
    console.log(
      `${data.getHours()}:${data.getMinutes()}:0${data.getSeconds()}`
    );
  } else {
    console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);
  }
}

obterHoraAtual();
