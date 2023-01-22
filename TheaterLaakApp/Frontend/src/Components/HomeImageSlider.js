import React from 'react';
import Slider from 'react-slick';

 const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    vertical: false
  };

  return (
    <Slider {...settings}>
        
      <div>
        <img src="afbeeldingen/cats.png" alt="cats" />
      </div>
      <div>
        <img src="afbeeldingen/lionking.png" alt="LK" />
      </div>
      <div>
        <img src="afbeeldingen/soldaat.png" alt="soldaat" />
      </div>
      
    </Slider>
  );
};

export default ImageSlider;
