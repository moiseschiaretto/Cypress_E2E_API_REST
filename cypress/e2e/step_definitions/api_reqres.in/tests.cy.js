const baseUrl = 'https://reqres.in';
const endpoint = '/api/users?page=2';
const urlCompleta = baseUrl + endpoint;

describe('Testes API reqres.in', () => {

  it('GET ALL - Validar Tudo', () => {
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

  it('GET - Validar Básico', () => {
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

    it('GET - Validar Json direto no código da API', () => {
      cy.request({
        method: 'GET',
        url: urlCompleta,
      }).then((response) => {
        // Validar o código de status
        expect(response.status).to.equal(200);
  
        // Validar a duração da resposta
        expect(response.duration).to.be.lessThan(2000);
    
        // Validar os campos e os dados na resposta
        expect(response.body).to.deep.equal({
          page: 2,
          per_page: 6,
          total: 12,
          total_pages: 2,
          data: [
            {
              id: 7,
              email: 'michael.lawson@reqres.in',
              first_name: 'Michael',
              last_name: 'Lawson',
              avatar: 'https://reqres.in/img/faces/7-image.jpg',
            },
            {
              id: 8,
              email: 'lindsay.ferguson@reqres.in',
              first_name: 'Lindsay',
              last_name: 'Ferguson',
              avatar: 'https://reqres.in/img/faces/8-image.jpg',
            },
            {
              id: 9,
              email: 'tobias.funke@reqres.in',
              first_name: 'Tobias',
              last_name: 'Funke',
              avatar: 'https://reqres.in/img/faces/9-image.jpg',
            },
            {
              id: 10,
              email: 'byron.fields@reqres.in',
              first_name: 'Byron',
              last_name: 'Fields',
              avatar: 'https://reqres.in/img/faces/10-image.jpg',
            },
            {
              id: 11,
              email: 'george.edwards@reqres.in',
              first_name: 'George',
              last_name: 'Edwards',
              avatar: 'https://reqres.in/img/faces/11-image.jpg',
            },
            {
              id: 12,
              email: 'rachel.howell@reqres.in',
              first_name: 'Rachel',
              last_name: 'Howell',
              avatar: 'https://reqres.in/img/faces/12-image.jpg',
            },
          ],
          support: {
            url: 'https://reqres.in/#support-heading',
            text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
          },
        });
        // Exibir a resposta na tela
        cy.log(JSON.stringify(response.body, null, 2));
        console.log(response.body)
      }
    );
  });

  it('GET ID - Name', () => {
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

  it('GET All - Validar o Básico', () => {
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

});