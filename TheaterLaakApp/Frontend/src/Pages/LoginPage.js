import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import jwt_decode from 'jwt-decode';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onCaptchaChange = value => {
    console.log(value);
  };


  function handleEmailChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/account/login`, {
        UserName: username,
        Password: password
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      setToegang()
      const url = localStorage.getItem("redirect");
      
      if (url) {
        navigate(url);
        window.location.reload();
        localStorage.setItem("redirect", "/")
      } else {
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
;      console.error(error);
      setError("U heeft een verkeerde gebruikersnaam of wachtwoord ingevoerd");
    }
  }

  return (
    <div className='login'>
      <h2>Inloggen</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span className="username">Gebruikersnaam:</span>
          <input type="username" value={username} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          <span className="password">Wachtwoord:</span>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Log In</button>
        <ReCAPTCHA
          sitekey="6LeGtTAkAAAAAHJ949eS6pSZKI6JUbbwbpMCzWwM"
          onChange={onCaptchaChange}
        />
        {//API-Key 6LeGtTAkAAAAANCAywupUd5IZ3bpK4Pgxedv2RkP
        }
        {error && <p className="error" style={{ color: "red" }}>{error}</p>}
      </form>
      <Link to="/registreren">Registreer als een nieuwe gebruiker</Link>
    </div>
  );
}

export default LoginPage;

function setToegang() {
  try {
      let token = localStorage.getItem("token");
      const decoded = jwt_decode(token);
      const userRole = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      if (userRole != "Medewerker" && userRole != "Admin") {
          localStorage.setItem("toegang", false);
      }
      localStorage.setItem("toegang", true);
  } catch {
    localStorage.setItem("toegang", false);
  }


}