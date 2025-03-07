const express = require('express');
const {getLivros, getLivrosById, createLivros, updateLivros, deleteLivros} = require('./controllers/livro');
const { getClientes, createCliente, updateCliente, deleteCliente, clienteLogin } = require('./controllers/cliente');
// const {verifyToken} = require('./middlewares/verifyToken')

const router = express.Router();

router.post('/cliente/login', clienteLogin);

router.get('/livros', getLivros);
router.get('/livros/:id', getLivrosById)
// estas rotas aqui precisam, também, de verificação para o administrador.
router.post('/livros/create',  createLivros)
router.put('/livros/atualizar/:id', updateLivros)
router.delete('/livros/apagar/:id', deleteLivros)

// colocar estas rotas, futuramente, aninhadas numa rota de verificação ("/auth/....")
router.get('/clientes', getClientes)
router.post('/cliente/signup', createCliente)
router.put('/cliente/atualizar/:id', updateCliente)
router.delete('/cliente/apagar/:id', deleteCliente)

module.exports = router;