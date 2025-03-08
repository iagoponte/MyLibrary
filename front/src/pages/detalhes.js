import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchLivrosById } from "../services/livroService";

export default function DetalhesLivro() {
  const { livroID } = useParams(); // Obtém o ID da URL
  const [livros, setLivros] = useState(null);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLivro = async () => {
        // setLoading(true);
        const fetch = await fetchLivrosById(livroID);
        // console.log(fetch)
        setLivros(fetch.response[0]);
        // setLoading(false);
    };
        fetchLivro();
        // console.log(fetchLivro())
  }, []);

  useEffect(() => {
    document.title = "Detalhes Livro";
  }, []);

 

//   if (loading) return <p>Carregando...</p>;
  if (!livros) return <p>Livro não encontrado.</p>;

  return (
    <div className="container my-5">
      <div className="row p-4 pb-lg-5 ps-lg-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-8 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            {livros.titulo}
          </h1>
          <br />
          <p className="lead">
            <strong>Autor:</strong> {livros.autor}
          </p>
          <p className="lead">
            <strong>Gênero:</strong> {livros.genero}
          </p>
          <p className="lead">
            <strong>Ano de Publicação:</strong> {livros.ano_publicacao}
          </p>
          <p className="lead">
            <strong>Sinopse:</strong>{" "}
            {livros.sinopse || "Sinopse não disponível"}
          </p>
          <p className="lead">
            <strong>Preço:</strong> R$ {livros.preco || "----"}
          </p>
        </div>
        <div className="text-center col-lg-4 p-3 p-lg-5 pt-lg-3">
          <img className="img-fluid" src={livros.capa} alt={livros.titulo} />
          <p className="h6 text-center">
            <small>Capa Original</small>
          </p>
        </div>
      </div>
    </div>
  );
}
