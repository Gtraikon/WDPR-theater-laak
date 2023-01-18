import React, { useEffect, useState } from "react";
import ZaalHurenFormulier from "../Components/ZaalReserveerForm";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";


function ZaalReserveerPage() {
    const [data, setData] = useState('');
    const [zaalnummer, setZaalnummer] = useState('');
    const location = useLocation();

    useEffect(() => {
        const queryParam = new URLSearchParams(location.search);
        setZaalnummer(queryParam.get('ZaalNummer'));


        axios.get(`https://localhost:7020/api/zalen/${zaalnummer}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },);
    return (
        <body>

            <div class="bars">
                <div class="menu-container">
                    <><div class="item1"><h1>Zaal {data.zaalNummer}</h1>  </div>
                        <div class="item2">
                            <img src={`afbeeldingen/${data.zaalImage}B.jpg`} alt="cover" /></div><div class="item3">Ruimtespecificaties<ul>
                                <li>capaciteit: {data.capaciteit}</li>
                                <li>eersterangs: {data.eersterangstoelen}</li>
                                <li>tweederang: {data.tweedeRangStoelen}</li>
                                <li>derderang: {data.derdeRangStoelen}</li>
                            </ul>
                        </div><div class="item4">Reserveren
                            <ZaalHurenFormulier></ZaalHurenFormulier></div><div class="item5">
                            <h2>lorem pisume</h2>
                            <p>Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot "Hier uw tekst, hier uw tekst" wat het tot min of meer leesbaar nederlands maakt. Veel desktop publishing pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum als hun standaard model tekst, en een zoekopdracht naar "lorem ipsum" ontsluit veel websites die nog in aanbouw zijn. Verscheidene versies hebben zich ontwikkeld in de loop van de jaren, soms per ongeluk soms expres (ingevoegde humor en dergelijke).
                            </p>
                        </div></>
                </div>
            </div>

        </body>
    )
}
export default ZaalReserveerPage;