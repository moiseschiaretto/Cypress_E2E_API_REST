it('GET ID', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.cypress.io/comments?limit=1',
    }).then(res => {
      console.log(res.body)
      expect(res.status).to.be.equal(200)
      cy.log(Array.isArray(res.body));
      expect(res.body[0]).to.have.property('id')
      expect(res.body[0]).to.have.property('name')
      expect(res.body[0]).to.have.property('email')
      expect(res.body[0]).to.have.property('body')
    })
  });