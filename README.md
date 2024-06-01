## Projeto "api_test"
- Autor Moisés Ademir Chiaretto
  
- Descrição das explicações de cada item da 'estrutura do projeto "api_test" desenvolvido'.

- Testes com **_2 (duas) suítes de testes_**, ou seja, utilizando 2 (duas) APIs que são "jsonplaceholder" e "reqres.in".

- Os testes podem serem executados via **brouser ou terminal** com scripts gravados no **arquivo package.json"**, gerando reports com o framework **Mocha**.

- **Mocha é um framework** de teste JavaScript que gera relatórios detalhados e personalizáveis, fornecendo insights claros sobre os resultados dos testes para facilitar a análise e depuração do código.
  
- **Cypress versão 13**

![03_cypress_logo_social](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/5ba913ef-e3d3-4958-be18-188ddce8d228)

![10_API_REST](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/93c6876a-4ab6-4838-96a7-960442cf42dd)
<br>


## Estrutura do Projeto "api_test"

```

api_test
  |
  |-----cypress.config.js
  |-----package.json
  |-----.gitgnore
  |-----README.md
  |
  |-----cypress
  |       | 
  |    	  |---support
  |	      |       |---e2e.js
  |	      |       
  |	      |
  |       |---e2e       
  |            |---step_definitions
  |                  |
  |                  |---api_jsonplaceholder
  |                  |       |---tests.cy.js
  |                  |  
  |                  |
  |                  |---api_reqres.in
  |                          |---tests.cy.js
  |                        
  |
  |---reports
  |       |---mocha
  |        	      |---report_file_name.html
  |


```

## Cenários de Testes de API REST
<br>

CRUD com os verbos HTTP, métodos GetAll, GetId, Post, Put, Patch, Delete.

<br>

|Endpoint	|Método		|Ação		|
|---------------|---------------|---------------|
|/users		|GET		|Retorna a lista de usuários				|
|/users		|POST		|Insere um novo usuário					|
|/users{id}	|GET		|Retorna o usuário com id = {id}			|
|/users{id}	|PUT		|Substitui os dados do usuário com id = {id}		|
|/users{id}	|PATCH		|Altera itens dos dados do usuário com id = {id}	|
|/users{id}	|DELETE		|Remove o usuário com id = {id}				|

<br>


![16_Piramide_Testes](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/c3287a16-3939-41f7-a137-538a99fadc96)


# Documentação em construção...


## Exemplo da arquitetura de testes de API REST no Cypress


```

describe('Testes de API', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const endpoint = '/posts';
    const urlCompleta = baseUrl + endpoint;
    const userId = "/1";

    it('GET ID - Validar resposta e tempo de resposta', () => {
        cy.request({
            method: 'GET',
            url: `${urlCompleta}/${userId}`,
            timeout: 10000, // Definir um timeout adequado
        }).then(res => {
            // Validar o status da resposta
            expect(res.status).to.equal(200);

            // Validar o tipo de conteúdo retornado
            expect(res.headers['content-type']).to.include('application/json');

            // Validar o tempo de resposta (opcional)
            expect(res.duration).to.be.lessThan(2000);

            // Validar propriedades do corpo da resposta
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('userId');
            expect(res.body).to.have.property('title');
            expect(res.body).to.have.property('body');

            // Exibir a resposta na tela (opcional)
            cy.log(JSON.stringify(res.body, null, 1));
            console.log(response.body);
        });
    });
});


```


## Exemplo da execução via browser API REST com o método [GET Id]





