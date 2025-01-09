import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from './views/util/ProtectedRoute';


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
import FormLogin from './views/login/FormLogin';

 
function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <FormLogin/> } />
               
                <Route path="/home" element={ 
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>        
            } />

                <Route path="form-cliente" element={ 
                    <ProtectedRoute>
                        <FormCliente />
                    </ProtectedRoute>
            } />

                <Route path="list-cliente" element={
                    <ProtectedRoute>
                        <ListCliente/>
                    </ProtectedRoute>
            } />

                <Route path="form-produto" element={
                    <ProtectedRoute>
                        <FormProduto/>
                    </ProtectedRoute>
            } />

                <Route path="list-produto" element={
                    <ProtectedRoute>
                        <ListProduto/>
                    </ProtectedRoute>
            } />

                <Route path="form-entregador" element={
                    <ProtectedRoute>
                        <FormEntregador/>
                    </ProtectedRoute>
            } />
            
                <Route path="list-entregador" element={
                    <ProtectedRoute>
                        <ListEntregador/>
                    </ProtectedRoute>
            } />

                <Route path="list-venda" element={
                     <ProtectedRoute>
                        <ListVenda/>
                     </ProtectedRoute>
            } />

                <Route path="form-venda" element={ 
                    <ProtectedRoute>
                        <FormVenda/>
                    </ProtectedRoute>
            } />

                <Route path="list-categoriaproduto" element={ 
                    <ProtectedRoute>
                        <ListCategoriaProduto/>
                    </ProtectedRoute>
            } />

                <Route path="form-categoriaproduto" element={
                    <ProtectedRoute>
                        <FormCategoriaProduto/>
                    </ProtectedRoute>
            } />  
                          
            </Routes>
        </>
    )
}

export default Rotas
