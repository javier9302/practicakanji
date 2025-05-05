let palabraAleatoria;
const originalData = JSON.parse(localStorage.getItem('originalData'))||[];
let matchedWords = JSON.parse(JSON.stringify(originalData));
const modalidad = JSON.parse(localStorage.getItem('modalidadEscogida'));

const puntosError= parseInt(modalidad.puntosError);
const puntajeMaximo=parseInt(modalidad.puntajemaximo);

    //funcion toggleVisibility
    function toggleVisibility(id,show) {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = show ? 'block' : 'none';
        }
    }

    function updateProgress() {
        //if (!palabraAleatoria) return;
        const progress = (palabraAleatoria.puntaje / puntajeMaximo) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${palabraAleatoria.puntaje}/${puntajeMaximo}`;
    }

    function cargarKanji() {
   
        if (!matchedWords || matchedWords.length===0) {
       
        console.log('No hay palabras para mostrar');
        const kanjiDisplay = document.getElementById('kanji-display');
        if (kanjiDisplay){
        kanjiDisplay.textContent = '¡Felicitaciones! Has completado tus kanjis de hoy';
        kanjiDisplay.style.fontSize='24px';
        kanjiDisplay.style.height='30%';
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
    
    //Elegir una palabraAleatoria
    palabraAleatoria = matchedWords[Math.floor(Math.random()* matchedWords.length)];
    // Cargar información inicialmente
    updateProgress();
    document.getElementById('kanji-display').textContent=palabraAleatoria.kanji;    
    document.getElementById('palabra-aprendida').checked= false;
    document.getElementById('hiragana-display').textContent = '?';
    document.getElementById('meaning-display').textContent = '?';
    document.getElementById('example-display').textContent = '?';
    document.getElementById('translation-display').textContent = '?';
    document.getElementById('answer-input').value='';
    document.getElementById('feedback').textContent = '';

    toggleVisibility("siguiente-palabra", false);
    toggleVisibility("checkbox-container", false);
    toggleVisibility("checkbox-container-bottom", false);
    toggleVisibility("verificar-hiragana", true);
    toggleVisibility("reiniciar", false);
    toggleVisibility("nuevas", false);
}
    function verificar(){
        const input = document.getElementById("answer-input").value.trim();
        if (!input) return;

        const esCorrecto = input === palabraAleatoria.hiragana;
        const feedback = document.getElementById('feedback');
        feedback.textContent = esCorrecto ? '¡Correcto!' : `Incorrecto. Era: ${palabraAleatoria.hiragana}`;
        
        //Mostrar la informacion para retroalimentar
        document.getElementById('hiragana-display').textContent = palabraAleatoria.hiragana;
        document.getElementById('meaning-display').textContent = palabraAleatoria.espanol;
        document.getElementById('example-display').textContent = palabraAleatoria.ejemploJP;
        document.getElementById('translation-display').textContent = palabraAleatoria.ejemploES;

        //Actualizar puntajes
        const nuevoPuntaje = esCorrecto
            ? palabraAleatoria.puntaje + 1
            : palabraAleatoria.puntaje > puntosError
              ? palabraAleatoria.puntaje - puntosError
              : 0;                
        palabraAleatoria.puntaje=nuevoPuntaje;

        // Puntaje máximo elimina la palabra del array
        if (palabraAleatoria.puntaje >= puntajeMaximo) {
            matchedWords = matchedWords.filter(p => p.kanji !== palabraAleatoria.kanji);
          }
        // Actualizar localmente
           localStorage.setItem('matchedWords',JSON.stringify(matchedWords)); 
           updateProgress();

        // Cambiar visibilidad de botones
        toggleVisibility("siguiente-palabra", true);
        toggleVisibility("checkbox-container", true);
        toggleVisibility("checkbox-container-bottom", true);
        toggleVisibility("verificar-hiragana", false);
    }

      function siguiente(){
        if (document.getElementById("palabra-aprendida").checked) {
            palabraAleatoria.puntaje = puntajeMaximo;    
            matchedWords = matchedWords.filter(p => p.kanji !== palabraAleatoria.kanji);
            updateProgress();
        }
        cargarKanji();
      }
        function reiniciar(){
            location.reload();
        }
        function nueva() {
            window.location.href = 'index.html';
          }
    cargarKanji();
