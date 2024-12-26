import React  from 'react'
import iconData from '../../constants/welcome'
import { motion, useScroll, useTransform } from "framer-motion";





function Welcome() {

  

  




    




  return (
    <div className=' max-w-screen-xl mx-auto mt-16 '>

        <div className='w-full h-fit p-4 flex justify-center items-center gap-3 md:gap-6 '>

            {iconData.map((item)=>(
                <motion.div  key={item.id} 
                whileInView="visible"
                initial= "hidden"
                variants={{
                  hidden: { opacity: 0, y: 20 }, 
                  visible: { opacity: 1, y: 0, transition: { 
                   
                      duration: 0.5,
                      delay: item.id * 0.2, // Delay based on the item's position
                    
                  } }, 
                }
                  
                }
                viewport={{once: true , amount: 0.2}}
                
                className=' w-10 md:w-14 aspect-square'
               >

                    <img src={item.image} alt="" />

                </motion.div>
            ))}




        </div>
        <div className='w-full h-fit p-4  mt-12 flex flex-col items-center '>
          <h2 className=' text-gray-900 text-xl md:text-3xl lg:text-4xl font-bold  text-center ' >Welcome to Ajmal Packing official website</h2>
          <p className='text-base text-center font-normal lg:w-[1006px] tracking-tight text-balance my-6'>
          Ajmal Trading LLC is a UAE-based company that's been in the packing products game for a decade. We offer top-notch packing products like foam, aluminum containers, and clear disposable items that meet international hygiene standards. Our specialty lies in products for hospitals, hotels, and the catering industry, but they're also widely used for domestic purposes. Our products are crafted with high-end materials.
          </p>


        </div>

      
    </div>
  )
}

export default Welcome
