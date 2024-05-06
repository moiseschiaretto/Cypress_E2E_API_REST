it('DELETE - Excluir um recurso', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        expect(response.status).to.eq(200);
        // Verifique se o recurso foi excluído com sucesso
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
          .then((getResponse) => {
            expect(getResponse.status).to.eq(200);
          });
      });
  });
