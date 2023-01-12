import React from 'react';

import Superslider from '../Components/Imageslider';
import ImageSlider from '../Components/HomeImageSlider';
import Carousel from '../Components/SimpleSlider';


function HomePage() {
  return (
    <body>
    <h1>Uitgelichte voorstellingen</h1>
    <div class="container">
      
     <div class="feature">
      <img src="afbeeldingen/cats.png" alt="cats"/>
      <p>Cats</p>
    </div>

    <div class="feature">
      <img src="afbeeldingen/lionking.png" alt="LK"/>
      <p>The lionking</p>
    </div>

    <div class="feature">
      <img src="afbeeldingen/soldaat.png" alt="soldaat"/>
      <p>Solaat van Oranje</p>
    </div>
      
      
      
    </div>
    </body>
  );
}
export default HomePage;