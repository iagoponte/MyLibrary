import { useState, useEffect } from "react";
import { toast } from 'react-toastify';

export default function Cadastro() {
  const [books, setBooks] = useState(() => {
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, genre } = newBook;

    if (!title || !author || !genre) {
      toast.error('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    setBooks((prevBooks) => [...prevBooks, newBook]); 
    setNewBook({ title: '', author: '', genre: '' }); 
    toast.success('Livro cadastrado com sucesso!');
  };

  return (
    <div className="container mt-4">
      <h1>Cadastrar Livro</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={newBook.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Autor</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={newBook.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gênero</label>
          <input
            type="text"
            className="form-control"
            name="genre"
            value={newBook.genre}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
