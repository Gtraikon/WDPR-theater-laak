export default function Navbar() {
    return (
        <header>
            <nav>
                
                    <img src="/afbeeldingen/Logo.png" alt="Laak theater" href="http://localhost:3000"/>

                <a href="#">Programma</a>
                <a href="#">Tickets</a>  
                <a href="http://localhost:3000">Home</a>
                <a href="/zalen">Zaalverhuur</a>
                <a href="#">Donateurs</a>
                <div class="dropdown">
                        <button class="dropbtn">More</button>
                        <div class="dropdown-content">
                            <a href="#">Over ons</a>
                            <a href="http://localhost:3000/contact">Contact</a>
                            <a href="#">Voorstellingen</a>
                        </div>
                        </div>
                
            </nav>
        </header>
    )
}