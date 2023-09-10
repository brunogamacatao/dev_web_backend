const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose');

// Criando o schema
const ProdutoSchema = { 
  nome: String ,
  preco: Number
};

// Criando o model
const Produto = mongoose.model('Produto', ProdutoSchema);

router.get('/', async (req, res) => {
  res.json(await Produto.find({}));
});
router.get('/:id', async (req, res) => {
  res.json(await Produto.findById(req.params.id));
});
router.post('/', async (req, res) => {
  res.json(await Produto(req.body).save());
});
router.put('/:id', async (req, res) => {
  res.json(await Produto.findByIdAndUpdate(req.params.id, req.body));
});
router.delete('/:id', async (req, res) => {
  res.json(await Produto.findByIdAndDelete(req.params.id));
});

module.exports = router;