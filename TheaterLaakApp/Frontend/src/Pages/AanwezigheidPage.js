import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GeenToegang from '../Components/GeenToegang';
import getToegang from '../Components/GetToegang';


function AanwezigheidPage() {
    const navigate = useNavigate();
    const [bestelnummer, setBestelnummer] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/kaartjes/aanwezigheid?bestelnummer=${bestelnummer}`);
        setMessage(response.data.message);
        console.log(message);
    }

    if (!getToegang()) { return <GeenToegang/>}
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

export default AanwezigheidPage;