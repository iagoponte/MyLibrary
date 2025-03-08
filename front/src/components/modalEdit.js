import { Pencil } from "lucide-react";
import { useState, useEffect } from "react";
import { editarLivro } from "../services/livroService";

export default function ModalEdit({ livro }) {
    const id = livro.id;
    //usar o useState dessa forma não funciona, por algum motivo misterioso.
//   const [livroEdit, setLivroEdit] = useState({
    //     titulo: livro.titulo,
    //     autor: livro.autor,
    //     ano_publicacao: livro.ano_publicacao,
    //     genero: livro.genero,
    //     capa: livro.capa,
    //     sinopse: livro.sinopse,
    //     preco: livro.preco,
    //   });
    

  let [titulo, setTitulo] = useState(livro.titulo);
  let [autor, setAutor] = useState(livro.autor);
  let [ano_publicacao, setAnoPubli] = useState(livro.ano_publicacao);
  let [genero, setGenero] = useState(livro.genero);
  let [capa, setCapa] = useState(livro.capa);
  let [sinopse, setSinopse] = useState(livro.sinopse);
  let [preco, setPreco] = useState(livro.preco);

  useEffect(() => {
    setTitulo(livro.titulo);
    setAutor(livro.autor);
    setAnoPubli(livro.ano_publicacao);
    setPreco(livro.preco);
    setGenero(livro.genero);
    setCapa(livro.capa);
    setSinopse(livro.sinopse);
}, [livro]);

// let handleSubmit = (e) => {
//     e.preventDefault(); 
//     let books = JSON.parse(localStorage.getItem('books')) || [];
//     let bookIndex = books.findIndex(book => book.id === conteudo.id);
//     if (bookIndex === -1) return; // Se não encontrar, sai da função
// let editarL = async () => {
//     const editar = await editarLivro(id, livro);
//     return editar;
// }
// editarL();

//     books[bookIndex] = {
//         id: conteudo.id,
//         titulo,
//         autor,
//         detalhes,
//         valor,
//         genero,
//         capa
//     };
//     localStorage.setItem('books', JSON.stringify(books));
//     window.location.reload();
// };

  const [mensagem, setMensagem] = useState();

//   const handleChange = (e) => {
//     setLivroEdit({ ...livroEdit, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//     try {
//       const editarL = async () => {
//         const editar = await editarLivro(id, livro);
//         return editar;
//       };
//       editarL();
//       alert("Livro atualizado com sucesso!");
//       window.location.reload(); // Atualiza a página para refletir mudanças
//     } catch (error) {
//       console.error("Erro ao atualizar o livro", error);
//       throw error;
//     }
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entrou no handlesubmit - deu certo");
    try {
        const editarL = async () => {
          const editar = await editarLivro(id, livro);
          return editar;
        };
        editarL();
        alert("Livro atualizado com sucesso!");
        window.location.reload(); // Atualiza a página para refletir mudanças
    } catch (error) {
        console.error("Erro ao atualizar o livro", error);
        throw error;
    }

    // editarLivro(id, livro)
    //   .then(() => {
    //     setMensagem(alert("Livro editado com sucesso!"));
    //     // setLivroEdit({
    //     //   titulo: "",
    //     //   autor: "",
    //     //   ano_publicacao: "",
    //     //   genero: "",
    //     //   capa: "",
    //     //   sinopse: "",
    //     //   preco: "",
    //     // }); // Limpa o formulário
    //   })
    //   .catch(() => setMensagem(alert("Erro ao cadastrar livro!")));
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target={`#modal-${id}`}
      >
        <Pencil size={20} />
      </button>
      {/* {console.log(livro)} */}
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={`modal-${id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalLabel">
                Editar produto
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Título</label>
                  <input
                    type="text"
                    className="form-control"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Autor</label>
                  <input
                    type="text"
                    className="form-control"
                    value={autor}
                    onChange={e => setAutor(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ano de Publicação</label>
                  <input
                    type="text"
                    className="form-control"
                    value={ano_publicacao}
                    onChange={e => setAnoPubli(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Gênero</label>
                  <input
                    type="text"
                    className="form-control"
                    value={genero}
                    onChange={e => setGenero(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">URL Capa</label>
                  <input
                    type="text"
                    className="form-control"
                    value={capa}
                    onChange={e => setCapa(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Sinopse</label>
                  <input
                    type="text"
                    className="form-control"
                    value={sinopse}
                    onChange={e => setSinopse(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Valor</label>
                  <input
                    type="text"
                    className="form-control"
                    value={preco}
                    onChange={e => setPreco(e.target.value)}
                  />
                </div>
                <div className="d-flex">
                  <div className="ms-auto">
                    <button
                      type="button"
                      className="btn btn-danger me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success"
                    //   onClick={handleSave}
                    >
                      Salvar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
