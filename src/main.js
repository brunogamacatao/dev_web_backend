// 1. Importar bibliotecas
const DB_URL     = 'mongodb://localhost/aula_6_9';
const mongoose   = require('mongoose');
const express    = require('express'); // importei o módulo express
const bodyParser = require('body-parser');
const cors       = require('cors');

// 2. Criar o servidor web
const app = express();

// 3. Configurar o servidor web
app.use(cors());
app.use(bodyParser.json()); // aceita dados no formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // aceita dados no format url encoded

// Conectar os controllers
app.use('/produtos', require('./controllers/produtos_controller'));
app.use('/alunos', require('./controllers/alunos_controller'));

// Conecta com o banco de dados
mongoose.connect(DB_URL);
// 5. Colocar o servidor no ar
app.listen(5000, () => {
  console.log('A aplicação está no ar em http://localhost:5000');
});