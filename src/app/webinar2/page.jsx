"use client";
import "./style.css";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import left_arrow_btn from "../home/images/left-arrow-btn.png";
import right_arrow_btn from "../home/images/right-arrow-btn.png";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LogoCarousel = dynamic(() => import("../home/components/LogoCarousel"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "200px" }}>Loading...</div>,
});

const Webinar2Page = () => {
  const [show, setShow] = useState(false);
  const [basecampLocation, setBasecampLocation] = useState("");
  const [order_id] = useState(`ORD${Date.now()}`);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // React Hook Form setup
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      yourDesignation: "",
    },
    mode: "onBlur",
  });

  const items = [
    {
      id: 1,
      title: "Success story of #1 - Ador powerton",
      description:
        "Ravin Mirchandani, the Executive Chairperson talks about a remarkable success story about the impact of the Scaling Up performance system & the amazing business turnaround experienced within Ador Powertron. In the last section, Ravin talks about the things to keep in mind while selecting a good coach & the value added by the current coach.",
      src:
        "https://www.youtube.com/embed/o-OwjN6PqBU?si=YZUPPow4mhKLpYbX?enablejsapi=1",
    },
    {
      id: 2,
      title: "Success Story #2 - Aliens Tattoo",
      description:
        "In this video, Sunny Bhanushali the Founder & CEO of Aliens Tattoo talks about experiencing challenges of rapid growth, the biggest benefit of implementing a structured framework & the value added by their coach.",
      src:
        "https://www.youtube.com/embed/8_HT9N82rh4?si=CdL3RxS50W7InGdW?enablejsapi=1",
    },
    {
      id: 3,
      title: "Success Story #3 - Grauer & Weil (Engineering Division)",
      description:
        "Rohit More, the Director talks about the biggest benefits of implementing the Scaling Up framework. Besides ensuring alignment at every level within the organization, they clearly articulated their B-HAG (Big Hairy Audacious Goal) & have been systematically seeing growth YoY for the past 3 years. At the end, there is a reference to the Coach and the support provided in this growth journey.",
      src:
        "https://www.youtube.com/embed/N4PUd0g_vDs?si=vLW8KfcG9_KUc1cJ?enablejsapi=1",
    },
    {
      id: 4,
      title: "Success Story #4 - Clarion Technologies",
      description:
        "In this video, their CEO, Siddharth Motiwale talks about the 'secret sauce' which has helped Clarion grow systematically over the past few years. He also talks about the value added by Ajay as their coach.",
      src:
        "https://www.youtube.com/embed/UrIxZUvzovo?si=M6EvIs5zWR5d2A6T?enablejsapi=1",
    },
    {
      id: 5,
      title: "Success Story #5 - InfraCloud Technologies",
      description:
        "In this video, Girish Shilamkar, the Founder & CEO, shares some key aspects of the Scaling Up framework, which helped him build a great culture within his company. These foundations ultimately helped ensure a successful exit in 2025.",
      src:
        "https://www.youtube.com/embed/mN0qCIfEr-8?si=FYfuga7JrBG3lz-d?enablejsapi=1",
    },
  ];

  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const forward = () => {
    if (currentIndex === items.length - 1) return;
    swiperRef.current.swiper.slideTo(currentIndex + 1);
    setCurrentIndex(currentIndex + 1);
  };

  const backward = () => {
    if (currentIndex === 0) return;
    swiperRef.current.swiper.slideTo(currentIndex - 1);
    setCurrentIndex(currentIndex - 1);
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
    document.querySelectorAll(".home-video").forEach((iframe) => {
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    });
  };

  const handleSubmit = async (formData) => {
    await handlePayment(formData);
    reset();
    handleClose();
  };

  const handlePayment = async ({
    firstName,
    lastName,
    email,
    phone,
    companyName,
    yourDesignation,
  }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const payload = {
      order_id: order_id,
      amount: 299.0,
      billing_name: `${firstName} ${lastName}`,
      billing_email: email,
      billing_tel: phone,
      company: companyName,
      designation: yourDesignation,
      basecamplocation: basecampLocation,
      type: "webinar",
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

        // 2️⃣ Fire Google Ads conversion
        // window.gtag('event', 'conversion', {
        //       send_to: 'AW-17882487402/Jbp8CM7T7OcbEOq0hM9C',
        // });

        // 3️⃣ Optional: redirect / show success message
        //console.log('Lead submitted & conversion tracked');

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

  const handleClick = (index) => {
    // Handle video click if needed
  };
  return (
    <>
      <div className="container-fluid masterclass-wrapper min-vh-100 d-flex align-items-center">
        <div className="row w-100 justify-content-center">
          <div className="col-12 col-md-6 first-container ">
            {/* FLOATING REGISTER DIV */}
            <div className="floating-register-div">
              <div className="floating-register-left">
                <p className="floating-register-text">
                  Only Few Spots Remain. Reserve Yours Now.
                </p>
                <p className="floating-register-subtext"></p>
              </div>
              <div className="floating-register-right">
                <button
                  className="floating-register-button"
                  onClick={handleShow}
                >
                  SECURE YOUR SPOT NOW
                </button>
              </div>
            </div>
            <div className="card masterclass-card text-center p-4 border-0">
              {/* Logo */}

              {/* Heading */}
              <h2 className="text-white coach-title fw-bold">
                GROW YOUR BUSINESS <br />
                WITH LESS CHAOS
              </h2>

              <p className="subtitle mt-2">
                2 hour masterclass — clarity, systems, and real next steps.
              </p>

              {/* Speaker Image */}
              <div className="coach_section">
                <div className="col-lg-6 ">
                  <div className="speaker-img my-3">
                    <img
                      src="assets/images/speaker.png"
                      alt="Vikram Panjwani"
                      className="img-fluid rounded"
                    />
                  </div>

                  {/* Speaker Info */}
                  <h4 className="text-white mb-0">Vikram Panjwani</h4>
                  <p className="speaker-role">Certified Coach – Scaling Up</p>
                </div>

                {/* Event Details */}
                <div className="col-lg-6 event-section">
                  <div className="event-details text-start mt-4">
                    <p>
                      <i className="bi bi-calendar-event"></i>
                      <strong>Date:</strong> 7<sup>th</sup> February 2026
                    </p>
                    <p>
                      <i className="bi bi-clock"></i>
                      <strong>Time:</strong> 11 am – 1 pm IST
                    </p>
                    <p>
                      <i className="bi bi-camera-video"></i>
                      <strong>Mode:</strong> ZOOM session (online)
                    </p>
                  </div>

                  {/* Price */}
                  <div
                    className="price-box mt-3"
                    style={{ cursor: "pointer" }}
                    onClick={handleShow}
                  >
                    <h3>Rs 299/- Only</h3>
                    <small>
                      *Special price for first 100 participants only
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex align-items-center">
        <div className="row w-100 justify-content-center">
          {/* SECOND SECTION */}
          <section className="learn-section py-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-8 text-center">
                  {/* Heading */}
                  <h3 className="section-title text-white mb-4">
                    WHAT YOU'LL LEARN <br />
                    IN THIS MASTERCLASS
                  </h3>

                  {/* Learning Cards */}
                  <div className="row g-3 mb-4">
                    <div className="col-6">
                      <div className="learn-card">
                        Talent Management
                        <br />
                        Strategies
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="learn-card">
                        Process Improvement
                        <br />
                        Frameworks
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="learn-card">
                        Team Accountability
                        <br />
                        Tools
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="learn-card">
                        Strategic Planning
                        <br />
                        For Your Business
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="learn-card">
                        Cashflow Management
                        <br />
                        Tools
                      </div>
                    </div>
                  </div>

                  {/* Blue Highlight Box */}
                  <div className="highlight-box mb-4">
                    <p className="mb-1">Align Your Team.</p>
                    <p className="mb-1">Execute Faster.</p>
                    <p className="mb-0">Scale Predictably.</p>
                  </div>

                  {/* Audience Section */}
                  <h5 className="audience-title mt-4">
                    Who Should Attend This Masterclass?
                  </h5>

                  <p className="audience-subtitle">
                    Business Owners, Founders, Top Executives Who Are
                  </p>

                  <ul className="audience-list text-start mt-3">
                    <li>Running a company with turnover of Rs 50 Cr+</li>
                    <li>
                      Serious about scaling up your business exponentially in
                      the next 3–5 years
                    </li>
                    <li>Wanting more time and freedom, while business grows</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="container-fluid d-flex align-items-center">
        <div className="row w-100 justify-content-center">
          {/* THIRD SECTION */}
          <section className="testimonials-section py-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-8 text-center">
                  {/* Heading */}
                  <h5 className="testimonials-title mb-4">
                    Success Alchemists Clients Testimonials Who Have Applied
                    This Framework
                  </h5>

                  {/* Video Placeholder */}
                  <div className="video-box mb-4">
                    <div style={{ position: "relative" }}>
                      <Swiper
                        ref={swiperRef}
                        slidesPerView={1}
                        onSlideChange={handleSlideChange}
                        centeredSlides={true}
                        navigation={false}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                      >
                        {items?.map((d, i) => (
                          <SwiperSlide key={i}>
                            <div className="row slider-row" align="center">
                              {/* <div className="video col-md-2"></div> */}
                              <div className="video col-md-12">
                                <div className="ratio ratio-16x9">
                                  <iframe
                                    key={i}
                                    src={d.src}
                                    className="home-video"
                                    title="YouTube video player"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen={true}
                                    onClick={() => handleClick(i)}
                                  ></iframe>
                                </div>
                              </div>
                              {/* <div className="video col-md-2"></div> */}
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div className="img-fluid navigation-buttons">
                        <div onClick={backward}>
                          <Image
                            src={left_arrow_btn}
                            className="img-fluid nav-left-btn"
                            alt="left navigation arrow"
                          />
                        </div>
                        <div onClick={forward}>
                          <Image
                            src={right_arrow_btn}
                            className="img-fluid nav-left-btn"
                            alt="right navigation arrow"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 text-center">
                  {/* Brand Logos Slider Placeholder */}
                  <div className="mb-4">
                    {/* Logo Carousel */}
                    <Suspense
                      fallback={
                        <div style={{ minHeight: "200px" }}>Loading...</div>
                      }
                    >
                      <LogoCarousel />
                    </Suspense>
                  </div>

                  {/* Stats */}
                  <div className="row stats-row text-center">
                    <div className="col-4">
                      <h4>1500+</h4>
                      <p>Entrepreneurs & leaders coached</p>
                    </div>
                    <div className="col-4">
                      <h4>$2.07 Bn</h4>
                      <p>Client's cumulative turnover</p>
                    </div>
                    <div className="col-4">
                      <h4>5000+</h4>
                      <p>Client coaching sessions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="container-fluid d-flex align-items-center">
        <div className="row w-100 justify-content-center">
          <section className="about-section py-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-8 text-center">
                  <div className="about-header mb-3">
                    <img
                      src="assets/images/LogoSuccess.png"
                      alt="Success Alchemists"
                      className="about-logo mb-2"
                    />
                    <h5 className="about-title">Success Alchemists</h5>
                  </div>

                  {/* Main Content Box */}
                  <div className="about-box p-3 mb-4 text-center">
                    <p>
                      Success Alchemists is the brainchild of Mr. Ajay Harsikar,
                      who is the #1 Global Scaling Up Business Coach from India.
                    </p>
                    <br />
                    <p>
                      Founded in 2021, Success Alchemists today has coached
                      several mid-sized companies across India, Africa & USA in
                      various industries such as Manufacturing, Petroleum,
                      Technology, Education, Recruitment Services, SAAS,
                      Martech, Logistics & Supply Chain etc. with cumulative
                      turnover of over $2 Billion.
                    </p>
                    <br />
                    <p>
                      Our team comprises of 4 Scaling Up certified coaches and
                      over 8 Associate Business coaches. In addition to
                      Accountablity Partners & Program Managers – providing our
                      clients with not just a coach but an ecosystem for their
                      business growth.
                    </p>
                  </div>

                  {/* Description Text */}
                  <p className="about-description mb-4">
                    Scaling Up is a global framework that provides businesses
                    the right tools and execution insights to achieve
                    superlative growth.
                  </p>
                  <br />
                  <p className="about-description mb-4">
                    Success Alchemists utilizes these frameworks along with
                    other proven methodologies to enable business owners in
                    their journey to scale.
                  </p>
                  <br />
                  {/* Stats */}
                  <div className="row about-stats mb-4">
                    <div className="col-4">
                      <h4>1,00,000</h4>
                      <p>companies</p>
                    </div>
                    <div className="col-4">
                      <h4>10X</h4>
                      <p>Valuation</p>
                    </div>
                    <div className="col-4">
                      <h4>3X</h4>
                      <p>Profitability</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="cta-box">
                    <a href="#" className="btn btn-warning cta-btn w-100">
                      Make Your Vision A Reality
                    </a>
                    <p className="cta-subtext mt-2">
                      Join The Masterclass.
                      <br />
                      Get Absolute Clarity On Your Next Steps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleFormSubmit(handleSubmit)}>
              <Modal.Header closeButton>
                <Modal.Title>Book Your Webinar Seat</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter company name"
                    {...register("companyName", {
                      required: "Company name is required",
                      minLength: {
                        value: 2,
                        message: "Company name must be at least 2 characters",
                      },
                    })}
                    isInvalid={!!errors.companyName}
                  />
                  {errors.companyName && (
                    <Form.Control.Feedback
                      type="invalid"
                      style={{ display: "block" }}
                    >
                      {errors.companyName.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Designation</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your designation"
                    {...register("yourDesignation", {
                      required: "Designation is required",
                      minLength: {
                        value: 2,
                        message: "Designation must be at least 2 characters",
                      },
                    })}
                    isInvalid={!!errors.yourDesignation}
                  />
                  {errors.yourDesignation && (
                    <Form.Control.Feedback
                      type="invalid"
                      style={{ display: "block" }}
                    >
                      {errors.yourDesignation.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    {...register("firstName", {
                      required: "First name is required",
                      minLength: {
                        value: 2,
                        message: "First name must be at least 2 characters",
                      },
                      pattern: {
                        value: /^[a-zA-Z\s]*$/,
                        message:
                          "First name can only contain letters and spaces",
                      },
                    })}
                    isInvalid={!!errors.firstName}
                  />
                  {errors.firstName && (
                    <Form.Control.Feedback
                      type="invalid"
                      style={{ display: "block" }}
                    >
                      {errors.firstName.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    {...register("lastName", {
                      required: "Last name is required",
                      minLength: {
                        value: 2,
                        message: "Last name must be at least 2 characters",
                      },
                      pattern: {
                        value: /^[a-zA-Z\s]*$/,
                        message:
                          "Last name can only contain letters and spaces",
                      },
                    })}
                    isInvalid={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <Form.Control.Feedback
                      type="invalid"
                      style={{ display: "block" }}
                    >
                      {errors.lastName.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    isInvalid={!!errors.email}
                  />
                  {errors.email && (
                    <Form.Control.Feedback
                      type="invalid"
                      style={{ display: "block" }}
                    >
                      {errors.email.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="10-digit phone number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Please enter a valid 10-digit phone number",
                      },
                    })}
                    isInvalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <Form.Control.Feedback
                      type="invalid"
                      style={{ display: "block" }}
                    >
                      {errors.phone.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button type="submit" variant="primary" disabled={!isValid}>
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Webinar2Page;
