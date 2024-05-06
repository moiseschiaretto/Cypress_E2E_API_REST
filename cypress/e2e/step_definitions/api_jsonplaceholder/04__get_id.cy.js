it('GET ID', () => {
  cy.request({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
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
  })
});
