
import React, { useState, useEffect } from 'react';
const Superslider=()=>{
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName('mySlides');
        let dots = document.getElementsByClassName('dot');
        if (n > slides.length) {
          setSlideIndex(1);
        }
        if (n < 1) {
          setSlideIndex(slides.length);
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(' active', '');
        }
        //slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' active';
      }
  
      showSlides(slideIndex);
    }, [slideIndex]);
return(
    


 <>
<div class="slideshow-container">

  
  <div class="mySlides fade">
        <div class="numbertext">1 / 3</div>
    <img src="afbeeldingen/cats.png" alt="cats" style= {{width: '100'}}/>
    <div class="text">Caption Text</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="afbeeldingen/lionking.png" alt="LK" style={{ width: '100%' }} />
    <div class="text">Caption Two</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="afbeeldingen/soldaat.png" alt="soldaat" style={{width:'100%'}}/>
    <div class="text">Caption Three</div>
  </div>

  
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br/>


<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>

</>

 );
};
export default Superslider;