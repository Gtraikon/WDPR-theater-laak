import React from "react";

function ContactPage() {
    return (
<div className="ContactPage">
        
            <div class="map">
                <img src="afbeeldingen/map.jpg" ></img>
            </div>
            <section>
                <div class="vragen">
                    <div class="vragen-content">
                    <h1>Vragen?</h1>
                    <p>stuur een ticket</p>
                    <form>
                        <label for="email">Email:</label>
                        <input type="email" id="email" placeholder="naam@domein.com" />
                        <br></br>
                        <input type="text" id="vraag" placeholder="vul hier je vraag in" />
                        <br></br>
                        <input type="button" value="Send"></input>
                    </form>
                    </div>
                </div>

                <div class="info">
                    <p><b>Adress: </b>Ferrandweg 4T  </p>
                    <p><b>Woonplaats: </b>2523 XT Den Haag</p>
                    <p><b>Telefoon: </b>070 3933348 (kassa en kantoor)</p>
                    <p><b>Email:</b>info@theaterlaak.nl</p>
                    <p><b>IBAN: </b>NL09INGB8888888888</p>
                    <p>Tnv Stichting theater Laak, Den Haag</p>
                    <p><b>Elke dag geopend van 12:00 - 23:00</b></p>
                </div>
            </section>
        </div>
    )

}
export default ContactPage;