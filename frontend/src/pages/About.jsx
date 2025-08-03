import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
       <div className='text-center text-2x1 pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>


        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[260px]' src={assets.about_image} alt='' />
          <div className='flex flex-col justify-center gap-6 md:w-3/5 text-sm text-gray-600'>
            <p>
            At Suva Madura Medical Centre, we are committed to making healthcare more accessible, efficient, and patient-friendly. Our online appointment system is designed to connect patients with qualified doctors from various specialties, all in one convenient platform. With a simple and intuitive interface, patients can easily search for doctors based on their medical needs, view available time slots, and book appointments within a 7-day window. By streamlining the consultation process, we aim to reduce waiting times, improve scheduling flexibility, and enhance the overall healthcare experience. Suva Madura Medical Centre is here to ensure that quality medical care is just a few clicks away.

            </p>
          </div>
        </div>
        <div className='text-x1 my-4'>
          <p>Why <span className='text-gray-700 font-semibold'>Choose US</span></p>
        </div>
        <div className='flex flex-col md:flex-row mb:20'>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-red-200 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Efficiency:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-red-200 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Convenience:</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-red-200 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Personalization</b>
            <p>Tailored recommandations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
    </div>
  )
}

export default About