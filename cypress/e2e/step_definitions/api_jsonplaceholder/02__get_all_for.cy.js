it('GET ALL - Posts', () => {
  cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
  }).then(res => {
      console.log(res.body)
      cy.log(Array.isArray(res.body));
      const recordCount = res.body.length;
      expect(res.status).to.be.equal(200);
      for (let i = 0; i < recordCount; i++){
        expect(res.body[i]).to.have.all.keys('userId', 'id', 'title', 'body');
      }
  })
})
