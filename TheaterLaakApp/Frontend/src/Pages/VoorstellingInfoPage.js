import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import Ticketpage from "./TicketPage"
import axios from 'axios';

function VoorstellingInfoPage() {
    const [data, setData] = useState('');
    const [fakepay, setFakepay] = useState('');
    let { id } = useParams();

    function handleFakepay(value) {
        setFakepay(value);
      }
    

    useEffect(() => {
        axios.get(`https://theater-laak-wdpr.azurewebsites.net/api/voorstelling/${id}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    return (
        <>
            {fakepay && <div dangerouslySetInnerHTML={{ __html: fakepay }} />}
            {data.voorstelling && !fakepay &&
                <div className='infocontainer'>
                    <div className='row'>
                        <div className='col-9'>
                            <img src={`../${data.voorstelling.image}`} alt={`${data.voorstelling.titel}`} />
                        </div>
                        <div className='col-3'>
                            <div className='voorstellingInfo'>
                                <h2>{data.voorstelling.titel}</h2>
                                <p>{data.datum}</p>
                                <p>{data.beginTijd} - {data.eindTijd}</p>
                                <p>Zaal {data.zaal.zaalNummer}</p>
                                <p>Prijs: 10 euro</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>Beschrijving</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <Ticketpage id = {data.voorstelling.id} onChange={handleFakepay}/>
                </div>
            }
        </>
    )
}

export default VoorstellingInfoPage;