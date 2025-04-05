const connection = require("./connection");

const getLivrosQuery = async () => {
  const query = await connection `SELECT 
    l.id, l.titulo, l.autor, l.ano_publicacao, g.tipo AS genero, l.capa, l.preco, l.sinopse, l.created_at 
    FROM livros l
    JOIN genero g ON l.genero_id = g.id
    ORDER BY l.id ASC;`;
    // `SELECT * FROM livros`;
  if (query.length === 0) {
    console.error("Os livros não foi encontrado");
    return null;
  }
  return query;
};

const getLivrosByIdQuery = async (id) => {
  const query = 
    await connection `SELECT 
    l.id, l.titulo, l.autor, l.ano_publicacao, g.tipo AS genero, l.capa, l.preco, l.sinopse, l.created_at, l.quantidade 
    FROM livros l
    JOIN genero g ON l.genero_id = g.id
    WHERE l.id = ${id}
    ORDER BY l.id ASC;`;
  // `SELECT * FROM livros l WHERE l.id = ${id}`;
  if (query.length === 0) {
    console.error("Os livros não foram encontrado");
    return null;
  }
  return query;
};

const createLivrosQuery = async (titulo, autor, ano_publicacao, genero, capa, sinopse, preco, quantidade) => {
  try {
    const query =
      await connection `WITH novo_genero AS (
      INSERT INTO genero (tipo) 
      VALUES (${genero}) 
      ON CONFLICT (tipo) DO NOTHING 
      RETURNING id
    )
    INSERT INTO livros (titulo, autor, ano_publicacao, genero_id, capa, sinopse, preco, quantidade)
    VALUES (
      ${titulo}, 
      ${autor}, 
      ${ano_publicacao}, 
      COALESCE((SELECT id FROM novo_genero), (SELECT id FROM genero WHERE tipo = ${genero})), 
      ${capa}, 
      ${sinopse}, 
      ${preco},
      ${quantidade}
      ) RETURNING *;`;
      // `INSERT INTO livros (titulo, autor, ano_publicacao, genero, capa, sinopse, preco) VALUES (${titulo}, ${autor}, ${ano_publicacao}, ${genero}, ${capa}, ${sinopse}, ${preco}) RETURNING *`;
    return query;
  } catch (error) {
    throw error;
  }
};

const searchLivrosByTituloAutorQuery = async (autor, titulo ) => {
  const query =
    await connection `SELECT * FROM livros l WHERE l.titulo = ${titulo} AND l.autor = ${autor}`;
    // console.log(titulo, autor);

  if (query.length === 0) {
    // console.log(query)
    // console.error("Os livros não foi encontrado");
    return null;
  }
  return query;
};

const updateLivrosQuery = async (id, titulo, autor, ano_publicacao, genero, capa, sinopse, preco, quantidade) => {
  try {
    const query = await connection` 
    WITH novo_genero AS (
    INSERT INTO genero (tipo)
    VALUES (${genero})
    ON CONFLICT (tipo) DO NOTHING
    RETURNING id
    )
    UPDATE livros SET
    titulo = ${titulo},
    autor = ${autor},
    ano_publicacao = ${ano_publicacao},
    genero_id = COALESCE((SELECT id FROM novo_genero), (SELECT id FROM genero WHERE tipo = ${genero})),
    sinopse = ${sinopse},
    capa = ${capa},
    preco = ${preco},
    quantidade = ${quantidade}
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
