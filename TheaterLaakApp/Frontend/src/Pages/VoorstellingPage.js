import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Calendar() {

    const [selectedOption, setSelectedOption] = useState("titelop");
    const [selectedDate, setSelectedDate] = useState('');
    const [VoorstellingShows, setVoorstellingShows] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [titel, setTitel] = useState("");

    async function getData() {
        let year = 0;
        let month = 0;
        let day = 0;

        if (selectedDate) {
            year = selectedDate.getFullYear();
            month = selectedDate.getMonth() + 1;
            day = selectedDate.getDate();
        }

        axios.get(`${process.env.REACT_APP_API_URL}/api/Voorstelling/GetVoorstellingen?page=${pagina}&&year=${year}&&month=${month}&&day=${day}&&sort=${selectedOption}${titel && `&&titel=${titel}`}`)
            .then(response => {
                setVoorstellingShows(response.data);
            })
    }

    useEffect(() => {
        getData()
    }, [selectedDate, pagina, titel, selectedOption]);

    function handleDateChange(date) {
        if (date) {
            setSelectedDate(new Date(date));
        } else {
            setSelectedDate('');
        }
    }

    function handlePaginaChange(nummer) {
        setPagina(pagina + nummer);
    }

    function handleTitelChange(event) {
        setTitel(event.target.value);
    }

    return (
        <div className="Voorstellingweergave">
            <h2 className='title'>Voorstelling-weergave</h2>
            <div>
                <div className="filters">
                    <div>
                        <p>filter op naam</p>
                        <input onChange={handleTitelChange} />
                    </div>
                    <div>
                        <p>filter op datum</p>
                        <input type="date" onChange={e => handleDateChange(e.target.value)} />
                    </div>
                    <div style={{ margin: "20px" }}>
                        <p>sorteer</p>
                        <select
                            value={selectedOption}
                            onChange={(event) => setSelectedOption(event.target.value)}
                        >
                            <option value="titelop">Titel oplopend</option>
                            <option value="titelaf">Titel aflopend</option>
                            <option value="prijsop">Prijs oplopend</option>
                            <option value="prijsaf">Prijs aflopend</option>
                        </select>
                    </div>
                </div>

                {!VoorstellingShows && <p>Voorstellingen aan het laden...</p>}

                <div className="VoorstellingshowContainer">
                    {VoorstellingShows.map((voorstellingData) => {
                        return <>
                            <a className='voorstellingLink' href={`/voorstellinginfo/${voorstellingData.id}`}>
                                <div className="Voorstellingshow">
                                    <div>
                                        <img src={`${voorstellingData.voorstelling.image}`} alt={`${voorstellingData.voorstelling.titel}`} />
                                        <h3 style={{ marginLeft: "20px" }}>{voorstellingData.voorstelling.titel}</h3>
                                        <ul>
                                            <li key={voorstellingData.id + 1000}>{voorstellingData.datum}</li>
                                            <li key={voorstellingData.id + 10000}>om {voorstellingData.beginTijd}</li>
                                            <li key={voorstellingData.id + 100000}>{voorstellingData.voorstelling.prijs} euro</li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </>
                    })}
                </div>
                <div className='doneerbuttons'>
                    <button onClick={() => handlePaginaChange(-1)}>vorige pagina</button>
                    <button onClick={() => handlePaginaChange(1)}>volgende pagina</button>
                </div>
                <p style={{ textAlign: "center" }}>pagina: {pagina}</p>
            </div>
        </div>
    );
}

export default Calendar;