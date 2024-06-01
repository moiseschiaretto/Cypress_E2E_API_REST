## Projeto "api_test"
- Autor Moisés Ademir Chiaretto
  
- Descrição das explicações de cada item da 'estrutura do projeto "api_test" desenvolvido'.
  
- **Cypress versão 13**

![03_cypress_logo_social](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/5ba913ef-e3d3-4958-be18-188ddce8d228)

![10_API_REST](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/93c6876a-4ab6-4838-96a7-960442cf42dd)
<br>


## Estrutura do Projeto "api_test"

```
api_test
  |
  |-----README.md
  |-----cypress.config.js
  |-----package.json
  |-----.gitgnore
  |
  |-----cypress
  |	  |---support
  |	  |       |---e2e.js
  |	  |       
  |	  |
  |   |---e2e       
  |        |---step_definitions
  |                |
  |                |---api_jsonplaceholder
  |                |       |---01__get_all_id_0.cy.js
  |                |       |---02__get_all_for.cy.js
  |                |       |---03__get_all_forEach.cy.js
  |                |       |---04__get_id.cy.js
  |                |       |---05__post.cy.js
  |                |       |---06__put_id.cy.js
  |                |       |---07_delete_id.cy.js
  |                |       |---08_get_outra_api.cy.js
  |                |
  |                |
  |                |---api_reqres.in
  |                        |---01_get_todas_validacoes.cy.js
  |                        |---02_get_validacoes.cy.js
  |                        |---03_get_validar_arquivo_Json.cy.js
  |                        |---04_get_validar_Json_direto.cy.js
  |                        |---05_get_validar_Json.cy.js
  |                        |---06_reqres.in_get_id.cy.js
  |                        |---07_reqres.in_get_all.cy.js
  |                        |---08_post_validacoes.cy.js
  |
  |---report
  |       |---mochawesome-report
  |        	      |---evidencias
  |        	            |---screenshots
  |---videos

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





