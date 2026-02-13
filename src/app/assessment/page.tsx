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
      const response = await fetch(apiUrl + "/initiate-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order_id, amount: '29500', billing_name: `${firstName} ${lastName}`, billing_email: email, billing_tel: phone, company: "NOT APPLICABLE", designation, recaptchaToken })
      });

      const data = await response.json();
      if (!data.success) {
        Toast.error(data.message || "An error occurred while initiating payment.");
        setIsSubmitting(false);
        return;
      }
      console.log("Response from /initiate-payment:", data);
      if (data.paymentUrl) {
        try {

          const encRequest = data.encRequest;
          const access_code = data.access_code;

          if (encRequest && access_code) {

            const existingForm = document.getElementById("ccavenue-payment-form");
            if (existingForm) existingForm.remove();

            const form = document.createElement("form");
            form.method = "POST";
            form.action = data.ccavenueUrl;
            form.id = "ccavenue-payment-form";

            const accessInput = document.createElement("input");
            accessInput.type = "hidden";
            accessInput.name = "access_code";
            accessInput.value = access_code;
            form.appendChild(accessInput);

            const encInput = document.createElement("input");
            encInput.type = "hidden";
            encInput.name = "encRequest";
            encInput.value = encRequest;
            form.appendChild(encInput);

            document.body.appendChild(form);
            form.submit();
            return; // navigation started, no need to reset isSubmitting
          } else {
            console.error("Missing access_code or encRequest in payment URL");
            alert("Payment failed: Missing required data.");
            setIsSubmitting(false);
          }
        } catch (error) {
          console.error("Invalid paymentUrl format", error);
          alert("Payment failed: Invalid URL");
          setIsSubmitting(false);
        }
      } else {
        console.error("Invalid response from API:", data);
        alert("Payment failed: Server error");
        setIsSubmitting(false);
      }
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
              type="submit"
              className="btnstyle btn-submit"
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