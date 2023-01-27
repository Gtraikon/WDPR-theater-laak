import React from "react";
import { useNavigate } from "react-router-dom";

function NietGevondenPage() {
    const navigate = useNavigate();

    function home(){
        navigate("/");
    }

    return (
        <div className="betalenGelukt">
            <h1 style={{marginBottom: "30px"}}>Deze Pagina Bestaat Niet!</h1>
            <button onClick={home}>Terug naar de homepage</button>
        </div>
    )

}
export default NietGevondenPage;