import React from "react";
import ModalEdit from "./modalEdit";
import cardLivros from "./cardLivros.css";

const CardLivro = ({ livro }) => {
  //   return (
  //     <div className="card">
  //       <h2>{livro.titulo}</h2>
  //       <p><strong>Autor:</strong> {livro.autor}</p>
  //       <p><strong>Ano:</strong> {livro.ano}</p>
  //       <p><strong>Preço:</strong> R$ {livro.valor}</p>
  //     </div>
  //   );
  // };
  const estilo = {
    width: "18rem",
  };

  return (
    <div className="card card-container" style={estilo}>
      <a className="text-decorative-none" href={`/detalhes/${livro.id}`}>
        <img
          src={livro.capa}
          className="card-img-top img-fluid"
          alt="Capa Livro"
        />
      </a>
      <div className="card-body">
        <h5 className="card-title">{livro.titulo}</h5>
        <p className="">{livro.autor}</p>
        <p className="">{livro.genero}</p>
        <p className="">{livro.preco}</p>
        <div className="d-flex">
          <div className="ms-auto">
            <div key={livro.id} className="d-inline me-1">
              <ModalEdit livro={livro} />
              {/* // ou é props.conteudo?? */}
            </div>

            {/* <div className="d-inline">
                            <ModalDelete conteudo = {livro}/>
                    
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLivro;
