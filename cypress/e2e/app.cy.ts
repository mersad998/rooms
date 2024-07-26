describe('Should confirm that app and UI is running correctly', () => {
  it('check is toolbar and its buttons rendered', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-test-theme-type]').should('exist');
  });
});
