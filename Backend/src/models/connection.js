const postgres = require('postgres');
require('dotenv').config();

const connection = postgres(process.env.DATABASE_URL, {
});

async function checkConnection() {
    try {
        console.log(process.env.DATABASE_URL);
        const result = await connection `SELECT * FROM livros;`
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

checkConnection();
module.exports = connection;