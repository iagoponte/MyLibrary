import { Trash } from 'lucide-react';

export default function ModalDelete(props) {

    let elements = [];
    const getBookfromBd = () => {
        if (localStorage.getItem('books')) {
            elements = JSON.parse(localStorage.getItem('books'))
        }
        return elements;
    };
    console.log('aqui é antes de deletar', elements)


    const deleteBookfromBd = (titulo) => {
        let elements = getBookfromBd();
        elements = elements.filter(element => element.titulo !== titulo);
        localStorage.setItem('books', JSON.stringify(elements))
        console.log('aqui é depois de deletar', elements)
    }

    return (
        <>
            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">
                <Trash size={20} />
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="delete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteLabel">Deletar Livro</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Voce tem certeza que deseja deletar esse livro?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            {/* ADICIONADO O EVENTO AQUI */}
                            <button type="button" onClick={() => deleteBookfromBd(elements.titulo)} className="btn btn-danger">Deletar</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}