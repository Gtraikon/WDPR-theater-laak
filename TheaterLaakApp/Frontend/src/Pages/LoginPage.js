import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleEmailChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post('https://localhost:7020/api/account/login', {
        UserName: username,
        Password: password
      });
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        const url = localStorage.getItem("redirect");
        if(url){
          navigate(url);
          window.location.reload();
          localStorage.setItem("redirect", "/")
        }else{
          navigate("/");
          window.location.reload();
        }
    } catch (error) {
      console.error(error);
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
        {error && <p className="error" style={{ color: "red" }}>{error}</p>}
      </form>
      <Link to="/registreren">Registreer als een nieuwe gebruiker</Link>
    </div>
  );
}

export default LoginPage;