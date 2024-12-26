import React from "react";
import Slider from "react-slick";
import secondSliderData from "../../../constants/secondSlider";

const SecondSlider = React.forwardRef((props, ref) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container -z-10">
      <Slider {...settings}  ref={ref} >
        {secondSliderData.map((item, index)=>(
          <div key={index} className=" w-full h-screen -z-10 bg-slate-500">       
          <img src={item.image} alt={item.title} className="w-full h-full object-cover " />  
          </div>

        ))}
      </Slider>
    </div>
  );
})

export default SecondSlider;