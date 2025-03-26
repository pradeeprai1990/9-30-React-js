import React from 'react'
import { FaCartPlus } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
//Craete Export
export default function Header({cname,phone,user,children}) {
 

 
  return (
  
      <header>
        {children}
        <nav className='bg-gray-800 p-4'>
          <div className='max-w-[1320px] mx-auto flex justify-between items-center'>
            <div>
              <h1 className='text-white text-2xl font-bold'>
               {cname}
               {phone}
              </h1>
            </div>
            <div>
              <ul className='flex space-x-5'>
                <li>
                  <a href='#' className='text-white'>Home</a>
                </li>
                <li>
                  <a href='#' className='text-white'>About</a>
                </li>
                <li>
                  <a href='#' className='text-white'>Contact</a>
                </li>
                <li>
                  <a href='#' className='text-white flex items-center gap-3'>Cart <FaCartPlus /></a>
                </li>
                <li className='flex gap-3 items-center'>
                    <ImFacebook2 className='text-white text-2xl'/>
                    <ImTwitter className='text-white text-2xl'/>
                    <ImInstagram className='text-white text-2xl'/>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
   
  )
}
