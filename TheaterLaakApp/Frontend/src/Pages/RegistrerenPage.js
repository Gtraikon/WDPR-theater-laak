import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

function RegistrerenPage() {
    const errorTranslations = {
        'PasswordTooShort': 'Het wachtwoord is te kort',
        'PasswordRequiresNonAlphanumeric': 'Het wachtwoord moet minstens één speciaal teken bevatten',
        'PasswordRequiresDigit': 'Het wachtwoord moet minstens één cijfer bevatten',
        'PasswordRequiresLower': 'Het wachtwoord moet minstens één kleine letter bevatten',
        'PasswordRequiresUpper': 'Het wachtwoord moet minstens één hoofdletter bevatten',
        'PasswordRequiresUniqueChars': 'Het wachtwoord moet minstens 1 uniek teken bevatten',
        "InvalidUserName": "Uw gebruikersnaam kan alleen letters of cijfers bevatten",
        "DuplicateUserName": "Deze gebruikersnaam bestaat al"
    }

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

        if (email) {
            try {
                const response = await axios.post('https://localhost:7020/api/account/registreer', {
                    Email: email,
                    UserName: username,
                    Password: password
                });

                if (response.status === 201) {
                    navigate("/inloggen");
                }
            } catch (error) {
                if (error.response.status === 400) {
                    const errors = error.response.data.errors;
                    const translatedErrors = errors.map(error => {
                        return {
                            code: error.code,
                            description: errorTranslations[error.code]
                        }
                    });
                    setError(translatedErrors[0].description);
                } else {
                    setError("Er is iets verkeerd gegeaan, probeer het later opnieuw.");
                }
            }
        } else {
            setError("Een e-mailadres moet ingevoerd worden");
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