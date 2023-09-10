const DB_URL = 'mongodb://localhost/aula_6_9';
const mongoose = require('mongoose');

const ProdutoSchema = { 
  nome: String ,
  preco: Number
};

const Produto = mongoose.model('Produto', ProdutoSchema);

const main = async () => {
  await mongoose.connect(DB_URL);
  await Produto({nome: 'Pastel', preco: 6.0}).save();
  let produtos = await Produto.find({});
  console.log(produtos);
};

main();

