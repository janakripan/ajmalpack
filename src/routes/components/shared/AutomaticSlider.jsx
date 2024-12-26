import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderData from '../../../constants/slider-1';



function AutoSlider() {
 
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 5000, 
    pauseOnHover: true, 
  };

  return (
    <div className=" h-full w-full bg-amber-400">
      
      <Slider {...settings}>
        {sliderData.map((slide) => (
          <div key={slide.id} className=" w-full h-screen bg-slate-500">       
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover " />  
            </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoSlider;