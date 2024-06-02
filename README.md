## Projeto "api_test"
- Autor Moisés Ademir Chiaretto
  
- Descrição das explicações de cada item da 'estrutura do projeto "api_test" desenvolvido'.

- Testes com **_2 (duas) suítes de testes_**, ou seja, utilizando 2 (duas) APIs que são **"jsonplaceholder" e "reqres.in".**

- Os testes podem serem executados via **browser ou terminal** com scripts gravados no **arquivo package.json"**, gerando reports com o framework **Mocha**.

- **Mocha é um framework** de teste JavaScript que gera relatórios detalhados e personalizáveis, fornecendo insights claros sobre os resultados dos testes para facilitar a análise e depuração do código.
  
- **Cypress versão 13**
<br>

|Node.js	|IDE VSCode    	|Cypress	|API 	    	|JSON     	|
|---------------|---------------|---------------|---------------|---------------|
| <img width="93" alt="02_Node_JS" src="https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/1102f809-71e4-4fd2-8ff4-c9d1fee55034"> | ![VS_CODE](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/5a192e0c-e2e8-410c-b4d9-9e861ebfe387) | ![03_cypress_logo_social](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/b0d41a63-a321-477d-b76f-39934329473d) | ![10_API_REST](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/3e733e59-a831-453f-bae6-8111985779db) | <img width="164" alt="04_JSON" src="https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/13ea3738-05d8-4a25-b2f6-67993fe6a284"> |


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
  |        	|---report_file_name.html
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
<br>


## Exemplo da arquitetura de testes de API REST no Cypress utilizando Javascript


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
            timeout: 2000,
        }).then(res => {
            // Validar o status da resposta
            expect(res.status).to.equal(200);

            // Validar o tempo de resposta (opcional)
            expect(res.duration).to.be.lessThan(2000);

            // Validar o tipo de conteúdo retornado
            expect(res.headers['content-type']).to.include('application/json');

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


## Exemplo de execução via browser das duas APIs

**Neste exemplo abaixo é um exemplo de testes de _duas suítes de testes_, ou seja, duas APIs diferentes que são "jsonplaceholder" e "reqres.in".**
<br>

Comando digitado no terminal para a execução **_via browser_**

```

npx cypress open

```

## Resultado da execução das _duas suítes de testes_ "via browser"
<br>

|Execução da API reqres.in	|Execução da API jsonplaceholder  	|
|-------------------------------|---------------------------------------|
| <img width="464" alt="07_Browser_Execucao_API_Reqres in" src="https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/3bffa4ce-e8c9-4af3-b76c-c216617b7ee9"> | <img width="465" alt="06_Browser_Execucao_API_Jsonplaceholder" src="https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/7e60825b-816e-4496-b577-4da9e751beb4"> |
<br>


## Exemplo de execução via terminal das duas APIs

**Neste exemplo abaixo é um exemplo de testes de _duas suítes de testes_, ou seja, duas APIs diferentes que são "jsonplaceholder" e "reqres.in".**
<br>

Comando digitado no terminal para a execução via **_terminal_**

```

npm run tests.cy.js

```
<br>

## Resultado da execução das _duas suítes de testes_ "via terminal"
<br>

|Execução da API reqres.in	|Execução da API jsonplaceholder 	|
|-------------------------------|---------------------------------------|
| <img width="396" alt="02_Terminal_Execucao_API_Reqres in" src="https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/4ca2d9aa-16fc-4759-98e8-fc9c940ed83e"> | <img width="398" alt="04_Terminal_Execucao_API_Jsonplaceholder" src="https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/6ea7859e-d2ec-4bb5-ae57-ccbc05c97d40"> |
| <img width="398" alt="03_Terminal_Execucao_API_Reqres in" src="https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/10830941-0e6a-40c6-95f8-f807e801d429"> | <img width="462" alt="05_Terminal_Execucao_API_Jsonplaceholder" src="https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/ef013fdf-26b9-4a81-9caf-943b758fd17e"> |
<br>


## Scripts de Execução

- Criar Scripts de Execução no Arquivo "package.json", para facilitar a execução do projeto.

- Caso desejar criar "scripts" de execuções do projeto, adicionar no arquivo "package.json".

	
```

"scripts": {
    "report:clear": "if exist cypress\\reports rd /s /q cypress\\reports",
    "test1:chrome": "cypress run --spec cypress/e2e/step_definitions/api_reqres.in/tests.cy.js --browser chrome --headless",
    "test2:chrome": "cypress run --spec cypress/e2e/step_definitions/api_jsonplaceholder/tests.cy.js --browser chrome --headless"
  }

```
<br>


## Execução dos Scripts acima no Terminal do VSCode

**1.** Excluir a pasta **_"reports"_** com informações das execuções anteriores.

```

npm run report:clear

```
<br>


**2.** Realizar as novas execuções dos arquivos **_"tests.cy.js"_** das suítes de testes **"api_jsonplaceholder" e "api_reqres.in".**

```

npm run test1:chrome

npm run test2:chrome

```
<br>

## Relatórios gerados de cada suítes de testes **"api_jsonplaceholder" e "api_reqres.in"** executadas
<br>

**Mocha é um framework** de teste JavaScript que gera relatórios detalhados e personalizáveis, fornecendo insights claros sobre os resultados dos testes para facilitar a análise e depuração do código.

<br>

|Report HTML da API reqres.in	|Report HTML da API jsonplaceholder	|
|-------------------------------|---------------------------------------|
| <img width="675" alt="09_Report_Execucao_reqres in" src="https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/eb70f31d-bae7-432c-baea-43399af07d02"> | <img width="675" alt="08_Report_Execucao_jsonplaceholder" src="https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/3b6e7c00-5a1b-431b-81ec-c041e1de191a"> |
<br>

