import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import InputMask from "react-input-mask";
import { Button, Container, Divider, Form, Icon, TexArea } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function FormProduto() {

  const { state } = useLocation();
  const [idProduto, setIdProduto] = useState();

  const [titulo, setTitulo] = useState();
  const [codigoDoProduto, setCodigoDoProduto] = useState();
  const [descricao, setDescricao] = useState();
  const [valorUnitario, setValorUnitario] = useState();
  const [tempoDeEntregaMinimoEmMinutos, setTempoDeEntregaMinimoEmMinutos] = useState();
  const [tempoDeEntregaMaximoEmMinutos, setTempoDeEntregaMaximoEmMinutos] = useState();

  useEffect(() => {
    if (state != null && state.id != null) {
      axios.get("http://localhost:8081/api/produto/" + state.id)
      .then((response) => {
          setIdProduto(response.data.id);
          setTitulo(response.data.titulo);
          setCodigoDoProduto(response.data.codigoDoProduto);
          setDescricao(response.data.descricao);
          setValorUnitario(response.data.valorUnitario);
          setTempoDeEntregaMinimoEmMinutos(response.data.tempoDeEntregaMinimoEmMinutos);
          setTempoDeEntregaMaximoEmMinutos(response.data.tempoDeEntregaMaximoEmMinutos);
        });
    }
  }, [state]);

  function salvar() {
    let produtoRequest = {
      titulo: titulo,
      codigoDoProduto: codigoDoProduto,
      descricao: descricao,
      valorUnitario: valorUnitario,
      tempoDeEntregaMinimoEmMinutos: tempoDeEntregaMinimoEmMinutos,
      tempoDeEntregaMaximoEmMinutos: tempoDeEntregaMaximoEmMinutos,
    }
    if (idProduto != null) { //Alteração:
      
      axios.put("http://localhost:8081/api/produto/" + idProduto, produtoRequest)
      .then((response) => {
         console.log('Produto alterado com sucesso.') 
      })
      .catch((error) => {
         console.log('Erro ao alterar um produto.') 
      })
  } else { //Cadastro:
      axios.post("http://localhost:8081/api/produto", produtoRequest)
      .then((response) => {
         console.log('Produto cadastrado com sucesso.') 
      })
      .catch((error) => {
         console.log('Erro ao incluir o produto.') 
      })
  }
  }

  return (

    <div>

        <MenuSistema tela={'produto'} />

        <div style={{ marginTop: '3%' }}>

            <Container textAlign='justified' >
                {idProduto === undefined &&
                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                }
                {idProduto != undefined &&
                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                }

                <Divider />

                <div style={{ marginTop: '4%' }}>

                    <Form>

                        <Form.Group widths='equal'>

                            <Form.Input
                                required
                                fluid
                                label='Titulo'
                                placeholder='Informe o titulo do produto'
                                maxLength="100"
                                value={titulo}
                                onChange={e => setTitulo(e.target.value)}
                            />

                            <Form.Input
                                required
                                fluid
                                label='Codigo do Produto'
                                placeholder='informe o codigo do produto'
                                value={codigoDoProduto}
                                onChange={e => setCodigoDoProduto(e.target.value)}
                            >

                            </Form.Input>



                        </Form.Group>

                        <Form.TextArea placeholder='descricao do produto'
                            label='Descricao'
                            cols='400'
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}
                        />

                        <Form.Group>
                            <Form.Input
                                fluid
                                label='Valor Unitario'
                                required
                                width={6}
                                value={valorUnitario}
                                onChange={e => setValorUnitario(e.target.value)}
                            >
                            </Form.Input>

                            <Form.Input
                                fluid
                                label='Tempo de entrega Minimo'
                                width={6}
                                value={tempoDeEntregaMinimoEmMinutos}
                                onChange={e => setTempoDeEntregaMinimoEmMinutos(e.target.value)}
                            >

                            </Form.Input>

                            <Form.Input
                                fluid
                                label='Tempo de entrega maximo em minutos'
                                width={6}
                                value={tempoDeEntregaMaximoEmMinutos}
                                onChange={e => setTempoDeEntregaMaximoEmMinutos(e.target.value)}
                            >

                            </Form.Input>

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
                            <Link to={'/list-produto'}>Listar</Link>
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