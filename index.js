const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// Configurando o mecanismo de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Obtendo a porta do servidor a partir das variáveis de ambiente
const port = process.env.PORT || 3000;

// Iniciando o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
