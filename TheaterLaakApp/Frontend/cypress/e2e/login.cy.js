describe('LoginPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/inloggen');
  });

  it('should have a form to submit', () => {
    cy.get('form').should('exist');
  });
});

it("Testen van invoer van gebruikersnaam en wachtwoord", () => {
  cy.visit("http://localhost:3000/inloggen");
  cy.get("input[type='username']").type("testuser");
  cy.get("input[type='password']").type("testpassword");
  cy.get("input[type='username']").should("have.value", "testuser");
  cy.get("input[type='password']").should("have.value", "testpassword");
});

it("Testen of je een token krijgt na correct aanmelden", () => {
  cy.visit("http://localhost:3000/inloggen");
  cy.get("input[type='username']").type("testuser");
  cy.get("input[type='password']").type("testpassword");
  cy.get("form").submit();
  cy.get("localStorage.getItem('token')").should("have.value","token")
});

it("Testen foutmelding bij verkeerde inloggegevens", () => {
  cy.visit("http://localhost:3000/inloggen");
  cy.get("input[type='username']").type("testuser");
  cy.get("input[type='password']").type("wrongpassword");
  cy.get("form").submit();
  cy.get(".error").should("have.text", "U heeft een verkeerde gebruikersnaam of wachtwoord ingevoerd");
});

it("succesvol inloggen", () => {
  
})