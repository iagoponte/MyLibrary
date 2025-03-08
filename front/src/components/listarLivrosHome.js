import React, { useEffect, useState } from "react";
import CardLivro from "./cardLivros"; // componente card
import { fetchLivros } from "../services/livroService";

const ListaLivros = () => {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
      const fetchLivro = async () => {
          setLoading(true);
          const fetch = await fetchLivros();
          // console.log(fetch[24])
          setLivros(fetch);
          setLoading(false);
      };
          fetchLivro();
          // console.log(fetchLivro())
    }, []);  

    //OUTRA FORMA DE USAR AXIOS
  //   fetchLivros()
  //     .then((response) => setLivros(response.data))
  //     .catch((error) => console.error("Erro ao buscar livros:", error));
  // }, []);

  return (
    <div className="container-fluid">
      <div className='text-center p4'>
        <h1>Acervo</h1>
      </div>
      <div className="row align-items-center">
        {livros.map((livro) => (
          <div key={livro.id} className="col-md-4 p-2 text-center d-flex justify-content-center">
            <div className=""><CardLivro livro={livro} /></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaLivros;
