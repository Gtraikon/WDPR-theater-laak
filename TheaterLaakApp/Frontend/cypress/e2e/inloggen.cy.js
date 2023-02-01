describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/inloggen');
  });

  it('logs in a user successfully', () => {
    cy.get('input[type="username"]').type('Test1');
    cy.get('input[type="password"]').type('aabbCC1!');
    cy.get('button[type="submit"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.error').should('not.exist');
  });
});