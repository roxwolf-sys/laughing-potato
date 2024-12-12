document.addEventListener("DOMContentLoaded", () => {
  const cakeContainer = document.querySelector(".candles-container");
  const envelopeContainer = document.querySelector(".envelope-container");
  const envelope = document.querySelector(".envelope");
  const subtitle = document.querySelector(".subtitle");
  let candlesLit = 6; // Comenzamos con todas las velas encendidas
  const totalCandles = 6;

  // Crear velas
  function createCandles() {
    for (let i = 0; i < totalCandles; i++) {
      const candle = document.createElement("div");
      candle.classList.add("candle", "candle-lit"); // Añadimos el estado encendido por defecto

      const flame = document.createElement("div");
      flame.classList.add("flame");

      candle.appendChild(flame);
      candle.style.left = `${(i + 1) * (100 / (totalCandles + 1))}%`;

      candle.addEventListener("click", () => toggleCandle(candle));
      cakeContainer.appendChild(candle);
    }
  }

  // Alternar estado de la vela
  function toggleCandle(candle) {
    candle.classList.toggle("candle-lit");

    if (candle.classList.contains("candle-lit")) {
      candlesLit++;
    } else {
      candlesLit--;
    }

    // Verificar si todas las velas están apagadas
    if (candlesLit === 0) {
      subtitle.textContent = "Haz click en la carta para abrirla"; // Cambiar mensaje
      setTimeout(() => {
        envelopeContainer.style.display = "block";
      }, 1000);
    }
  }

  // Evento para abrir el sobre
  envelope.addEventListener("click", () => {
    if (candlesLit === 0) {
      envelope.classList.toggle("open");
    }
  });

  // Inicializar velas
  createCandles();
});
