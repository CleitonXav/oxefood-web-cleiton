import axios from "axios";
import React, {useState} from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


export default function FormEntregador () {

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorPorFrete, setValorPorFrete] = useState();
    const [rua, setRua] = useState();
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [cep, setCep] = useState();
    const [uf, setUf] = useState();
    const [complemento, setComplmento] = useState();
    const [ativo, setAtivo] = useState();

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
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            cep: cep,
            uf: uf,
            complemento: complemento,
            ativo: ativo
		}
	
		axios.post("http://localhost:8080/api/Entregador", entregadorRequest)
		.then((response) => {
		     console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o entregador.')
		})
	}
    
    return (

        <div>
          <MenuSistema tela={'entregador'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'                                   
                                    maxLength="100"
                                    value={nome}
			                        onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    width={9}
                                    >
                                    <InputMask
                                    required
                                    mask="999.999.999-99"
                                    value={cpf}
			                        onChange={e => setCpf(e.target.value)}
                                /> 
                                 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='RG'
                                    width={9}
                                    >
                                    <InputMask
                                    required
                                    mask="0000000"
                                    value={rg}
			                        onChange={e => setRg(e.target.value)}
                                /> 
                                 
                                </Form.Input>                               

                            </Form.Group>                           
                            
                            <Form.Group>
                            <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    required
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        value={foneCelular}
			                            onChange={e => setFoneCelular(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
			                            onChange={e => setFoneFixo(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}
                                    value={qtdEntregasRealizadas}
			                        onChange={e => setQtdEntregasRealizadas(e.target.value)}
                                >
                                   
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}
                                    value={valorPorFrete}
			                        onChange={e => setValorPorFrete(e.target.value)}
                                >
                                    
                                </Form.Input>

                            </Form.Group>
                        
                      <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Rua'                                   
                                    maxLength="100"
                                    value={rua}
			                        onChange={e => setRua(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='numero'
                                   width={6}
                                   value={numero}
			                       onChange={e => setNumero(e.target.value)}                               
                                />                                

                        </Form.Group>

                        <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Bairro'                                   
                                    maxLength="100"
                                    value={bairro}
			                        onChange={e => setBairro(e.target.value)} 
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Cidade'
                                    value={cidade}
			                        onChange={e => setCidade(e.target.value)} 
                                                                
                                />                                

                        </Form.Group>

                         <Form.Group widths='equal'>

                                <Form.Select

                                    required
                                    fluid
                                    label='UF'
                                    options={uf}
                                    maxLength="100"
                                    value={uf}
			                        onChange={e => setUf(e.target.value)}
                                />
                            
                        </Form.Group>

                        <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Complemento'                                    
                                    maxLength="100"
                                    value={complemento}
			                        onChange={e => setComplmento(e.target.value)}
                                />

                                </Form.Group>

                                <Form.Group widths='equal'                              
                                >
                                <Form.Radio
                                label = 'ativo'
                                value={ativo}
                                onChange={e => setAtivo(e.target.value)}                             
                         
                                />


                                </Form.Group>

                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
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
