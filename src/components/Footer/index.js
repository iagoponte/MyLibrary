import "./footer.css";
export default function Footer()  {
    return (
        <footer className="text-center container-footer fixed-bottom" >
            {/* <div class="container p-4"></div> */}
            <div className="text-center p-4">
                 © 2025 Copyright: 
                <a className="text-body" href="https://mdbootstrap.com/">Livros Livre</a>
            </div>
        </footer >
    );
}