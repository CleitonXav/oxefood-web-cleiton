# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

1.  Considerando as duas classes abaixo, responda:

public class Cliente {

    @ManyToOne
    @JoinColumn(nullable = false)
    private Usuario usuario;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column
    private LocalDate dataNascimento;

    @Column(unique = true)
    private String cpf;

    @Column
    private String fone;

    @Column
    private String foneAlternativo;

}

---

```
	public class ClienteRequest {

    @NotNull(message = "O Nome é de preenchimento obrigatório")
    @NotBlank(message = "O Nome é de preenchimento obrigatório")
    private String nome;

    @NotBlank(message = "O e-mail é de preenchimento obrigatório")
    @Email
    private String email;

    @NotBlank(message = "A senha é de preenchimento obrigatório")
    private String password;

    @NotNull(message = "O CPF é de preenchimento obrigatório")
    @NotBlank(message = "O CPF é de preenchimento obrigatório")
    @CPF
    private String cpf;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataNascimento;

    private String fone;

    privamessagenste String foneAlternativo;

}
 _________________________________________________________________________________________
```

a) Como pode ser observado, as duas classes possuem anotações de validação colocadas em determinados atributos da classe. Qual a diferença entre colocar essas validações na classe Cliente e colocar na classe ClienteRequest ? (0,5 ponto)

Resposta:

Validação na classeClienteRequest : protegida, validar os dados na camada de entrada (ClienteRequest)
• As notas de validação ( @NotNull, `@Not@NotBlank, `@CPF, isso impede que informações inválidas cheguem ao backend e causem falhas mais à frente, proporcional
• Essas validações são aplicadas pelo Bean Validation(JSR @Valid nenhum ponto final faz.

Validação na classe Cliente: Garanti a camada de persistência e promove regras de consistência na entidade ( Cliente)
• Uma classe Cliente representa as anotações nesta classe (como @Column (nullable = false)) garantem diferentemente de ClienteRequest,
• Caso os dados já tenham passado pela ClienteRequest, como valido.

---

```
b) Explique o que significa cada validação colocada nas classes acima. (0,5 ponto)

Resposta:

Na Classe: Cliente
o	@ManyToOne
o	Indica um relacionamento de “muitos para um” com a entidade Usuario. Ou seja, vários clientes podem estar associados a um único usuário.

o	@JoinColumn(nullable = false)
o	Define que uma chave estrangeira (coluna que representa o relacionamento) com Usuario não pode ser nula, garantindo que todo cliente esteja comprometido com um usuário.

o	@Column(nullable = false, length = 100)
o	nullable = false: O campo nome “não pode ser nulo” no banco de dados.
o	length = 100: Limita o tamanho máximo do nome a 100 caracteres.

o	@Column(unique = true)
o	Indica que o campo CPF deve ter valores únicos no banco de dados, ou seja, não pode haver dois clientes com o mesmo CPF.


Na classe ClienteRequesté usada para receber dados de entrada na API e inclui diversas validações para garantir a integridade dos dados.

1.	@NotNull(message = "...")
	Indica que o campo não pode ser null.
	Exemplo: nome e cpf são obrigatórios e não podem estar ausentes na requisição.

2.	@NotBlank(message = "...")
	Garante que o campo não seja null, nem uma string vazia ( "") ou contendo apenas espaços em branco.
	Exemplo: nome, email, password e cpf precisa ter conteúdo válido.

3.	@Email
	Verifica se o formato do e-mail está correto.
	Exemplo: "exemplo@dominio.com"será válido, mas "exemplo@com"não será.
4.	@CPF
	Valida se o CPF informado é válido segundo a estrutura e o algoritmo de verificação de CPF.
5.	@JsonFormat(pattern = "dd/MM/yyyy")
	Defina o formato de entrada e saída da data de nascimento como dia/mês/ano (dd/MM/yyyy).
	Isso ajuda na conversão automática ao serializar e desserializar objetos JSON.

Em resumo, essas anotações ajudam a garantir que os dados informados pelos usuários sejam válidos antes de serem processados ou armazenados no banco de dados.

_________________________________________________________________________________________
```

c) Qual seria a validação que precisaríamos acrescentar ao campo foneAlternativo para validar o tamanho máximo do campo para não permitir mais que 30 caracteres? (0,5 ponto)

Resposta:

@Size(max = 30, message = "O telefone alternativo deve ter no máximo 30 caracteres") private String foneAlternativo;

• A anotação @Size(max = 30)garante que o foneAlternativo tenha no máximo 30 caracteres
• Uma mensagem "O telefone alternativo deve ter no máximo 30 caracteres" será exibido para o usuário.
Isso garante que o campo seja devidamente validado conforme a regra de negócio.

---

```


02) Considerando os conceitos aprendidos na aula “C18 - Back-end - Relacionando Entidades”, implemente um relacionamento de “um para muitos” bidirecional entre as classes Empresa e Cliente de forma que:
?	um cliente tenha uma empresa;
?	uma empresa tenha uma lista de clientes

Faça a alteração no código das classes abaixo

public class Cliente extends EntidadeAuditavel {



    @Column(nullable = false, length = 100)
    private String nome;

    @Column
    private LocalDate dataNascimento;

    @Column(unique = true)
    private String cpf;

    @Column
    private String fone;

    @Column
    private String foneAlternativo;

@OneToMany(mappedBy = "cliente", orphanRemoval = true, fetch = FetchType.EAGER)
private List<EnderecoCliente> enderecos;

}
 _________________________________________________________________________________________
```

    public class Empresa extends EntidadeAuditavel {

@JsonIgnonore
@ManyToOne
private Cliente cliente;

    @Column
    private String site;

    @Column
    private String cnpj;

    @Column
    private String inscricaoEstadual;

    @Column
    private String nomeEmpresarial;

    @Column
    private String nomeFantasia;

    @Column
    private String fone;

    @Column
    private String foneAlternativo;

}

---

```
//Relacionamento um para muitos com Empresa

@OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
private List<Empresa> empresas;

//Getters e Setters
 public List<Empresa> getEmpresas() {
   return empresas;
 }
 public void setEmpresas(List<Empresa> empresas) {
   this.empresas = empresas;
 }

}

_________________________________________________________________________________________
```

    // Getters e Setters

public Cliente getCliente() {
return cliente;
}
public void setCliente(Cliente cliente) {  
 this.cliente = cliente;
}
}

