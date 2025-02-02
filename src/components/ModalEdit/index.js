// import { Pencil } from 'lucide-react';
// import { useState } from 'react';


// export default function ModalEdit(props) {
//     const conteudo = {
//         titulo: props.conteudo.titulo,
//         autor:  props.conteudo.autor,
//         genero:  props.conteudo.genero,
//         detalhes:  props.conteudo.detalhes,
//         valor:  props.conteudo.valor,
//         id: props.conteudo.id,
//         capa: props.conteudo.capa,
//       }
    
//     let [titulo, setTitulo] = useState('');
//     let [autor, setAutor] = useState('');
//     let [detalhes, setDetalhes] = useState('');
//     let [valor, setValor] = useState('');
//     let [genero, setGenero] = useState('');
//     let [capa, setCapa] = useState('');

//     let handleSubmit = (e) => {
        

//         setTitulo('');
//         setAutor('');
//         setDetalhes('');
//         setValor('');
//         setGenero('');
//         setCapa('');
//    }
    
//     return (
//         <>
//             <button type="button" className="btn btn-secondary " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//                 <Pencil size={20} />
//             </button>

//             {/* <!-- Modal --> */}
//             <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h1 className="modal-title fs-5" id="staticBackdropLabel">Editar produto</h1>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>


//                         <div className="modal-body">
//                             <form onSubmit={handleSubmit}>
//                                 <div className="mb-3">
//                                     <label htmlFor="titulo" className="form-label">Titulo</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="titulo"
//                                         defaultValue={conteudo.titulo}
//                                         onChange={e => setTitulo(e.target.value)}
//                                         /*aria-describedby="emailHelp"*/ />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="autor" className="form-label">Autor</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="autor"
//                                         defaultValue={conteudo.autor}
//                                         onChange={e => setAutor(e.target.value)} />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="valor" className="form-label">Valor</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="valor"
//                                         defaultValue={conteudo.valor} />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="descricao" className="form-label">Descrição</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="descricao"
//                                         defaultValue={conteudo.detalhes} />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="genero" className="form-label">Gênero</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="genero"
//                                         defaultValue={conteudo.genero} />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="capa" className="form-label">URL Capa</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="capa"
//                                         defaultValue={conteudo.capa} />
//                                 </div>
//                                 <div className="d-flex">
//                                     <div className="ms-auto">
//                                         <button type="button" className="btn btn-danger me-2" data-bs-dismiss="modal">Cancelar</button>
//                                         <button type="submit" className="btn btn-success">Salvar</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

import { Pencil } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ModalEdit(props) {
    // const conteudo = props.conteudo
    const { conteudo } = props; // Pegando os dados do livro passado como prop
    
    // Estados iniciando com os valores do livro
    let [titulo, setTitulo] = useState(conteudo.titulo);
    let [autor, setAutor] = useState(conteudo.autor);
    let [detalhes, setDetalhes] = useState(conteudo.detalhes);
    let [valor, setValor] = useState(conteudo.valor);
    let [genero, setGenero] = useState(conteudo.genero);
    let [capa, setCapa] = useState(conteudo.capa);

    // Atualizar os estados se o conteúdo mudar (para evitar dados antigos no modal)
    useEffect(() => {
        setTitulo(conteudo.titulo);
        setAutor(conteudo.autor);
        setDetalhes(conteudo.detalhes);
        setValor(conteudo.valor);
        setGenero(conteudo.genero);
        setCapa(conteudo.capa);
    }, [conteudo]);

    let handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página

        // Buscar os livros salvos no localStorage
        let books = JSON.parse(localStorage.getItem('books')) || [];

        // Encontrar o índice do livro que está sendo editado
        let bookIndex = books.findIndex(book => book.id === conteudo.id);
        if (bookIndex === -1) return; // Se não encontrar, sai da função

        // Atualizar os dados do livro no array
        books[bookIndex] = {
            id: conteudo.id,
            titulo,
            autor,
            detalhes,
            valor,
            genero,
            capa
        };

        // Salvar o array atualizado no localStorage
        localStorage.setItem('books', JSON.stringify(books));

        // Atualizar a página para refletir a mudança (opcional, mas útil)
        window.location.reload();
    };

    return (
        <>
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target={`#modal-${conteudo.id}`}>
                <Pencil size={20} />
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id={`modal-${conteudo.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalLabel">Editar produto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                    <label className="form-label">Valor</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={valor}
                                        onChange={e => setValor(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Descrição</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={detalhes}
                                        onChange={e => setDetalhes(e.target.value)}
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
                                <div className="d-flex">
                                    <div className="ms-auto">
                                        <button type="button" className="btn btn-danger me-2" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="submit" className="btn btn-success">Salvar</button>
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
