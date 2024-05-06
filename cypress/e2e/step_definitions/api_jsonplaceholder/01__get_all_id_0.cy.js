describe('API: jsonplaceholder ', () => {
  it('GET ID', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
    }).then(res => {
      console.log(res.body)
      expect(res.status).to.be.equal(200)
      cy.log(Array.isArray(res.body));
      expect(res.body[0]).to.have.property('id')
      expect(res.body[0]).to.have.property('userId')
      expect(res.body[0]).to.have.property('title')
      expect(res.body[0]).to.have.property('body')

      // Exibir a resposta na tela
      cy.log(JSON.stringify(res.body, null, 1));
      console.log(res.body)
    })
  })
})