---

```

**@OneToMany(mappedBy = "cliente")emCliente
•	O atributo mappedBy = "cliente"referênciaclienten /
	DEmpresa
•	cascade = CascadeType.ALL:persist,
	`mergeeremovevocê
•	orphanRemoval = true:
  _________________________________________________________________________________________
```

    @ManyToOneemEmpresa

• Indica
• @JoinColumn(name = "cliente_id",
nullable = false):
\*\*@JsonIgnorena aulaEmpresa
• Isso garante um relacionamento bidirecional correto e eficiente

---

```
Aqui está a recomendação correta do relacionamento **"um para muitos" bidirecional** entre as classes `Empresa` e `Cliente`:
- **Cada Cliente pertence a uma Empresa (@ManyToOne`)**

- **Uma Empresa pode ter vários Clientes (`@OneToMany`)** -

- # Correções e configurações:
1. **Na classe `Cliente`**: - Adicionamos um campo `empresa` com `@ManyToOne` para associar um cliente uma empresa.
- Definimos `@JoinColumn(name = "empresa_id", nullable = false)` para garantir que um cliente sempre tenha uma empresa.

_________________________________________________________________________________________
```

3.  Considerando o método abaixo, modifique o código para permitir:

? Acesso público ao endpoint no Controller que consulta uma empresa por ID. (0,5 ponto)

@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

       http
               .httpBasic().disable().csrf().disable().cors().and().sessionManagement()
               .sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().exceptionHandling() .cliente() .id()
               .authenticationEntryPoint(authenticationEntryPoint).and().authorizeRequests()

               .antMatchers(AUTH_WHITELIST).permitAll()

               .anyRequest()
               .hasAnyAuthority(Usuario.ROLE_CLIENTE, Usuario.ROLE_EMPRESA, Usuario.ROLE_CLIENTE)
               .and().addFilterBefore(
                       new JwtTokenAuthenticationFilter(jwtTokenProvider),
                       UsernamePasswordAuthenticationFilter.class);

       return http.build();

}

