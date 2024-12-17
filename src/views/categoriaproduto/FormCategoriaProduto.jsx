import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { notifyError, notifySuccess } from '../../views/util/Util';
import MenuSistema from '../../MenuSistema';


export default function FormCategoriaProduto() {

    const [descricao, setDescricao] = useState();
    const [idCategoriaProduto, setIdCategoriaProduto] = useState();
    const { state } = useLocation();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8081/api/categoriaproduto/" + state.id)
                .then((response) => {
                    setIdCategoriaProduto(response.data.id)
                    setDescricao(response.data.descricao)
                })
        }
    }, [state])

    function salvar() {

        let categoriaprodutoRequest = {
            descricao: descricao
        }

        // console.log(categoriaprodutoRequest)

        if (idCategoriaProduto != null) { //Alteração:
            axios.put("http://localhost:8081/api/categoriaproduto/" + idCategoriaProduto, categoriaprodutoRequest)
                .then((response) => {
                    notifySuccess('categoriaproduto alterado com sucesso.')                    
                })
                .catch((error) => { 
                        if (error.response.data.errors != undefined) {
                            for (let i = 0; i < error.response.data.errors.length; i++) {
                                notifyError(error.response.data.errors[i].defaultMessage)
                            }
                        } else {
                            notifyError(error.response.data.message)
                        }                 
                })
        } else { //Cadastro:
            axios.post("http://localhost:8081/api/categoriaproduto", categoriaprodutoRequest)
                .then((response) => {
                    notifySuccess('categoria produto cadastrado com sucesso.') 
                    })
                .catch((error) => { 
                        if (error.response.data.errors != undefined) {
                            for (let i = 0; i < error.response.data.errors.length; i++) {
                                notifyError(error.response.data.errors[i].defaultMessage)
                            }
                        } else {
                            notifyError(error.response.data.message)
                        } 
            })
        }
    }

    return (

        <div>
            <MenuSistema tela={'categoriaproduto'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idCategoriaProduto === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Categoria de Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idCategoriaProduto != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Categoria de Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Descrição'
                                    maxLength="100"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                />

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-categoriaproduto'}>Voltar</Link>
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}
