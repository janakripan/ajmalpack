import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./routes/components/Navbar"
import Footer from "./routes/components/Footer"
import '@fontsource/roboto'; //
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





function App() {


  return (
 <>
 <Navbar/>


    
<div id="detail">
 <Outlet/>
</div>

<Footer/>
</>


  )
}

export default App
