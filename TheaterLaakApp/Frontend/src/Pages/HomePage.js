import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

function HomePage() {
  
  return (
    
    <div className='HomePage'>
      
        <h1>Beleef het theater!</h1>
    <div className="uitlichting-container">
     <div class="uitlichting-feature">
      <img src="afbeeldingen/cats.png" alt="cats"/>
      <p>Cats</p>
    </div>
    <div class="uitlichting-feature">
      <img src="afbeeldingen/lionking.png" alt="LK"/>
      <p>The lionking</p>
    </div>
    <div class="uitlichting-feature">
      <img src="afbeeldingen/soldaat.png" alt="soldaat"/>
      <p>Soldaat van Oranje</p>
    </div>
          
      </div>
    </div>
  );
}
export default HomePage;