Resposta:

@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
http
.httpBasic().disable()
.csrf().disable()
.cors().and()
.sessionManagement()
.sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
.exceptionHandling()
.authenticationEntryPoint(authenticationEntryPoint).and()
.authorizeRequests()
// Permitir acesso público ao endpoint /empresa/{id}
.antMatchers(HttpMethod.GET, "/empresa/{id}").permitAll()

            // Definir outras permissões para os demais endpoints
            .antMatchers(AUTH_WHITELIST).permitAll()

            // Para o restante dos endpoints, requer autenticação
            .anyRequest()
            .hasAnyAuthority(Usuario.ROLE_CLIENTE, Usuario.ROLE_EMPRESA, Usuario.ROLE_CLIENTE).and()

        .addFilterBefore(
            new JwtTokenAuthenticationFilter(jwtTokenProvider),
            UsernamePasswordAuthenticationFilter.class);

    return http.build();

}

---

```
@GetMapping("/empresa/{id}")
public ResponseEntity<Empresa> consultarEmpresa(@PathVariable Long id) {
 // Lógica para consultar a empresa por ID
 return ResponseEntity.ok
(empresaService.consultarEmpresaPorId(id)); }

_________________________________________________________________________________________
```

4.  No contexto da aula de Controle de Acesso, qual a diferença entre autenticação, autorização e auditoria?

Resposta:

1.A autenticação é o processo de verificar a identidade de um usuário ou sistema. O objetivo é garantir que a pessoa ou sistema que está tentando acessar um recurso seja realmente quem diz ser.
Ex.: O processo de login onde o usuário fornece um nome de usuário e uma senha. O sistema verifica se as credenciais fornecidas coincidem com aquelas armazenadas no banco de dados.

2.A autorização acontece após a autenticação e define quais recursos o usuário autenticado pode acessar e quais ações pode realizar no sistema. Ou seja, é o processo de conceder ou restringir acesso com base nas permissões do usuário. Ex.: O sistema pode permitir que um administrador acesse configurações do sistema, mas não permitir que um usuário comum execute tais ações.

3. A auditoria envolve a coleta e análise de registros (logs) de eventos, transações e acessos realizados no sistema. O objetivo é monitorar e registrar as atividades dos usuários e sistemas para garantir que o controle de acesso seja realizado de forma adequada, e para detectar e investigar qualquer comportamento suspeito ou anormal. Ex.: Registrar quando e onde um usuário acessou determinado recurso, qual ação foi realizada e o que foi modificado no sistema.

Resumo:

Conceito Descrição Objetivo
Autenticação Verificar a identidade do usuário ou sistema. Garantir que a pessoa ou
sistema seja quem diz ser.
Autorização Definir o que o usuário autenticado pode ou
não acessar. Controlar o acesso a
recursos com base nas permissões.
Auditoria Registrar e monitorar as atividades do sistema
e dos usuários. Fornecer registros para
investigação e conformidade.

---

