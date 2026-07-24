'use client';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import Script from "next/script";
import successAnimation from '@/app/payment/images/payment_sucessful.json';

type PaymentResponse = {
  order_id: string;
  tracking_id: string;
  order_status: string;
  amount?: number;
  currency?: string;
};

export default function PaymentSuccess() {
  const [data, setData] = useState<PaymentResponse | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('paymentResponse');

    // Only treat this as a genuine successful payment when we have the
    // response that the payment flow stored. A direct visit / refresh with no
    // stored data must NOT fire a conversion or show stale order details.
    if (!stored) {
      return;
    }

    const payment: PaymentResponse = JSON.parse(stored);
    setData(payment);

    // Clear it immediately so a later refresh or direct visit doesn't show
    // stale order details or re-fire the conversions.
    sessionStorage.removeItem('paymentResponse');

    // Event snippet for Submit lead form conversion page
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17882487402/Jbp8CM7T7OcbEOq0hM9C'
      });
    }

    // Meta Pixel Purchase conversion (fired once per real payment)
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: payment.amount ?? 0,
        currency: payment.currency ?? 'INR',
      });
    }

    console.log('Lead submitted & conversion tracked');
  }, []);

  return (
    <div className="container mx-auto max-w-md shadow-md rounded-lg">
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "8646652";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </Script>

      <Script
        src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
        strategy="afterInteractive"
      />
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
