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
    console.log("entrou no try da função createClientQuery");
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

const searchClientesByEmailQuery = async (email) => {
  const query =
    await connection`SELECT * FROM clientes l WHERE l.email = ${email}`;
  if (query.length === 0) {
    // console.log(query)
    // console.error("Os livros não foi encontrado");
    return null;
  }
  return query;
};

const updateClienteQuery = async (id, nome_usuario, email, senha_hash) => {
  try {
    const query = await connection`UPDATE clientes SET
    nome_usuario = ${nome_usuario},
    email = ${email},
    senha_hash = ${senha_hash}
    WHERE
    id = ${id}
    RETURNING *`;
    return query[0];
  } catch (error) {
    throw error;
  }
};

const deleteClienteQuery = async (id) => {
  const query = await connection`DELETE FROM clientes
        WHERE id = ${id} RETURNING *`;
  //   if (query.length === 0) {
  //     console.log("O livro foi deletado com sucesso");
  //     return query[0];
  //   }
  return query;
};

module.exports = {
  getClientesQuery,
  createClientQuery,
  searchClientesByNomeEmailQuery,
  searchClientesByEmailQuery,
  updateClienteQuery,
  deleteClienteQuery,
};
