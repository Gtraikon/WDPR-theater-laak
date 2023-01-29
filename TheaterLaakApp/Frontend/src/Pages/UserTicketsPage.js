import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function UserticketsPage() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/inloggen");
        } else {
            axios.get(`${process.env.REACT_APP_API_URL}/api/kaartjes?username=${localStorage.getItem("username")}`)
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, []);

    return (
        <>
            <div className='ticketContainer'>
                <h1>Jouw Tickets</h1>
                {
                    data.map(ticket => (
                        <div className='userTickets'>
                            <img src={`${ticket.tijdslot.voorstelling.image}`} />
                            <div className='userTicketsList'>
                                <ul key={ticket.id}>
                                    <li><b>Bestelnummer: </b>{ticket.id}</li>
                                    <li><b>Aantal: </b>{ticket.aantal}</li>
                                    <li><b>Prijs: </b>{ticket.tijdslot.voorstelling.prijs * ticket.aantal}</li>
                                    <li><b>Voorstelling: </b>{ticket.tijdslot.voorstelling.titel}</li>
                                    <li><b>Datum: </b>{ticket.tijdslot.datum}</li>
                                    <li><b>Zaal: </b>{ticket.tijdslot.zaal.zaalNummer}</li>
                                    <li><b>Aanwezig: </b>{ticket.aanwezig}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default UserticketsPage;
