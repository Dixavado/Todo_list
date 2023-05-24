const express = require('express');
const app = express();
const path = require('path');

// Configurando o mecanismo de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
