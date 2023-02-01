import React from 'react';;

function HomePage() {

  console.log(localStorage.getItem("toegang"))
  return (

    <div className='HomePage'>

      <h1>Beleef het theater!</h1>
      <div className="uitlichting-container">
        <div class="uitlichting-feature">
          <img src="afbeeldingen/cats.png" alt="The Cats" />
          <p>Cats</p>
        </div>
        <div class="uitlichting-feature">
          <img src="afbeeldingen/lionking.png" alt="The Lion King" />
          <p>The lionking</p>
        </div>
        <div class="uitlichting-feature">
          <img src="afbeeldingen/soldaat.png" alt="Soldaat van Oranje" />
          <p>Soldaat van Oranje</p>
        </div>

      </div>
    </div>
  );
}
export default HomePage;