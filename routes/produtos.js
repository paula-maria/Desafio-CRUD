const express = require('express');
const router = express.Router();

// Simulação de "banco de dados" temporário
let produtos = [
  { id: 1, nome: 'Notebook', preco: 3500, quantidade: 5 },
  { id: 2, nome: 'Mouse', preco: 80, quantidade: 20 }
];

// READ - listar todos
router.get('/', (req, res) => {
  res.json(produtos);
});

// READ - obter um produto por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
  res.json(produto);
});

// CREATE - adicionar produto
router.post('/', (req, res) => {
  const { nome, preco, quantidade } = req.body;
  if (!nome || !preco || !quantidade) {
    return res.status(400).json({ erro: 'Dados inválidos' });
  }
  const novo = { id: produtos.length + 1, nome, preco, quantidade };
  produtos.push(novo);
  res.status(201).json(novo);
});

// UPDATE - atualizar produto
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });

  const { nome, preco, quantidade } = req.body;
  if (nome) produto.nome = nome;
  if (preco) produto.preco = preco;
  if (quantidade) produto.quantidade = quantidade;

  res.json(produto);
});

// DELETE - excluir produto
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  produtos = produtos.filter(p => p.id !== id);
  res.json({ mensagem: 'Produto removido com sucesso' });
});

module.exports = router;
