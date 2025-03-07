// Obter Hora Atual
let data = new Date();

function obterHoraAtual() {
  if (data.getSeconds() < 10 && data.getMinutes() < 10) {
    console.log(
      `${data.getHours()}:0${data.getMinutes()}:0${data.getSeconds()}`
    );
  } else if (data.getSeconds() < 10) {
    console.log(
      `${data.getHours()}:${data.getMinutes()}:0${data.getSeconds()}`
    );
  } else if (data.getMinutes() < 10) {
    console.log(
      `${data.getHours()}:0${data.getMinutes()}:${data.getSeconds()}`
    );
  } else {
    console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);
  }
}

obterHoraAtual();
