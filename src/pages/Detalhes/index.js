//vou precisar utilizar link<rel e crossorigin> para trackear de onde eu estou chegando nesta página
import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

/*
export default function Detalhes(){
    const { livroID } = useParams()
    //podemos usar o livroID como book.title ou alguma outra marcação bibliográfica
    console.log(livroID)
    const navigate = useNavigate();
    //const [livro, setLivro] = useState(null)
    const [newBook, setNewBook] = useState(null)
    //<Link to={`/detalhes/${index}`}>
    //const navegarDetalhe = useNavigate() → não sei se vai precisar aqui ou na página dos cards / cadastro

    //usar o navegarDetalhe para criar uma rota específica para o livro clicado no card, após recuperá-lo do localstorage?
    //aconteceria na função que trás o livro do local storage.

    useEffect(() => {
        const pegarLivroStorage = JSON.parse(localStorage.getItem('books') || [])

        const livroEncontrado = pegarLivroStorage.find(livroID)
        //console.log(newBook.title, newBook.author, newBook.genre)
        if (livroEncontrado) {
            setNewBook(livroEncontrado);
        } else {
            <p>Livro não encontrado</p>
        }
    }, [livroID, navigate]);

    if (!newBook) {
        return <p>Carregando os detalhes do livro...</p>
    }
*/


/*
    return(
        <>
            <div className='____________'>
                <div class="container my-5">
                    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">{newBook.title}</h1>
                            <p class="lead">Autor: {newBook.author}</p>
                            <p class="lead">Ano de publicação: {newBook.genre}</p>
                            <p class="lead">Sinopse: {newBook.sinopse}</p>
                            <p class="lead">Preço: R${newBook.preco}</p>
                        </div>
                    </div>
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img class="rounded-lg-3" src={newBook.capa} alt={newBook.titulo} width="720" />
                    </div>
                </div>
            </div>
        </>
    )
}
*/
//rota
//<Route path="/detalhes/:livroID" element={<Detalhes />} />

//ideia de funçao para jogar o livro na aba de cadastro para o localstorage
/* const salvarLivroNoStorage = (livro) => {
    const livroId = livro.id; // O ID do livro, que deve ser único
    localStorage.setItem(`livro_${livroId}`, JSON.stringify(livro));
}; */

export default function Detalhes() {
    const { livroID } = useParams(); // Obtém o ID da URL
    const navigate = useNavigate();
    // const [newBook, setNewBook] = useState([]);

    let livroEncontrado = [];

    const loadLivro = () => {
        console.log("ID da URL:", livroID); // Verificar o ID que está chegando

        const pegarLivrosStorage = JSON.parse(localStorage.getItem('books')) || [];
        // console.log("Livros armazenados:", pegarLivrosStorage); // Verificar os dados no localStorage

        // Converter `livroID` para número se os IDs estiverem salvos como números

        livroEncontrado = pegarLivrosStorage.find((book) => Number(book.id) === Number(livroID));
        console.log(livroEncontrado)
               
        
    //     if (livroEncontrado) {
    //         setNewBook(livroEncontrado);
    //         console.log(newBook, 'ksdljfakçlj')
    //     } else {
    //         // console.warn("Livro não encontrado!");
    //         //navigate('/'); // Redireciona caso o livro não seja encontrado
    //     }
    } //[livroID, navigate]);

    // if (!newBook) {
    //     return <p>Carregando os detalhes do livro...</p>;
    //}
    loadLivro();
    console.log(livroEncontrado)
    return (
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">{livroEncontrado.titulo}</h1>
                    <p className="lead">Autor: {livroEncontrado.autor}</p>
                    <p className="lead">Gênero: {livroEncontrado.genero}</p>
                    <p className="lead">Sinopse: {livroEncontrado.detalhes || "Sinopse não disponível"}</p>
                    <p className="lead">Preço: R${livroEncontrado.valor || "Não informado"}</p>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img 
                        className="rounded-lg-3" 
                        src={livroEncontrado.capa}
                        alt={livroEncontrado.title} 
                        width="720" 
                    />
                </div>
            </div>
        </div>
    );
}