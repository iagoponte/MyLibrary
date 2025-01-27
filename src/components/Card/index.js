import "./Card.css";

import ModalEdit from "../ModalEdit";
import ModalDelete from "../ModalDelete";
import { Link } from "react-router-dom";


export default function Card(props) {
    const estilo = {
        width: "18rem",
    }

    return (

        <div className="card" style={estilo}>
            <img src="https://github.com/mateusmenezes.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <Link to={`/detalhes/${props.conteudo.id}`}><h5 className="card-title">{props.conteudo.titulo}</h5></Link>
                <p className="">R${props.conteudo.valor.toFixed(2)}</p>
                <p className="">frete gratis</p>
                <div className="d-flex">
                    <div className="ms-auto">


                        <div className="d-inline me-1">
                            <ModalEdit conteudo = {props.conteudo}/>
                        </div>

                        <div className="d-inline">
                            <ModalDelete conteudo = {props.conteudo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}