const {
  handle404Error,
  handle400Error,
} = require("../middlewares/errorMiddleware");
const { handle200 } = require("../middlewares/successMiddleware");
const {
  getLivrosQuery,
  getLivrosByIdQuery,
  createLivrosQuery,
  searchLivrosByTituloAutorQuery,
  updateLivrosQuery,
  deleteLivrosQuery,
} = require("../models/livroModel");

const getLivros = async (req, res) => {
  try {
    const query = await getLivrosQuery();
    if (query == null) {
      return "NAO ACHOU";
    } else {
      // console.log("ois");
      res.status(200).json(query);
    }
  } catch (error) {
    console.error(
      "Sorry, something went wrong on our end. Please try again later.",
      error
    );
  }
};

const getLivrosById = async (req, res) => {
  const id = req.params.id;
  try {
    const query = await getLivrosByIdQuery(id);
    if (query == null) {
      handle404Error(req, res, "Deu erro");
    } else {
      handle200(req, res, "Sucesso", query);
    }
  } catch (error) {
    console.error(
      "Sorry, something went wrong on our end. Please try again later.",
      error
    );
  }
};

const createLivros = async (req, res) => {
  const { titulo, autor, ano_publicacao, genero, capa, sinopse, preco } = req.body;
  if (!titulo || !autor || !ano_publicacao || !genero || !capa || !sinopse || !preco) {
    return handle400Error(req, res, "verifique as info");
  }
  const checarLivroExistente = await searchLivrosByTituloAutorQuery(
    autor,
    titulo
  );
  console.log(autor, titulo);

  if (checarLivroExistente !== null) {
    return handle400Error(
      req,
      res,
      "já existe um livro com esse título e autor"
    );
  }
  try {
    // : postgres.RowList<postgres.Row[]>
    const query = await createLivrosQuery(
      titulo,
      autor,
      ano_publicacao,
      genero,
      capa,
      sinopse,
      preco
    );
    // console.log(query);
    if (query == null) {
      handle404Error(req, res, "Deu erro");
    } else {
      handle200(req, res, "Sucesso", query);
    }
  } catch (error) {
    console.error(
      "Sorry, something went wrong on our end. Please try again later.",
      error
    );
  }
};

const updateLivros = async (req, res) => {
  const id = req.params.id;
  const { titulo, autor, ano_publicacao, genero, capa, sinopse, preco } = req.body;
  if (!ano_publicacao || !titulo || !ano_publicacao || !genero || !capa || !sinopse || !preco) {
    return handle400Error(req, res, "verifique as info");
  }
  try {
    const query = await updateLivrosQuery(
      id,
      titulo,
      autor,
      ano_publicacao,
      genero,
      capa,
      sinopse,
      preco
    );
    if (query == null) {
      handle404Error(req, res, "Deu erro");
    } else {
      handle200(req, res, "Sucesso", query);
    }
  } catch (error) {
    console.error(
      "Sorry, something went wrong on our end. Please try again later.",
      error
    );
  }
};

const deleteLivros = async (req, res) => {
  const id = req.params.id;
  // const test = await getLivrosByIdQuery(id);
  // if (test == null) {
  //   return handle404Error(req, res, 'Este livro já não fora excluído');
  // }
  try {
    const query = await deleteLivrosQuery(id);
    if (query == null) {
      handle404Error(req, res, "Este livro não existe", query);
    } else {
      handle200(req, res, "Deletado!!");
    }
  } catch (error) {
    console.error(
      "Sorry, something went wrong on our end. Please try again later.",
      error
    );
  }
};

module.exports = {
  getLivros,
  getLivrosById,
  createLivros,
  updateLivros,
  deleteLivros,
};
