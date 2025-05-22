let palabraAleatoria;

// Cargar datos desde localStorage
const originalData = JSON.parse(localStorage.getItem('selectedWords')) || [];
let matchedWords = JSON.parse(JSON.stringify(originalData));
const modalidad = JSON.parse(localStorage.getItem('modalidadEscogida'));

const puntosError = parseInt(modalidad.puntosError);
const puntajeMaximo = parseInt(modalidad.puntajemaximo);

// Aplanar los datos para obtener una lista de palabras con sus kanjis y puntajes
let palabrasJuego = matchedWords.flatMap(item =>
  item.words.map(word => ({
    ...word,
    kanji: item.palabra,
    puntaje: 0,
  }))
);


// Función para mostrar u ocultar elementos
function toggleVisibility(id, show) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = show ? 'block' : 'none';
  }
}

// Actualizar barra de progreso
function updateProgress() {
  if (!palabraAleatoria) return;
  const total = palabraAleatoria.puntaje ?? 0;
  const progress = (total / puntajeMaximo) * 100;
  document.getElementById('progress-fill').style.width = `${progress}%`;
  document.getElementById('progress-text').textContent = `${total}/${puntajeMaximo}`;
}

// Cargar una nueva palabra aleatoria
function cargarKanji() {
  // Si ya no hay palabras, mostrar mensaje final
  if (!palabrasJuego || palabrasJuego.length === 0) {
    console.log('No hay palabras para mostrar');
    const kanjiDisplay = document.getElementById('kanji-display');
    if (kanjiDisplay) {
      kanjiDisplay.textContent = '¡Felicitaciones! Has completado tus kanjis de hoy';
      kanjiDisplay.style.fontSize = '24px';
      kanjiDisplay.style.height = '30%';
      toggleVisibility("answer-input", false);
      toggleVisibility("checkbox-container", false);
      toggleVisibility("checkbox-container-bottom", false);
      toggleVisibility("verificar-hiragana", false);
      toggleVisibility("reiniciar", true);
      toggleVisibility("nuevas", true);
      toggleVisibility("siguiente-palabra", false);
    }
    return;
  }

  // Seleccionar aleatoriamente una palabra
  palabraAleatoria = palabrasJuego[Math.floor(Math.random() * palabrasJuego.length)];

  // Mostrar el kanji actual y limpiar campos
  updateProgress();

  document.getElementById('kanji-display').textContent = palabraAleatoria.palabra;
  document.getElementById('palabra-aprendida').checked = false;
  document.getElementById('hiragana-display').textContent = '?';
  document.getElementById('meaning-display').textContent = '?';
  document.getElementById('example-display').textContent = '?';
  document.getElementById('translation-display').textContent = '?';
  document.getElementById('answer-input').value = '';
  document.getElementById('feedback').textContent = '';

  // Mostrar barra input y ocultar respuestas 
  toggleVisibility("siguiente-palabra", false);
  toggleVisibility("checkbox-container", false);
  toggleVisibility("checkbox-container-bottom", false);
  toggleVisibility("verificar-hiragana", true);
  toggleVisibility("reiniciar", false);
  toggleVisibility("nuevas", false);
}

// Verificar respuesta del usuario
function verificar() {
  const input = document.getElementById("answer-input").value.trim();
  if (!input) return;

  const esCorrecto = input === palabraAleatoria.lectura;
  const feedback = document.getElementById('feedback');
  feedback.textContent = esCorrecto ? '¡Correcto!' : `Incorrecto. Era: ${palabraAleatoria.lectura}`;

  // Mostrar hiragana y traducción
  document.getElementById('hiragana-display').textContent = palabraAleatoria.lectura;
  document.getElementById('meaning-display').textContent = palabraAleatoria.traduccion;
  // Si se añaden ejemplos - Descomentar
  // document.getElementById('example-display').textContent = palabraAleatoria.ejemploJP;
  // document.getElementById('translation-display').textContent = palabraAleatoria.ejemploES;

  // Ajustar puntaje según respuesta
  palabraAleatoria.puntaje = esCorrecto
    ? palabraAleatoria.puntaje + 1
    : Math.max(0, palabraAleatoria.puntaje - puntosError);

  // Eliminar palabra si alcanza el puntaje máximo
  if (palabraAleatoria.puntaje >= puntajeMaximo) {
    palabrasJuego = palabrasJuego.filter(p => p.palabra !== palabraAleatoria.palabra);
  }

  // Guardar progreso en localStorage
  localStorage.setItem('palabrasJuego', JSON.stringify(palabrasJuego));
  updateProgress();

  // Cambiar visibilidad de botones
  toggleVisibility("siguiente-palabra", true);
  toggleVisibility("checkbox-container", true);
  toggleVisibility("checkbox-container-bottom", true);
  toggleVisibility("verificar-hiragana", false);
}

// Botón "Siguiente"
function siguiente() {
  if (document.getElementById("palabra-aprendida").checked) {
    palabraAleatoria.puntaje = puntajeMaximo;
    palabrasJuego = palabrasJuego.filter(p => p.palabra !== palabraAleatoria.palabra);
    updateProgress();
  }
  document.getElementById("answer-input").focus();
  cargarKanji();
}

// Botón "Reiniciar"
function reiniciar() {
  location.reload();
}

// Botón "Nuevas palabras" (volver al inicio)
function nueva() {
  window.location.href = 'index.html';
}

// Cargar la primera palabra al iniciar
cargarKanji();
