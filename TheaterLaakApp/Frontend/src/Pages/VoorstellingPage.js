import React, { useEffect, useState } from 'react';


function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [VoorstellingShows, setVoorstellingShows] = useState([]);

    async function getData() {
        fetch("https://theater-laak-wdpr.azurewebsites.net/api/Voorstelling/GetVoorstellingen")
            .then(response => response.json())
            .then(data => {
                setVoorstellingShows(data)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    return (
        <div className="Voorstellingweergave">
            <h2 className='title'>Voorstelling-weergave</h2>
            <div>
                <div className="filters">
                    <div>
                        <p>filter op naam</p>
                        <input />
                    </div>
                    <div>
                        <p>filter op datum</p>
                        <input />
                    </div>
                    <div>
                        <p>filter op genre</p>
                        <input />
                    </div>
                </div>

                {!VoorstellingShows && <p>Voorstellingen aan het laden...</p>}

                <div className="VoorstellingshowContainer">
                    {VoorstellingShows.map((voorstellingData) => {
                        return <>
                            <a className='voorstellingLink' href={`/voorstellinginfo/${voorstellingData.id}`}>
                                <div className="Voorstellingshow">
                                    <div>
                                        <img src={`${voorstellingData.voorstelling.image}`} alt={`${voorstellingData.voorstelling.titel}`}/>
                                        <h3 style={{marginLeft: "20px"}}>{voorstellingData.voorstelling.titel}</h3>
                                        <ul>
                                            <li key={voorstellingData.id}>{voorstellingData.datum} om {voorstellingData.beginTijd}</li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Calendar;