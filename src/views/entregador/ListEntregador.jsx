import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import { notifyError, notifySuccess } from '../../views/util/Util';
import MenuSistema from '../../MenuSistema';

export default function ListEntregador() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [listUser, setListUser] = useState([]);
    const [idRemover, setIdRemover] = useState();

    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8081/api/entregador")
            .then((response) => {
                setLista(response.data)
            })
    }
    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    function confirmaLista(id){
        setOpenModal(true)
        setLista(id)
    }

    async function remover() {

        await axios.delete('http://localhost:8081/api/entregador/' + idRemover)
        .then((response) => {
  
            notifySuccess('Entregador removido com sucesso.')
  
            axios.get("http://localhost:8081/api/entregador")
            .then((response) => {
                setLista(response.data)
            })
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
        setOpenModal(false)
    }
 
 // console.log(showMore)
 return (
    <div>
        <MenuSistema tela={'entregador'} />
        <div style={{ marginTop: '3%' }}>

            <Container textAlign='justified' >

                <h2> Entregador </h2>
                <Divider />

                <div style={{ marginTop: '4%' }}>
                    <Button
                        label='Novo'
                        circular
                        color='orange'
                        icon='clipboard outline'
                        floated='right'
                        as={Link}
                        to='/form-entregador'
                    />
                    <br /><br /><br />

                    <Table color='orange' sortable celled>

                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Nome</Table.HeaderCell>
                                <Table.HeaderCell>CPF</Table.HeaderCell>
                                <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                                <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                                <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>

                            {lista.map(entregador => (

                                <Table.Row key={entregador.id}>
                                    <Table.Cell>{entregador.nome}</Table.Cell>
                                    <Table.Cell>{entregador.cpf}</Table.Cell>
                                    <Table.Cell>{formatarData(entregador.dataNascimento)}</Table.Cell>
                                    <Table.Cell>{entregador.foneCelular}</Table.Cell>
                                    <Table.Cell>{entregador.foneFixo}</Table.Cell>
                                    <Table.Cell textAlign='center'>

                                        <Link to="/form-entregador" state={{ id: entregador.id }} style={{ color: 'green' }}>
                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste entregador'
                                                icon>
                                                <Icon name='edit' />
                                            </Button>                                             
                                            &nbsp;
                                        </Link>
                                        <Button
                                            inverted
                                            circular
                                            color='red'
                                            title='Clique aqui para remover este entregador'
                                            icon
                                            onClick={e => confirmaRemover(entregador.id)}>
                                            <Icon name='trash' />
                                        </Button>
                                        &nbsp;
                                        <Button
                                            inverted
                                            circular
                                            color='blue'
                                            title='Clique aqui para visualizar dados completo deste entregador'
                                            icon
                                            onClick={() => setShowMore(entregador)}>
                                            <Icon name='eye' color='grey' />
                                        </Button>

                                    </Table.Cell>
                                </Table.Row>
                            ))}

                        </Table.Body>
                    </Table>
                </div>
            </Container>
        </div>

        <Modal
            basic
            onClose={() => setOpenModal(false)}
            onOpen={() => setOpenModal(true)}
            open={openModal}
        >
            <Header icon>
                <Icon name='trash' />
                <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
            </Header>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                    <Icon name='remove' /> Não
                </Button>
                <Button color='green' inverted onClick={() => remover()}>
                    <Icon name='checkmark' /> Sim
                </Button>
            </Modal.Actions>
        </Modal>

        <Modal
            basic
            onClose={() => setShowMore(false)}
            onOpen={() => setShowMore(true)}
            open={showMore}
            centered
        >
            <Table color='orange' sortable celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>CPF</Table.HeaderCell>
                        <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                        <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                        <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                        <Table.Row key={showMore.id}>
                            <Table.Cell>{showMore.nome ? showMore.nome : "Vazio"}</Table.Cell>
                            <Table.Cell>{showMore.cpf ? showMore.cpf : "Vazio"}</Table.Cell>
                            <Table.Cell>{formatarData(showMore.dataNascimento) ? formatarData(showMore.dataNascimento) : "Vazio"}</Table.Cell>
                            <Table.Cell>{showMore.foneCelular ? showMore.foneCelular : "Vazio"}</Table.Cell>
                            <Table.Cell>{showMore.foneFixo ? showMore.foneFixo : "Vazio"}</Table.Cell>
                        </Table.Row>
                </Table.Body>
            </Table>
            <Table color='orange' sortable celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Rua</Table.HeaderCell>
                        <Table.HeaderCell>Estado</Table.HeaderCell>
                        <Table.HeaderCell>CEP</Table.HeaderCell>
                        <Table.HeaderCell>Cidade</Table.HeaderCell>
                        <Table.HeaderCell>Valor por Frete</Table.HeaderCell>
                        <Table.HeaderCell>Entregas Realizadas</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                        <Table.Row key={showMore.id}>
                            <Table.Cell>{showMore.rua ? showMore.rua : "Vazio"}</Table.Cell>
                            <Table.Cell>{showMore.estado ? showMore.estado : "Vazio"}</Table.Cell>
                            <Table.Cell>{showMore.cep ? showMore.cep : "Vazio"}</Table.Cell>
                            <Table.Cell>{showMore.cidade ? showMore.cidade : "Vazio"}</Table.Cell>
                            <Table.Cell>{showMore.valorFrete ? showMore.valorFrete : "Vazio"}</Table.Cell>
                            <Table.Cell>{showMore.qtdEntregasRealizadas ? showMore.qtdEntregasRealizadas : "Vazio"}</Table.Cell>
                        </Table.Row>
                </Table.Body>
            </Table>
            <Table color='orange' sortable celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Complemento</Table.HeaderCell>
                        <Table.HeaderCell>Bairro</Table.HeaderCell>
                        <Table.HeaderCell>Número</Table.HeaderCell>
                        <Table.HeaderCell>RG</Table.HeaderCell>
                        <Table.HeaderCell>Ativo</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                        <Table.Row key={showMore.id}>
                            <Table.Cell>{showMore.complemento ? showMore.complemento : "Vazio"}</Table.Cell>
                            <Table.Cell>{showMore.bairro ? showMore.bairro : "Vazio"}</Table.Cell>
                            <Table.Cell>{showMore.numero ? showMore.numero : "Vazio"}</Table.Cell>
                            <Table.Cell>{showMore.rg ? showMore.rg : "Vazio"}</Table.Cell>
                            <Table.Cell>{showMore.ativo ? "Sim" : "Não"}</Table.Cell>
                            <Table.Cell textAlign='center'>

                                <Link to="/form-entregador" state={{ id: showMore.id }} style={{ color: 'green' }}>
                                    <Button
                                        inverted
                                        circular
                                        color='green'
                                        title='Clique aqui para editar os dados deste showMore'
                                        icon>
                                        <Icon name='edit' />
                                    </Button> &nbsp;
                                </Link>
                                <Button
                                    inverted
                                    circular
                                    color='red'
                                    title='Clique aqui para remover este showMore'
                                    icon
                                    onClick={e => confirmaRemover(showMore.id)}>
                                    <Icon name='trash' />
                                </Button>

                            </Table.Cell>
                        </Table.Row>
                </Table.Body>
            </Table>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setShowMore(false)}>
                    <Icon name='remove' /> Fechar
                </Button>
            </Modal.Actions>
        </Modal>

        </div>
    )
}
