const baseUrl = 'https://reqres.in';
const endpoint = '/api/users';
const urlCompleta = baseUrl + endpoint;

it('POST /api/users', () => {
  const postData = {
    name: 'morpheus',
    job: 'leader'
  };
  cy.request({
    method: 'POST',
    url: urlCompleta,
    body: postData
  }).then((response) => {
    // Validar o código de status
    expect(response.status).to.equal(201);

    // Validar a duração da resposta
    expect(response.duration).to.be.lessThan(2000);

    // Validar a estrutura do objeto de resposta
    expect(response.body.name).equal(postData.name);
    expect(response.body.job).equal(postData.job);
    expect(response.body).to.have.property('id').that.is.a('string');
    expect(response.body).to.have.property('createdAt').that.is.a('string');

    // Exibir a resposta na tela
    cy.log(JSON.stringify(response.body, null, 2));
    console.log(response.body);
  });
});
