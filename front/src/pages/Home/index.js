import "./home.css";
import Card from "../../components/Card";
import { useState, useEffect } from "react";
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