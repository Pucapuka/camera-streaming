const express = require('express');
const path = require('path');

const app = express();

// Serve os arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
