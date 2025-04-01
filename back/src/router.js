const express = require('express');
const {getLivros, getLivrosById, createLivros, updateLivros, deleteLivros} = require('./controllers/livro');
const { getClientes, createCliente, updateCliente, deleteCliente, clienteLogin } = require('./controllers/cliente');
const {verifyToken} = require('./middlewares/verifyToken');
const { popularBd } = require('./controllers/populate');

const router = express.Router();

router.post('/cliente/login', clienteLogin); // primeiro devo logar, pra obter o token, então autentico
router.post('/cliente/auth', verifyToken); //teste de autenticação do token.


router.get('/livros', getLivros);
router.get('/livros/:id', getLivrosById)
// estas rotas aqui precisam, também, de verificação para o administrador.
router.post('/livros/create',  createLivros)
router.put('/livros/atualizar/:id', updateLivros)
router.delete('/livros/apagar/:id', deleteLivros)

// colocar estas rotas, futuramente, aninhadas numa rota de verificação ("/auth/....")
router.get('/clientes', verifyToken, getClientes)
router.post('/cliente/signup', createCliente)
router.put('/cliente/atualizar/:id', verifyToken, updateCliente)
router.delete('/cliente/apagar/:id', verifyToken, deleteCliente)

router.post('/populate', popularBd)

module.exports = router;