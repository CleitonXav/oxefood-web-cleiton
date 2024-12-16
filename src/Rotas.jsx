import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';

import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';

import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';

import FormVenda from './views/venda/FormVenda';
import ListVenda from './views/venda/ListVenda';

import FormCategoriaProduto from './views/categoriaproduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/categoriaproduto/ListCategoriaProduto';

import Home from './views/home/home';



function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />

                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-produto" element={ <ListProduto/> } />

                <Route path="form-entregador" element={ <FormEntregador/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />

                <Route path="list-venda" element={ <ListVenda/> } />
                <Route path="form-venda" element={ <FormVenda/> } />

                <Route path="list-categoriaproduto" element={ <ListCategoriaProduto/> } />
                <Route path="form-categoriaproduto" element={ <FormCategoriaProduto/> } />                
            </Routes>
        </>
    )
}

export default Rotas
