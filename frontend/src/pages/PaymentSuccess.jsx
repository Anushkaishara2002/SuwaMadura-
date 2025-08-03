import React, { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const appointmentId = searchParams.get('appointmentId');

  const { token, backendUrl } = useContext(AppContext);

  useEffect(() => {
    const confirmPayment = async () => {
      try {
        await axios.post(
          backendUrl + '/api/user/confirm-payment',
          { appointmentId },
          { headers: { token } }
        );
        toast.success('Payment successful and appointment confirmed!');
      } catch (error) {
        toast.error('Error confirming payment');
        console.log(error);
      }
    };

    if (appointmentId && token) confirmPayment();
  }, [appointmentId, token]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
      <p className="mt-4">Thank you for your appointment.</p>
    </div>
  );
};

export default PaymentSuccess;
