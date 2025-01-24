import "./Card.css";

import { Pencil } from 'lucide-react';
import { Trash } from 'lucide-react';


export default function Card(props) {
    const estilo = {
        width: "18rem",
    }
    console.log(props.conteudo);

    return (

        <div className="card" style={estilo}>
            <img src="https://github.com/mateusmenezes.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.conteudo.titulo}</h5>
                <p className="">R${props.conteudo.valor.toFixed(2)}</p>
                <p className="">frete gratis</p>
                <div className="d-flex">
                    <div className="ms-auto">


                        <div className="d-inline me-1">
                            {/* <!-- Button trigger modal --> */}
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
                                            Formulario com os dados
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                            <button type="button" className="btn btn-success">Salvar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        
                        <div className="d-inline">
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <Trash  size={20}/>
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Understood</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}