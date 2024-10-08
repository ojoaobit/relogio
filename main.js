const background = document.getElementById("relogio-bg");
background.style.margin = "0 auto";
const agora = new Date();
const txthora = document.getElementById("hora");
const txtminutos = document.getElementById("minutos");
const txtsegundos = document.getElementById("segundos");
const relogio = document.getElementById("relogio");
relogio.style.textAlign = "center";
relogio.style.width = "100vw";
relogio.style.height = "100vh";
relogio.style.display = "flex";
relogio.style.justifyContent = "center";
relogio.style.alignItems = "center";
relogio.style.gap = "40px";

const hora = agora.getHours();
const minutos = agora.getMinutes();
const segundos = agora.getSeconds();

const setTextStyle = (element) => {
  element.style.color = "#fafafa";
};

setTextStyle(txthora);
setTextStyle(txtminutos);
setTextStyle(txtsegundos);

const atualizarRelogio = () => {
  const agora = new Date();
  const hora = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  txthora.innerHTML = `<p>${hora}<br><span class="poppins-reg">horas</span></p>`;
  txtminutos.innerHTML = `<p>${minutos}<br><span class="poppins-reg">minutos</span></p>`;
  txtsegundos.innerHTML = `<p>${segundos}<br><span class="poppins-reg">segundos</span></p>`;

  // Definir o fundo com base na hora do dia
  if (hora >= 5 && hora < 12) {
    background.style.background = "linear-gradient(to right, #ff930f, #fff95b)"; // Manhã
  } else if (hora >= 12 && hora < 18) {
    background.style.background = "linear-gradient(to right, #F0972B, #f89b29)"; // Tarde
  } else if (hora >= 18 && hora <= 23) {
    background.style.background = "linear-gradient(to right, #13274f, #00008B)"; // Noite
  } else {
    body.style.background = "linear-gradient(to right, #0e0e0e, #212121)"; // Madrugada
  }
};

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
