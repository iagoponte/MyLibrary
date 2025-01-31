import "./home.css";
import Card from "../../components/Card";
import { useEffect } from "react";
// import { Link } from "react-router-dom";


// const bd = [
//     {
//         titulo: "Harry potter",
//         autor: "Mateus Helcias",
//         detalhes: "Esse é os detalhes do livro de harry potter pelo autor Mateus Helcias",
//         valor: 80,
//         genero: "Romance",
//         id:1
//     },
//     {
//         titulo: "Harry potter",
//         autor: "Mateus Helcias",
//         detalhes: "Esse é os detalhes do livro de harry potter pelo autor Mateus Helcias",
//         valor: 80,
//         genero: "Romance",
//         id:2
//     },
//     {
//         titulo: "Harry potter",
//         autor: "Mateus Helcias",
//         detalhes: "Esse é os detalhes do livro de harry potter pelo autor Mateus Helcias",
//         valor: 80,
//         genero: "Romance"
//     },
//     {
//         titulo: "Harry potter",
//         autor: "Mateus Helcias",
//         detalhes: "Esse é os detalhes do livro de harry potter pelo autor Mateus Helcias",
//         valor: 80,
//         genero: "Romance"
//     }
    
// ]
//import {buscaDados} from "../../components/buscaDados";
import { buscaDados } from "../../components/Buscadados";


export default function Home(){
    let bd = buscaDados();
    
    

    useEffect(()=>{
        document.title = "Pagina inicial";
    },[])
    return(
        <div className="container-home">
            {bd.map((book, index) => {

                return (
                    <div className="card-home" key={index}>
                        <Card conteudo={book} />
                    </div>
                );
            })
            }
        </div>
    );
}