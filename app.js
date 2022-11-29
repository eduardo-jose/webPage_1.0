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

// app.get('/api/data/:id', (req, res) => {
//   const { id } = req.params;
//   const indice = data.findIndex((person) => person.id == id);
//   if (indice >= 0) {
//     res.send(indice).status(200);
//   }
// });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El servidor funciona en el puerto ${PORT}...`);
});
