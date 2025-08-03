import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
         <h1 className="text-3xl font-medium">Find Specialists </h1>
         <p className="text-1xl font-small">Find the right specialist for your health needs with just a few clicks</p>
         <div className="flex sm:justify-center gap-4 pt-5 w-full">
            {specialityData.map((item,index)=>(
               <Link onClick={()=>scrollTo(0,0)} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-200" key={index} to={`/doctors/${item.speciality}`}>
                   <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
                   <p>{item.speciality}</p>
               </Link> 
            ))}
         </div>
    </div>
  )
}

export default SpecialityMenu