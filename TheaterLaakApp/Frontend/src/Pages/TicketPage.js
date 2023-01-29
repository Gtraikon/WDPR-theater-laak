import React, { useState } from 'react';
import { useNavigate } from "react-router";
import axios from 'axios';

function PurchaseForm({ id, onChange }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [confirmation, setConfirmation] = useState(null);
  const [fakepay, setFakepay] = useState('');

  function handleChange(event) {
    setQuantity(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (localStorage.getItem("token")) {
      
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/kaartjes/kopen`, {
          Aantal: quantity,
          prijs: (10 * quantity),
          TijdslotID: Number(id),
          Gebruikersnaam: localStorage.getItem('username')
        });

        const fakepayData = {
          amount: (10 * quantity),
          url: `${process.env.REACT_APP_API_URL}/api/doneer`
        }
        axios.post('https://fakepay.azurewebsites.net/', fakepayData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(res => onChange(res.data))
          
          .catch(err => console.log(err));

        setConfirmation("Kaartjes zijn gekocht");
      } catch {
        setConfirmation("Er is iets misgegaan bij het kopen van de kaartjes");
      }
    } else {
      localStorage.setItem("redirect", `/voorstellinginfo/${id}`)
      navigate("/inloggen");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="ticket-quantity">Aantal kaartjes: </label>
      <input
        type="number"
        id="ticket-quantity"
        name="quantity"
        min="1"
        max="10"
        value={quantity}
        onChange={handleChange}
      />
      <button type="submit">Koop kaartjes</button>
      {confirmation && <p>{confirmation}</p>}
    </form>
  );
}

export default PurchaseForm;
