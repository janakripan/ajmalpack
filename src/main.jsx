import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './routes/Home.jsx';
import { CssBaseline } from '@mui/material';
import About from './routes/About.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
     <BrowserRouter>
      <CssBaseline/>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={ <Home/> } />
          <Route path="about" element={<About/>}  />
        
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>

)
