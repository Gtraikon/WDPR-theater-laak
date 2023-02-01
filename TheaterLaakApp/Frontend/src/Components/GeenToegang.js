import React from "react";
import { Link } from 'react-router-dom';

function GeenToegang() {
    return (
        <div className="betalenGelukt">
            <h2>U Heeft geen toegang tot deze pagina</h2>
            <Link to="/"><button>Terug naar de homepage</button></Link>
        </div>
    )
}
export default GeenToegang;