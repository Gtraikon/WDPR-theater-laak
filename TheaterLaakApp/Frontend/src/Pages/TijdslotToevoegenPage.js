import React, { useState, useEffect } from "react";
import axios from 'axios';
import GeenToegang from "../Components/GeenToegang";

function TijdslotToevoegenPage() {
    const [message, setMessage] = useState("");
    const [tijdslot, setTijdslot] = useState({
        VoorstellingID: "",
        ZaalNummer: "",
        Datum: '',
        Begintijd: '',
        Eindtijd: '',
    });

    const handleChange = (event) => {
        setTijdslot({ ...tijdslot, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(`${process.env.REACT_APP_API_URL}/api/voorstelling/tijdslot`, {
                VoorstellingID: tijdslot.VoorstellingID,
                ZaalNummer: tijdslot.ZaalNummer,
                Jaar: tijdslot.Datum.split("-")[0],
                Maand: tijdslot.Datum.split("-")[1],
                Dag: tijdslot.Datum.split("-")[2],
                BeginUur: tijdslot.Begintijd.split(":")[0],
                BeginMinuut: tijdslot.Begintijd.split(":")[1],
                EindUur: tijdslot.Eindtijd.split(":")[0],
                EindMinuut: tijdslot.Eindtijd.split(":")[1]
            })
            .then((res) => { setMessage(res.data.message) })
            .catch((err) => { setMessage("Er is iets fout gegaan. probeer het later opnieuw") });
    };

    if (!localStorage.getItem("toegang")) { <GeenToegang /> }
    return (
        <div>
            <h2>Tijdslot toevoegen</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>VoorstellingID:</label>
                    <input
                        type="number"
                        name="VoorstellingID"
                        value={tijdslot.VoorstellingID}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Zaalnummer:</label>
                    <input
                        type="number"
                        name="ZaalNummer"
                        value={tijdslot.ZaalNummer}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>BeginTijd:</label>
                    <input
                        type="time"
                        name="Begintijd"
                        value={tijdslot.Begintijd}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>EindTijd:</label>
                    <input
                        type="time"
                        name="Eindtijd"
                        value={tijdslot.Eindtijd}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Datum:</label>
                    <input
                        type="date"
                        name="Datum"
                        value={tijdslot.Datum}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Tijdslot toevoegen</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    )
}

export default TijdslotToevoegenPage;