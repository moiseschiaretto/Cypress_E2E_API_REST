const baseUrl = 'https://jsonplaceholder.typicode.com';
const endpoint = '/posts';
const urlCompleta = baseUrl + endpoint;
const userId = "/1";

describe('Testes API jsonplaceholder.typicode', () => {

    it('GET ID', () => {
      cy.request({
          method: 'GET',
          url: `${urlCompleta}/${userId}`,
      }).then(res => {
          // Verificar se a resposta possui status 200
          expect(res.status).to.equal(200);
          // Verificar se a resposta é um objeto
          expect(res.body).to.be.an('object');
          // Verificar se o objeto possui as propriedades corretas
          expect(res.body).to.have.property('id');
          expect(res.body).to.have.property('userId');
          expect(res.body).to.have.property('title');
          expect(res.body).to.have.property('body');
          // Exibir a resposta na tela
          cy.log(JSON.stringify(res.body, null, 1));
          console.log(res.body);
      });
    });
    

    it('GET ALL - Posts', () => {
      cy.request({
          method: 'GET',
          url: urlCompleta,
      }).then(res => {
          console.log(res.body)
          cy.log(Array.isArray(res.body));
          const recordCount = res.body.length;
          expect(res.status).to.be.equal(200);
          for (let i = 0; i < recordCount; i++){
              expect(res.body[i]).to.have.all.keys('userId', 'id', 'title', 'body');
          }
      });
    });
        
    it('GET ALL - forEach', () => {
        cy.request({
            method: 'GET',
            url: urlCompleta,
        }).then(res => {
            console.log(res.body)
            expect(res.status).to.be.equal(200)
            expect(res.body).to.have.length(100)
            cy.log(Array.isArray(res.body));
            res.body.forEach(post => {
              expect(post).to.have.all.keys('userId', 'id', 'title', 'body');
            });  
        });
      });
      
      it('GET ID - Valicação Básica', () => {
        cy.request({
          method: 'GET',
          url: urlCompleta,
        }).then(res => {
          // Verificar se a resposta é um array de objetos
          cy.log(Array.isArray(res.body));
          if (Array.isArray(res.body)) {
            const tituloDesejado = 'non est facere';
            // const tituloDesejado = 'Novo post';
            const dadosFiltrados = res.body.filter(item => item.title === tituloDesejado);
            // Verificar se o título específico foi encontrado
            if (dadosFiltrados.length > 0) {
              cy.log(`O título "${tituloDesejado}" foi encontrado.`);
              // Acessar o primeiro objeto do array filtrado (índice 0)
              const objetoDesejado = dadosFiltrados[0];
              expect(objetoDesejado).to.have.all.keys('userId', 'id', 'title', 'body');
              // Exibir a resposta na tela
              cy.log(JSON.stringify(objetoDesejado, null, 2));
            } else {
              cy.log(`O título "${tituloDesejado}" não foi encontrado.`);
            }
          } else {
            cy.log('Formato de resposta inválido.');
          }
        });
      });
      
      it('POST - Inserir Título', () => {
        const newPost = {
          userId: 10,
          id: 101,
          title: 'Novo post',
          body: 'Conteúdo do novo post',
        };
        cy.request({
            method: 'POST',
            url: urlCompleta,
            body: newPost
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.title).to.eq('Novo post');
        });
      });
      

      it('PUT - Atualizar Título', () => {
        const updatedPost = {
            userId: 1,
            title: 'Post atualizado',
            body: 'Conteúdo do post atualizado',
        };
        cy.request({
            method: 'PUT',
            url: `${urlCompleta}/${userId}`,
            body: updatedPost
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq('Post atualizado');
        });
    });
    
    it('DELETE - Excluir um Título', () => {
        cy.request({
            method: 'DELETE',
            url: `${urlCompleta}/${userId}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Verifique se o recurso foi excluído com sucesso
            cy.request({
                method: 'GET',
                url: `${urlCompleta}/${userId}`,
            }).then((getResponse) => {
                expect(getResponse.status).to.eq(200);
        });
    });
  });  
});
