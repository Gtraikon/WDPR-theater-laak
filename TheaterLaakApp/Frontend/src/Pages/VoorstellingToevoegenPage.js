import React, {useState, useEffect} from "react";
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default VoorstellingenToevoegenPage;


function VoorstellingenToevoegenPage(){
    localStorage.getItem("toegang")
    const navigate = useNavigate();
    if (!localStorage.getItem("toegang")) {
        return (
<>


            <div className="betalenGelukt">
                <h2>U Heeft geen toegang tot deze pagina</h2>
                <button onClick={home}>Terug naar de homepage</button>
            </div>
            </>
        )
    }
    function home() {
        navigate("/");
    }
    
    }


