import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';
import axios from "axios";
import MenuSistema from '../../MenuSistema';
import { Link, useLocation } from "react-router-dom";


export default function FormEntregador() {
    const { state } = useLocation();
    const [idEntregador, setIdEntregador] = useState();

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorPorFrete, setValorPorFrete] = useState();
    const [Rua, setRua] = useState();
    const [Complemento, setComplemento] = useState();
    const [Numero, setNumero] = useState();
    const [Bairro, setBairro] = useState();
    const [Cidade, setCidade] = useState();
    const [Cep, setCep] = useState();
    const [Uf, setUf] = useState();
    const [ativo, setAtivo] = useState(true);

    const estados = [{ key: '1', text: 'Pernambuco', value: 'PE' }];

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8081/api/entregador/" + state.id)
                .then((response) => {
                    setIdEntregador(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setRg(response.data.rg)
                    setDataNascimento(response.data.dataNascimento)
                    setFoneCelular(response.data.foneCelular)
                    setFoneFixo(response.data.foneFixo)
                    setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas)
                    setValorPorFrete(response.data.valorPorFrete)
                    setRua(response.data.Rua)
                    setComplemento(response.data.Complemento)
                    setNumero(response.data.Numero)
                    setBairro(response.data.Bairro)
                    setCep(response.data.Cep)
                    setCidade(response.data.Cidade)
                    setUf(response.data.Uf)
                    setAtivo(response.data.ativo)                    
                })
        }
    }, [state])

    function salvar() {

        let entregadorRequest = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            qtdEntregasRealizadas: qtdEntregasRealizadas,
            valorPorFrete: valorPorFrete,
            rua: Rua,
            complemento: Complemento,
            numero: Numero,
            bairro: Bairro,
            cep: Cep,
            cidade: Cidade,
            uf: Uf,
            ativo:ativo

        }
 
        if (idEntregador != null) { //Alteração:
            axios.put("http://localhost:8081/api/entregador/" + idEntregador, entregadorRequest)
            .then((response) => {
                 console.log('Entregador alterado com sucesso.')
                 })
            .catch((error) => {
                console.log('Erro ao alter um entregador.') 
            })
        } else { //Cadastro:
            axios.post("http://localhost:8081/api/entregador", entregadorRequest)
            .then((response) => {
                 console.log('Entregador cadastrado com sucesso.') 
                })
            .catch((error) => { console.log('Erro ao incluir o entregador.') })
        }
 }

 function formatarData(dataParam) {

    if (dataParam === null || dataParam === '' || dataParam === undefined) {
        return ''
    }

    let arrayData = dataParam.split('-');
    return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
}
 
    return (

        <div>
            <MenuSistema tela={'entregador'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                { idEntregador === undefined &&
    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
}
{ idEntregador != undefined &&
    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    width={9}
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                >
                                    <InputMask
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='RG'
                                    width={7}
                                    value={rg}
                                    onChange={(e) => setRg(e.target.value)}
                                >
                                    <InputMask
                                        mask="999.999-9"
                                        value={rg}
                                        onChange={(e) => setRg(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>


                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={6}
                                    value={dataNascimento}
                                    onChange={(e) => setDataNascimento(e.target.value)}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={formatarData(dataNascimento)}
                                        onChange={(e) => setDataNascimento(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    required
                                    label='Fone Celular'
                                    width={6}
                                    value={foneCelular}
                                    onChange={(e) => setFoneCelular(e.target.value)}
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneCelular}
                                        onChange={(e) => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}
                                    value={foneFixo}
                                    onChange={(e) => setFoneFixo(e.target.value)}
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
                                        onChange={(e) => setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}
                                    value={qtdEntregasRealizadas}
                                    onChange={(e) => setQtdEntregasRealizadas(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}
                                    value={valorPorFrete}
                                    onChange={(e) => setValorPorFrete(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Rua'
                                    value={Rua}
                                    onChange={(e) => setRua(e.target.value)}
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Numero'
                                    width={6}
                                    value={Numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Bairro'
                                    value={Bairro}
                                    onChange={(e) => setBairro(e.target.value)}
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CEP'
                                    value={Cep}
                                    onChange={(e) => setCep(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Cidade'
                                    value={Cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Select
                                    required
                                    fluid
                                    label='UF'
                                    options={estados}
                                    value={Uf}
                                    onChange={(e, { value }) => setUf(value)}
                                    maxLength="100"
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    value={Complemento}
                                    onChange={(e) => setComplemento(e.target.value)}
                                    maxLength="100"
                                />
                            </Form.Group>

                            <Form.Group inline>
                                <label>Ativo: </label>

                                <Form.Radio
                                    label='Sim'
                                    checked={ativo === true}
                                    onChange={() => setAtivo(true)}
                                />

                                <Form.Radio
                                    label='Não'
                                    checked={ativo === false}
                                    onChange={() => setAtivo(false)}
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
                                <Link to={'/list-entregador'}>Voltar</Link>

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