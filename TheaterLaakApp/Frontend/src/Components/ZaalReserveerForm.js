import React, { useState } from 'react';


const ZaalHurenFormulier = () => {
  const [formData, setFormData] = useState({
    datum: '',
    begintijd: '',
    eindtijd: '',
    zaal: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Voer hier de code uit om de zaal te huren met de ingevulde gegevens
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="datum" className="form-label">Datum:</label>
      <input
        type="date"
        name="datum"
        id="datum"
        value={formData.datum}
        onChange={handleChange}
        className="form-input"
      />
      <br />

      <label htmlFor="begintijd" className="form-label">Begintijd:</label>
      <input
        type="time"
        name="begintijd"
        id="begintijd"
        value={formData.begintijd}
        onChange={handleChange}
        className="form-input"
      />
      <br />

      <label htmlFor="eindtijd" className="form-label">Eindtijd:</label>
      <input
        type="time"
        name="eindtijd"
        id="eindtijd"
        value={formData.eindtijd}
        onChange={handleChange}
        className="form-input"
      />
      <br />

      <label htmlFor="zaal" className="form-label">Welke zaal wil je huren:</label>
      <input
        type="number"
        name="zaal"
        id="zaal"
        value={formData.grootte}
        onChange={handleChange}
        className="form-input"
      />
      <br />

      <button type="submit" className="form-button">Zaal huren</button>
    </form>
  );
};

export default ZaalHurenFormulier;
