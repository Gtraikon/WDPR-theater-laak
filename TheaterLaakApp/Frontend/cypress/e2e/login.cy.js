describe('LoginPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('should have a form to submit', () => {
    cy.get('form').should('exist');
  });
});