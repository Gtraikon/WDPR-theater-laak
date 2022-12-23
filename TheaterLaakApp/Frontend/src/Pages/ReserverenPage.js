import React from 'react';
import ZaalHurenFormulier from '../Components/ZaalReserveerForm';

const Theater = () => {
  const zalen = [
    {
      naam: 'Zaal 1',
      eersterangs: 20,
      tweederangs: 100,
      derderangs: 120,
    },
    {
      naam: 'Zaal 2',
      eersterangs: 20,
      tweederangs: 160,
    },
    {
      naam: 'Zaal 3',
      eersterangs: 10,
      tweederangs: 80,
    },
    {
      naam: 'Zaal 4',
      eersterangs: 40,
      tweederangs: 200,
      derderangs: 200,
    },
  ];

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Theater</h1>
      {zalen.map((zaal) => (
        <div key={zaal.naam}>
          <h2>{zaal.naam}</h2>
          <p>Eerste rij: {zaal.eersterangs}</p>
          <p>Tweede rij: {zaal.tweederangs}</p>
          {zaal.derderangs && <p>Derde rij: {zaal.derderangs}</p>}
        </div>
      ))}
      <h2>Ruimtes</h2>
      <p>Er zijn 10 ruimtes beschikbaar met een capaciteit van maximaal 30 personen. Deze zijn geschikt voor kleinschalige voorstellingen en workshops.</p>
      <ZaalHurenFormulier></ZaalHurenFormulier>
    </div>
    
  );
};

export default Theater;