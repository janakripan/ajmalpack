import logo from '../../assets/logo.png'
import dropdownData from '../../constants/dropdownData'
import navbarData from '../../constants/navbarData';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {  useState } from 'react';
import Navbox from './Navbox';








function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);




    const toggleMenu = () => {
      setIsMenuOpen((prevState) => !prevState);
      };

    const validationSchema = Yup.object({
        searchItem: Yup.string()
          .required('Search is required')
          .min(3, 'Search term must be at least 3 characters'), 
          selectedValue: Yup.string().required('Please select a category'),
      });

       
  const formik = useFormik({
    initialValues: {
      searchItem: '',
      selectedValue: '', 
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Search Submitted:', values.searchItem);
      alert(`Searching for: ${values.searchItem}`);
    },
  });


        


      

  return (
    <div className='w-full   h-20 bg-[#958A47] relative  '>
        <div className="w-full h-full  max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-12 ">

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white ">
            <div className={`transition-transform duration-300 transform ${
                                   isMenuOpen ? "scale-110 rotate-90" : "scale-100 rotate-0"
                                 }`}>
           {isMenuOpen ? (
              <CloseIcon  style={{ color: 'white' }} /> // Show Close Icon when the menu is open
            ) : (
              <MenuIcon  style={{ color: 'white' }} /> // Show Menu Icon when the menu is closed
            )}

            </div>
            
          </button>
        </div>
        <Navbox isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />


            <div className=' w-4/12  lg:w-2/12'>
                <img src={logo} alt="" className='w-full' />
            </div>

            <form action="" onSubmit={formik.handleSubmit}  className='flex flex-row  w-0 lg:w-4/12 justify-center'>

                <div className='hidden lg:flex flex-row justify-center h-10 w-full '>
                    <label htmlFor="searchItem" className='sr-only'> searchBar</label>
                <input
                  type="search"
                  id="searchItem"
                  name="searchItem"
                  placeholder="Search Ajmal Products "
                  value={formik.values.searchItem}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`h-full rounded-l-md pl-2 w-full border ${
                    formik.touched.searchItem && formik.errors.searchItem ? 'border-red-500' : 'border-gray-300'
                  }`} 
                  />
                   {formik.touched.searchItem && formik.errors.searchItem && (
                         <span className="text-red-500 text-sm absolute mt-10 ">{formik.errors.searchItem}</span>
                     )}
                  <div className='h-10 w-[.5px] bg-[#958A47] '></div>

                  <div>
                     <label htmlFor="selectedValue" className='sr-only'> Category</label>

                        <select id="selectedValue"
                                name="selectedValue"
                                value={formik.values.selectedValue}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`h-full border-[1px] border-[#555135] text-sm ${
                                  formik.touched.selectedValue && formik.errors.selectedValue ? 'border-red-500' : ''
                                }`}
                            
                            >

                            <option value="" disabled >
                            Category
                            </option>
                            {dropdownData.map((item)=>(
                                <option key={item.id} value={item.name}>
                                    {item.name}
                                </option>
                            ))}


                        </select>
                        {formik.touched.selectedValue && formik.errors.selectedValue && (
              <span className="text-red-500 text-sm absolute mt-10 ">{formik.errors.selectedValue}</span>
            )}
                    

                  </div>
                  

                  <button type='submit'>
                     <div  className='h-10 aspect-square bg-[#555135] flex items-center justify-center rounded-r-md  '>

                        <SearchIcon  style={{ color:"#FFCC00" }} />

                    
                     </div>
                  </button>
                    
                    
                            

                </div>

                

            </form>

           
           <ul className=' hidden  lg:flex flex-row  items-center w-4/12 justify-between'>
                {navbarData.map((item)=>(
                    <NavLink  key={item.id}  to={item.route}  className={({ isActive }) => 
                        
                        clsx(
                            "text-white hover:text-[#555135] lg:leading-tight whitespace-nowrap px-1 hover:cursor-pointer ",
                            isActive ? "text-[#555135]" : ""
                        ) }>
                        <li 
                    className=' '
                    >
                        {item.title}
                    </li>
                    </NavLink>
                ))}
            </ul>
           

            <div>
                <button className=' text-white hover:text-[#555135]  '>
                    <AddShoppingCartIcon style={{ color:"#FFCC00" }} />  Cart
                </button>
            </div>



        </div>
      
    </div>
  )
}

export default Navbar
