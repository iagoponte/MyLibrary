import {useEffect} from 'react'
import {useParams} from 'react-router-dom'


export default function Detalhes() {
    const { livroID } = useParams(); // Obtém o ID da URL

    let livroEncontrado = [];

    // há como utilizar useEffect dentro desta função, para encontrar o livro.
    const loadLivro = () => {
        console.log("ID da URL:", livroID); // Verificar o ID que está chegando

        const pegarLivrosStorage = JSON.parse(localStorage.getItem('books')) || [];

        livroEncontrado = pegarLivrosStorage.find((book) => Number(book.id) === Number(livroID));
        console.log(livroEncontrado)
    } 

    loadLivro();

    useEffect(()=>{
        document.title = "Detalhes Livros";
    },[])

    return (
        <div className="container my-5">
            <div className="row p-4 pb-lg-5 ps-lg-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-8 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">{livroEncontrado.titulo}</h1>
                    <br/>
                    <p className="lead"><strong>Autor:</strong> {livroEncontrado.autor}</p>
                    <p className="lead"><strong>Gênero:</strong> {livroEncontrado.genero}</p>
                    <p className="lead"><strong>Sinopse:</strong> {livroEncontrado.detalhes || "Sinopse não disponível"}</p>
                    <p className="lead"><strong>Preço:</strong> R${livroEncontrado.valor || "Não informado"}</p>
                </div>
                <div className="text-center col-lg-4 p-3 p-lg-5 pt-lg-3">
                    <img
                        className="img-fluid"
                        src={livroEncontrado.capa}
                        alt={livroEncontrado.title}

                    />
                    <p className='h6 text-center'><small>Capa Original</small></p>
                </div>
            </div>
        </div>
    );
}