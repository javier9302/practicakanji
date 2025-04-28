const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const DATA_PATH = path.join(__dirname, 'kanjiData.json');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para obtener kanji aleatorio
app.get('/api/kanji', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
    const disponibles = data.filter(k => k.puntaje < 20);
    
    if (disponibles.length === 0) {
      return res.status(404).json({ error: 'No hay más kanjis para practicar' });
    }
    
    const aleatorio = disponibles[Math.floor(Math.random() * disponibles.length)];
    res.json(aleatorio);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});
// Endpoint para obtener toda la base de datos

app.get('/api/kanjis-all', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


// Endpoint para actualizar puntaje
app.post('/api/update', (req, res) => {
  try {
    const { kanji, puntaje } = req.body;
    let data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

    data = data.map(item => 
      item.kanji === kanji ? { ...item, puntaje } : item
    );

    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
    res.json({ status: 'ok', newScore: puntaje });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al actualizar' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});