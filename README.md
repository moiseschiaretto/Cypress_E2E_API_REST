## Projeto "api_test"
- Autor Moisés Ademir Chiaretto
  
- Descrição das explicações de cada item da 'estrutura do projeto "api_test" desenvolvido'.

- Testes com 2 (duas) _suítes de testes_, ou seja, utilizando 2 (duas) APIs que são "jsonplaceholder" e "reqres.in".

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


## Exemplo da API REST com o método [GET Id]


```


```


## Exemplo da execução via browser API REST com o método [GET Id]





