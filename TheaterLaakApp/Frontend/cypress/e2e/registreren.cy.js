describe('Test voor wachtwoord error message', () => {
  it('laat de error zien "Het wachtwoord moet minstens één speciaal teken bevatten"', () => {
      cy.visit('http://localhost:3000/registreren');
      cy.get('input[type="username"]').type('testuser');
      cy.get('input[type="email"]').type('testuser@example.com');
      cy.get('input[type="password"]').type('password');
      cy.get('form').submit();
      cy.get('p').should('contain', 'Het wachtwoord moet minstens één speciaal teken bevatten');
  });
});

describe('Test voor wachtwoord error message', () => {
  it('laat de error zien "Het wachtwoord is te kort"', () => {
      cy.visit('http://localhost:3000/registreren');
      cy.get('input[type="username"]').type('testuser');
      cy.get('input[type="email"]').type('testuser@example.com');
      cy.get('input[type="password"]').type('pa');
      cy.get('form').submit();
      cy.get('p').should('contain', 'Het wachtwoord is te kort');
  });
});

describe('Test voor wachtwoord error message', () => {
  it('laat de error zien "Het wachtwoord moet minstens één cijfer bevatten"', () => {
      cy.visit('http://localhost:3000/registreren');
      cy.get('input[type="username"]').type('testuser');
      cy.get('input[type="email"]').type('testuser@example.com');
      cy.get('input[type="password"]').type('paS@word');
      cy.get('form').submit();
      cy.get('p').should('contain', 'Het wachtwoord moet minstens één cijfer bevatten');
  });
});

describe('Test voor wachtwoord error message', () => {
  it('laat de error zien "Het wachtwoord moet minstens één kleine letter bevatten"', () => {
      cy.visit('http://localhost:3000/registreren');
      cy.get('input[type="username"]').type('testuser');
      cy.get('input[type="email"]').type('testuser@example.com');
      cy.get('input[type="password"]').type('PAS@WO0');
      cy.get('form').submit();
      cy.get('p').should('contain', 'Het wachtwoord moet minstens één kleine letter bevatten');
  });
});

describe('Test voor wachtwoord error message', () => {
  it('laat de error zien "Het wachtwoord moet minstens één hoofdletter bevatten"', () => {
      cy.visit('http://localhost:3000/registreren');
      cy.get('input[type="username"]').type('testuser');
      cy.get('input[type="email"]').type('testuser@example.com');
      cy.get('input[type="password"]').type('pas@2woe');
      cy.get('form').submit();
      cy.get('p').should('contain', 'Het wachtwoord moet minstens één hoofdletter bevatten');
  });
});

describe('Test voor wachtwoord error message', () => {
  it('laat de error zien "Uw gebruikersnaam kan alleen letters of cijfers bevatten"', () => {
      cy.visit('http://localhost:3000/registreren');
      cy.get('input[type="username"]').type('testuse$');
      cy.get('input[type="email"]').type('testuser@example.com');
      cy.get('input[type="password"]').type('AAAAAAA@@22bb');
      cy.get('form').submit();
      cy.get('p').should('contain', 'Uw gebruikersnaam kan alleen letters of cijfers bevatten');
  });
});

describe('Test voor wachtwoord error message', () => {
  it('laat de error zien "Deze gebruikersnaam bestaat al"', () => {
      cy.visit('http://localhost:3000/registreren');
      cy.get('input[type="username"]').type('test1');
      cy.get('input[type="email"]').type('testuser@example.com');
      cy.get('input[type="password"]').type('AAAAAAA@@22bb');
      cy.get('form').submit();
      cy.get('p').should('contain', 'Deze gebruikersnaam bestaat al');
  });
});

