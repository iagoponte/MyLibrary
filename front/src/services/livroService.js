import axios from "axios";

const API_URL = "http://localhost:3000/livros";
const API_URL_CREATE = "http://localhost:3000/livros/create";

// export async function createLivro(data) {
//   const dataNewlivro = {
//     autor: data.autor,
//     titulo: data.titulo,
//     ano_publicacao: Number(data.ano_publicacao),
//     genero: data.genero,
//     capa: data.capa,
//     sinopse: data.sinopse,
//     preco: parseFloat(data.preco)
//   };
//   const response = await api.post("/livros", dataNewlivro);

//   return response;
// }

// export async function getLivros() {
//   const response = await api.get(API_URL);
//   return response;
// }

// export async function getLivrobyId(id) {
//   const response = await api.get(`${API_URL}/${id}`);

//   return response;
// }

// //ver se esse dataUpdate = dataNew funciona!!!
// export async function updateLivro(id, data) {
//   const dataUpdatelivro =  {
//     autor: data.autor,
//     titulo: data.titulo,
//     ano_publicacao: Number(data.ano_publicacao),
//     genero: data.genero,
//     capa: data.capa,
//     sinopse: data.sinopse,
//     preco: parseFloat(data.preco)
//   };

//   const response = await api.put(`${API_URL}/${id}`, dataUpdatelivro);

//   return response;
// }

// export async function deleteLivro(id) {
//   const response = await api.delete(`/livros/${id}`);

//   return response;
// }

export const fetchLivros = async () => {
  try {
    const fetch = await axios.get(API_URL);
    // console.log(fetch)
    return fetch.data; // Retorna diretamente os dados do livro
  } catch (error) {
    console.error("Os livros em questão, não pôde ser encontrado:", error);
    return null;
  }
};
// export const fetchLivrosById = (id) => axios.get(`${API_URL}/${id}`);
export const fetchLivrosById = async (id) => {
  try {
    const fetch = await axios.get(`${API_URL}/${id}`);
    return fetch.data; // Retorna diretamente os dados do livro
  } catch (error) {
    console.error("O livro em questão, não pôde ser encontrado:", error);
    return null;
  }
};
// export const adicionarLivro = (livro) => axios.post(`${API_URL}/create`, livro);
export const adicionarLivro = async (livro) => {
  const Newlivro = {
    titulo: livro.titulo,
    autor: livro.autor,
    ano_publicacao: livro.ano_publicacao,
    genero: livro.genero,
    capa: livro.capa,
    sinopse: livro.sinopse,
    preco: livro.preco,
  };
  try {
    const response = await axios.post(API_URL_CREATE, Newlivro);
    return response.data; // Retorna os dados da resposta, se necessário
  } catch (error) {
    console.error("Erro ao editar o livro:", error);
    throw error; // Lança o erro para ser tratado pelo chamador da função
  }
};

export const editarLivro = async (id, livro = {}) => {
  const {
    titulo = '',
    autor = '',
    ano_publicacao = '',
    genero = '',
    capa = '',
    sinopse = '',
    preco = 0,
  } = livro;
  
  const editedLivro = {
    titulo,
    autor,
    ano_publicacao,
    genero,
    capa,
    sinopse,
    preco,
  };

  try {
    const response = await axios.put(`${API_URL}/atualizar/${id}`, editedLivro);
    return response.data; // Retorna os dados da resposta, se necessário
  } catch (error) {
    console.error("Erro ao editar o livro:", error);
    throw error; // Lança o erro para ser tratado pelo chamador da função
  }
};

export const deletarLivro = (id) => axios.delete(`${API_URL}/apagar/${id}`);

// Cola das rotas de post, put e delete.
// router.post('/livros/create',  createLivros)
// router.put('/livros/atualizar/:id', updateLivros)
// router.delete('/livros/apagar/:id', deleteLivros)
