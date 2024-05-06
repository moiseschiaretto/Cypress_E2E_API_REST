const baseUrl = 'https://reqres.in';
const endpoint = '/api/users?page=2';
const urlCompleta = baseUrl + endpoint;

it('GET - VAlidações', () => {
  cy.request({
    method: 'GET',
    url: urlCompleta,
  }).then((response) => {
      // Validar o código de status
      expect(response.status).to.equal(200);

      // Validar a duração da resposta
      expect(response.duration).to.be.lessThan(2000);  
      
      // Validar os campos e dados na resposta
      expect(response.body).to.have.property('page', 2); // Validar o campo "page"
      expect(response.body).to.have.property('per_page', 6); // Validar o campo "per_page"
      expect(response.body).to.have.property('total'); // Validar o campo "total"
      expect(response.body).to.have.property('total_pages'); // Validar o campo "total_pages"
      expect(response.body).to.have.property('data'); // Validar o campo "data"
  
      // Validar se a matriz de usuários não está vazia
      const users = response.body.data;
      expect(users).to.be.an('array').that.is.not.empty;
  
      // Validar cada usuário na matriz
      users.forEach((user) => {
        expect(user).to.have.property('id'); // Validar o campo "id" de cada usuário
        expect(user).to.have.property('email'); // Validar o campo "email" de cada usuário
        expect(user).to.have.property('first_name'); // Validar o campo "first_name" de cada usuário
        expect(user).to.have.property('last_name'); // Validar o campo "last_name" de cada usuário
        expect(user).to.have.property('avatar'); // Validar o campo "avatar" de cada usuário

      });
      // Exibir a resposta na tela
      cy.log(JSON.stringify(response.body, null, 2));
      console.log(response.body)
    });
});
  