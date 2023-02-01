import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


function GoedDoelPage() {
  const [data, setData] = useState([]);
  const tokenStr = localStorage.getItem("doneer");
  useEffect( () => {
    axios.get('https://ikdoneer.azurewebsites.net/api/goededoelen', {
      headers: {
        'Authorization': `Bearer ${tokenStr}`
      }
    }
    ) 
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <h2>Kies een goed doel om aan te doneren</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <Link to={`/donerengoeddoel/doneren?goeddoel=${item.id}`} className="doneerlink">{item.naam}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GoedDoelPage;
