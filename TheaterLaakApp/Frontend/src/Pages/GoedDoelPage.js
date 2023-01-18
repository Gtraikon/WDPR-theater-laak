import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


function GoedDoelPage() {
  const [data, setData] = useState([]);
  const tokenStr = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhODkyMTZjOC04NGUyLTQyZmYtYTlkYi1lNmU1NDU1ODdhZjMiLCJqdGkiOiJmOGIwZWJlYS1jYjY4LTQ1NjUtYjJjZS1iNWVmMWE1ZjkxNzAiLCJpYXQiOiIwMS8xMi8yMDIzIDE4OjEzOjQxIiwiVXNlcklkIjoiYTg5MjE2YzgtODRlMi00MmZmLWE5ZGItZTZlNTQ1NTg3YWYzIiwiRW1haWwiOiJ0YXJ1bmd1bHJhakBnbWFpbC5jb20iLCJleHAiOjE5ODkxNjY0MjEsImlzcyI6IklrRG9uZWVyIiwiYXVkIjoiKiJ9.SNQfzdzhoeMd3kMvMHSu9wtRn5eR6q5TXzOcVczLBDk";

  useEffect( () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${tokenStr}`;

    axios.get('https://ikdoneer.azurewebsites.net/api/goededoelen', ) 
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
