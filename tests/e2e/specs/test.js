// https://docs.cypress.io/api/introduction/api.html

describe('Basic test', () => {
    it('Visits the app root url', () => {
        cy.visit('/')
        cy.contains('h1', 'Journali')
    })
})
