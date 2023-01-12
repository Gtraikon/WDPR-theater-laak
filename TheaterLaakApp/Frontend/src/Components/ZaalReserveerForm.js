import React, { useState } from 'react';
import axios from 'axios';


const ZaalHurenFormulier = () => {
  const username = localStorage.getItem("username");
  const [error, setError] = useState('');
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

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post('https://localhost:7020/api/reservering', {
        Gebruikersnaam: username,
        Zaalnummer: formData.zaal,
        Jaar: formData.datum.split("-")[0],
        Maand: formData.datum.split("-")[1],
        Dag: formData.datum.split("-")[2],
        BeginUur: formData.begintijd.split(":")[0],
        BeginMinuut: formData.begintijd.split(":")[1],
        EindUur: formData.eindtijd.split(":")[0],
        EindMinuut: formData.eindtijd.split(":")[1]
      });
      /*if (response.data.success = true) {
        navigate("/");
      } else {
        setError(response.data.error);
      }*/
    } catch (error) {
      console.error(error);
      setError("Het reserveren is niet gelukt");
    }
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
