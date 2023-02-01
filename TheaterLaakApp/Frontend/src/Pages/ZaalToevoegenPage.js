import React, {useState, useEffect} from "react";
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddZaal from './../Components/AddZaal';
import GeenToegang from "../Components/GeenToegang";

function ZaalToevoegenPage(){
        const navigate = useNavigate();
    if (!localStorage.getItem("toegang")) {<GeenToegang/>}
    return(
        <>
    <h1>zaal toevoegen</h1>
    <AddZaal>
        </AddZaal>
        </>
    )
    function home() {
        navigate("/");
    }
    
    }

    export default ZaalToevoegenPage;

