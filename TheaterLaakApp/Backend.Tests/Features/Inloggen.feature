Feature: Inloggen

Scenario: Successvol inloggen
  Given Gebruiker met gebruikersnaam testGebruiker en testWachtwoord bestaat.
  When Gebruiker met gebruikersnaam testGebruiker en testWachtwoord voert de juiste gegevens in.
  Then moet er een response 200 komen.

  Given Gebruiker met gebruikersnaam testGebruiker en testWachtwoord bestaat.
  When Gebruiker met gebruikersnaam testGebruiker en testWachtwoord voert de verkeerde gegevens in.
  Then moet er een response 401 komen.