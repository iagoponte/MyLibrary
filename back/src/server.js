const app = require('./app');
require('dotenv').config();


const PORT = process.env.PORT || 3333;

//rodar o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));