```

05) Durante a implementação do projeto trabalhado ao longo da disciplina nós criamos um arquivo .env e o colocamos na raiz do projeto. Responda:

a) Para que serve este arquivo? Qual a vantagem/importância dele? (0,5 ponto)

Resposta:

1. Para que serve o arquivo .env?
O arquivo .env contém variáveis de ambiente que podem ser carregadas na aplicação no momento da execução. Ele permite que a aplicação seja configurada dinamicamente, sem a necessidade de modificar o código-fonte diretamente, de modo que a mesma base de código possa ser executada em diferentes ambientes (desenvolvimento, produção, teste, etc.) com diferentes configurações.

2. Vantagens do arquivo .env:
Segurança e Separação de Configurações Sensíveis , como credenciais de banco de dados, chaves de API ou segredos de autenticação.

Facilidade de Configuração entre Ambientes: com o .env fica fácil configurar variáveis para diferentes ambientes sem ter que alterar o código-fonte.

Manutenção e Escalabilidade:
Manter as configurações fora do código-fonte melhora a manutenção da aplicação, especialmente à medida que ela cresce. Quando você precisa atualizar uma configuração, você pode simplesmente alterar o valor da variável no arquivo .env sem alterar o código.

Facilidade de Desenvolvimento Local:
Durante o desenvolvimento, o arquivo .env permite que os desenvolvedores definam rapidamente variáveis de ambiente sem a necessidade de configurar variáveis diretamente no sistema operacional ou containers. Isso torna a configuração de ambientes de desenvolvimento mais ágil.

3. Importância do arquivo .env:
Redução do Risco de Erros: Ao centralizar as configurações em um único lugar (o arquivo .env), fica mais fácil modificar essas configurações de forma consistente, sem precisar procurar por múltiplos locais no código.

Facilidade de Deploy e Automação:
Como o arquivo .env permite que você defina configurações específicas para o ambiente de execução, ele facilita o deploy automatizado e a configuração do ambiente.

Padrão de Boa Prática no Desenvolvimento de Software:
O uso de arquivos .env é considerado uma boa prática em projetos modernos. Ele segue o princípio de "externalizar configurações", o que significa que as configurações não estão codificadas diretamente no aplicativo, tornando-o mais flexível e seguro.

_________________________________________________________________________________________
```

b) No arquivo onde definimos as configurações do projeto, escreva abaixo a linha em que informamos ao spring que o projeto poderá utilizar (ou não) um arquivo .env (0,5 ponto)

Resposta:

No application.properties

spring.config.import=optional:file:.env[.properties]

---

```

06) Observando o código abaixo, responda:

“caso ocorra um erro e seja levantado alguma exceção na linha 9, os objetos inseridos nas linhas 4 e 7 serão gravados no banco de dados, pois os comandos são executados antes da linha 9.”

A afirmação acima é verdadeira? Justifique sua resposta. (1,0 ponto)

1	@Transactional
2 public Cliente save(Cliente cliente) {
3
4    usuarioService.save(cliente.getUsuario());
5
6    super.preencherCamposAuditoria(cliente);
7    Cliente clienteSalvo = repository.save(cliente);
8
9    emailService.enviarEmailConfirmacaoCadastroCliente(clienteSalvo);
10
11   return clienteSalvo;
12 }

Resposta:

A afirmação não é verdadeira.
O código fornecido está usando a anotação @Transactional, que indica que os métodos executados dentro de uma transação serão tratados de forma atômica. Ou seja, se ocorrer um erro em qualquer ponto do método, todas as operações realizadas antes da falha serão desfeitas (rollback).
No seu código:
•	Na linha 4, o método usuarioService.save(cliente.getUsuario()) é chamado.
•	Na linha 7, o método repository.save(cliente) é chamado para salvar o cliente no banco de dados.
•	Na linha 9, o método emailService.enviarEmailConfirmacaoCadastroCliente(clienteSalvo) é chamado.
Se ocorrer um erro na linha 9, o método @Transactional garante que o rollback ocorrerá e todos os dados inseridos nas linhas anteriores, como o que foi salvo no banco de dados (linha 7), serão desfeitos.
Portanto, o banco de dados não será alterado se ocorrer um erro na linha 9, pois a transação será revertida, desfazendo os registros feitos até o momento, incluindo a gravação do cliente.

_________________________________________________________________________________________
```

7.  Observando o código abaixo, responda:

“Após criada esta interface (ClienteRepository), já é possível ter acesso a métodos para consultar um cliente por id, consultar todos os clientes, incluir, alterar e remover um cliente no banco de dados.”

A afirmação acima é verdadeira? Justifique sua resposta. (1,0 ponto)

package br.com.ifpe.oxefood.modelo.cliente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ClienteRepository extends JpaRepository<Cliente, Long>,JpaSpecificationExecutor<Cliente> {

}

Resposta:

A afirmação é verdadeira,
Quando você define uma interface ClienteRepository que estende JpaRepository<Cliente, Long> e JpaSpecificationExecutor<Cliente>, você automaticamente ganha uma série de métodos prontos e implementados pelo Spring Data JPA para realizar operações padrão de acesso a dados no banco de dados.

