const express = require('express');
const router = require('./router');
const connection = require('./models/connection');

const app = express();
app.use(express.json());
app.use(router);


module.exports = app;