import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import DetalhesLivro from "../pages/detalhes";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ErroNavegacao from "../pages/errosNaveg";
import CadastroLivro from "../pages/cadastro";
export default function RoutesApp() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalhes/:livroID" element={<DetalhesLivro />} />
            <Route path="/Cadastrar" element={<CadastroLivro />} />
            <Route path="*" element={<ErroNavegacao />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
