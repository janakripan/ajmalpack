import React from 'react'
import image1 from '../../assets/bestseller1.png'
import image2 from '../../assets/bestseller-2.png'
import image3 from '../../assets/bestseller3.png'

function BestSeller() {
  return (
    <div className='w-full max-w-screen-xl mx-auto h-fit px-12 flex flex-col items-center'>
         <h2 className='text-xl md:text-3xl lg:text-4xl font-semibold text-gray-900 flex flex-col justify-center items-center mb-12 '>
        Best Seller
        <div className='w-8/12 mt-8 h-[1px] bg-gray-900 '></div>
        </h2>

        <div className="w-full h-fit flex flex-row justify-center mt-12 gap-10 ">
            <div>
                <img src={image1} alt="" />
            </div>
            
            <div className='flex flex-col gap-y-4'>

                <div>
                    <img src={image2} alt="" />
                </div>
                <div>
                    <img src= {image3} alt="" />

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default BestSeller
