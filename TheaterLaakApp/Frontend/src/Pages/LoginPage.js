import { useNavigate } from "react-router-dom";
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
      if (response.data.success = true) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);

        navigate("/");
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      console.error(error);
      setError("U heeft een verkeerde gebruikersnaam of wachtwoord ingevoerd");
    }
  }

  function isAuthenticated() {
    // Get the JWT from local storage
    const token = localStorage.getItem("jwt");
  
    // If the JWT exists, the user is authenticated
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="username" value={username} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Log In</button>
      {error && <p className="error" style={{color: "red"}}>{error}</p>}
    </form>
  );
}

export default LoginPage;