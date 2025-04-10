import {Link} from "react-router-dom";

import "./Header.css";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-md container-header d-flex justify-content-center">
            <div className="container-fluid nav-config justify-content-between">
                <Link className="navbar-brand col-2" to="/">Livros Livres</Link>

                <form className="d-flex mx-md-5 d-none d-md-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar produtos"
                           aria-label="pesquisar"/>
                </form>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link" aria-current="page" href="#">Cadastrar</a> */}
                            <Link className="nav-link" to="/cadastrar">Cadastrar</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}