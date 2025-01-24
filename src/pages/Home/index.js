import "./home.css";
import Card from "../../components/Card";
import { useEffect } from "react";


const bd = [
    {
        titulo: "Harry potter",
        autor: "Mateus Helcias",
        detalhes: "Esse é os detalhes do livro de harry potter pelo autor Mateus Helcias",
        valor: 80,
        genero: "Romance",
        id:1
    },
    {
        titulo: "Harry potter",
        autor: "Mateus Helcias",
        detalhes: "Esse é os detalhes do livro de harry potter pelo autor Mateus Helcias",
        valor: 80,
        genero: "Romance",
        id:2
    },
    {
        titulo: "Harry potter",
        autor: "Mateus Helcias",
        detalhes: "Esse é os detalhes do livro de harry potter pelo autor Mateus Helcias",
        valor: 80,
        genero: "Romance"
    },
    {
        titulo: "Harry potter",
        autor: "Mateus Helcias",
        detalhes: "Esse é os detalhes do livro de harry potter pelo autor Mateus Helcias",
        valor: 80,
        genero: "Romance"
    }
    
]

export default function Home(){

    useEffect(()=>{
        document.title = "Pagina inicial"
    },[])
    return(
        <div className="container-home">
            {bd.map((book, index)=>{
                return(
                    <div className="card-home" key={index}>
                        <Card conteudo = {book}/> 
                    </div>
                );
            })

            }

        </div>
    );
}