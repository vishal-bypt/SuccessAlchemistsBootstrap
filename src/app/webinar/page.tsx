"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import basecamplogo2 from "./Basecamp_White.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./webinar.css";
import vikram2 from "../../app/who/images/vikram2.jpg";

const WebinarPage = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [yourDesignation, setYourDesignation] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("");
  const [basecampLocation, setBasecampLocation] = useState("");
  const [order_id] = useState(`ORD${Date.now()}`);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // ✅ Basic validations
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !companyName ||
      !yourDesignation
    ) {
      alert("All fields are required!");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Enter a valid email!");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Enter a valid 10-digit phone number!");
      return;
    }

    await handlePayment({
      firstName,
      lastName,
      email,
      phone,
      companyName,
      yourDesignation,
    });

    handleClose();
  };

    const handlePayment = async ({
    firstName,
    lastName,
    email,
    phone,
    companyName,
    yourDesignation
  } : any) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const payload = {
      order_id: order_id,
      amount: 299.00,
      billing_name: `${firstName} ${lastName}`,
      billing_email: email,
      billing_tel: phone,
      company: companyName,
      designation: yourDesignation,
      basecamplocation: basecampLocation,
      type : "webinar"
    };

    console.log("Records is:::::", payload);

    const response = await fetch(apiUrl + "/initiate-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("Response from /initiate-payment:", data);

    if (data.paymentUrl) {
      try {
        const { encRequest, access_code, ccavenueUrl } = data;

        if (encRequest && access_code) {
          const existingForm = document.getElementById("ccavenue-payment-form");
          if (existingForm) existingForm.remove();

          const form = document.createElement("form");
          form.method = "POST";
          form.action = ccavenueUrl;
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
        } else {
          alert("Payment failed: Missing required data.");
        }
      } catch (error) {
        alert("Payment failed: Invalid URL");
        console.error(error);
      }
    } else {
      alert("Payment failed: Server error");
      console.error(data);
    }
  };


  return (
    <div className="main_body_div">
      {/* EXPERIENCE SECTION */}
      <section className="experience-section">
        <div className="containers">
          <div className="business-content">
            If your business is growing, but you’re feeling <br />
            more stressed, stretched or stuck… <br />
            this workshop is for you
          </div>
          <h1 className="experience-section-title">
            SCALE WITHOUT CHAOS MASTERCLASS
          </h1>
          <div className="experience-text">
            Discover the playbook used by <br />
            1, 00,000+ companies globally to scale your business with <br />
            <span className="yellow-text">
              More Cashflows, Better Team Ownership & Robust Systems{" "}
            </span>{" "}
            <br />
            that work even in your absence.
          </div>
          <div className="event-card">
            {/* LEFT SECTION */}
            <div className="left-section">
              <Image
                src={vikram2}
                alt="Vikram Paniwani"
                width={220}
                height={250}
                className="speaker-img"
              />

              <h2 className="speaker-name">Vikram Panjwani</h2>
              <p className="speaker-title">
                Certified Coach – Scaling Up <br />
                Senior Business Coach – Success Alchemists
              </p>
              <p className="speaker-desc">
                Over 20 years of experience in shaping growing businesses in
                companies like Vodafone, Tata, Reliance, etc.
              </p>
            </div>

            {/* RIGHT SECTION */}
            <div className="right-section">
              <div className="info">
                <p>
                  📅 Date – 28<sup>th</sup> January 2026
                </p>
                <p>⏰ 7.30 pm – 9.30 pm</p>
                <p>💻 ZOOM session (online)</p>
              </div>

              <div className="price">Rs 299/- Only</div>

              <p className="note">
                *Special Price for <br /> first 100 participants only
              </p>

              <button className="register-btn"  onClick={handleShow}>REGISTER NOW</button>
            </div>
          </div>
        </div>
      </section>

      <div className="row metrics-container">
        <div className="col-md-4 col-12">
          <div className="metric-box">
            <div className="metric-value">1500+</div>
            <div className="metric-label">
              Entrepreneurs & <br />
              leaders coached
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="metric-box">
            <div className="metric-value">$2.07 Bn</div>
            <div className="metric-label">
              Client’s cum. <br /> business turnover
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="metric-box">
            <div className="metric-value">5000+</div>
            <div className="metric-label">
              Client coaching <br /> sessions
            </div>
          </div>
        </div>
      </div>

      <section className="experience-section">
        <div className="container">
          <h1 className="experience-section-title">
            What You’ll Learn In This Masterclass
          </h1>
          <div className="yellow-text">
            Everything You Need To Build A Culture Of Accountability <br />
            In Your Company So That Your Growth Journey Is <br />
            Predictable, Sustainable & Profitable
          </div>
        </div>

        <section className="container mt-5">
          {/* Top Cards */}
          <div className="card">
            <h2>The 4 Pillars of Scaled Businesses</h2>
            <p>Running a company with turnover of Rs 50 CR+</p>
            <p>Lorem ipsum</p>
          </div>

          <div className="card">
            <h2>Identify Gaps In Your Org</h2>
            <p>Running a company with turnover of Rs 50 CR+</p>
            <p>Lorem ipsum</p>
          </div>

          <div className="card">
            <h2>Blueprint to become System-Driven</h2>
            <p>Running a company with turnover of Rs 50 CR+</p>
            <p>Lorem ipsum</p>
          </div>

          {/* Bottom Buttons */}
        </section>
        <div className="buttonGrid">
          <button>
            Talent Management
            <br />
            Strategies
          </button>
          <button>
            Process Improvement
            <br />
            Frameworks
          </button>
          <button>
            Team Accountability
            <br />
            Tools
          </button>
          <button>
            Strategic Plan
            <br />
            For Your Business
          </button>
          <button>
            CashFlow Increase
            <br />
            Tools
          </button>
        </div>

        <button className="secure-spot-btn" onClick={handleShow}>Secure Your Spot Now</button>
        <div className="just">
          Just 2 Hours <br /> can change the trajectory of your business growth
        </div>
      </section>

      <section className="section excite-section">
        <div className="container">
          <h1 className="why-join-title">
            Who Should Attend This Masterclass?
          </h1>
          <h4 className="sub-title">
            Business Owners, Founders, Top Executives Who Are
          </h4>
          <div className="row">&nbsp;</div>
          <div className="row">
            <div className="col-md-1 d-none d-md-block">&nbsp;</div>
            <div className="col-md-11 col-12 excite-section-list">
              <i className="fa-solid fa-arrow-trend-up me-2"></i> Running a
              company with turnover of Rs 50 CR+
            </div>
          </div>
          <div className="row spacer"></div>
          <div className="row">
            <div className="col-md-1 d-none d-md-block">&nbsp;</div>
            <div className="col-md-11 col-12 excite-section-list">
              <i className="fa-solid fa-arrow-trend-up me-2"></i> Serious about
              scaling up your business exponentially in the next 10 years
            </div>
          </div>
          <div className="row spacer"></div>
          <div className="row">
            <div className="col-md-1 d-none d-md-block">&nbsp;</div>
            <div className="col-md-11 col-12 excite-section-list">
              <i className="fa-solid fa-arrow-trend-up me-2"></i> Wanting more
              time and freedom, while business grows
            </div>
          </div>
        </div>

        <div className="signs-container">
          <h2>If you’re seeing these signs in your company:</h2>

          <ul>
            <li>Your growth path is unpredictable.</li>
            <li>
              Your team is not aligned and does not take the needed ownership.
            </li>
            <li>
              You’re constantly firefighting, and not able to find time for
              strategic initiatives.
            </li>
            <li>
              You know that what has got your business so far will not take it
              to the next level.
            </li>
          </ul>

          <p className="highlight-text">This masterclass webinar is for you.</p>
        </div>
      </section>

      <section>
        <h1 className="clients">
          {" "}
          Success Alchemists Clients <br />
          Testimonials Who Have Applied <br />
          This Framework
        </h1>
      </section>

      <section className="section excite-section">
        <div className="container">
          <h1 className="why-join-title">More About Us</h1>
        </div>

        <div className="signs-container mt-5">
          <p className="about-us-text">
            Success Alchemists is the brainchild of Mr.Ajay Hiraskar, who is the
            1st global Scaling Up Business Coach from India. <br /> <br />
            Founded in 2021, Success Alchemists today has coached several
            mid-sized companies across India, Dubai, Africa & USA in various
            industries such as Manufacturing, Petroleum, Technology, Education,
            Recruitment Services, SAAS, Martech, Logistics & Supply Chain, etc.
            with a cumulative turnover of over $2 Billions.
            <br /> <br />
            Our team comprises of 4 Scaling Up certified coaches and over 8
            Associate Business coaches, in addition to Accountability Partners &
            Program Managers - providing our clients with not just a coach but
            an ecosystem for their business growth.
          </p>
        </div>

        <p className="scaling-up">
          Scaling Up is a global framework that provides businesses the right
          tools and execution insights to achieve superlative growth. <br />{" "}
          <br />
          Success Alchemists utilises these frameworks alongwith other proven
          mythologies to enable business owners in their journey to scale.
        </p>

        <section className="cta-section">
  <div className="stats">
    <div className="stat">
      <h3>1,00,000</h3>
      <p>companies</p>
    </div>
    <div className="stat">
      <h3>10X</h3>
      <p>Valuation</p>
    </div>
    <div className="stat">
      <h3>3X</h3>
      <p>Profitability</p>
    </div>
  </div>

  <button className="cta-btn" onClick={handleShow}>Make Your Vision A Reality</button>

  <p className="cta-text">
    Join The Masterclass.<br />
    Get Absolute Clarity On Your Next Steps
  </p>
</section>

      </section>

      <section className="faq-section">
        <h1 className="faq-title">FAQs</h1>

        <div className="faq-content">
          <h2>FAQs</h2>

          <div className="faq-item">
            <p className="question">
              Q. Can multiple people from the same company join?
            </p>
            <p className="answer">
              A. Yes. Don’t forget to avail group offers.
            </p>
          </div>

          <div className="faq-item">
            <p className="question">Q. Who is the BASECAMP for?</p>
            <p className="answer">
              A. Founders, CXOs, L1 Leaders, Board Members
            </p>
          </div>

          <div className="faq-item">
            <p className="question">Q. What’s the duration of this workshop?</p>
            <p className="answer">A. 7 hours</p>
          </div>

          <div className="faq-item">
            <p className="question">
              Q. How is Basecamp different than other generic business gyaan
              sessions?
            </p>
            <p className="answer">
              A. Real business coaches who mentor companies with cumulative
              turnover of $xxx million dollars will take you through the Scaling
              Up framework using case studies, tools, and insights that you can
              take back to your company & implement as it is for driving growth.
            </p>
          </div>
        </div>
      </section>

      <section className="hero-section-footer">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-12 col-12 order-lg-1 order-1">
              <div className="hero-content-footer text-center">
                <h3
                  className="d-none d-md-block"
                  style={{ fontSize: 79, color: "#FFFFFF" }}
                >
                  Are You <br />{" "}
                  <span style={{ color: "#fdae07" }}>Ready To Scale?</span>
                </h3>
                <h3
                  className="d-block d-md-none"
                  style={{ fontSize: 36, color: "#FFFFFF", lineHeight: 1.2 }}
                >
                  Are You{" "}
                  <span style={{ color: "#fdae07" }}>Ready To Scale?</span>
                </h3>
                <p className="hero-subtitle">
                  <button
                    className="btn btn-cta-footer text-center"
                    style={{ width: "100%", color: "#000000" }}
                    onClick={handleShow}
                  >
                    Limited spots Available
                    <br />
                    <span className="btn-text">
                      <strong>ReGISTER NOW for basecamp</strong>
                    </span>{" "}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose}>
              <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                  <Modal.Title>Book Your Webinar Seat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Enter company name"
                      required
                    />
                  </Form.Group>
      
                  <Form.Group className="mb-3">
                    <Form.Label>Your Designation</Form.Label>
                    <Form.Control
                      type="text"
                      value={yourDesignation}
                      onChange={(e) => setYourDesignation(e.target.value)}
                      placeholder="Enter your designation"
                      required
                    />
                  </Form.Group>
      
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter first name"
                      required
                    />
                  </Form.Group>
      
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter last name"
                      required
                    />
                  </Form.Group>
      
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      required
                    />
                  </Form.Group>
      
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit phone number"
                      required
                    />
                  </Form.Group>
      
                  
                </Modal.Body>
      
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
    </div>
  );
};

export default WebinarPage;
