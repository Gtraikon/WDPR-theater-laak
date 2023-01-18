import React, { useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

function PurchaseForm() {
  let { id } = useParams()
  const [quantity, setQuantity] = useState(1);
  const [confirmation, setConfirmation] = useState(null);

  console.log(id);

  function handleChange(event) {
    setQuantity(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post('https://localhost:7020/api/kaartjes/kopen', {
      prijs: (10 * quantity),
      VoorstellingID: Number(id),
      Gebruikersnaam: "test5"
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="ticket-quantity">Number of Tickets:</label>
      <input
        type="number"
        id="ticket-quantity"
        name="quantity"
        min="1"
        max="10"
        value={quantity}
        onChange={handleChange}
      />
      <button type="submit">Purchase Tickets</button>
      {confirmation && <p>{confirmation}</p>}
    </form>
  );
}

export default PurchaseForm;
