import React from 'react'
import categoriesData from '../../constants/categoriesData'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className='w-full max-w-screen-xl mx-auto h-fit  my-14 flex flex-col items-center px-12'>

        <h2 className='text-xl md:text-3xl lg:text-4xl font-semibold text-gray-900 flex flex-col justify-center items-center mb-12 '>
        Product Categories
        <div className='w-8/12 mt-8 h-[1px] bg-gray-900 '></div>
        </h2>

        <div className='w-full h-fit mt-6  '>
            <div className='grid grid-cols-2 md:grid-cols-4  w-fit gap-x-8 mx-auto'>
               { categoriesData.map((item,index)=>(

                <Link>
                <div key={item.index} className=' h-fit w-fit flex items-center justify-center  aspect-square hover:scale-110 transition-all duration-300 ' >
                <img src={item.image} alt="" />
                

                </div>
                </Link>

               ))}

            </div>
        </div>
        
      
    </div>
  )
}

export default Categories
