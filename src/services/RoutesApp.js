import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';
import Cadastro from '../pages/Cadastro';

import Header from '../components/Header';

export default function RoutesApp(){
    return(
        <>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/detalhes' element={ <Detalhes/> }/>
                <Route path='/Cadastrar' element={ <Cadastro/> }/>
            </Routes>
        </BrowserRouter>
        </>
    );
}