import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import image1 from '../../assets/popular.png'

function PopularCategory() {
  return (
    <div className='w-full max-w-screen-xl mx-auto h-fit px-3 lg:px-12  flex flex-col items-center'>

        <div className="w-10/12  flex flex-col  md:flex-row justify-between items-center my-10 ">

                <h3 className='text-xl md:text-3xl flex items-center mb-8 font-semibold text-gray-900 '>
                Explore popular category
                </h3>
                <div className="h-fit w-fit flex items-center">
                <Link >
                <span className='font-semibold text-base md:text-lg flex  flex-row items-center hover:scale-105 transition-all duration-300'> <span className='hidden md:block px-2'>| </span> See all <ChevronRightIcon/></span> 
                </Link>

                </div>
      
        </div>
        <div className='w-fit h-fit '>

            <img src={image1} alt="" />

        </div>

        <div className=' my-12 w-full flex justify-center '>
            <div className='border-[2px] border-[#555135] p-1 px-3 rounded-md hover:scale-105 hover:drop-shadow-lg transition-all duration-300'>
            <button className=' w-full h-full text-base text-[#555135] '>
                
                Download E-Brochure
                
            </button>
            </div>
        </div>

        
    </div>
  )
}

export default PopularCategory
