'use client';
// components/CCForm.js
import { useState } from 'react';



export default function CCForm() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/initiate-payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: '100.00',
        billing_name : 'John Doe',        
      }),
    });
    const result = await res.json();
    const { paymentUrl } = result;
    window.location.href = paymentUrl;
  };

  return (
    <div>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Redirecting...' : 'Pay Now'}
      </button>
    </div>
  );
}
