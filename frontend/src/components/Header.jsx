import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-red-200 rounded-lg px-6 md:px-10 lg:px-20'>
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
           <p className='text-7x1 md:text-8x1 lg:text-9x1 text-black font-semibold leading-tight md:leading-tight lg:leading-tight' style={{ fontSize: '3rem' }}>
            Book Appointment <br /> with <p className='text-red-400'>Suwa Madura</p>
           </p>
           <div className='flex flex-col md:flex-row items-center gap-3 text-black text-sm font-light'>
            <p>
            Welcome to Suwa Madura Medical Center, your trusted partner in health and wellness. <br /> We are committed to providing compassionate, high-quality medical care with a patient-centered approach
            </p>
           </div>
           <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transion-all duration-300'>
           <b>Book Appointment Here <img className='w-3' src={assets.arrow_icon} alt="" /></b>
           </a>
        </div>
        <div className='md:w-1/2 relative'> 
            <img className='w-full md:absolute bottom-20 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header