import wordData from './kanji.js';

document.addEventListener('DOMContentLoaded', () => {
  
  const elements = {
    kanjiContainer: document.getElementById('kanji-container'),
    checkboxesSet: document.querySelectorAll('.checkbox-set'),
    kanjiButtons: document.querySelectorAll('.kanji-btn'),
    panelOpciones: document.getElementById('panel-opciones'),
    btnRepasar: document.getElementById('repasar-btn'),
    btnAprender: document.getElementById('aprender-btn'),
    aprenderDiv: document.getElementById('aprender-container'),
    repasarDiv: document.getElementById('repasar-container'),
    submitBtn: document.getElementById('submit-btn'),
    wordData,
    uniqueKanji:[...new Map(wordData.map(obj => [obj.kanji, obj])).values()]
  };

   // Estado simplificado
   const state = {
    modo: 40,
    selectedKanji: [],
    get disabledKanjiCount() {
      return document.querySelectorAll('.kanji-btn-disabled').length;
    },
    get enabledKanjiCount() {
      return elements.uniqueKanji.length - this.disabledKanjiCount;
    },
    get maxCheckboxes() {
      return this.disabledKanjiCount 
        ? Math.floor((this.modo - this.enabledKanjiCount) / 10) 
        : this.modo / 10;
    }
  };

  // CREAR LOS BOTONES COMO DICE ACA:
  const createElement = (tag, attributes = {}, children = []) => {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => { 

     if (key in element){
      element[key] = value;
     } else {
      element.setAttribute(key, value);
     }
    });

    children.forEach(child => element.appendChild(child));
    return element;
  };

  const createKanjiGroupHeader = (groupCount, startIndex) => {
    const header = createElement('div', { class: 'header-group-container', id: `header-group-container${groupCount}` });
    
    const checkboxContainer = createElement('div', { class: 'checkbox-group-container' });
    const checkbox = createElement('input', { 
      type: 'checkbox', 
      class: 'checkbox-group', 
      id: `checkbox-group${groupCount}`,
      name: `group${groupCount}`
    });
    const checkmark = createElement('span', { class: 'checkmark' });
    const label = createElement('label', { class: 'checkbox-opciones' }, [checkbox, checkmark]);
    
    checkboxContainer.appendChild(label);
    header.appendChild(checkboxContainer);

    const textContainer = createElement('div', { 
      class: 'text-group-container',
      textContent: `Kanji de ${startIndex} hasta ${startIndex + 99}`
    });
    header.appendChild(textContainer);

    const toggleButton = createElement('button', { 
      class: 'toggle-group',
      id: `toggle-group${groupCount}`,
      'aria-expanded': 'false',
      'aria-controls': `info${groupCount}`
    }, [
      createElement('span', { class: 'toggle-group-text' }),
      createElement('span', { class: 'toggle-group-icon' }, [
        createElement('ion-icon', { name: 'caret-down' })
      ])
    ]);
    
    header.appendChild(toggleButton);
    return header;
  };
      

    // Funcion para crear los grupos de 10 kanji por grid
      const createKanjiGrid=(groupIndex, kanjiList) => {
        const groupContainer= createElement('div', {class:'group-container', id:`group-container${groupIndex}`});

        kanjiList.forEach((kanji, index) => {
          if(index % 10 === 0){
            const num= groupIndex*100+index;
            const grid = createElement('div', {class:'grid', id:`grid${num}`});
            const checkbox = createElement('input', { 
              type:'checkbox',
              class:'checkbox-set',
              name: `checkbox-set${num}`,
              id:`checkbox-set${num}`
            });
            const label = createElement('label',{htmlFor:checkbox.id});

            grid.appendChild(checkbox);
            grid.appendChild(label);
            groupContainer.appendChild(grid);
          }

          const currentGrid= groupContainer.lastChild;
          const btn = createElement('button',{
            type: 'button',
            class: 'kanji-btn kanji-btn-disabled',
            textContent:kanji.kanji,
            'data-kanji': kanji.kanji
          });

          currentGrid.appendChild(btn);
        });

        return groupContainer;
      };
  //Crea los botones en cada grid
      const crearBotones = () => {
        elements.kanjiContainer.innerHTML = '';
        const uniqueKanji= elements.uniqueKanji;
       // Dividir en grupos de 100
       const kanjiGroups = [];
    for (let i = 0; i < uniqueKanji.length; i += 100) {
       kanjiGroups.push(uniqueKanji.slice(i, i + 100));
    }

    kanjiGroups.forEach((group, groupIndex) => {
      
      const startIndex = groupIndex * 100;
      elements.kanjiContainer.appendChild(createKanjiGroupHeader(groupIndex, startIndex));
      elements.kanjiContainer.appendChild(createKanjiGrid(groupIndex, group));
    });
  };


// Escuchar los clics que se hacen en los toggleButton y obtener el numero 

  const setupToggleGroups = () => {
    document.body.addEventListener('click', ({ target }) => {
      const button = target.closest('.toggle-group');
      if (!button) return;
      
      const icon = button.querySelector('.toggle-group-icon');
      icon.classList.toggle('rotate');
      
      const groupNum = button.id.match(/\d+$/)[0];
      const groupContainer = document.getElementById(`group-container${groupNum}`);
      groupContainer.classList.toggle('visible');
    });
  };

  const updateUIState = () => {
    const canCheckMore = state.maxCheckboxes > 0;
    const reachedKanjiLimit = state.enabledKanjiCount === state.modo;
    
    document.querySelectorAll('.checkbox-set').forEach(cb => {
      if(!cb.checked){
        console.log(`this checkbox ${cb}can not take more`)
      }
      if (!cb.checked) cb.disabled = !canCheckMore || reachedKanjiLimit;
    });
    
    elements.submitBtn.classList.toggle('hidden', state.enabledKanjiCount === 0);
    document.querySelectorAll('.kanji-btn-disabled').forEach(btn => {
      btn.disabled = reachedKanjiLimit;
    });
    console.log(state);
  };

   // PENDIENTE: Encontrar la forma de hacer un helper function para todos los handleOption

  const handleOptionToggle = ({target}) => {
    if(target.classList.contains('modo-btn')){
      elements.kanjiContainer.classList.remove('hidden');
      if(target.id ==='aprender-btn'){
        const checkGroup=elements.kanjiContainer.querySelectorAll('.checkbox-group-container');
        checkGroup.forEach(group => group.classList.add('hidden'));
      }
    }
  };

  const handleKanjiToggle= ({target}) => {
    if(target.classList.contains('kanji-btn')){
      target.classList.toggle('kanji-btn-disabled');
      updateUIState();
    }
  };

  const kanjiButtonListener= ({target}) =>{
    if(target.classList.contains('kanji-btn')){

      const kanjiTarget=target.textContent.trim();
      const kanjiList= state.selectedKanji;
      const isDisabled= target.classList.contains('kanji-btn-disabled');
      const isInList= kanjiList.includes(kanjiTarget);

     if(!isDisabled && !isInList){
      kanjiList.push(kanjiTarget);
    }

     if(isDisabled && isInList){
      const index=kanjiList.indexOf(kanjiTarget);
      kanjiList.splice(index,1);
    }
    updateUIState();
  }
  };


  const handleCheckboxToggle = ({ target }) => {
    if (target.matches('.checkbox-set')) {
      const grid = target.closest('.grid');
      const action = target.checked ? 'remove' : 'add';

      grid.querySelectorAll('.kanji-btn').forEach(btn =>{btn.classList[action]('kanji-btn-disabled');
          kanjiButtonListener({target: btn });
    });
      updateUIState();
    }
  };

  const handleCheckboxGroupToggle = ({ target }) => {
    if (target.matches('.checkbox-group')) {
      const targetId=(target.id).slice(-1);
      const containerId= `group-container${targetId}`;
      const group = document.getElementById(containerId);
      const action = target.checked ? 'remove' : 'add';
      group.querySelectorAll('.kanji-btn').forEach(btn =>{btn.classList[action]('kanji-btn-disabled');
        kanjiButtonListener({target: btn });
  });
    }
  };
 

  const setMode = (modo) => {
    state.modo = modo;
    crearBotones();
    elements.aprenderDiv.classList.toggle('hidden', modo !== 40);
    elements.repasarDiv.classList.toggle('hidden', modo !== 300);
    updateUIState();
  };
 
  const handleSubmit = () => {
    const modalidadEscogida = state.modo === 40
      ? {
          puntajemaximo: document.getElementById('repeticiones-aprender').value,
          puntosError: document.getElementById('repasar-veces').value
        }
      : {
          puntajemaximo: document.getElementById('repasar-veces').value,
          puntosError: document.querySelector('#repasar-errores').checked ? 1 : 0
        };
    
    localStorage.setItem('modalidadEscogida', JSON.stringify(modalidadEscogida));
    
    const originalData = wordData
      .filter(word => state.selectedKanji.includes(word.kanji))
      .map(word => ({ ...word, puntaje: 0 }));
    console.log(state);
      console.log(originalData);
    localStorage.setItem('originalData', JSON.stringify(originalData));
    window.location.href = 'game.html';
  };

  // Inicialización
  crearBotones();
  setupToggleGroups();
  
  // Event listeners
  elements.panelOpciones.addEventListener('click', ({ target }) => {
    if (target === elements.btnAprender) setMode(40);
    if (target === elements.btnRepasar) setMode(300);
  });
  
  document.addEventListener('change', handleCheckboxToggle);
  document.addEventListener('change', handleCheckboxGroupToggle);
  document.addEventListener('click', handleKanjiToggle);
  document.addEventListener('click', handleOptionToggle);
  document.addEventListener('click', kanjiButtonListener);
  elements.submitBtn.addEventListener('click', handleSubmit);
});
