import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from '../components/Admin';
import Produtos from '../pages/Produto';
import Cadastrar from '../pages/Cadastrar';
import NotFound from '../pages/NotFound';

const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Produtos />} />
                <Route path="/administrar" element={<Admin />} />
                <Route path="/administrar/cadastrar" element={<Cadastrar />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default Root;