const connection = require("./connection");

const getClientesQuery = async () => {
  const query = await connection`SELECT * FROM clientes`;
  if (query.length === 0) {
    console.error("Os usuários não foram encontrados");
    return null;
  }
  return query;
};


module.exports = { getClientesQuery };