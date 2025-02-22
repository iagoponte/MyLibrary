const { getClientesQuery, searchClientesByNomeEmailQuery } = require("../models/clienteModel");

const getClientes = async (req, res) => {
  try {
    const query = await getClientesQuery();
    if (query == null) {
      return "NAO ACHOU";
    } else {
      console.log("ois");
      res.send (query);
    }
  } catch (error) {
    console.error(
      "Sorry, something went wrong on our end. Please try again later.",
      error
    );
  }
};

const createCliente = async (req, res) => {
  const { nome_usuario, email, senha_hash } = req.body;
  if (!nome_usuario || !email || !senha_hash) {
    return handle400Error(req, res, "verifique as info");
  }
  const checarClienteExistente = await searchClientesByNomeEmailQuery(
    nome_usuario,
    email
  );
  console.log(checarClienteExistente);

  if (checarClienteExistente !== null) {
    return handle400Error(
      req,
      res,
      "já existe um cliente com esse título e autor"
    );
  }
  try {
    const query = await createClienteQuery(
      nome_usuario,
      
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

module.exports = { getClientes, createCliente };
