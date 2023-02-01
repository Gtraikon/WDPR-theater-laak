import React from "react";
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CheckToegang() {
    try {
        let token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        const userRole = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    
        if (userRole != "Admin") {
            return false;
        }
        return true;
    } catch {
        return false
    }
}

function AdminPage() {
    const navigate = useNavigate();
    if (!CheckToegang()) {
        return (
            <div className="betalenGelukt">
                <h2>U Heeft geen toegang tot deze pagina</h2>
                <button onClick={home}>Terug naar de homepage</button>
            </div>
        )
    }
    function home() {
        navigate("/");
    }
    return(
        <>
        <h1>dit is adminpage</h1>
        </>
    )
}
export default AdminPage;