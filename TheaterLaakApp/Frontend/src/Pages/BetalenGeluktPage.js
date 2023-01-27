import React from "react";
import { useNavigate, Link } from "react-router-dom";

function BetalenGeluktPage() {
    const navigate = useNavigate();

    function home(){
        navigate("/");
    }

    return (
        <div className="betalenGelukt">
            <h2>Het Betalen is gelukt!</h2>
            <button onClick={home}>Terug naar de homepage</button>
        </div>
    )

}
export default BetalenGeluktPage;