import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import { BrowserRouter, Route,  Routes } from 'react-router'
import Contact from './pages/Contact.jsx'
import Error404 from './pages/Error404.jsx'
import MainLayout from './common/MainLayout.jsx'
import Pricing from './pages/Pricing.jsx'
import Login from './pages/Login.jsx'
import Thankyou from './pages/Thankyou.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>

                <Route path='/' element={<Home/>}/>
                <Route path='/about-us' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/price' element={<Pricing/>}/>
                <Route path='*' element={<Error404/>}/>

          </Route>

          <Route path='/login' element={<Login/>}/>
          <Route path='/thank-you' element={<Thankyou/>}/>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
