import React, { useRef } from 'react'
import navbarData from '../../constants/navbarData'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import NavboxGsap from '../../animations/NavboxGsap';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';



function Navbox({isMenuOpen, toggleMenu}) {
    const menuRef = useRef(null);

    NavboxGsap(isMenuOpen,menuRef);

  return (
    <div ref={menuRef} className={`lg:hidden bg-[#958A47] w-8/12 md:w-5/12 h-[80vh] rounded-r-sm flex flex-col justify-between pb-6  opacity-100 absolute left-0 top-[80px] z-20`}
   
      >

<ul className=' flex flex-col  items-center w-full justify-betw  '>
                {navbarData.map((item)=>(
                    <NavLink onClick={toggleMenu} key={item.id}  to={item.route}  className={({ isActive }) => 
                        
                        clsx(
                            "text-[#555135] hover:text-white rounded-md hover:bg-[#555135] w-full transition-all ease-in-out whitespace-nowrap  hover:cursor-pointer duration-300 group px-4 ",
                            isActive ? "text-[#555135]" : ""
                        ) }>
                        <li className='w-full h-full flex items-center justify-end text-white p-4'>
                        {item.title}
                    </li>
                    <div className=' w-full h-[1px] bg-white group-hover:hidden transition-all ease-in-out duration-300 '>
                    </div>
                    </NavLink>
                ))}
            </ul>

            <div className='w-full flex flex-row  items-center justify-around px-14'>
              <button>
                <InstagramIcon style={{color:'white', fontSize:'50px'}}/>
              </button>
              <button>
                <XIcon  style={{color:'white', fontSize:'50px'}}/>
              </button>
              <button>
                <FacebookIcon  style={{color:'white', fontSize:'50px'}}/>
              </button>

            </div>
      
    </div>
  )
}

export default Navbox
