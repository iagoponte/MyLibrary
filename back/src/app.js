const express = require('express');
const router = require('./router');
const cors = require('cors')

const app = express();

app.use(cors());//permissão das requisições em domínios diferentes (back e front precisam se comunicar pelo cors pois rodam em portas diferentes)
app.use(express.json());
app.use(router);


module.exports = app;