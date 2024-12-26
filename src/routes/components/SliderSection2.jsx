import React, { useRef } from 'react'
import SecondSlider from './shared/SecondSlider'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function SliderSection2() {

  const sliderRef = useRef(null); // Create a ref for the slider

  const handleNext = () => {
    sliderRef.current.slickNext(); // Go to the next slide
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev(); // Go to the previous slide
  };


  return (
    <div className='w-full h-screen relative'>

       <SecondSlider ref={sliderRef} />

       <div className="w-full p-3 z-20 flex flex-row justify-center lg:justify-between absolute top-0 translate-y-[50vh] px-28 ">
       <button onClick={handlePrev}  className='hidden lg:block'>
          <KeyboardArrowLeftIcon style={{fontSize: '60px', fontWeight: '100' }} />
        </button>
        <div className="w-fit p-3 backdrop-blur-md flex items-center rounded-lg ">
        <h2 className='text-xl md:text-3xl lg:text-4xl font-semibold text-center whitespace-nowrap tracking-widest text-gray-900 '>
            We're using bamboo products.
            </h2>
        </div>
        <button onClick={handleNext} className='hidden lg:block'>
          <KeyboardArrowRightIcon   style={{fontSize: '60px', fontWeight:' 100' }} />
        </button>
            
       </div>
      
    </div>
  )
}

export default SliderSection2
