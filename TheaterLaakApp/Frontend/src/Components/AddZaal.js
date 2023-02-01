import React, { useState } from "react";
import axios from "axios";

function AddZaal() {
    const [message, setMessage] = useState('');
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
            .post(`${process.env.REACT_APP_API_URL}/api/zalen`, zaal)
            .then((res) => setMessage(res.data.message))
            .catch((err) => setMessage("Er is iets fout gegeaan. Probeer het later opnieuw."));
    };

    return (
        <>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Zaalnummer:</label>
                    <input
                        type="number"
                        name="ZaalNummer"
                        value={zaal.ZaalNummer}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Capaciteit:</label>
                    <input
                        type="number"
                        name="Capaciteit"
                        value={zaal.Capaciteit}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Eerste Rang Stoelen:</label>
                    <input
                        type="number"
                        name="EersteRangStoelen"
                        value={zaal.EersteRangStoelen}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Tweede Rang Stoelen:</label>
                    <input
                        type="number"
                        name="TweedeRangStoelen"
                        value={zaal.TweedeRangStoelen}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Derde Rang Stoelen:</label>
                    <input
                        type="number"
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
                    <br />
                </div>
                <div>
                    <button type="submit" className="form-button">Zaal Toevoegen</button>
                </div>
                { message && <p>{message}</p> }
            </form>

        </>
    )
}
export default AddZaal;
