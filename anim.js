var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Frases poéticas sincronizadas con el tiempo (en segundos)
var lyricsData = [
  { text: "Desde que llegaste, los días tienen aroma a flores amarillas 🌼", time: 3 },
  { text: "Tu sonrisa es mi canción favorita, y tu mirada mi melodía eterna 🎶", time: 12 },
  { text: "No necesito primavera cuando tú floreces en mi vida cada día 🌷", time: 22 },
  { text: "Cada latido mío lleva tu nombre grabado con ternura 💛", time: 32 },
  { text: "Eres mi lugar favorito para quedarme, incluso en silencio 💫", time: 42 },
  { text: "Tu amor me enseñó que lo simple puede ser extraordinario ✨", time: 52 },
  { text: "Si el universo hablara, diría que fuiste hecha de estrellas y pétalos 🌠", time: 62 },
  { text: "Tus abrazos son la poesía que calma mis inviernos ❄️", time: 72 },
  { text: "Contigo no hay finales, solo nuevos comienzos llenos de magia 🌈", time: 82 },
  { text: "Hoy, estas flores no son solo un regalo... son un reflejo de lo que siento por ti 💐", time: 92 },
];

// Animar las frases
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 8
  );

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Ocultar título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}
setTimeout(ocultarTitulo, 216000);
