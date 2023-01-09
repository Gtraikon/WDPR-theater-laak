import React, { useState } from 'react';

function PurchaseForm() {
  const [quantity, setQuantity] = useState(1);
  const [confirmation, setConfirmation] = useState(null);

  function handleChange(event) {
    setQuantity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // send request to purchase tickets
    // const response = purchaseTickets(quantity);
    // setConfirmation(response.confirmation);
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
