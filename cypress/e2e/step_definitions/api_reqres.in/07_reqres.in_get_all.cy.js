const baseUrl = 'https://reqres.in';
const endpoint = '/api/users?page=2';
const urlCompleta = baseUrl + endpoint;

it('GET All', () => {
  cy.request({
    method: 'GET',
    url: urlCompleta,
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res => {
    // Validar o código de status
    expect(res.status).to.equal(200);

    // Validar a duração da resposta
    expect(res.duration).to.be.lessThan(2000);

    // Verificar o corpo da resposta
    expect(res.body).to.have.property('page').that.is.a('number');
    expect(res.body).to.have.property('per_page').that.is.a('number');
    expect(res.body).to.have.property('total').that.is.a('number');
    expect(res.body).to.have.property('total_pages').that.is.a('number');
    expect(res.body).to.have.property('data').that.is.an('array');
    expect(res.body).to.have.property('support').that.is.an('object');

    const registros = res.body.data;
    cy.log(`Total de registros: ${registros.length}`);

    registros.forEach(registro => {
      expect(registro).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
      cy.log(JSON.stringify(registro, null, 2));
    });
  });
});
