import React from 'react';
import ZaalHurenFormulier from '../Components/ZaalReserveerForm';

const ZalenPage = () => {
  

  return (
    <body>
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
      <div class="grid-container">
        <div class="tile">
          <div class="tile-img">
          <img src="afbeeldingen/zaal1.jpg" alt="cover"/>
            <div class="tile-text">
              <img src="afbeeldingen/amensen.jpg"/><p>240</p>
              </div>
              <div class="tile-main">
                <h3>Zaal 1</h3>
                <p>deze zaal bevat:<br></br>-20 eersterangs stoelen<br></br>-100 tweederangs stoelen<br></br>-120 derderangs stoelen</p>
              </div>
          </div>
          </div>
          <div class="tile">
          <div class="tile-img">
          <img src="afbeeldingen/zaal2.jpg" alt="cover"/>
            <div class="tile-text">
            <img src="afbeeldingen/amensen.jpg"/><p>180</p>
              </div>
              <div class="tile-main">
                <h3>Zaal 2</h3>
                <p>deze zaal bevat:<br></br>-20 eersterangs stoelen<br></br>-160 tweederangs stoelen</p>
              </div>
          </div>
          </div>
          <div class="tile">
          <div class="tile-img">
          <img src="afbeeldingen/zaal3.jpg" alt="cover"/>
            <div class="tile-text">
            <img src="afbeeldingen/amensen.jpg"/> <p>90</p>
              </div>
              <div class="tile-main">
                <h3>Zaal 3</h3>
                <p>deze zaal bevat:<br></br>-10 eersterangs stoelen<br></br>-80 tweederangs stoelen<br></br></p>
              </div>
          </div>
          </div>
          <div class="tile">
          <div class="tile-img">
          <img src="afbeeldingen/zaal4.jpg" alt="cover"/>
            <div class="tile-text">
            <img src="afbeeldingen/amensen.jpg"/><p>440</p>
              </div>
              <div class="tile-main">
                <h3>Zaal 4</h3>
                <p>deze zaal bevat:<br></br>-40 eersterangs stoelen<br></br>-200 tweederangs stoelen<br></br>-200 derderangs stoelen</p>
              </div>
          </div>
          </div>
          <div class="tile">
          <div class="tile-img">
          <img src="afbeeldingen/ruimte.jpg" alt="cover"/>
            <div class="tile-text">
            <img src="afbeeldingen/amensen.jpg"/> <p>30</p>
              </div>
              <div class="tile-main">
                <h3>Ruimtes</h3>
                <p>Het theater laak bezit 10 kleinere ruimtes die geschikt zijn voor kleinschalige voorstellingen en verschillende workshops</p>
              </div>
          </div>
          </div>
          <div class="tile">
          <div class="tile-img">
          <img src="afbeeldingen/cover5.jpg" alt="cover"/>
            <div class="tile-text">
            <img src="afbeeldingen/amensen.jpg"/><p>lorem ipsum</p>
              </div>
              <div class="tile-main">
                <h3>TBD</h3>
                <p>hier kunnen extra zalen komen als nodig</p>
              </div>
          </div>
          </div>
      </div>
      
      <ZaalHurenFormulier></ZaalHurenFormulier>


    </body>
  );
};

export default ZalenPage;