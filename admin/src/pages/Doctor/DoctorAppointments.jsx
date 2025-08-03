import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorAppointments = () => {

  const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext)
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) getAppointments()
  }, [dToken])

  return (
    <div className='w-full max-w-6xl mx-auto p-4'>

      <p className='mb-4 text-xl font-semibold'>All Appointments</p>

      <div className='bg-white border rounded shadow-sm text-sm max-h-[80vh] min-h-[50vh] overflow-y-auto'>
        
        {/* Header */}
        <div className='grid grid-cols-7 gap-4 py-3 px-6 border-b bg-gray-100 font-medium sticky top-0 z-10'>
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {/* Appointment Rows */}
        {appointments.slice().reverse().map((item, index) => (
          <div
            key={index}
            className='grid grid-cols-7 gap-4 items-center py-3 px-6 border-b hover:bg-gray-50 text-gray-700'
          >
            <p>{index + 1}</p>
            <div className='flex items-center gap-2'>
              <img className='w-8 h-8 rounded-full object-cover' src={item.userData.image} alt="patient" />
              <span>{item.userData.name}</span>
            </div>
            <p>
              <span className={`text-xs px-2 py-1 rounded-full ${item.payment ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-700'} border`}>
                {item.payment ? 'Online' : 'Cash'}
              </span>
            </p>
            <p>{calculateAge(item.userData.dob)}</p>
            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
            <p>{currency}{item.amount}</p>
            <div>
              {item.cancelled ? (
                <p className='text-red-500 text-xs font-semibold'>Cancelled</p>
              ) : item.isCompleted ? (
                <p className='text-green-600 text-xs font-semibold'>Completed</p>
              ) : (
                <div className='flex gap-2'>
                  <img onClick={() => cancelAppointment(item._id)} className='w-6 h-6 cursor-pointer' src={assets.cancel_icon} alt="Cancel" />
                  <img onClick={() => completeAppointment(item._id)} className='w-6 h-6 cursor-pointer' src={assets.tick_icon} alt="Complete" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorAppointments

