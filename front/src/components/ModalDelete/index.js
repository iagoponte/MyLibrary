//ESTÁ FUNCIONANDO, MAS PRECISA DAR UM REFRESH NA PÁGINA APÓS REALIZAR O DELETE
import { Trash } from "lucide-react";
import { useState, useEffect } from "react";

export default function ModalDelete({ conteudo }) {
    
    const [books, setBooks] = useState(() => {
        let storedBooks = localStorage.getItem("books");
        return storedBooks ? JSON.parse(storedBooks) : [];
    });

  // Função para buscar os livros do localStorage
  const getBooksFromBd = () => {
    return JSON.parse(localStorage.getItem("books")) || [];
  };

  // Função para deletar um livro
  const deleteBookFromBd = (id) => {
    let books = getBooksFromBd();
    let updatedBooks = books.filter((book) => book.id !== id);
    localStorage.setItem("books", JSON.stringify(updatedBooks));

    // Atualiza a lista na tela
    setBooks(updatedBooks);
  };

  // ID único para o modal do livro
  const modalId = `deleteModal-${conteudo.id}`;

  return (
    <>
      {/* Botão para abrir o modal */}
      <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
        <Trash size={20} />
      </button>

      {/* Modal */}
      <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`${modalId}Label`}>Deletar Livro</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Você tem certeza que deseja deletar o livro <strong>{conteudo.titulo}</strong>?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button
                type="button"
                onClick={() => deleteBookFromBd(conteudo.id)}
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Deletar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
