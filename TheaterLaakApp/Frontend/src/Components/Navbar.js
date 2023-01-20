import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem("token");

    function uitloggen(){
        localStorage.removeItem("token");
        window.location.reload();
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
                    <li className="navbar-item"><a href="#" className="navbar-link">Programma</a></li>
                    <li className="navbar-item"><a href="/zalen" className="navbar-link">Zaalverhuur</a></li>
                    <li className="navbar-item"><a href="/doneren" className="navbar-link">Doneren</a></li>
                    <li className="navbar-item"><a href="/contact" className="navbar-link">Contact</a></li>
                    {!token && <li className="navbar-item"><a href="/inloggen" className="navbar-link">Inloggen</a></li>}
                    {token && <li className="navbar-item"><a onClick={uitloggen} className="navbar-link">uitloggen</a></li>}
                </ul>
            </div>
        </nav>

    )
}