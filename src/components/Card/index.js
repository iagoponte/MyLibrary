export default function Card() {
    const estilo = {
        width: "18rem",
    }
    return (
        <div className="card" style={estilo}>
            <img src="https://github.com/mateusmenezes.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
}