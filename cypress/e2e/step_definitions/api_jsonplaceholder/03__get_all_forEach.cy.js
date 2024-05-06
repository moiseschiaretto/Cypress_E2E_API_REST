it('GET ALL - Posts', () => {
  cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
  }).then(res => {
      console.log(res.body)
      expect(res.status).to.be.equal(200)
      expect(res.body).to.have.length(100)
      cy.log(Array.isArray(res.body));
      res.body.forEach(post => {
        expect(post).to.have.all.keys('userId', 'id', 'title', 'body');
      });  
  })
})

