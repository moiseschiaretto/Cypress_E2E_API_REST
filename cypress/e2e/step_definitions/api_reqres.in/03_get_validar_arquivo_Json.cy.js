const baseUrl = 'https://reqres.in';
const endpoint = '/api/users?page=2';
const urlCompleta = baseUrl + endpoint;

it('GET - Validar o Json chamando o arquivo.json na Pasta [fixtures]', () => {
  cy.request({
    method: 'GET',
    url: urlCompleta,
  }).then((response) => {
     // Validar o código de status
     expect(response.status).to.equal(200);

     // Validar a duração da resposta
     expect(response.duration).to.be.lessThan(2000);

    // Ler o arquivo JSON
    cy.fixture('users.json').then((expectedData) => {
      // Validar os campos e os dados na resposta
      expect(response.body).to.deep.equal(expectedData);
      cy.log(expectedData);
    });
    // Exibir a resposta na tela
    cy.log(JSON.stringify(response.body, null, 2));
    console.log(response.body)
  });
});
