const express = require('express');
const {getLivros, getLivrosById, createLivros, updateLivros, deleteLivros} = require('./controllers/livro');
const { getClientes, createCliente } = require('./controllers/cliente');

const router = express.Router();


router.get('/livros', getLivros);
router.get('/livros/:id', getLivrosById)
router.post('/livros/create',  createLivros)
router.put('/livros/atualizar/:id', updateLivros)
router.delete('/livros/apagar/:id', deleteLivros)

router.get('/clientes', getClientes)
router.post('/cliente/signup', createCliente)

module.exports = router;