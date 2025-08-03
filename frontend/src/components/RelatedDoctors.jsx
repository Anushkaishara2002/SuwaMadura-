import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()
  const [relDoc, setRelDocs] = useState([])

  useEffect(() => {
    if (doctors.length > 0 && speciality && docId) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      )
      setRelDocs(doctorsData)
    }
  }, [doctors, speciality, docId])

  return (
    
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className="text-3xl font-medium">Top Doctors to book</h1>
        <p className="text-1xl font-small">Discover trusted professionals and book your appointment with ease.</p>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
          {relDoc.slice(0,5).map((item,index)=>(
            <div onClick={() =>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className="border border-red-200 rounded-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transtition-all duration-500" key={index}>
              <img className="bg-red-50" src={item.image} alt="" />
              <div className="p-4">
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' :'text-gray-500'} `}>
                  <p className={`w-2 h-2 ${item.available ? ' bg-green-500' : 'bg-gray-500'} rounded-full`}></p><p>{item.available ? 'Available':'Not Available'}</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={()=>{ navigate('/doctors'); scrollTo(0,0) }} className="bg-red-100 text-gray-600 px-12 py-3 rounded-full mt-10">More..</button>

    </div>
  )
}

export default RelatedDoctors