import React, { useState } from 'react';


function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [VoorstellingShows, setVoorstellingShows] = useState([
        {
            name: 'The Cats',
            schedule: [
                { day: 'Monday', time: '16:00 PM' },
                { day: 'Tuesday', time: '16:00 PM' },
            ]
        },
        {
            name: 'The Lion King',
            schedule: [
                { day: 'Wednesday', time: '16:00 PM' },
                { day: 'Thursday', time: '16:00 PM' },
            ]
        },
        {
            name: 'Soldaat van Oranje',
            schedule: [
                { day: 'Wednesday', time: '16:00 PM' },
                { day: 'Thursday', time: '16:00 PM' },
            ]
        }
    ]);

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    function renderVoorstellingShow(VoorstellingShow) {
        return (
            <a className='voorstellingLink' href='/voorstelling'>
            <div className="Voorstellingshow">
                <div>
                    <img src="image.png" />
                    <h3>{VoorstellingShow.name}</h3>
                    <ul>
                        {VoorstellingShow.schedule.map(({ day, time }) => (
                            <li key={day}>{day} at {time}</li>
                        ))}
                    </ul>
                </div>
            </div>
            </a>
        );
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
                    {VoorstellingShows.map(renderVoorstellingShow)}
                </div>
            </div>
        </div>
    );
}

export default Calendar;