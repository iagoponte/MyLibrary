import "./home.css";
// import Card from "../../components/Card";
// import { useState, useEffect } from "react";
// import { fetchLivros } from "../../services/livroService";
// import { buscaDados } from "../../components/Buscadados/index"
// import axios from "axios";



// export default function Home(){
//     const getLivros = axios.get('http://localhost:3000/livros');
//     console.log(getLivros);



//     let bd = buscaDados();

//     useEffect(()=>{
//         document.title = "Livros Livres";
//     },[])

//     return(
//         <div className="container-home">
//             {bd.map((book, index) => {

//                 return (
//                     <div className="card-home" key={index}>
//                         <Card conteudo={book} />
//                     </div>
//                 );
//             })
//             }
//         </div>
//     );
// }

import ListaLivros from "../components/listarLivrosHome";

const Home = () => {
  return (
    <div>
      <ListaLivros />
    </div>
  );
};

export default Home;