const connection = require("./connection");

const getClientesQuery = async () => {
  const query = await connection`SELECT * FROM clientes`;
  if (query.length === 0) {
    console.error("Os usuários não foram encontrados");
    return null;
  }
  return query;
};

const createClientQuery = async (nome_usuario, email, senha_hash) => {
  try {
    const query =
      await connection`INSERT INTO clientes (nome_usuario, email, senha_hash) VALUES (${nome_usuario}, ${email}, ${senha_hash}) RETURNING *`;
    return query[0];
  } catch (error) {
    throw error;
  }
};

const searchClientesByNomeEmailQuery = async (nome_usuario, email) => {
  const query =
    await connection`SELECT * FROM clientes l WHERE l.nome_usuario = ${nome_usuario} AND l.email = ${email}`;
  if (query.length === 0) {
    // console.log(query)
    // console.error("Os livros não foi encontrado");
    return null;
  }
  return query;
};


module.exports = { getClientesQuery, createClientQuery, searchClientesByNomeEmailQuery };