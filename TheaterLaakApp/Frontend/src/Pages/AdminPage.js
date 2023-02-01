import React from "react";
import { Link } from 'react-router-dom';
import GeenToegang from "../Components/GeenToegang";

function AdminPage() {
  if (!localStorage.getItem("toegang")) {<GeenToegang/>}

    return(
        <div className="betalenGelukt">
            <h2>Adminportaal</h2>
            <Link to="/AddZaal"><button>Zalen toevoegen</button></Link>
        </div>
    )
}
export default AdminPage;