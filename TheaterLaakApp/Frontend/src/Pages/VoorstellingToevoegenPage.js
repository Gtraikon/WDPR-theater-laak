import React, { useState, useEffect } from "react";
import axios from 'axios';
import GeenToegang from "../Components/GeenToegang";

function VoorstellingenToevoegenPage() {
    const [message, setMessage] = useState("");
    const [voorstelling, setVoorstelling] = useState({
        Titel: "",
        image: "",
        Prijs: ""
      });
    
      const handleChange = (event) => {
        setVoorstelling({ ...voorstelling, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .post(`${process.env.REACT_APP_API_URL}/api/voorstelling`, voorstelling)
          .then((res) => {setMessage(res.data.message)})
          .catch((err) => {setMessage("Er is iets fout gegaan. probeer het later opnieuw")});
      };

    if (!localStorage.getItem("toegang")) { <GeenToegang /> }
    return (
        <div>
            <h2>Voorstelling toevoegen</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Titel:</label>
                    <input
                        type="text"
                        name="Titel"
                        value={voorstelling.Titel}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Afbeelding:</label>
                    <input
                        type="text"
                        name="image"
                        value={voorstelling.image}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Prijs:</label>
                    <input
                        type="number"
                        name="Prijs"
                        value={voorstelling.Prijs}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Voorstellingen toevoegen</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    )
}

export default VoorstellingenToevoegenPage;