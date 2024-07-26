describe('go to my apartments', () => {
  it('should navigate to my apartments page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // go to main page
    cy.get('button').click().wait(1000);

    // navigate to the My Apartments page
    cy.get('[data-test-nav-button="My Apartments"]').first().click();

    // rest of the test ...
  });
});
