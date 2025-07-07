'use client';
import { useEffect, useState } from 'react';

type PaymentResponse = {
  order_id: string;
  tracking_id: string;
  order_status: string;
};

export default function PaymentSuccess() {
  const [data, setData] = useState<PaymentResponse | null>(null);

  useEffect(() => {
    // You can extract query params or hit an API if needed
    const stored = sessionStorage.getItem('paymentResponse');
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="container mx-auto max-w-md bg-white shadow-md rounded-lg">
    <div className="p-6">
      <h1 className="text-green-600 m-20 p-20 text-2xl font-bold text-center">Payment Successful ✅</h1>
      {data && (
        <div className="mt-4">
          <p><strong>Order ID:</strong> {data?.order_id}</p>
          <p><strong>Tracking ID:</strong> {data?.tracking_id}</p>
          <p><strong>Status:</strong> {data?.order_status}</p>
        </div>
      )}
    </div>
    </div>
  );
}
