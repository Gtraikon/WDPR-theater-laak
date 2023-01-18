import React, { useEffect, useState } from 'react';


function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [VoorstellingShows, setVoorstellingShows] = useState([]);

    async function getData() {
        fetch("https://localhost:7020/api/Voorstelling/GetVoorstellingen")
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

                <div className="VoorstellingshowContainer">
                    {VoorstellingShows.map((voorstellingData) => {
                        return <>
                            <a className='voorstellingLink' href={`/tickets/${voorstellingData.id}`}>
                                <div className="Voorstellingshow">
                                    <div>
                                        <img src="image.png" />
                                        <h3>{voorstellingData.titel}</h3>
                                        <ul>
                                            <li key={voorstellingData.day}>{voorstellingData.day} at {voorstellingData.time}</li>
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