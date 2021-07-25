// vertragsdb_spec..js created with Cypress
//
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Test Homepage', () => {

    it('should visit homepage ', () => {

        cy.request('GET', '/vertrag', {})
        cy.visit('/add')
        cy.request('POST', '/vertrag', {
            name: 'First Post',
            beschreibung: 'test',
            status: 'inaktiv',
        })
        cy.request('POST', '/vertrag', {
            name: 'First Post',
            beschreibung: 'test',
            status: 'inaktiv',
        })
        cy.get('button').click()
        cy.visit('/')
    });

})
