import React, { useState } from "react";
import { adicionarLivro } from "../services/livroService";

// const API_URL = "http://localhost:3000/livros"; // URL da API

const CadastroLivro = () => {
  const [livroForm, setLivroForm] = useState({
    titulo: "",
    autor: "",
    ano_publicacao: "",
    genero: "",
    capa: "",
    sinopse: "",
    preco: "",
  });

  const [mensagem, setMensagem] = useState();

  // Atualiza o estado quando o usuário digita nos inputs
  const handleChange = (e) => {
    setLivroForm({ ...livroForm, [e.target.name]: e.target.value });
  };

  // Envia os dados do formulário para a API
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entrou no handlesubmit - deu certo");

    const addLivro = async () => {
      const add = await adicionarLivro(livroForm);
      return add;
    };
    addLivro()
      .then(() => {
        setMensagem(alert("Livro cadastrado com sucesso!"));
        setLivroForm({
          titulo: "",
          autor: "",
          ano_publicacao: "",
          genero: "",
          capa: "",
          sinopse: "",
          preco: "",
        }); // Limpa o formulário
      })
      .catch(() => setMensagem(alert("Erro ao cadastrar livro!")));
  };

  return (
    <div className="container mt-4">
      <h2>Cadastrar Novo Livro</h2>
      {mensagem && <p>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título do Livro:</label>
          <input
            type="text"
            name="titulo"
            className="form-control"
            placeholder="Título"
            value={livroForm.titulo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Autor:</label>
          <input
            type="text"
            name="autor"
            className="form-control"
            placeholder="Autor"
            value={livroForm.autor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ano de publicação:</label>
          <input
            type="number"
            name="ano_publicacao"
            className="form-control"
            placeholder="Ano de publicação"
            value={livroForm.ano_publicacao}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gênero:</label>
          <input
            type="text"
            name="genero"
            className="form-control"
            placeholder="genero"
            value={livroForm.genero}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Capa:</label>
          <input
            type="text"
            name="capa"
            className="form-control"
            placeholder="capa"
            value={livroForm.capa}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sinopse:</label>
          <input
            type="text"
            name="sinopse"
            className="form-control"
            placeholder="sinopse"
            value={livroForm.sinopse}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Valor:</label>
          <input
            type="number"
            name="preco"
            className="form-control"
            placeholder="preco (R$)"
            value={livroForm.preco}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroLivro;
