import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import InputMask from "react-input-mask";
import {
  Button,
  Container,
  Divider,
  Form,
  Icon,
  TextArea,
} from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function FormProduto() {
  const [titulo, setTitulo] = useState();
  const [codigoDoProduto, setCodigoDoProduto] = useState();
  const [descricao, setDescricao] = useState();
  const [valorUnitario, setValorUnitario] = useState();
  const [tempoDeEntregaMinimoEmMinutos, setTempoDeEntregaMinimoEmMinutos] =
    useState();
  const [tempoDeEntregaMaximoEmMinutos, setTempoDeEntregaMaximoEmMinutos] =
    useState();

  function salvar() {
    let produtoRequest = {
      titulo: titulo,
      codigoDoProduto: codigoDoProduto,
      descricao: descricao,
      valorUnitario: valorUnitario,
      tempoDeEntregaMinimoEmMinutos: tempoDeEntregaMinimoEmMinutos,
      tempoDeEntregaMaximoEmMinutos: tempoDeEntregaMaximoEmMinutos,
    };

    axios
      .post("http://localhost:8081/api/produto", produtoRequest)
      .then((response) => {
        console.log("Produto cadastrado com sucesso.");
      })
      .catch((error) => {
        console.log("Erro ao incluir o um produto.");
      });
  }

  return (
    <div>
      <MenuSistema tela={"produto"} />

      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2>
            {" "}
            <span style={{ color: "darkgray" }}>
              {" "}
              Produto &nbsp;
              <Icon name="angle double right" size="small" />{" "}
            </span>{" "}
            Cadastro{" "}
          </h2>

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  fluid
                  label="Titulo"
                  placeholder="Informe o titulo do produto"
                  maxLength="100"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />

                <Form.Input
                  required
                  fluid
                  label="Código do Produto"
                  placeholder="informe o código do produto"
                  value={codigoDoProduto}
                  onChange={(e) => setCodigoDoProduto(e.target.value)}
                ></Form.Input>
              </Form.Group>

              <Form.TextArea
                placeholder="descrição do produto"
                label="Descricao"
                cols="400"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />

              <Form.Group>
                <Form.Input
                  fluid
                  label="Valor Usuario"
                  required
                  width={6}
                  value={valorUnitario}
                  onChange={(e) => setValorUnitario(e.target.value)}
                ></Form.Input>

                <Form.Input
                  fluid
                  label="Tempo de entrega minimo em minutos"
                  width={6}
                  value={tempoDeEntregaMinimoEmMinutos}
                  onChange={(e) =>
                    setTempoDeEntregaMinimoEmMinutos(e.target.value)
                  }
                ></Form.Input>

                <Form.Input
                  fluid
                  label="Tempo de entrega maximo em minutos"
                  width={6}
                  value={tempoDeEntregaMaximoEmMinutos}
                  onChange={(e) =>
                    setTempoDeEntregaMaximoEmMinutos(e.target.value)
                  }
                ></Form.Input>
              </Form.Group>
            </Form>

            <div style={{ marginTop: "4%" }}>
              <Link to={"/list-produto"}>
                <Button
                  inverted
                  circular
                  icon
                  labelPosition="left"
                  color="orange"
                >
                  <Icon name="reply" /> Voltar
                </Button>
              </Link>

              <Button
                inverted
                circular
                icon
                labelPosition="left"
                color="blue"
                floated="right"
                onClick={() => salvar()}
              >
                <Icon name="save" />
                Salvar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
