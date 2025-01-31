
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';



export default function Cadastro() {
  useEffect(() => {
    document.title = "Cadastrar"
  }, []);

  const [books, setBooks] = useState(() => {
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  });
  
  const [newBook, setNewBook] = useState({
    Livro: {
      titulo: '',
      autor: '',
      genero: '',
      sinopse: '',
      valor: '',
    },
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
    let { Livro } = newBook;

    if (!titulo || !autor || !genero || !detalhes || !valor) {
      toast.error('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    // const bookWithId = {id: Date.now(), ...newBook}

    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({ Livro.titulo: '', autor: '', genero: '', detalhes: '', valor:''});
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
            name="titulo"
            value={newBook.titulo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Autor</label>
          <input
            type="text"
            className="form-control"
            name="autor"
            value={newBook.autor}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gênero</label>
          <input
            type="text"
            className="form-control"
            name="genero"
            value={newBook.genero}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Detalhes</label>
          <input
            type="text"
            className="form-control"
            name="detalhes"
            value={newBook.detalhes}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Valor</label>
          <input
            type="text"
            className="form-control"
            name="valor"
            value={newBook.valor}
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

// import { useState, useEffect } from "react";
// import { toast } from 'react-toastify';

// export default function Cadastro() {
//   const [books, setBooks] = useState(() => {
//     const storedBooks = localStorage.getItem('books');
//     return storedBooks ? JSON.parse(storedBooks) : [];
//   });

//   const [newBook, setNewBook] = useState({
//     title: '',
//     author: '',
//     genre: '',
//     //livroID: '',
//   });

//   useEffect(() => {
//     if (books.length > 0) {
//       localStorage.setItem('books', JSON.stringify(books));
//     }
//   }, [books]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { title, author, genre } = newBook;

//     if (!title || !author || !genre) {
//       toast.error('Por favor, preencha todos os campos obrigatórios!');
//       return;
//     }

//     // Verifica se o livro já existe na biblioteca
//     const bookExists = books.some(
//       (book) => book.title.toLowerCase() === title.toLowerCase()
//     );

//     if (bookExists) {
//       toast.error('Este livro já está cadastrado!');
//       return;
//     }

//     // Cria um novo livro com ID único
//     const bookWithId = { id: Date.now(), ...newBook };

//     setBooks((prevBooks) => [...prevBooks, bookWithId]);
//     setNewBook({ title: '', author: '', genre: '' });
//     toast.success('Livro cadastrado com sucesso!');
//   }
// }
