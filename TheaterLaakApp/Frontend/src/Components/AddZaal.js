import React, { useState } from "react";
import axios from "axios";

function AddZaal() {
  const [zaal, setZaal] = useState({
    ZaalNummer: "",
    Capaciteit: "",
    EersteRangStoelen: "",
    TweedeRangStoelen: "",
    DerdeRangStoelen: "",
    ZaalImage: "",
    ZaalOmschrijving: ""
  });

  const handleChange = (event) => {
    setZaal({ ...zaal, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("api/zalen", zaal)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Zaalnummer:</label>
        <input
          type="text"
          name="ZaalNummer"
          value={zaal.ZaalNummer}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Capaciteit:</label>
        <input
          type="text"
          name="Capaciteit"
          value={zaal.Capaciteit}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Eerste Rang Stoelen:</label>
        <input
          type="text"
          name="EersteRangStoelen"
          value={zaal.EersteRangStoelen}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tweede Rang Stoelen:</label>
        <input
          type="text"
          name="TweedeRangStoelen"
          value={zaal.TweedeRangStoelen}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Derde Rang Stoelen:</label>
        <input
          type="text"
          name="DerdeRangStoelen"
          value={zaal.DerdeRangStoelen}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Zaal Afbeelding:</label>
        <input
          type="text"
          name="ZaalImage"
          value={zaal.ZaalImage}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Zaal Omschrijving:</label>
        <input
          type="text"
          name="ZaalOmschrijving"
          value={zaal.ZaalOmschrijving}
          onChange={handleChange}
          />
          </div>
          </form>) }
          export default AddZaal;
