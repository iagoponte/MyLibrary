import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';
import Cadastro from '../pages/Cadastro';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ErroNavegacao from '../pages/ErroNavegacao'
export default function RoutesApp() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/detalhes/:livroID' element={<Detalhes />} />
                    <Route path='/Cadastrar' element={<Cadastro />} />
                    <Route path='*' element={<ErroNavegacao/>} />
        
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}