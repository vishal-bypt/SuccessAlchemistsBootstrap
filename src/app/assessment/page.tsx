'use client';
import React, { useState, useEffect } from 'react';
import "./assessement.css";
import Image from "next/image";
import infographic from "../../../src/app/assessment/images/Infographics.png";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Toast from "../../components/Toast";

const page = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [order_id] = useState(`ORD${Date.now()}`);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    if (executeRecaptcha) {
      setRecaptchaReady(true);
    }
  }, [executeRecaptcha]);


  const handlePayment = async (e: any) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      if (!executeRecaptcha) {
        Toast.error("reCAPTCHA not ready");
        setIsSubmitting(false);
        return;
      }
      if (website) {
        console.error("Error:", "Spam detected");
        Toast.error("Spam detected.");
        setIsSubmitting(false);
        return;
      }
      const recaptchaToken = await executeRecaptcha("assessment_form");
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        Toast.error("Payment failed: API URL is not configured.");
        setIsSubmitting(false);
        return;
      }

      const billingName = `${firstName} ${lastName}`;
      const response = await fetch(apiUrl + "/initiate-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order_id, amount: '25000', billing_name: billingName, billing_email: email, billing_tel: phone, company: "NOT APPLICABLE", designation, type: "assessment", recaptchaToken })
      });

      const data = await response.json();
      if (!data.success) {
        Toast.error(data.message || "An error occurred while initiating payment.");
        setIsSubmitting(false);
        return;
      }
      console.log("Response from /initiate-payment:", data);

      // ✅ Open Razorpay checkout
      const options = {
        key: data.data.key,
        amount: data.data.amount * 100,
        currency: "INR",
        name: "Success Alchemists",
        description: "Scaling Up Assessment Payment",
        order_id: data.data.orderId,
        handler: async function (razorpayResponse: any) {
          try {
            await fetch(apiUrl + "/razorpay-success", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: data.data.orderId,
                razorpay_payment_id: razorpayResponse.razorpay_payment_id,
                razorpay_order_id: razorpayResponse.razorpay_order_id,
                razorpay_signature: razorpayResponse.razorpay_signature,
              }),
            });
          } catch (successError) {
            console.error("Error while confirming successful payment:", successError);
          }
          Toast.success("Payment received! Confirmation may take a few seconds.");
          setFirstName('');
          setLastName('');
          setPhone('');
          setDesignation('');
          setEmail('');
          setIsSubmitting(false);
        },
        prefill: {
          name: billingName,
          email: email,
          contact: phone,
        },
        modal: {
          ondismiss: async () => {
            try {
              await fetch(apiUrl + "/razorpay-dismissed", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderId: data.data.orderId }),
              });
            } catch (dismissError) {
              console.error("Error while marking dismissed payment as failed:", dismissError);
            }
            Toast.error("Payment was not completed.");
            setFirstName('');
            setLastName('');
            setPhone('');
            setDesignation('');
            setEmail('');
            setIsSubmitting(false);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="first_div_layout success">
        <div className="main_first_div_body">
          <div
            className="innerContainer"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p className="heading" style={{ color: "white" }}>
              Is your Business Ready to Scale?
              Assess your readiness with
              Scaling Up Assessment.
            </p>

          </div>
        </div>
      </div>
      <div className="second_div_layout">
        <div className="d-flex flex-column justify-content-between second_text_div">
          <p className='text' style={{ fontWeight: "Bold" }}>
            Hey Founder,
          </p>
          <p className="text pt-3">
            Do you ever feel like something’s holding your business back but you can’t quite put your finger on it? You’re not alone! And that’s exactly what the Scaling Up Assessment helps you solve!
          </p>
          <p className="text pt-3">
            The personalized Scaling Up diagnostic report gives you a clear picture of how ready your business is to scale. Built on the globally trusted Scaling Up framework by Verne Harnish, the assessment provides a clear, data-backed snapshot of where you stand today, how you compare to your peers, and what key areas deserve your focus next.
          </p>
          <p className="text pt-3">
            It blends practical insights from the Scaling Up/Rockefeller Habits 2.0 methodology alongside proven academic models of growth and organizational development. It’s shaped by the wisdom of numerous seasoned entrepreneurs, coaches, and business mentors, people who’ve been exactly where you are.
          </p>
          <p className="text pt-3">
            This assessment is meant to be completed by the Founder along with their leadership team.Whether you’re scaling up for the first time or looking to break through your next growth ceiling, this assessment is designed to help you uncover roadblocks, strategize, and align your leadership team for long-term success.
          </p>
          <p className="text pt-3">
            A brief exercise but the clarity you gain can be game-changing!
          </p>
        </div>
      </div>
      <div className="second_div_layout">
        <div className="d-flex flex-column justify-content-between second_text_div">
          <div>
            <p className="subhead" style={{ color: "Black" }}>
              Is your Business Ready to Scale?
            </p>
          </div>
          <div className="col-md-12 d-flex justify-content-center mt-3" style={{ height: '50%' }}>
            <Image
              src={infographic}
              alt="Infographics"
              className="img-fluid"
              style={{
                width: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
      <div className="second_div_layout">
        <div className="d-flex flex-column justify-content-between second_text_div">
          <p className="subhead" style={{ color: "Black" }}>
            Want to Know More?
          </p>
          <p className="text pt-2">
            Let’s talk. Book a call and we will get back to you! Together, let’s chart your next growth leap.
          </p>
          <div className="submit-btn-div">
            <button
              type="button"
              className="btnstyle btn-submit"
              onClick={() => window.location.href = "/contactUs"}
            >
              Book a Discovery Call
            </button>
          </div>
        </div>
      </div>
      <div className="second_div_layout">
        <div className="d-flex flex-column justify-content-between second_text_div">
          <div className="d-flex flex-column justify-content-between innerdiv">
            <form className="w-100" onSubmit={handlePayment} name="assessment_form" id="assessment_form">
              <p className="subhead" style={{ color: "white" }}>
                Ready to Take the First Step Towards Smarter Scaling?
              </p>
              <p className="text pt-2" style={{ fontWeight: "Bold" }}>
                Complete your Scaling Up Assessment for just ₹25,000 + GST.
              </p>
              <p className="text pt-2">
                Proceed to make your payment here and share your team’s details to activate your Scaling Up Assessment.
              </p>
              <div className='row row-gap mt-4'>
                <div className="col-md-4 input_div">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <label>First Name</label>
                  </div>
                </div>
                <div className="col-md-4 input_div">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <label>Last Name</label>
                  </div>
                </div>
                <div className="col-md-4 input_div">
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <label>Phone Number</label>
                  </div>
                </div>
              </div>
              <div className='row row-gap mt-md-4'>
                <div className="col-md-6 input_div">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Designation"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      required
                    />
                    <label>Designation</label>
                  </div>
                </div>
                <div className="col-md-6 input_div">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label>Email</label>
                  </div>
                  <input
                    type="text"
                    name="website"
                    style={{ display: "none" }}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="submit-btn-div paymentbtn">
                <button
                  type="submit"
                  className="btnstyle btn-submit"
                  disabled={!recaptchaReady || isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Proceed with Payment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page