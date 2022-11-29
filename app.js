const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo, esta API fue creada por "https://www.github.com/eduardo-jose"');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El servidor funciona en el puerto ${PORT}...`);
});
