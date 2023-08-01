// cypress/integration/city-search.spec.js

describe('City Search E2E Test', () => {
  it('should display searched cities', () => {
    cy.visit('/cities'); 

    const searchTerm = 'Berlin';
    cy.get('input[name="searchTerm"]').type(searchTerm);
    cy.get('button[type="submit"]').click();

    cy.get('ul li').should('have.length.greaterThan', 0);
    cy.contains('ul li', searchTerm);
  });

});
