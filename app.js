import wordData from './kanji.js';

document.addEventListener('DOMContentLoaded', () => {
  
  let originalKanjiHTML;
  const kanjiContainer = document.getElementById('kanji-container');
  const checkboxesSet = document.querySelectorAll('.checkbox-set');
  const kanjiButtons = document.querySelectorAll('.kanji-btn');
  const panelOpciones = document.getElementById('panel-opciones');
  const btnRepasar = document.getElementById('repasar-btn');
  const btnAPrender = document.getElementById('aprender-btn');
  const aprenderDiv = document.getElementById('aprender-container');
  const repasarDiv = document.getElementById('repasar-container');
  const submitBtn = document.getElementById('submit-btn');
    
  
  let modoEscogido = 40;
  let state = {
    checkBoxCounter: 0,
    selectedKanji: [],
    kanji: {
      disabledCount: kanjiButtons.length,
      enabledCount: 0,
      maxCheckBox: 0,
    },
  };
  
    // Actualizar la variables y cuenta los kanjis disponibles dependiendo lo que seleccione el usuario.
    const updateKanjiState = () => {
      state.kanji.disabledCount = document.querySelectorAll('.kanji-btn-disabled').length; // Cuenta los kanjis deshabilitados
      state.checkBoxCounter = document.querySelectorAll('input[type="checkbox"]:checked').length; // Cuenta los sets seleccionados
      state.kanji.enabledCount = kanjiButtons.length - state.kanji.disabledCount; // Cuenta los kanjis habilitados, restando el total de los kanjis con los que actualmente están desahbilitados
      state.kanji.maxCheckBox = state.kanji.disabledCount ? Math.floor((modoEscogido - state.kanji.enabledCount) / 10) : modoEscogido / 10; //Calcula el máximo de cajas que se pueden seleccionar. 
    };

  function originalKanjiFunction() {
    originalKanjiHTML = kanjiContainer.innerHTML;
    kanjiContainer.classList.remove('hidden');
    checkboxesSet.forEach(cb => cb.checked = false);
    kanjiButtons.forEach(btn => btn.classList.add('kanji-btn-disabled'));
    updateKanjiState();
    kanjiChecker();
  }
  

  
  // Revisar los kanjis seleccionados y limitar los botones y checkboxes cuando se cumpla la cuota.
  const kanjiChecker = () => {
    let checkboxIf = state.kanji.maxCheckBox === 0 ? true : false; //  Calcula si todavía hay checkboxes que se puedan seleccionar
    let kanjiIf = state.kanji.enabledCount === modoEscogido ? 1 : 0; // Compara el número de kanjis con el máximo que se puede escoger por modalidad 
    checkboxesSet.forEach(cb => {
      if (!cb.checked) cb.disabled = checkboxIf || kanjiIf; //Desactiva las checkboxes cuando se cumpla el máximo permitido.
    });
      
    if ( state.kanji.enabledCount>0){
    submitBtn.classList.remove('hidden');
    }else {
      submitBtn.classList.add('hidden');

    }
    document.querySelectorAll('.kanji-btn-disabled').forEach(btn => {
      btn.disabled = kanjiIf === 1;   //Desactiva todos los kanjis que tengan la clase disabled, si se llegó al máximo 
    });
  };

  // Handler para toggle de los botones de los kanji, cada vez que se escoja uno, cambia la apariencia para que se vean activados o desactivados.
  const toggleKanjiButton = (event) => {
    if (event.target.classList.contains('kanji-btn')) {
      event.target.classList.toggle('kanji-btn-disabled'); //Esta es la clase que activa o desactiva, en realidad no los deshabilita.
      updateKanjiState(); // Corre esta funcion para  ver
      kanjiChecker(); // Corre la funcion kanjiChecker para ver si ya se cumplieron las cuotas máximas y deshabilitar el resto de botones y checkboxes.
    }
  };

  // Handler para las checkbox que contiene un grupo de kanjis. 
  const handleCheckboxChange = (event) => {
    const grid = event.target.closest('.grid');  
    const buttons = grid.querySelectorAll('.kanji-btn');
    const action = event.target.checked ? 'remove' : 'add';
    buttons.forEach(btn => btn.classList[action]('kanji-btn-disabled')); //Si se selecciona, marca como deshabilitados a todo el grupo de kanjis.
    updateKanjiState();
    kanjiChecker();
  };

  // Opciones (aprender / repasar) handler. Dependiendo el boton seleccionado cambian las opciones.
  const handleOptionChange = (modo) => {
    originalKanjiFunction();
    modoEscogido = modo;
    aprenderDiv.classList.toggle('hidden', modo !== 40); //Arroja el número máximo de kanjis permitidos
    repasarDiv.classList.toggle('hidden', modo !== 300);
  };
  
  // Event delegation for buttons and checkboxesSet
  panelOpciones.addEventListener('click', (event) => {
    if (event.target === btnAPrender) {
      handleOptionChange(40);
    } else if (event.target === btnRepasar) {
      handleOptionChange(300);
    }
  });

  // Event delegation for checkboxesSet and kanji buttons
  document.addEventListener('change', (event) => {
    if (event.target.matches('.checkbox-set')) {
      handleCheckboxChange(event);
    }
  });

  // Event listener for kanji button clicks
  document.addEventListener('click', toggleKanjiButton);
    
  // Submit handler
  submitBtn.addEventListener('click', () => {
    updateKanjiState();
    kanjiChecker();
    let modalidadEscogida;
  
    if(modoEscogido===40){
      modalidadEscogida = {
      puntajemaximo: document.getElementById('repeticiones-aprender').value,
      puntosError: document.getElementById('repasar-veces').value,
      }
    }else { 
      modalidadEscogida = {
      puntajemaximo: (document.getElementById('repasar-veces').value),
      puntosError: document.querySelector('#repasar-errores').checked ? 1 : 0,
    };
  }
    //Guardar la modalidad 
    localStorage.setItem('modalidadEscogida', JSON.stringify(modalidadEscogida));
    
    // Guardar los kanjis escogidos
    state.selectedKanji = [...kanjiButtons]
      .filter(btn => !btn.disabled && !btn.classList.contains('kanji-btn-disabled'))
      .map(btn => btn.getAttribute('data-kanji'));
    
    const matchedWords = wordData.filter(word => state.selectedKanji.includes(word.kanji))
    .map(word => ({
      ...word,
      puntaje: 0 // Siempre se establece en 0
      }));
  
    localStorage.setItem('matchedWords', JSON.stringify(matchedWords));
    
    //Redirigir
    window.location.href = 'game.html';
  });

});
