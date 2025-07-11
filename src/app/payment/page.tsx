'use client';
// components/CCForm.js
import { useState } from 'react';
import "./assessement.css";



export default function CCForm() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/initiate-payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: '25000.00',
        billing_name: 'John Doe',
      }),
    });
    const result = await res.json();
    const { paymentUrl } = result;
    window.location.href = paymentUrl;
  };

  return (
    <div className="second_div_layout">
      <div className="d-flex flex-column justify-content-between second_text_div">
        <div className="d-flex flex-column justify-content-between innerdiv">
          <div className="submit-btn-div paymentbtn">
            <button className="btnstyle btn-submit" onClick={handlePayment} disabled={loading}>
              {loading ? 'Redirecting...' : 'Pay Now'}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