Sim, com a interface ClienteRepository herdando JpaRepository, você já tem acesso a métodos para:
Consultar um cliente por id (com findById()).
Consultar todos os clientes (com findAll()).
Incluir/alterar um cliente (com save()).
Remover um cliente (com deleteById() ou delete()).
Portanto, a afirmação está correta: com a criação da interface ClienteRepository, já é possível realizar operações padrão de acesso a dados como consultar, incluir, alterar e remover clientes no banco de dados.

---

```

08) Considerando a classe abaixo:

public class CategoriaProduto extends EntidadeAuditavel {

    @NotNull
    @Column(nullable = false, length = 100)
    private String descricao;

}

a) O código abaixo funciona? Se não funcionar, explique o porquê.

	public interface CategoriaProdutoRepository extends JpaRepository<CategoriaProduto, Long> {

    List<CategoriaProduto> findByChaveEmpresaOrderByNome(String chaveEmpresa);

}

Resposta:

O código não funciona como esperado, e a razão está no fato de que o método findByChaveEmpresaOrderByNome não corresponde corretamente ao modelo da classe CategoriaProduto.

Erro no nome dos atributos: O método findByChaveEmpresaOrderByNome está tentando buscar um atributo chamado chaveEmpresa e ordená-lo por nome. No entanto, de acordo com a classe CategoriaProduto fornecida, não existem atributos chamados chaveEmpresa ou nome.
_________________________________________________________________________________________
```

b) O código abaixo funciona? Se não funcionar, explique o porquê.

    public interface CategoriaProdutoRepository extends JpaRepository<CategoriaProduto, Long> {

    List<CategoriaProduto> findByChaveEmpresaOrderByDescricao();

}

Resposta:

O código não funciona corretamente. A razão está relacionada ao fato de que o método findByChaveEmpresaOrderByDescricao está tentando acessar um atributo chamado chaveEmpresa, mas esse atributo não existe na classe CategoriaProduto conforme a definição fornecida.

Falta do atributo chaveEmpresa na classe CategoriaProduto: O método findByChaveEmpresaOrderByDescricao está tentando realizar uma consulta baseada em um campo chamado chaveEmpresa, mas a classe CategoriaProduto fornecida só possui o atributo descricao, sem qualquer menção a chaveEmpresa.

---

```

09) Na aula de controle de acesso do projeto do front-end, implementamos um componente para restringir o acesso não autenticado às telas do sistema, posteriormente esse componente foi adicionado em cada definição <Route> no arquivo Rotas.js. Qual foi o componente criado e como ele foi utilizado no arquivo Rotas.js ? (

Resposta:

No Exemplo abaixo foi ajustado o arquivo Rotas.jsx para que o path “/” direcione o usuário para a tela de Login e o path “/home” direcione o usuário para tela de Home:

import Home from './views/home/Home';
import FormLogin from './views/login/FormLogin';

....
        <Routes>
                <Route path="/" element={ <FormLogin/> } />
                <Route path="/home" element={ <Home/> } />

_________________________________________________________________________________________
```

10. O que é uma API WEB considerada RESTful?

Resposta:

R= Uma API Web RESTful é uma interface de comunicação entre sistemas baseada nos princípios do REST (Representational State Transfer). Ela permite a troca de dados entre clientes (frontend, mobile, outras APIs, etc.) e servidores usando requisições HTTP.
1? Baseada em Recursos:
Os dados são representados como recursos, identificados por URLs.
Exemplo: /clientes/1 representa o cliente com ID 1.

2?. Usa os Métodos HTTP de Forma Semântica:
GET ? Buscar um recurso (ex: GET /clientes/1)
POST ? Criar um novo recurso (ex: POST /clientes)
PUT ? Atualizar um recurso existente (ex: PUT /clientes/1)
DELETE ? Remover um recurso (ex: DELETE /clientes/1)

3? Comunicação via JSON ou XML:
JSON é o formato mais comum para troca de dados.
json

{
"id": 1,
"nome": "João Silva",
"email": "joao@email.com"
}

