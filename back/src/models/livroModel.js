const connection = require("./connection");

const getLivrosQuery = async () => {
  const query = await connection`SELECT * FROM livros`;
  if (query.length === 0) {
    console.error("Os livros não foi encontrado");
    return null;
  }
  return query;
};

const getLivrosByIdQuery = async (id) => {
  const query = await connection`SELECT * FROM livros l WHERE l.id = ${id}`;
  if (query.length === 0) {
    console.error("Os livros não foi encontrado");
    return null;
  }
  return query;
};

const createLivrosQuery = async (titulo, autor, ano_publicacao, genero) => {
  try {
    const query =
      await connection`INSERT INTO livros (titulo, autor, ano_publicacao, genero) VALUES (${titulo}, ${autor}, ${ano_publicacao}, ${genero}) RETURNING *`;
    return query[0];
  } catch (error) {
    throw error;
  }
};

const searchLivrosByTituloAutorQuery = async (titulo, autor) => {
  const query =
    await connection`SELECT * FROM livros l WHERE l.titulo = ${titulo} AND l.autor = ${autor}`;
  if (query.length === 0) {
    // console.log(query)
    // console.error("Os livros não foi encontrado");
    return null;
  }
  return query;
};

const updateLivrosQuery = async (id, titulo, autor, ano_publicacao, genero) => {
  try {
    const query = await connection`UPDATE livros SET
    titulo = ${titulo},
    autor = ${autor},
    ano_publicacao = ${ano_publicacao},
    genero = ${genero}
    WHERE
    id = ${id}
    RETURNING *`;
    return query[0];
  } catch (error) {
    throw error;
  }
};

const deleteLivrosQuery = async (id) => {
  try {
    const query = await connection`DELETE FROM livros
        WHERE id = ${id} RETURNING *`;
    // console.log('Resultado da consulta (query):', query);
    // console.log('Comprimento de query:', query.length);
    if (query.length === 0) {
      console.log("Livro não encontrado para deletar");
      return null;
    }
    console.log("O livro foi deletado com sucesso");
    return query[0]; // Retorna o livro deletado
  } catch (error) {
    console.log("error");
    throw error;
  }
};

module.exports = {
  getLivrosQuery,
  getLivrosByIdQuery,
  createLivrosQuery,
  searchLivrosByTituloAutorQuery,
  updateLivrosQuery,
  deleteLivrosQuery,
};
