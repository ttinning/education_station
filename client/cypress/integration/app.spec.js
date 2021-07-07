describe('App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('loads the app', () => {
        const username = cy.get('p')
        username.should('contain', ('Username'))
    })

})