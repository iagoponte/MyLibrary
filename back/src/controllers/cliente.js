const {
  handle404Error,
  handle400Error,
  handle500Error,
  handle401Error,
} = require("../middlewares/errorMiddleware");
const { handle200 } = require("../middlewares/successMiddleware");
const {
  getClientesQuery,
  searchClientesByNomeEmailQuery,
  createClientQuery,
  updateClienteQuery,
  deleteClienteQuery,
  searchClientesByEmailQuery,
} = require("../models/clienteModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;

const getClientes = async (req, res) => {
  try {
    const query = await getClientesQuery();
    if (query == null) {
      return "NAO ACHOU";
    } else {
      // console.log("ois");
      res.send(query);
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
  // console.log(checarClienteExistente);
  if (checarClienteExistente !== null) {
    return handle400Error(
      req,
      res,
      "já existe um cliente com esse nome ou email"
    );
  }
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(senha_hash, saltRounds);

    const query = await createClientQuery(nome_usuario, email, hashedPassword);
    if (query == null) {
      handle404Error(req, res, `Deu erro, query==null`);
    } else {
      handle200(req, res, `O usuário ${nome_usuario} foi criado!`, query);
    }
  } catch (error) {
    console.error("Deu erro na função createCliente", error);
  }
};

const updateCliente = async (req, res) => {
  const id = req.params.id;
  const { nome_usuario, email, senha_hash } = req.body;
  if (!nome_usuario || !email || !senha_hash) {
    return handle400Error(req, res, "verifique as informações passadas");
  }
  try {
    const query = await updateClienteQuery(id, nome_usuario, email, senha_hash);
    if (query == null) {
      handle404Error(req, res, "Deu erro");
    } else {
      handle200(req, res, "Sucesso", query);
    }
  } catch (error) {
    console.error("Deu erro ao atualizar o cliente", error);
  }
};

const deleteCliente = async (req, res) => {
  const id = req.params.id;
  // const test = await getClienteByIdQuery(id);
  // if (test == null) {
  //   return handle404Error(req, res, 'Este livro já não fora excluído');
  // }
  try {
    const query = await deleteClienteQuery(id);
    if (query.length === 0) {
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

const clienteLogin = async (req, res) => {
  const { email, senha_hash } = req.body;
  if (!req.body || !email || !senha_hash) {
    return handle400Error(req, res, "Invalid request body");
  }
  try {
    const checarEmail = await searchClientesByEmailQuery(email);
    // console.log(checarEmail)
    if (checarEmail === null) {
      return handle400Error(req, res, "Esse email de usuário não existe");
    }
    const checarSenha = await bcrypt.compare(senha_hash, checarEmail[0].senha_hash);
    // console.log(checarSenha);
    // await bcrypt.compare(senha_hash, checarEmail[0].hashedPassword)

    if (checarSenha) {
      const user = checarEmail[0];

      const payload = {
        id: user.id,
        nome: user.nome_usuario,
        email: user.email, 
        role: user.email === "iago.ponte@gmail.com" ? "admin" : "usuario"
      }

      const token = jwt.sign(payload, jwtSecret, { expiresIn: "2h" });
      // console.log(payload);
      // console.log(token)
      

      res.json({
        id: payload.id,
        nome: payload.nome_usuario,
        email: payload.email,
        role: payload.role,
        token,
      });
    } else {
      return handle401Error(
        req,
        res,
        "Uuário ou senha inválidos, verifique as informações e tente novamente mais tarde"
      );
    }
    // if (checarEmail != null) {
    //   const senhaCorreta = await bcrypt.compare(checarEmail[0].senha, cliente.senha_hash);
    //   if (!senhaCorreta) {
    //     return handle400Error(req, res, "Senha incorreta");
    //   }
    // };
  } catch (error) {
    return handle500Error(
      req,
      res,
      "Serviço indisponível, tente novamente mais tarde"
    );
  }
};

module.exports = {
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente,
  clienteLogin,
};
