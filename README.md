## Projeto "api_test"
- Autor Moisés Ademir Chiaretto
  
- Descrição das explicações de cada item da 'estrutura do projeto "api_test" desenvolvido'.
  
- **Cypress versão 13**

![03_cypress_logo_social](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/5ba913ef-e3d3-4958-be18-188ddce8d228)

![10_API_REST](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/93c6876a-4ab6-4838-96a7-960442cf42dd)

![10_API_REST_ASSURED_BDD](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/67c6ca2c-1904-45e7-ae68-5c744a4d7f90)





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

- CRUD com os verbos HTTP, métodos GetAll, GetId, Post, Put, Patch, Delete.

![11_Verbos_HTTP_API_REST](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/1ec3c4ee-6255-428d-8dd3-efc01fb02145)


![16_Piramide_Testes](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/c3287a16-3939-41f7-a137-538a99fadc96)


## Exemplo da API REST com o método [GET Id]

![01_API_CYPRESS_JAVASCRIPT](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/0093e413-08dd-461f-ab61-2873982224c7)



## Exemplo da execução via browser API REST com o método [GET Id]

![02_API_CYPRESS_JAVASCRIPT_EXECUCAO](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/da89fafc-570c-42b7-8f10-e51067e8a4dc)



**Documentação em construção...**

