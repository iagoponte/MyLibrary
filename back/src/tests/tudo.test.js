const app = require("../app");
const request = require("supertest");
const jwt = require("jsonwebtoken");

beforeAll(async () => {
  jest.useFakeTimers("modern").setSystemTime(new Date("2025-10-01"));
  console.log("Iniciando os testes...");
});

afterAll(async () => {
  jest.clearAllTimers();
  // app.close(); //somente em testes do servidor real
});

const clienteTeste01 = {
  nome_usuario: "Teste01",
  email: "email_teste@gmail.com",
  senha_hash: "senha_teste",
};

describe("POST /cliente/signup", () => {
  it("Deve criar um novo cliente", async () => {
    const response = await request(app)
      .post("/cliente/signup")
      // .set("Accept", "application/json")
      .send({
        nome_usuario: "Teste01",
        email: "email_teste@gmail.com",
        senha_hash: "senha_teste"
      })
      .expect(200); //response.status

    expect(response.body).toHaveProperty("id");
    const clienteID = response.body.id;
  });

  it("Deve retornar erro se o cliente já existir", async () => {
    const response = await request(app)
      .post("/cliente/signup")
      .set("Accept", "application/json")
      .send({
        nome_usuario: "Teste01",
        email: "email_teste@gmail.com",
        senha_hash: "senha_teste"
       })
      .expect(400);

    expect(response.body).toHaveProperty("error");
  });

  it("Deve retornar erro se o cliente não for criado", async () => {
    const response = await request(app)
      .post("/cliente/signup")
      .set("Accept", "application/json")
      .send({ nome_usuario: "", email: "", senha_hash: "" })
      .expect(400);

    expect(response.body).toHaveProperty("error");
  });

  it("Deve retornar erro se o body não estiver correto", async () => {
    const response = await request(app)
      .post("/cliente/signup")
      .set("Accept", "application/json")
      .send({ nome_user: "", email: "", senha: "" })
      .expect(400);

    expect(response.body).toHaveProperty("error");
  });
});

describe("POST /cliente/login -- com auth", () => {
  // const JWT_SECRET = process.env.JWT_SECRET ?? "";
  // const token = jwt.sign({
  //   id: clienteTeste01.id,
  //   nome: 'Teste01',
  //   email: "email_teste@gmail.com",
  //   role: "usuario"
  // }, JWT_SECRET, {expiresIn: "2h"});

  it("Deve fazer o login do cliente", async () => {
    const response = await request(app)
      .post("/cliente/login")
      .set("Accept", "application/json")
      // .set("Authorization", `Bearer ${token}`)
      .send({
        email: "email_teste@gmail.com",
        senha_hash: "senha_teste"
      })
      .expect(200); //response.status

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome_usuario");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("role");
    expect(response.body).toHaveProperty("token");
  });

  it("Deve retornar erro se o cliente não existir", async () => {
    const response = await request(app)
      .post("/cliente/login")
      .set("Accept", "application/json")
      // .set('Authorization', `Bearer ${clienteToken}`)
      .send({ email: "", senha_hash: "" })
      .expect(400);

    expect(response.body).toHaveProperty("error");
  });
});
