import { Pencil } from 'lucide-react';


export default function ModalEdit(props) {
    const conteudo = {
        titulo: props.conteudo.titulo,
        autor:  props.conteudo.autor,
        genero:  props.conteudo.genero,
        detalhes:  props.conteudo.detalhes,
        valor:  props.conteudo.valor,
      }
    
    
    return (
        <>
            <button type="button" className="btn btn-secondary " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <Pencil size={20} />
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Editar produto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>


                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Titulo</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        value={conteudo.titulo}
                                        aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="autor" className="form-label">Autor</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="autor"
                                        value={conteudo.autor} />
                                </div>
                                <div className="mb-3">
                                    <label for="valor" className="form-label">Valor</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="valor"
                                        value={conteudo.valor} />
                                </div>
                                <div className="mb-3">
                                    <label for="descricao" className="form-label">Descrição</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="descricao"
                                        value={conteudo.detalhes} />
                                </div>
                                <div className="mb-3">
                                    <label for="genero" className="form-label">Gênero</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="genero"
                                        value={conteudo.genero} />
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