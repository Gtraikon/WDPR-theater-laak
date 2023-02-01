import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


function GoedDoelDoneerPage() {
  const [hoeveelheid, setHoeveelheid] = useState('');
  const [tekst, setTekst] = useState('');
  const [error, setError] = useState('');
  const [gelukt, setGelukt] = useState('');
  const [parameter, setParameter] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [goeddoel, setGoeddoel] = useState('');
  const [fakepay, setFakepay] = useState('');
  const tokenStr = localStorage.getItem("doneer");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setParameter(queryParams.get('goeddoel'));

    axios.defaults.headers.common["Authorization"] = `Bearer ${tokenStr}`;

    axios.get(`https://ikdoneer.azurewebsites.net/api/goededoelen/${parameter}`,)
      .then(response => {
        setGoeddoel(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },);


  async function handleDonationSubmit(event) {
    event.preventDefault();
    const fakepayData = {
      amount: hoeveelheid,
      url: `${process.env.REACT_APP_API_URL}/api/doneer`
    }
    axios.post('https://fakepay.azurewebsites.net/', fakepayData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => setFakepay(res.data))
      .catch(err => console.log(err));

    try {
      const data = {
        Doel: parameter,
        Hoeveelheid: hoeveelheid,
        Tekst: tekst
      }
      const response = await axios.post('https://ikdoneer.azurewebsites.net/api/donatie', data,  {
        headers: {
          'Authorization': `Bearer ${tokenStr}`
        }
      });
      if (response.Message = "succes") {
        console.log('Donatie gelukt!');
        setGelukt("Het doneren is gelukt");
        setError("");
      }
    } catch (error) {
      console.error(error);
      setError("Het doneren is niet gelukt");
      setGelukt("");
    }
  };

  return (
    <div>
      {fakepay && <div dangerouslySetInnerHTML={{ __html: fakepay }} />}
      <form className='theaterdoneerform' onSubmit={handleDonationSubmit}>
        {goeddoel && !fakepay &&
          <><h2>Doneer aan {goeddoel.naam}</h2>

            <label>
              <span className='hoeveelheid-d'>Hoeveelheid:</span>
              <input type="number" value={hoeveelheid} onChange={e => setHoeveelheid(e.target.value)} />
            </label>

            <br />

            <label>
              <span className='tekst-d'>tekst:</span>
              <input type="text" value={tekst} onChange={e => setTekst(e.target.value)} />
            </label>

            <br />

            <button type="submit">Doneer</button>
          </>
        }
        {error && !fakepay && <p className="error" style={{ color: "red" }}>{error}</p>}
        {gelukt && !fakepay && <p className="gelukt" style={{ color: "green" }}>{gelukt}</p>}
      </form>
    </div>
  );
}

export default GoedDoelDoneerPage;
