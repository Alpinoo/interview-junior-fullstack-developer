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

  it('should display paginated cities', () => {
    cy.visit('/');
    const searchTerm = 'A'; 

    cy.get('input[name="searchTerm"]').type(searchTerm);
    cy.get('button[type="submit"]').click();

    cy.get('ul li').should('have.length', 5); 


    cy.contains('button', 'Next').click();

    cy.get('ul li').should('have.length', 5);

 
    cy.contains('button', 'Previous').click();

    cy.get('ul li').should('have.length', 5); 
  });


  it('should display a message for empty search result', () => {
    cy.visit('/');
    const searchTerm = 'Invalid City Name';

    cy.get('input[name="searchTerm"]').type(searchTerm);
    cy.get('button[type="submit"]').click();

    cy.contains('No cities found'); 
  });

});
