describe('App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('loads the app', () => {
        const username = cy.get('p')
        username.should('contain', ('Username'))
    })

    it('succesful login takes to homepage', () => {
        const username = cy.get('#username')
        username.type('GanDave')
        const password = cy.get('#password')
        password.type('IamAWizard69')
        cy.get('#login-submit').submit()
        const landingpage = cy.get('#landing-page')
        landingpage.should('be.visible')
    })
})