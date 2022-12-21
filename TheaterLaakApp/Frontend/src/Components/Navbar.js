import React, { useEffect, useState } from "react";

export default function Navbar() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Retrieve the user's name from local storage
        const storedName = localStorage.getItem("username");
        setUsername(storedName);
      }, []); // Only run the effect once

    return (
        <header>
            <h1><a href="/">Theater Laak</a></h1>
            <nav>
                <ul>
                    <li><a href="#">Programma</a></li>
                    <li><a href="#">Voorstellingen</a></li>
                    <li><a href="#">Tickets</a></li>
                    <li><a href="#">Over ons</a></li>
                    <li><a href="/login">{username}</a></li>
                </ul>
            </nav>
        </header>
    )
}