import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [captcha, setCaptcha] = useState('');

  const onCaptchaChange = value => {
    console.log(value);
    setCaptcha(value);
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
        Password: password,
        Captcha: captcha
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
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
      setError(error.response.data.error);
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
        {error && <p className="error" style={{ color: "red" }}>{error}</p>}
      </form>
      <Link to="/registreren">Registreer als een nieuwe gebruiker</Link>
    </div>
  );
}

export default LoginPage;