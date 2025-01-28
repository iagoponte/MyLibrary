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
        <>
            <div className='____________'>
                <h1>PÁGINA DE DETALHES</h1>
                <h1>{livro.titulo}</h1>
                <img src={livro.capa} alt={livro.titulo} className='____________' />
                <p><strong>Autor:</strong>{livro.autor}</p>
                <p><strong>Ano:</strong>{livro.anolancamento}</p>
                <p><strong>Sinopse:</strong>{livro.sinopse}</p>
                <p><strong>Preço:</strong>R${livro.preco}</p>

                <div class="container my-5">
                    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">{livro.titulo}</h1>
                            <p class="lead">Autor: {livro.autor}</p>
                            <p class="lead">Ano de publicação: {livro.anolancamento}</p>
                            <p class="lead">Sinopse: {livro.sinopse}</p>
                            <p class="lead">Preço: R${livro.preco}</p>

                        //talvez, aqui, inserir mais informações, ou inserir a sinopse, mais longa, nessa div.
                            {/*<div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">*/}
                            {/*<button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button/>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>*/}
                        </div>
                    </div>
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img class="rounded-lg-3" src={livro.capa} alt={livro.titulo} width="720" />
                    </div>
                </div>
            </div>
        </>
    )
}
//rota
//<Route path="/detalhes/:livroID" element={<Detalhes />} />

//ideia de funçao para jogar o livro na aba de cadastro para o localstorage
/* const salvarLivroNoStorage = (livro) => {
    const livroId = livro.id; // O ID do livro, que deve ser único
    localStorage.setItem(`livro_${livroId}`, JSON.stringify(livro));
}; */