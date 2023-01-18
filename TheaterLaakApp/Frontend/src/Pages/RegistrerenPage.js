import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

function RegistrerenPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await axios.post('https://localhost:7020/api/account/registreren', {
                UserName: username,
                Password: password,
                Email: email
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

    return (
        <div className='registreer'>
            <h2>Registreren</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span className="email">E-mailadres:</span>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    <span className="username">Gebruikersnaam:</span>
                    <input type="username" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    <span className="password">Wachtwoord:</span>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="submit">Registreren</button>
                {error && <p className="error" style={{ color: "red" }}>{error}</p>}
            </form>
            <Link to="/inloggen">Log in met een bestaand account</Link>
        </div>
    );
}

export default RegistrerenPage;