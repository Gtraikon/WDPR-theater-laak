import React, { useState } from 'react';


const ZaalHurenFormulier = () => {
  const [formData, setFormData] = useState({
    datum: '',
    tijd: '',
    duur: '',
    grootte: '',
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
      <label htmlFor="tijd" className="form-label">Tijd:</label>
      <input
        type="time"
        name="tijd"
        id="tijd"
        value={formData.tijd}
        onChange={handleChange}
        className="form-input"
      />
      <br />
      <label htmlFor="duur" className="form-label">Duur (in uren):</label>
      <input
        type="number"
        name="duur"
        id="duur"
        value={formData.duur}
        onChange={handleChange}
        className="form-input"
      />
      <br />
      <label htmlFor="grootte" className="form-label">Welke zaal wil je huren:</label>
      <input
        type="number"
        name="grootte"
        id="grootte"
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
