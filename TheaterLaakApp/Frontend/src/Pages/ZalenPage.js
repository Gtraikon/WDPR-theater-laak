import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function ZalenPage () {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7020/api/zalen")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
console.log(data);
  return (
    <>
      <div class="grid-container-h">
        <div class="smalltile">
          <h2>Zaal nodig?</h2>
          <p>Boek nu een van onze geweldige theater zalen of ruimtes geschikt voor verschillende gelegenheden</p>
        </div>
        <div class="smalltile">
          <h2>van droom tot realiteit</h2>
          <p>Bereik uw publiek als nooit tevoren via theater laak</p>
        </div>
        <div class="smalltile">
          <h2>Nu huren!</h2>
          <p>Vul hier beneden de formulier in om in contact te komen en een zaal te huren of kom even langs op locatie</p>
        </div>
      </div>
      {data.map(item => (
        <div class="grid-container" key={item.zaalNummer}>

          <div class="tile">
            <Link to={`/zaalreserveren?ZaalNummer=${item.zaalNummer}`}>
              <div class="tile-img">
                <img src={`afbeeldingen/${item.zaalImage}.jpg`} alt="cover" />
                <div class="tile-text">
                  <img src="afbeeldingen/amensen.jpg" /><p>{item.capaciteit}</p>
                </div>
                <div class="tile-main">
                  <h3>Zaal {item.zaalNummer}</h3>
                  <p>deze zaal bevat:<br></br>-{item.eersterangstoelen} eersterangs stoelen<br></br>-{item.tweedeRangStoelen} tweederangs stoelen<br></br>-{item.derdeRangStoelen} derderangs stoelen</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ZalenPage;