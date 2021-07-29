// vertragsdb_spec..js created with Cypress
//
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('End-2-End-Test Vertragsdatenbank', () => {

    it('should visit homepage ', () => {
        cy.visit('/')
        cy.contains('Einträge in der Datenbank vorhanden');
    });
    it('should search Vertrag', () => {
        cy.request('GET', '/vertrag', {})
        cy.visit('/vertrag')
        cy.get('input[id=search-bar-0]').type('Google');
        cy.contains('Google');
    });

    it('should post Testvertrag', () => {
        cy.visit('/add')
        cy.get('input[id=name').type('Testvertrag');
        cy.get('textarea[id=bedingung').type('Test');
        cy.get('input[id=abschlussdatum').type('2021-07-31');
        cy.get('input[id=kosten').type('50€');
        cy.get('input[id=laufzeit').type('unbegrenzt');
        cy.scrollTo('bottom');
        cy.get('select[id=status').select('aktiv').should('have.value', 'aktiv')
        cy.get('select[id=vertragsart').select('Kaufvertrag').should('have.value', 'Kaufvertrag')
        cy.get('button').click();
        cy.contains('Vertrag erfolgreich eingetragen');
    })
    it('should visit homepage again ', () => {
        cy.visit('/')
        cy.contains('Einträge in der Datenbank vorhanden');
        cy.get('button').contains("Verträge anzeigen").click();
    });
    it('should search Testvertrag', () => {
        cy.get('input[id=search-bar-0]').type('Testvertrag');
        cy.contains("Testvertrag");
    });
    it('should edit Testvertrag', () => {
        cy.get('[type="radio"]').last().check()
        cy.get('button').contains("Bearbeiten").click();
        cy.get('button').click();
    });
    it('should delete Testvertrag', () => {
        cy.visit('/vertrag')
        cy.get('[type="radio"]').last().check()
        cy.get('button').contains("Löschen").click();
    })
})
