import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const Myappointments = () => {

  const { backendUrl, token, getDoctorsData } = useContext(AppContext)

  const [appointments, setAppointments] = useState([])
  const months = [" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })

      if (data.success) {
        setAppointments(data.appointments.reverse())
        console.log(data.appointments);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + '/api/user/cancel-appointment',
        { appointmentId, userId: JSON.parse(atob(token.split('.')[1])).id },
        { headers: { token } }
      );

      if (data.success) {
        toast.success('Appointment Cancelled');
        getDoctorsData();

        // Update appointment status locally
        setAppointments((prev) =>
          prev.map((appointment) =>
            appointment._id === appointmentId
              ? { ...appointment, cancelled: true }
              : appointment
          )
        );
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const initPay = async (sessionId) => {
  const stripe = await window.Stripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  await stripe.redirectToCheckout({ sessionId });
}


  // payment
  const appointmentPayment = async (appointmentId) => {
  try {
    const { data } = await axios.post(
      backendUrl + '/api/user/payment',
      { appointmentId },
      { headers: { token } }
    );

    if (data.success) {
      initPay(data.sessionId);
    } else {
      toast.error(data.message);
    }

  } catch (error) {
    toast.error('Payment initiation failed');
    console.log(error);
  }
}


  useEffect(() => {
    if (token) {
      getUserAppointments()
    }
  }, [token])

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>
        My Appointments
      </p>
      <div>
        {appointments.map((item, index) => (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-indigo-50' src={item.docData.image} alt="" />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.docData.name}</p>
              <p>{item.docData.speciality}</p>
              <p className='text-zinc-700 font-medium mt-1'>Address:</p>
              <p className='text-xs'>{item.docData.address.line1}</p>
              <p className='text-xs'>{item.docData.address.line2}</p>
              <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end'>
              {!item.cancelled && item.payment && <button className='sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50'>Paid</button>}
              {!item.cancelled && !item.payment && <button onClick={() => appointmentPayment(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-blue-300 hover:text-white transition-all duration-300'>Pay Online</button>}
              <button
                onClick={() => cancelAppointment(item._id)}
                disabled={item.cancelled}
                className={`text-sm text-stone-500 text-center sm:min-w-48 py-2 border transition-all duration-300 ${item.cancelled ? 'bg-gray-200 cursor-not-allowed' : 'hover:bg-red-300 hover:text-white'
                  }`}
              >
                {item.cancelled ? 'Cancelled' : 'Cancel appointment'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Myappointments