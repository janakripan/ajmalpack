import React, { useRef } from 'react'
import AutomaticSlider from './shared/AutomaticSlider'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Hero() {

  const headingRef = useRef()
  const divRef = useRef()
  const paraRef = useRef()
  const buttonRef=useRef()

  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from(divRef.current,{

      
      duration:0.5,
      opacity:0,
      delay:1,


    })
    .from(headingRef.current,{
      y:30,
      duration:0.5,
      opacity:0,

    })
    .from(paraRef.current,{
      y:30,
      duration:.5,
      opacity:0,
    })
    .from(buttonRef.current,{

      y:30,
      duration:.5,
      opacity:0,

    })
  })

  
  return (


    <div className=' h-screen w-full  object-cover flex justify-center items-center  relative bg-red-300 '>

        <AutomaticSlider />

        <div ref={divRef} className='p-6  bg-blur w-8/10 lg:w-3/12 absolute  lg:top-16 mx-4  xl:top-24 lg:right-16 rounded-lg backdrop-blur-lg '>
        <h1 ref={headingRef} className='text-white font-bold text-3xl md:text-4xl lg:text-5xl  tracking-wider '
        style={{lineHeight:'65px'}}>
        Explore the <br /> eco friendly Packing <br /> Products
        </h1>
        <p ref={paraRef} className='font-medium text-base md:text-md lg:text-lg text-white tracking-wide my-2 mb-6 lg:mb-8 xl:mb-10   '>
        The latest, greatest & freshest 
        from your fave brands.
        </p>
        <div className="w-full flex justify-end ">
          <div ref={buttonRef} className=' bg-[#555135] p-1 px-3 w-fit rounded-lg'>
            <button className='w-full h-full text-white'>
              Shop Now
            </button>
          </div>
        </div>
        </div>


      
    </div>
  )
}

export default Hero
