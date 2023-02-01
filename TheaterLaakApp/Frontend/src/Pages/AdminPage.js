import React from "react";
import { Link } from 'react-router-dom';
import GeenToegang from "../Components/GeenToegang";
import getToegang from "../Components/GetToegang";

function AdminPage() {
    
    if (!getToegang()) { return <GeenToegang/>}
    return(
        <div className="betalenGelukt">
            <h2>Adminportaal</h2>
            <Link to="/AddVoorstelling"><button>Voorstelling toevoegen</button></Link>
            <Link to="/AddTijdsloten"><button>Tijdslot toevoegen</button></Link>
        </div>
    )
}
export default AdminPage;