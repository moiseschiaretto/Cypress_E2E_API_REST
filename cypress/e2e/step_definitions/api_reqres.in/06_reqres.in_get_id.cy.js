const baseUrl = 'https://reqres.in';
const endpoint = '/api/users?page=2';
const urlCompleta = baseUrl + endpoint;

it('GET ID - Nome', () => {
  cy.request({
    method: 'GET',
    url: urlCompleta,
  }).then((res) => {
    // Validar o código de status
    expect(res.status).to.equal(200);

    // Validar a duração da resposta
    expect(res.duration).to.be.lessThan(2000);
    
    // Verificar se a resposta é um array de objetos
    expect(res.body).to.have.property('data').that.is.an('array');

    const nomeDesejado = 'Michael';
    const dadosFiltrados = res.body.data.filter(item => item.first_name === nomeDesejado);

    if (dadosFiltrados.length > 0) {
      cy.log(`O nome "${nomeDesejado}" foi encontrado.`);

      const objetoDesejado = dadosFiltrados[0];

      expect(objetoDesejado).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');

      cy.log(JSON.stringify(objetoDesejado, null, 2));
    } else {
      cy.log(`O nome "${nomeDesejado}" não foi encontrado.`);
    }
  });
});
