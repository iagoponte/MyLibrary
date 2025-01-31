
// import { useState, useEffect } from "react";
// import { toast } from 'react-toastify';

// export default function Cadastro() {
//   useEffect(() => {
//     document.title = "Cadastrar"
//   }, []);



//   let [books, setBooks] = useState(() => {
//     let storedBooks = localStorage.getItem('books');
//     return storedBooks ? JSON.parse(storedBooks) : [];
//   });



//   /*     {
//     titulo: "Harry potter",
//     autor: "Mateus Helcias",
//     detalhes: "Esse é os detalhes do livro de harry potter pelo autor Mateus Helcias",
//     valor: 80,
//     genero: "Romance"
// }
//     */
//   let [newBook, setNewBook] = useState({
//     titulo: '',
//     autor: '',
//     genero: '',
//     detalhes: '',
//     valor: '',
//     id: -1
//   });

//   useEffect(() => {
//     localStorage.setItem('books', JSON.stringify(books));
//   }, [books]);

//   let handleChange = (e) => {
//     let { name, value } = e.target;
//     setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
//   };

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     let { titulo, autor, genero, detalhes, valor, id = books.length } = newBook;

//     if (!titulo || !autor || !genero || !detalhes || !valor) {
//       toast.error('Por favor, preencha todos os campos obrigatórios!');
//       return;
//     }

//     setBooks((prevBooks) => [...prevBooks, newBook]);
//     setNewBook({ titulo: '', autor: '', genero: '', detalhes: '', valor:''});
//     toast.success('Livro cadastrado com sucesso!');
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Cadastrar Livro</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Título</label>
//           <input
//             type="text"
//             className="form-control"
//             name="titulo"
//             value={newBook.titulo}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Autor</label>
//           <input
//             type="text"
//             className="form-control"
//             name="autor"
//             value={newBook.autor}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Gênero</label>
//           <input
//             type="text"
//             className="form-control"
//             name="genero"
//             value={newBook.genero}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Detalhes</label>
//           <input
//             type="text"
//             className="form-control"
//             name="detalhes"
//             value={newBook.detalhes}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Valor</label>
//           <input
//             type="text"
//             className="form-control"
//             name="valor"
//             value={newBook.valor}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Cadastrar
//         </button>
//       </form>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { toast } from 'react-toastify';

export default function Cadastro() {
  useEffect(() => {
    document.title = "Cadastrar"
  }, []);


  // busca livros do localstorage
  let [books, setBooks] = useState(() => {
    let storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  });



  // Salva livros no localstorage
  const setBd = ()=> {
    localStorage.setItem('books', JSON.stringify(books));
  }

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [valor, setValor] = useState('');
  const [genero, setGenero] = useState('');


  let handleSubmit = (e) => {
    let booksSave = books;

    e.preventDefault();

    if (!titulo || !autor || !genero || !detalhes || !valor) {
      toast.error('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    const book = {
      titulo: titulo,
      autor: autor,
      genero: genero,
      detalhes: detalhes,
      valor: valor,
      id: booksSave.length
    }


    booksSave.push(book);
    setBooks(booksSave);
    setBd();

    setTitulo('');
    setAutor('');
    setDetalhes('');
    setValor('');
    setGenero('');

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
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Autor</label>
          <input
            type="text"
            className="form-control"
            name="autor"
            value={autor}
            onChange={e => setAutor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gênero</label>
          <input
            type="text"
            className="form-control"
            name="genero"
            value={genero}
            onChange={e => setGenero(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Detalhes</label>
          <input
            type="text"
            className="form-control"
            name="detalhes"
            value={detalhes}
            onChange={e => setDetalhes(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Valor</label>
          <input
            type="text"
            className="form-control"
            name="valor"
            value={valor}
            onChange={e => setValor(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    </div>
  );
}