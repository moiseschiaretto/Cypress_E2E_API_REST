it('PUT - Atualizar um recurso existente', () => {
    const updatedPost = {
      userId: 1,
      title: 'Post atualizado',
      body: 'Conteúdo do post atualizado',
    };
    
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', updatedPost)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq('Post atualizado');
        // Você pode adicionar mais asserções de acordo com seus requisitos
      });
  });