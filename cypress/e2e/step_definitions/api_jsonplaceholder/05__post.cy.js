it('POST - Criar um novo recurso', () => {
    const newPost = {
      userId: 10,
      id: 101,
      title: 'Novo post',
      body: 'Conteúdo do novo post',
    };

    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', newPost)
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.title).to.eq('Novo post');
        // Você pode adicionar mais asserções de acordo com seus requisitos
      });
  });
  