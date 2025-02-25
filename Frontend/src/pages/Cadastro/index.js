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
  const setBd = () => {
    localStorage.setItem('books', JSON.stringify(books));
  }

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [valor, setValor] = useState('');
  const [genero, setGenero] = useState('');
  const [capa, setCapa] = useState('');


  let handleSubmit = (e) => {
    let booksSave = books;

    e.preventDefault();

    if (!titulo || !autor || !genero || !detalhes || !valor || !capa) {
      toast.error('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    const book = {
      titulo: titulo,
      autor: autor,
      genero: genero,
      detalhes: detalhes,
      valor: valor,
      capa: capa,
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
    setCapa('');

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
        <div className="mb-3">
          <label className="form-label">Capa do Livro (URL)</label>
          <input
            type="text"
            className="form-control"
            name="capa"
            value={capa}
            onChange={e => setCapa(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    </div>
  );
}