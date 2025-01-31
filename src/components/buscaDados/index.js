// export default function BuscaDados(){

//     return(
//         <div>

//         </div>
//     );
// }


export const buscaDados = () => {
    let bd = localStorage.getItem("books");

    
    
    if(bd === null){
        bd = [];
    }else{
        bd = JSON.parse(bd);
    }
    return bd;
}