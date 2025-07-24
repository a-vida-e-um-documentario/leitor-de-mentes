function iniciar() {
  const numero = document.getElementById("numero").value;
  if (numero === "") {
    alert("Digite um número primeiro!");
    return;
  }

  const etapas = document.getElementById("etapas");
  const resultado = document.getElementById("resultado");
  const mensagem = document.getElementById("mensagem");
  const gif = document.getElementById("explosao-img");
  const textoFinal = document.getElementById("resultado-numero");
  const audio = new Audio("sounds/explosion.mp3");

  etapas.classList.remove("hidden");
  resultado.classList.add("hidden");
  gif.style.display = "none";
  textoFinal.style.display = "none";

  mensagem.textContent = "Conectando ao seu cérebro via Bluetooth...";
  setTimeout(() => {
    mensagem.textContent = "Calculando as 6.31E+8976512346454634723 possibilidades...";
    setTimeout(() => {
      etapas.classList.add("hidden");
      resultado.classList.remove("hidden");
      gif.style.display = "block";
      audio.play();

      // Depois de 2 segundos, esconder gif e mostrar número
      setTimeout(() => {
        gif.style.display = "none";
        textoFinal.textContent = `Você pensou em: ${numero}`;
        textoFinal.style.display = "block";
      }, 2000);
    }, 3000);
  }, 2000);
}