4 Stateless (Sem Estado):
Cada requisição é independente, ou seja, o servidor não armazena o estado do cliente.
Isso melhora a escalabilidade e torna a API mais eficiente.

5? Uso de Códigos de Status HTTP:
200 OK ? Requisição bem-sucedida
201 Created ? Recurso criado com sucesso
400 Bad Request ? Erro na requisição do cliente
404 Not Found ? Recurso não encontrado
500 Internal Server Error ? Erro no servidor

_________________________________________________________________________________________
_________________________________________________________________________________________
```
Segunda Unidade - Recuperação


01) Considerando as classes abaixo:

	...

@Entity
@Table(name = "Comprador")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Comprador {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private String nome;

    @Column
    private String cpf;

    @Column
    private LocalDate email;
    
}

	...

@Entity
@Table(name = "Encomenda")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Encomenda {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private Double valorTotal;

    @Column
    private LocalDate dataEncomenda;

}

a) Implemente um relacionamento de 1 - n (um para muitos) unidirecional entre as classes Encomenda e Comprador (C18 - Back-end - Relacionando Entidades) de forma que:
●	Uma encomenda tenha um comprador;

Copie o código das classes, cole no quadro abaixo e incremente o código de acordo com o solicitado pela questão:  (1,0 ponto)
Resposta:

Classe Encomenda modificada:
@Entity
@Table(name = "Encomenda")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Encomenda {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private Double valorTotal;

    @Column
    private LocalDate dataEncomenda;

    // Relacionamento ManyToOne (uma encomenda tem um comprador)
    @ManyToOne
    @JoinColumn(name = "comprador_id")  // Define o nome da coluna estrangeira na tabela Encomenda
    private Comprador comprador;
}
A classe Comprador não precisa de modificações, já que o relacionamento é unidirecional.
@Entity
@Table(name = "Comprador")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Comprador {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private String nome;

    @Column
    private String cpf;

    @Column
    private LocalDate email;
}



b) Implemente um relacionamento de 1 - n (um para muitos) bidirecional entre as classes Encomenda e Comprador (C18 - Back-end - Relacionando Entidades) de forma que:
●	Uma encomenda tenha um comprador;
●	Um comprador tenha uma lista de encomendas.

Copie o código das classes, cole no quadro abaixo e incremente o código de acordo com o solicitado pela questão:  (1,0 ponto)

Resposta:

Na classe Encomenda, já temos o relacionamento @ManyToOne que indica que cada encomenda tem um único comprador. Não há necessidade de mudanças aqui.
@Entity
@Table(name = "Encomenda")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Encomenda {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private Double valorTotal;

    @Column
    private LocalDate dataEncomenda;

    // Relacionamento ManyToOne (uma encomenda tem um comprador)
    @ManyToOne
    @JoinColumn(name = "comprador_id")  // Define o nome da coluna estrangeira na tabela Encomenda
    private Comprador comprador;
}

Na classe Comprador, adicionamos a anotação @OneToMany para indicar que um comprador pode ter várias encomendas.
@Entity
@Table(name = "Comprador")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Comprador {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private String nome;

    @Column
    private String cpf;

    @Column
    private LocalDate email;

    // Relacionamento OneToMany (um comprador pode ter várias encomendas)
    @OneToMany(mappedBy = "comprador", cascade = CascadeType.ALL)
    private List<Encomenda> encomendas;
}


c) Implemente as seguintes validações de banco de dados nas classes Comprador e Encomenda (Aula C20 - Validações no back-end):
●	Os campos nome e cpf da classe Comprador não podem ser nulos;
●	O campo cpf da classe Comprador deve ser único no banco de dados;
●	O campo dataEncomenda da classe Encomenda não pode ser nulo;

Copie o código das duas classes, cole no quadro abaixo e incremente o código de acordo com o solicitado pela questão:  (0,5 ponto)

Resposta:

Classe Comprador:
@Entity
@Table(name = "Comprador", uniqueConstraints = @UniqueConstraint(columnNames = "cpf")) // Garantir unicidade do CPF
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Comprador {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotNull(message = "O nome não pode ser nulo.") // Validação para não ser nulo
    @Size(min = 1, max = 100, message = "O nome deve ter entre 1 e 100 caracteres.") // Validação de tamanho
    @Column(nullable = false)
    private String nome;

    @NotNull(message = "O CPF não pode ser nulo.") // Validação para não ser nulo
    @Pattern(regexp = "\\d{11}", message = "O CPF deve ter exatamente 11 dígitos.") // Validação de formato
    @Column(nullable = false, unique = true) // Garantir unicidade
    private String cpf;

    @NotNull(message = "O email não pode ser nulo.") // Para garantir que o campo email não seja nulo
    @Column(nullable = false)
    private LocalDate email; // Note que isso parece ser um erro, pois email deveria ser do tipo String, não LocalDate.
}

Classe Encomenda:

@Entity
@Table(name = "Encomenda")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Encomenda {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private Double valorTotal;

    @NotNull(message = "A data da encomenda não pode ser nula.") // Validação para garantir que dataEncomenda não seja nula
    @Column(nullable = false)
    private LocalDate dataEncomenda;

}


d) Considerando o método abaixo, modifique o código para permitir (Aula C22 - Back-end - Controle de Acesso - Parte 1):

●	Acesso público a rota (endpoint) que altera um Comprador em CompradorController: (0,5 ponto)

@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

    http
        .cors(cors -> cors.configurationSource(corsConfigurationSource()))
        .csrf(c -> c.disable())
        .authorizeHttpRequests(authorize -> authorize

            

            .anyRequest().authenticated()

        )
        .sessionManagement((session) -> session
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        )            
        .authenticationProvider(authenticationProvider)
        .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

    return http.build();
}

@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

    http
        .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Configuração de CORS
        .csrf(c -> c.disable()) // Desabilitar CSRF
        .authorizeHttpRequests(authorize -> authorize
            .antMatchers(HttpMethod.PUT, "/comprador/**").permitAll() // Permitir acesso público para a rota de alteração de comprador
            .anyRequest().authenticated() // Requerer autenticação para todas as outras rotas
        )
        .sessionManagement(session -> session
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Utilização de sessão sem estado
        )            
        .authenticationProvider(authenticationProvider) // Autenticação personalizada
        .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class); // Filtro de autenticação JWT

    return http.build();
}

Explicações das mudanças:
•	.antMatchers(HttpMethod.PUT, "/comprador/**").permitAll():
o	Aqui, estamos especificando que qualquer requisição PUT para o endpoint /comprador/{id} (ou qualquer rota que comece com /comprador/) deve ser permitida sem autenticação.
o	HttpMethod.PUT é usado para garantir que apenas requisições do tipo PUT (normalmente usadas para alterar recursos) sejam permitidas. Se você quiser incluir outros métodos HTTP (como GET, POST, etc.), pode adicionar outros antMatchers ou usar um curinga como "/comprador/**" para qualquer tipo de requisição.
•	.anyRequest().authenticated():
o	As outras rotas continuam sendo protegidas e exigem autenticação.


e) Considerando o método abaixo, modifique o código para permitir (Aula C23 - Back-end - Controle de Acesso - Parte 2):

●	Que apenas usuários que tenham o perfil de acesso MASTER possam acessar a rota (endpoint) que cadastra um Comprador em CompradorController: (1,0 ponto)

@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

    http
        .cors(cors -> cors.configurationSource(corsConfigurationSource()))
        .csrf(c -> c.disable())
        .authorizeHttpRequests(authorize -> authorize

            

            .anyRequest().authenticated()

        )
        .sessionManagement((session) -> session
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        )            
        .authenticationProvider(authenticationProvider)
        .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

    return http.build();
}

Passo a Passo para Implementação:
1.	Definir que a rota que cadastra um Comprador (por exemplo, POST /comprador) exige que o usuário tenha o perfil MASTER.
2.	Utilizar a anotação .hasRole("MASTER") ou .hasAuthority("ROLE_MASTER") para garantir que somente usuários com o perfil MASTER possam acessar a rota.

Código Atualizado:

@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

    http
        .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Configuração de CORS
        .csrf(c -> c.disable()) // Desabilitar CSRF
        .authorizeHttpRequests(authorize -> authorize
            .antMatchers(HttpMethod.POST, "/comprador").hasRole("MASTER") // Somente usuários com o papel MASTER podem cadastrar um comprador
            .anyRequest().authenticated() // Requerer autenticação para todas as outras rotas
        )
        .sessionManagement(session -> session
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Utilização de sessão sem estado
        )            
        .authenticationProvider(authenticationProvider) // Autenticação personalizada
        .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class); // Filtro de autenticação JWT

    return http.build();
}




f) Implemente no quadro abaixo a classe CompradorRequest com as seguintes validações na entrada das requisições (Aula C20 - Validações no back-end) (1,0 ponto):
●	O campo nome não pode ser nulo ou vazio;
●	O campo cpf não pode ter mais que 11 caracteres;
●	O campo cpf tem que ser preenchido com o CPF válido;
●	O campo email tem que ser preenchido com o um email válido;

Respostas:

Nome não pode ser nulo ou vazio: Usaremos a anotação @NotBlank para garantir que o nome seja preenchido e não seja apenas composto por espaços em branco.

CPF não pode ter mais que 11 caracteres: A anotação @Size será usada para garantir que o CPF tenha exatamente 11 caracteres.

CPF deve ser válido: Usaremos a anotação @Pattern para garantir que o CPF tenha apenas números e esteja no formato correto (exatamente 11 dígitos).

Email deve ser válido: A anotação @Email será usada para validar o formato do e-mail.
g) Implemente na interface abaixo as seguintes consultas (Aula C25 - Implementando filtros de pesquisa):

public class CompradorRequest {

    @NotBlank(message = "O nome não pode ser nulo ou vazio.") // Valida que o nome não seja nulo ou vazio
    private String nome;

    @NotNull(message = "O CPF não pode ser nulo.") // Valida que o CPF não seja nulo
    @Size(min = 11, max = 11, message = "O CPF deve ter exatamente 11 caracteres.") // Valida o tamanho exato do CPF
    @Pattern(regexp = "\\d{11}", message = "O CPF deve conter apenas números e ter exatamente 11 dígitos.") // Valida que o CPF contenha apenas números
    private String cpf;

    @NotNull(message = "O e-mail não pode ser nulo.") // Valida que o e-mail não seja nulo
    @Email(message = "O e-mail deve ser válido.") // Valida que o e-mail tenha um formato válido
    private String email;

    // Getters e Setters (ou se preferir, utilize o Lombok)
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
●	Implemente uma consulta para filtrar todos os compradores por nome. Esta consulta deve ignorar caracteres maiúsculos e minúsculos (caixa alta e caixa baixa) e retornar uma lista ordenada pelo campo nome. (0,5 ponto)
●	Implemente uma consulta para filtrar todos os compradores por cpf. Esta consulta deve ser exata, ou seja, só irá retornar os compradores se o usuário informar exatamente o CPF e não parte do CPF. (0,5 ponto)

Resposta:

	findByNomeIgnoreCaseOrderByNomeAsc(String nome):
•	findByNomeIgnoreCase: Esse método faz a busca ignorando se o nome está em maiúsculas ou minúsculas, ou seja, a consulta será case-insensitive.
•	OrderByNomeAsc: A consulta retorna os resultados ordenados de forma ascendente pelo campo nome. Isso garante que os compradores sejam listados em ordem alfabética, independentemente da capitalização dos caracteres.

public interface CompradorRepository extends JpaRepository<Comprador, Long> {
// Método para filtrar por nome ignorando maiúsculas e minúsculas e ordenando pelo nome List<Comprador> findByNomeIgnoreCaseOrderByNomeAsc(String nome); }
 
}

Solução com JpaRepository (Método Derivado):
O Spring Data JPA permite a criação de métodos de consulta derivados diretamente no repositório. Neste caso, podemos usar findByCpf para garantir que o filtro seja exato, já que o CPF é um campo único (presumindo que você tenha uma validação para garantir isso).

public interface CompradorRepository extends JpaRepository<Comprador, Long> {
 // Método para buscar compradores com CPF exato 
List<Comprador> findByCpf(String cpf);
 }