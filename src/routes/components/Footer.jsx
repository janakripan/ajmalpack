import React from 'react'
import logo from '../../assets/footerLogo.png'
import socialMedia from '../../constants/socialMedia'
import { Link } from 'react-router-dom'
import { company, support,products } from '../../constants/footerLinks'

function Footer() {
  return (
    <div className='w-full h-fit bg-[#958A47] rounded-md  '>

      <div className='max-w-screen-xl mx-auto px-4 py-20 flex flex-col md:flex-row'>

        <div className=' h-fit w-full md:w-3/12  '>
              <img src={logo}  className=' w-auto h-auto' alt="" />

              <div className='mt-16'>
              <span className='text-balance text-sm font-extralight tracking-widest text-white  '>
              Are you tired of struggling to pack for your trips? Meet your new best friend: <br /> The Ultimate Packing Assistant!
              </span>

              <ul className='hidden  w-full h-fit my-4 md:flex flex-row  items-center gap-3'>
                {socialMedia.map((item,index)=>(
                  <li key={index}>
                    <Link to={item.link}>
                    <div>
                      <img src={item.icon} alt="" />
                    </div>
                    </Link>
                
                  </li>
                ))}

              </ul>
              
              
            </div>

          

        </div>


        <div className=' flex-1  flex flex-col md:flex-row justify-around items-start p-2 my-8 md:my-0 md:px-20 gap-y-8 '>
               
                <ul className='flex flex-col gap-y-7'>
                  <h6 className='text-lg text-[#555135] font-bold mb-5 mt-8 md:mt-0 '>
                    Products
                  </h6>

                  {products.map((item,index)=>(
                    <li key={index} className='text-base font-normal text-white hover:text-[#555135] ' >
                      <Link to={item.link}>
                      {item.title}
                      </Link>                      
                    </li>
                  ))}
                </ul>

                <ul className='flex flex-col gap-y-7'>
                  <h6 className='text-lg text-[#555135] font-bold mb-5 mt-8 md:mt-0 '>
                    Company
                  </h6>

                  {company.map((item,index)=>(
                    <li key={index} className='text-base font-normal text-white hover:text-[#555135]' >
                      <Link to={item.link}>
                      {item.title}
                      </Link>                      
                    </li>
                  ))}
                </ul>

                <ul className='flex flex-col gap-y-7'>
                  <h6 className='text-lg text-[#555135] font-bold mb-5  mt-8 md:mt-0'>
                    Support
                  </h6>

                  {support.map((item,index)=>(
                    <li key={index} className='text-base font-normal text-white hover:text-[#555135]' >
                      <Link to={item.link}>
                      {item.title}
                      </Link>                      
                    </li>
                  ))}
                </ul>


        </div>

        <ul className='md:hidden  w-full h-fit my-4 flex flex-row  items-center justify-center scale-110 gap-3'>
                {socialMedia.map((item,index)=>(
                  <li key={index}>
                    <Link to={item.link}>
                    <div>
                      <img src={item.icon} alt="" />
                    </div>
                    </Link>
                
                  </li>
                ))}

              </ul>

      </div>
      
    </div>
  )
}

export default Footer
