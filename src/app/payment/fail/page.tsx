'use client';
import Lottie from 'lottie-react';
import successAnimation from '@/app/payment/images/Payment_failed.json';

export default function PaymentFail() {

  return (
    <div className="container mx-auto max-w-md shadow-md rounded-lg">
      <div className="text-center mt-10">
        <div >
          <Lottie
            animationData={successAnimation}
            loop={false}
            style={{ height: "400px", width: "auto" }}
          />
        </div>
        <p className="mt-2">Unfortunately, your payment could not be processed.</p>
        <a href="/" className="text-blue-500 underline mt-4 block">Return to Home</a>
      </div>
    </div>
  );
}
