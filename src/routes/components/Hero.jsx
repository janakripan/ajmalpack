import React, { useRef } from 'react'
import AutomaticSlider from './shared/AutomaticSlider'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Hero() {

  const headingRef = useRef()
  const divRef = useRef()
  const paraRef = useRef()


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
  })

  
  return (


    <div className=' h-screen w-full  object-cover flex justify-center items-center  relative bg-red-300 '>

        <AutomaticSlider />

        <div ref={divRef} className='p-6  bg-blur w-10/12 lg:w-3/12 absolute  lg:top-16  xl:top-24 lg:right-16 rounded-lg backdrop-blur-lg '>
        <h1 ref={headingRef} className='text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-relaxed tracking-wider '>
        Explore the <br /> eco friendly Packing <br /> Products
        </h1>
        <p ref={paraRef} className='font-medium text-base md:text-md lg:text-lg text-white tracking-wide my-2 mb-6 lg:mb-8 xl:mb-10   '>
        The latest, greatest & freshest 
        from your fave brands.
        </p>
        </div>


      
    </div>
  )
}

export default Hero
