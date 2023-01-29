import { Link } from "react-router-dom";
import { useState } from "react";
import jwt_decode from 'jwt-decode';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem("token");

    function uitloggen(){
        localStorage.removeItem("token");
        window.location.reload();
    }

    function inloggen(){
        localStorage.setItem("redirect", window.location.pathname)
    }

    return (

        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/"><img src="/afbeeldingen/Logo.png" alt="Laak theater" style={{ height: "60px" }} /></Link>
                <div className="navbar-menu" onClick={() => setIsOpen(!isOpen)}>
                    <div className={`navbar-menu-bar ${isOpen ? 'open' : ''}`} />
                    <div className={`navbar-menu-bar ${isOpen ? 'open' : ''}`} />
                    <div className={`navbar-menu-bar ${isOpen ? 'open' : ''}`} />
                </div>
                <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
                    <li className="navbar-item"><a href="/voorstellingen" className="navbar-link">Voorstellingen</a></li>
                    <li className="navbar-item"><a href="/zalen" className="navbar-link">Zaalverhuur</a></li>
                    <li className="navbar-item"><a href="/doneren" className="navbar-link">Doneren</a></li>
                    <li className="navbar-item"><a href="/contact" className="navbar-link">Contact</a></li>
                    <li className="navbar-item"><a href="/tickets" className="navbar-link">Tickets</a></li>
                    {CheckToegang() && <li className="navbar-item"><a href="/aanwezigheid" className="navbar-link">Aanwezigheid</a></li>}
                    {!token && <li className="navbar-item"><a href="/inloggen" onClick={inloggen} className="navbar-link">Inloggen</a></li>}
                    {token && <li className="navbar-item"><a onClick={uitloggen} className="navbar-link">uitloggen</a></li>}
                </ul>
            </div>
        </nav>

    )
    
}

function CheckToegang() {
    try {
        let token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        const userRole = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        if (userRole != "Medewerker") {
            return false;
        }
        return true;
    } catch {
        return false
    }


}

