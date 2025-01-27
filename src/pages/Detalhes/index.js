//vou precisar utilizar link<rel e crossorigin> para trackear de onde eu estou chegando nesta página
import {useEffect, useState} from 'react'
import {useNavigatem, useParams} from 'react-router-dom'

export default function Detalhes(){
    const { livroID } = useParams()
    console.log(livroID)
    const [livro, setLivro] = useState(null)
    //<Link to={`/detalhes/${index}`}>
    //const navegarDetalhe = useNavigate() → não sei se vai precisar aqui ou na página dos cards / cadastro

    //usar o navegarDetalhe para criar uma rota específica para o livro clicado no card, após recuperá-lo do localstorage?
    //aconteceria na função que trás o livro do local storage.

    useEffect(() => {
        const pegarLivroStorage = localStorage.getItem('Nome_do_livro_selecionado')
        if (livroID) {
            setLivro(JSON.parse(pegarLivroStorage));
        }
    }, [livroID]);

    if (!livro) {
        return <p>Carregando os detalhes do livro...</p>
    }




    return(
        <div className='____________'>
            <h1>PÁGINA DE DETALHES</h1>
            <h1>{livro.titulo}</h1>
            <img src={livro.capa} alt={livro.titulo} className='____________'/>
            <p><strong>Autor:</strong>{livro.autor}</p>
            <p><strong>Ano:</strong>{livro.anolancamento}</p>
            <p><strong>Sinopse:</strong>{livro.sinopse}</p>
            <p><strong>Preço:</strong>R${livro.preco}</p>

        </div>
    );
}
//rota
//<Route path="/detalhes/:livroID" element={<Detalhes />} />

//ideia de funçao para jogar o livro na aba de cadastro para o localstorage
/* const salvarLivroNoStorage = (livro) => {
    const livroId = livro.id; // O ID do livro, que deve ser único
    localStorage.setItem(`livro_${livroId}`, JSON.stringify(livro));
}; */