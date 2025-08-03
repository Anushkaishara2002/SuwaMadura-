import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-5'>
       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-1 my-10 mt-40 text-sm'>
          
        <div >
        <img className="mb-5 w-40" src={assets.logo} alt="" />
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Suva Madura Medical Centre aims to simplify and enhance the process of scheduling medical consultations.</p>
        </div>
        
        <div>
        <p className='text-x1 font-medium mb-5'>COMPANY</p>
           <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
           </ul>
            
        </div>
        
        <div>
        <p className='text-x1 font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+94740474030</li>
                <li>suwamadura123@gmail.com</li>
            </ul>
        </div>
        </div> 
    </div>
  )
}

export default Footer