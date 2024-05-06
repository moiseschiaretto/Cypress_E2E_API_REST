const baseUrl = 'https://reqres.in';
const endpoint = '/api/users?page=2';
const urlCompleta = baseUrl + endpoint;

it('GET - Validar Tudo', () => {
  cy.request({
    method: 'GET',
    url: urlCompleta,
  }).then((response) => {
      // Validar o código de status
      expect(response.status).to.equal(200);
  
      // Validar a duração da resposta
      expect(response.duration).to.be.lessThan(2000);
  
      // Validar a estrutura do objeto de resposta
      // Validar o tamanho e tipo dos campos
      expect(response.body).to.have.property('page').that.is.a('number');
      expect(response.body).to.have.property('per_page').that.is.a('number');
      expect(response.body).to.have.property('total').that.is.a('number');
      expect(response.body).to.have.property('total_pages').that.is.a('number');
      expect(response.body).to.have.property('data').that.is.an('array');
      expect(response.body).to.have.property('support').that.is.an('object');
  
      // Validar os dados da página
      const users = response.body.data;
      expect(users).to.have.length(6); // Verificar o número esperado de usuários
  
      users.forEach((user) => {
        expect(user).to.have.property('id').that.is.a('number');
        expect(user).to.have.property('email').that.is.a('string');
        expect(user).to.have.property('first_name').that.is.a('string');
        expect(user).to.have.property('last_name').that.is.a('string');
        expect(user).to.have.property('avatar').that.is.a('string');
      });
  
      // Exemplo de validação específica para o primeiro usuário
      const firstUser = users[0];
      expect(firstUser.email).to.equal('michael.lawson@reqres.in');
      expect(firstUser.first_name).to.equal('Michael');
      expect(firstUser.last_name).to.equal('Lawson');
      expect(firstUser.avatar).to.equal('https://reqres.in/img/faces/7-image.jpg');
  
      // Exibir a resposta na tela
      cy.log(JSON.stringify(response.body, null, 2));
      console.log(response.body)
    });
});