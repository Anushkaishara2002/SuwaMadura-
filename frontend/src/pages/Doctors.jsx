import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext' // <- use this instead of static import

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const navigate = useNavigate()

  const { doctors } = useContext(AppContext) // <- dynamic doctor data from context

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse Specialist Here</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-red-300 text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        
        {/* FILTER BUTTONS */}
        <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          {["General physician", "Gynecologist", "Dermatologist", "Pediatricians", "Neurologist", "Gastroenterologist"].map((spec, index) => (
            <p 
              key={index}
              onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)} 
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === spec ? "bg-red-100 text-black" : ""}`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* DOCTOR CARDS */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterDoc.length > 0 ? (
              filterDoc.map((item, index) => (
                <div onClick={() => navigate(`/appointment/${item._id}`)} className="border border-red-200 rounded-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transtition-all duration-500" key={index}>
                  <img className="bg-red-50" src={item.image} alt={item.name} />
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-center text-green-500">
                      <p className="w-2 h-2 bg-green-500 rounded-full"></p><p>Available</p>
                    </div>
                    <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                    <p className="text-gray-600 text-sm">{item.speciality}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">Loading doctor info...</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
