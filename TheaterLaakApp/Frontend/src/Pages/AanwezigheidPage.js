import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function AanwezigheidPage() {
    const navigate = useNavigate();
    const [bestelnummer, setBestelnummer] = useState('');
    const [message, setMessage] = useState('');

    if (!CheckToegang()) {
        return (
            <div className="betalenGelukt">
                <h2>U Heeft geen toegang tot deze pagina</h2>
                <button onClick={home}>Terug naar de homepage</button>
            </div>
        )
    }

    function home() {
        navigate("/");
    }

    async function handleSubmit(event){
        event.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/kaartjes/aanwezigheid?bestelnummer=${bestelnummer}`);
        setMessage(response.data.message);
        console.log(message);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Aanwezigheid bezoeker veranderen</h1>
            <label>
                <span className=''>bestelnummer:</span>
                <input type="number" value={bestelnummer} onChange={e => setBestelnummer(e.target.value)} />
            </label>

            <br />

            <button type="submit">Verander Aanwezigheid</button>
            {message && <p>{message}</p>}
        </form>
    )

}

function CheckToegang() {
    try {
        let token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        const userRole = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        if (userRole != "Medewerker") {
            return false;
        }
        return true;
    } catch {
        return false
    }


}

export default AanwezigheidPage;