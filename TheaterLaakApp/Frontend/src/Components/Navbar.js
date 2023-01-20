import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <nav>
                <Link to="/"><img src="/afbeeldingen/Logo.png" alt="Laak theater" style={{height: "60px"}}/></Link>
                <ul>
                    <li><a href="#">Programma</a></li>
                    <li><a href="/tickets">Tickets</a></li>
                    <li><a href="/zalen">Zaalverhuur</a></li>
                    <li><a href="/doneren">Doneren</a></li>
                    <li><a href="/inloggen">Inloggen</a></li>
                    <li><a href="/registreren">registreren</a></li>
                    <li><div className="dropdown">
                        <button className="dropbtn">More</button>
                        <div className="dropdown-content">
                            <a href="#">Over ons</a>
                            <a href="/contact">Contact</a>
                            <a href="/voorstellingen">Voorstellingen</a>
                        </div>
                    </div></li>
                </ul>
            </nav>
        </header>
    )
}