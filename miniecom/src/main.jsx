import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './common/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Product from './pages/Product.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Login from './pages/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
        <Routes>
           <Route path='/' element={<MainLayout/>} >
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product-details/:pid" element={<ProductDetails />} />
                <Route path="/login" element={<Login />} />  
                <Route path="*" element={<h1>Error 404</h1>} />
           </Route>
        </Routes>
     </BrowserRouter>
  </StrictMode>,
)
