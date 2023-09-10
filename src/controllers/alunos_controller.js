const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose');

// Criando o schema
const AlunoSchema = { 
  matricula: Number,
  nome: String,
  curso: String,
  cre: Number
};

// Criando o model
const Aluno = mongoose.model('Aluno', AlunoSchema);

router.get('/', async (req, res) => {
  res.json(await Aluno.find({}));
});
router.get('/:id', async (req, res) => {
  res.json(await Aluno.findById(req.params.id));
});
router.post('/', async (req, res) => {
  res.json(await Aluno(req.body).save());
});
router.put('/:id', async (req, res) => {
  res.json(await Aluno.findByIdAndUpdate(req.params.id, req.body));
});
router.delete('/:id', async (req, res) => {
  res.json(await Aluno.findByIdAndDelete(req.params.id));
});

module.exports = router;