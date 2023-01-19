import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ZaalHurenFormulier = () => {
  const [messageStyle, setMessageStyle] = useState({ color: "red" });

  const username = localStorage.getItem("username");
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    datum: '',
    begintijd: '',
    eindtijd: '',
    zaal: '',
  });

  useEffect(() => {
    if (message == "Uw Reservering is succesvol") {
      setMessageStyle({ color: "green" })
    }
    else {
      setMessageStyle({ color: "red" })
    }
  }, [message]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData.zaal);
    console.log(formData.datum);
    console.log(formData.begintijd);
    console.log(formData.eindtijd);
    if (formData.zaal && formData.datum && formData.begintijd && formData.eindtijd) {
      await axios.post('https://localhost:7020/api/reservering', {
        Gebruikersnaam: username,
        Zaalnummer: formData.zaal,
        Jaar: formData.datum.split("-")[0],
        Maand: formData.datum.split("-")[1],
        Dag: formData.datum.split("-")[2],
        BeginUur: formData.begintijd.split(":")[0],
        BeginMinuut: formData.begintijd.split(":")[1],
        EindUur: formData.eindtijd.split(":")[0],
        EindMinuut: formData.eindtijd.split(":")[1]
      })
        .then(response => {setMessage(response.data.message);})
    } else {
      setMessage("Voer aub alle velden in");
      setMessageStyle({ color: "red" })
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
      <p style={messageStyle}>{message}</p>
    </form>
  );
};

export default ZaalHurenFormulier;