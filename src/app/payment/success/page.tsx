'use client';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import successAnimation from '@/app/payment/images/payment_sucessful.json';

type PaymentResponse = {
  order_id: string;
  tracking_id: string;
  order_status: string;
};

export default function PaymentSuccess() {
  const [data, setData] = useState<PaymentResponse | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('paymentResponse');
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="container mx-auto max-w-md shadow-md rounded-lg">
      <div className="p-6 flex flex-col items-center">
        <div >
          <Lottie
            animationData={successAnimation}
            loop={false}
            style={{ height: "400px", width: "auto" }}
          />
        </div>
        {data && (
          <div className="mt-6 text-center">
            <p><strong>Order ID:</strong> {data.order_id}</p>
            <p><strong>Tracking ID:</strong> {data.tracking_id}</p>
            <p><strong>Status:</strong> {data.order_status}</p>
          </div>
        )}
      </div>
    </div>
  );
}
