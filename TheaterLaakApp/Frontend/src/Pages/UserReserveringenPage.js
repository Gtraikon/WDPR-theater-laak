import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function UserReserveringPage() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/inloggen");
        } else {
            axios.get(`${process.env.REACT_APP_API_URL}/api/reservering?username=${localStorage.getItem("username")}`)
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
                <h1>Jouw reserveringen</h1>
                {
                    data.map(Reservering => (
                        <div className='userTickets'>
                            <img src={`afbeeldingen/${Reservering.tijdslot.zaal.zaalImage}.jpg`} />
                            <div className='userTicketsList'>
                                <ul key={Reservering.id}>
                                    <li><b>Reservatienummer: </b>{Reservering.id}</li>
                                    <li><b>Zaal: </b>{Reservering.tijdslot.zaal.zaalNummer}</li>
                                    <li><b>datum: </b>{Reservering.tijdslot.datum}</li>
                                    <li><b>Begintijd: </b>{Reservering.tijdslot.beginTijd}</li>
                                    <li><b>Eindtijd: </b>{Reservering.tijdslot.eindTijd}</li>
                                    
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default UserReserveringPage;
