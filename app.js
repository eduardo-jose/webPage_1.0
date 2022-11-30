const express = require('express');

const app = express();
const data = require('./src/data.json');

app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  const date = new Date().toLocaleDateString();
  console.log('Hoy es:', date);
  res.send('Hola mundo, esta API fue creada por "https://www.github.com/eduardo-jose"');
});

app.get('/api/data', (req, res) => {
  res.send(data);
});

app.get('/api/data/:nombre', (req, res) => {
  const { nombre } = req.params;
  const resultado = data.filter((person) => person.name === nombre || person.lastname === nombre);
  if (resultado.length === 0) {
    res.send(`No se encontraron resultados para ${nombre.toLocaleUpperCase()}`).status(404);
  }
  res.send(resultado);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El servidor funciona en el puerto ${PORT}...`);
});
