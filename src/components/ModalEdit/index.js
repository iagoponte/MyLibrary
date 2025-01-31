import { Pencil } from 'lucide-react';
import { useState } from 'react';


export default function ModalEdit(props) {
    const conteudo = {
        titulo: props.conteudo.titulo,
        autor:  props.conteudo.autor,
        genero:  props.conteudo.genero,
        detalhes:  props.conteudo.detalhes,
        valor:  props.conteudo.valor,
        capa: props.conteudo.capa,
      }
    // let livroID = ''
    // let livroEncontrado = [];
    // const loadLivro = () => {
    //     console.log("ID da URL:", livroID); 

    //     const pegarLivrosStorage = JSON.parse(localStorage.getItem('books')) || [];


    //     livroEncontrado = pegarLivrosStorage.find((book) => Number(book.id) === Number(livroID));
    //     console.log(livroEncontrado)
    // }
    // loadLivro();
    let [titulo, setTitulo] = useState('');
    let [autor, setAutor] = useState('');
    let [detalhes, setDetalhes] = useState('');
    let [valor, setValor] = useState('');
    let [genero, setGenero] = useState('');
    let [capa, setCapa] = useState('');

    let handleSubmit = (e) => {
        

        setTitulo('');
        setAutor('');
        setDetalhes('');
        setValor('');
        setGenero('');
        setCapa('');
   }
    
    return (
        <>
            <button type="button" className="btn btn-secondary " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <Pencil size={20} />
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Editar produto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>


                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="titulo" className="form-label">Titulo</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="titulo"
                                        defaultValue={conteudo.titulo}
                                        onChange={e => setTitulo(e.target.value)}
                                        /*aria-describedby="emailHelp"*/ />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="autor" className="form-label">Autor</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="autor"
                                        defaultValue={conteudo.autor}
                                        onChange={e => setAutor(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="valor" className="form-label">Valor</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="valor"
                                        defaultValue={conteudo.valor} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descricao" className="form-label">Descrição</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="descricao"
                                        defaultValue={conteudo.detalhes} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="genero" className="form-label">Gênero</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="genero"
                                        defaultValue={conteudo.genero} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="capa" className="form-label">URL Capa</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="capa"
                                        defaultValue={conteudo.capa} />
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
    )
}