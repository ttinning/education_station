describe('App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        const username = cy.get('#username')
        username.type('GanDave')
        const password = cy.get('#password')
        password.type('IamAWizard69')
        cy.get('#login-submit').submit()
    })

    xit('loads the app', () => {
        const username = cy.get('p')
        username.should('contain', ('Username'))
    })

    xit('succesful login takes to homepage', () => {
        const username = cy.get('#username')
        username.type('GanDave')
        const password = cy.get('#password')
        password.type('IamAWizard69')
        cy.get('#login-submit').submit()
        const landingpage = cy.get('#landing-page')
        landingpage.should('be.visible')
    })

    it('visit the parent page', () => {
        const parent = cy.get('#parent-button')
        parent.click()
        const dashboard = cy.get('.dashboard')
        dashboard.should('be.visible')
    })

    it('visit the student page', () => {
        const student = cy.get('#student-button')
        student.click()
        const dashboard = cy.get('.dashboard')
        dashboard.should('be.visible')
    })

    it('home button returns after choosing student', () => {
        const student = cy.get('#student-button')
        student.click()
        const dashboard = cy.get('.dashboard')
        const home = cy.get('#navbar').first()
        home.click()
        const landingpage = cy.get('#landing-page')
        landingpage.should('be.visible')
    })

    it('visit the student page and choose game', () => {
        const student = cy.get('#student-button')
        student.click()
        const dashboard = cy.get('.dashboard')
        dashboard.should('be.visible')
        const animal = cy.get('.topic-buttons-container > li').children().first()
        animal.click()
        const answer = cy.get('#answer-input')
        answer.should('be.visible')
    })
})