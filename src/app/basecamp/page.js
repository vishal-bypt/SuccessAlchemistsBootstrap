"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import basecamplogo2 from "./Basecamp_White.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import left_arrow_btn from "../home/images/left-arrow-btn.png";
import right_arrow_btn from "../home/images/right-arrow-btn.png";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import "./style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BasecampPage() {
  const [show, setShow] = useState(false);
  const swiperRef = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit: rhfHandleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      companyName: "",
      yourDesignation: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      basecampLocation: "",
      plan: "",
      promoCode: "",
    },
  });

  const [order_id] = useState(`ORD${Date.now()}`);
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  const promoCode = watch("promoCode");
  const plan = watch("plan");
  const basecampLocation = watch("basecampLocation");

  //const VALID_PROMO = "SAVE20";
  const exclusiveArray = [
    "CREDAI_EXCLUSIVE",
    "PMA_EXCLUSIVE",
    "MCCAI_EXCLUSIVE",
    "PCMC_EXCLUSIVE",
    "EO_EXCLUSIVE",
    "YPO_EXCLUSIVE",
    "ASCENT_EXCLUSIVE",
    "SS_EXCLUSIVE",
    "TIE_EXCLUSIVE",
    "JITO_EXCLUSIVE",
    "MU_EXCLUSIVE",
    "HIA_EXCLUSIVE",
    "CA_EXCLUSIVE",
    "NMIA_EXCLUSIVE",
    "ISB_EXCLUSIVE",
    "IIM_EXCLUSIVE",
    "SPECIAL20",
  ];

  const [sentenceIndex, setSentenceIndex] = useState(0);
  const sentences = [
    "A workshop that can help you build a winning strategy for accelerated growth.",
    "A workshop that can bring a culture of accountability & excellence in your teams.",
    "A workshop that can help you identify roadblocks & gaps in your exponential growth journey.",
  ];

  const items = [
    {
      id: 1,
      title: "Success story of #1 - Ador powerton",
      description:
        "Ravin Mirchandani, the Executive Chairperson talks about a remarkable success story about the impact of the Scaling Up performance system & the amazing business turnaround experienced within Ador Powertron. In the last section, Ravin talks about the things to keep in mind while selecting a good coach & the value added by the current coach.",
      src: " https://www.youtube.com/embed/TsZWlEhQCEE?enablejsapi=1",
    },
    {
      id: 2,
      title: "Success Story #2 - Aliens Tattoo",
      description:
        "In this video, Sunny Bhanushali the Founder & CEO of Aliens Tattoo talks about experiencing challenges of rapid growth, the biggest benefit of implementing a structured framework & the value added by their coach.",
      src: "https://www.youtube.com/embed/t7gy9PWwzkg?enablejsapi=1",
    },
    {
      id: 3,
      title: "Success Story #3 - Grauer & Weil (Engineering Division)",
      description:
        "Rohit More, the Director talks about the biggest benefits of implementing the Scaling Up framework. Besides ensuring alignment at every level within the organization, they clearly articulated their B-HAG (Big Hairy Audacious Goal) & have been systematically seeing growth YoY for the past 3 years. At the end, there is a reference to the Coach and the support provided in this growth journey.",
      src: "https://www.youtube.com/embed/Wv00isXLFps?enablejsapi=1",
    },
    {
      id: 4,
      title: "Success Story #4 - Clarion Technologies",
      description:
        "In this video, their CEO, Siddharth Motiwale talks about the 'secret sauce' which has helped Clarion grow systematically over the past few years. He also talks about the value added by Ajay as their coach.",
      src: "https://www.youtube.com/embed/5IWQidzMnNk?enablejsapi=1",
    },
    {
      id: 5,
      title: "Success Story #5 - InfraCloud Technologies",
      description:
        "In this video, Girish Shilamkar, the Founder & CEO, shares some key aspects of the Scaling Up framework, which helped him build a great culture within his company. These foundations ultimately helped ensure a successful exit in 2025.",
      src:
        "https://www.youtube.com/embed/jy5Ik158dxA?si=mlb22p62AGgp1l1g?enablejsapi=1",
    },
    {
      id: 6,
      title: "Success Story #6 - Uplers & Mavlers",
      description:
        "In this video, Jaymin (CEO) & Nital (COO) talk about the benefits of implementing the Scaling Up framework. They ensured alignment at all levels within their business & experienced the resultant growth.",
      src:
        "https://www.youtube.com/embed/Eb1vlLvFVqM?si=Cf5iO_xiK7KrN4ud?enablejsapi=1",
    },
  ];

  const videos = [
    // { type: "youtube", id: "ScMzIvxBSi4" },
    {
      type: "mp4",
      src:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/video_thumbnail.png",
    },
    {
      type: "mp4",
      src:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      thumbnail: "/video_thumbnail.png",
    },
    //{ type: "youtube", id: "aqz-KE-bpKQ" },
    {
      type: "mp4",
      src:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail: "/video_thumbnail.png",
    },
    {
      type: "mp4",
      src:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/video_thumbnail.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    setPlaying(false);
    if (playerRef.current) {
      playerRef.current.style.display = "none"; // 👈 hide video when slide changes
      playerRef.current.pause();
      playerRef.current.currentTime = 0;
      playerRef.current.load();
    }
  }, [index]);

  useEffect(() => {
    if (executeRecaptcha) {
      setRecaptchaReady(true);
    }
  }, [executeRecaptcha]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSentenceIndex((prev) => (prev + 1) % sentences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const forward = () => {
    if (currentIndex === items.length) return;
    swiperRef.current.swiper.slideTo(currentIndex + 1);
    setCurrentIndex(currentIndex + 1);
  };
  const backward = () => {
    if (currentIndex === 0) return;
    swiperRef.current.swiper.slideTo(currentIndex - 1);
    setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = async (data) => {
    if (data.website) {
      //return res.status(400).json({ error: 'Spam detected' });
      console.error("Error:", "Spam detected");
      Toast.error("Spam detected.");
      throw new Error(`Spam detected`);
    }
    await handlePayment(data);
    handleClose();
  };

  const handlePayment = async (data) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      plan,
      companyName,
      yourDesignation,
      basecampLocation,
    } = data;

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const payload = {
      order_id: order_id,
      amount: Number(plan) - Number(discount),
      billing_name: `${firstName} ${lastName}`,
      billing_email: email,
      billing_tel: phone,
      company: companyName,
      designation: yourDesignation,
      basecamplocation: basecampLocation,
      type: "basecamp",
    };

    console.log("Records is:::::", payload);

     if (!executeRecaptcha) {
        Toast.error("reCAPTCHA not ready");
        return;
      }

    // Check if API URL is defined
    if (!apiUrl) {
      alert(
        "Payment failed: API URL is not configured. Please check your environment variables."
      );
      console.error("NEXT_PUBLIC_API_URL is not defined");
      return;
    }

    try {

      const recaptchaToken = await executeRecaptcha("basecamp_form");
      const response = await fetch(apiUrl + "/initiate-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...payload, recaptchaToken}),
      });

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const paymentData = await response.json();
      console.log("Response from /initiate-payment:", paymentData);

      if (paymentData.paymentUrl) {
        try {
          // 2️⃣ Fire Google Ads conversion
          window.gtag("event", "conversion", {
            send_to: "AW-17882487402/Jbp8CM7T7OcbEOq0hM9C",
          });

          // 3️⃣ Optional: redirect / show success message
          console.log("Lead submitted & conversion tracked");

          const { encRequest, access_code, ccavenueUrl } = paymentData;

          if (encRequest && access_code) {
            const existingForm = document.getElementById(
              "ccavenue-payment-form"
            );
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
        console.error(paymentData);
      }
    } catch (error) {
      console.error("Payment fetch error:", error);
      alert(
        `Payment failed: ${
          error.message ||
          "Network error. Please check your connection and try again."
        }`
      );
    }
  };

  const handleSlideChange = () => {
    document.querySelectorAll(".home-video").forEach((iframe) => {
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    });
  };
  // const handleApplyPromo = () => {console.log("plan", plan);
  //   if (!plan || Number(plan) === 0) {
  //     alert("Please select a plan first");
  //     return;
  //   }

  //   if (exclusiveArray.includes(promoCode?.toUpperCase())) {
  //     const discountAmount = Math.round(Number(plan) * 0.2);
  //     setDiscount(discountAmount);
  //     setPromoApplied(true);
  //   } else {
  //     alert("Invalid promo code");
  //     setDiscount(0);
  //     setPromoApplied(false);
  //   }
  // };
  const handleRemovePromo = () => {
    setValue("promoCode", "");
    setDiscount(0);
    setPromoApplied(false);
  };

  const handleApplyPromo = () => {
    if (!plan) {
      alert("Please select a plan first");
      return;
    }

    const discountAmount = calculateDiscount(plan, promoCode);

    if (discountAmount > 0) {
      setDiscount(discountAmount);
      setPromoApplied(true);
    } else {
      alert("Invalid promo code");
      setDiscount(0);
      setPromoApplied(false);
    }
  };

  const calculateDiscount = (planAmount, code) => {
    if (!planAmount || !code) return 0;

    if (exclusiveArray.includes(code.toUpperCase())) {
      return Math.round(Number(planAmount) * 0.2);
    }

    return 0;
  };

  // Plan options based on location
  const getPlanOptions = () => {
    if (!basecampLocation) return [];

    if (basecampLocation === "Pune - 12th Feb'26") {
      return [
        { value: "9999", label: "For Individuals - ₹9999 + GST" },
        { value: "22499", label: "For Team of 3 members - ₹22499 + GST" },
      ];
    } else if (basecampLocation === "Mumbai - 26th Feb'26") {
      return [
        { value: "7999", label: "Early Bird - For Individuals - ₹7999 + GST" },
        {
          value: "17999",
          label: "Early Bird - For 3 Team members - ₹17999 + GST",
        },
      ];
    }

    return [];
  };

  // Reset plan when basecamp location changes
  useEffect(() => {
    setValue("plan", "");
    setDiscount(0);
    setPromoApplied(false);
  }, [basecampLocation, setValue]);

  return (
    <div>
      {/* FLOATING REGISTER DIV */}
      <div className="floating-register-div">
        <div className="floating-register-left">
          <p className="floating-register-text">
            Early Bird Offer Ending Soon. Only 10 Spots Remain. Reserve Yours
            Now.
          </p>
          <p className="floating-register-subtext"></p>
        </div>
        <div className="floating-register-right">
          <button className="floating-register-button" onClick={handleShow}>
            SECURE YOUR SPOT NOW
          </button>
        </div>
      </div>
      {/* HERO SECTION */}
      <section className="hero-section1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-3 col-md-12 col-12 order-lg-1 order-1">
              <div className="hero-content">
                <div className="hero-icon-img">
                  <Image
                    className="logo-image"
                    src={basecamplogo2}
                    alt="img2"
                  />
                </div>
                <p className="hero-subtitle text-center text-md-left">
                  Scale With More Clarity, Robust Systems, Increased Cashflows
                  and More Productive Teams
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 order-lg-2 order-2">
              <div className="hero-right">
                <div
                  className="hero-image-placeholder"
                  style={{ backgroundImage: "url('girl.png')" }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 order-lg-3 order-3">
              <div className="hero-right">
                <div className="hero-info">
                  <p className="sentence-text">
                    {sentences[sentenceIndex]}{" "}
                    <br className="d-none d-md-block" />
                  </p>
                  <div className="sentence-dots">
                    {sentences.map((_, i) => (
                      <span
                        key={i}
                        className={`dot ${i === sentenceIndex ? "active" : ""}`}
                        onClick={() => setSentenceIndex(i)}
                      ></span>
                    ))}
                  </div>
                  <div className="date-time">
                    <div>
                      <i>
                        Exclusively crafted for Founders{" "}
                        <br className="d-none d-md-block" />& Top Executives
                      </i>
                    </div>
                    <div></div>
                  </div>
                  <button
                    className="btn btn-cta w-100 w-md-auto text-center"
                    onClick={handleShow}
                  >
                    REGISTER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="page-wrapper">
        {/* <!-- TOP SECTION --> */}
        <section class="hero">
          <h1>
            Your company is growing but
            <br />
            your growth is unpredictable
          </h1>

          <p class="description">
            Business owners often come to a point where what was working earlier
            for them stops working altogether. The team doesn’t feel equipped to
            handle the new scale that is envisioned, and the overall pressure
            across the company is building up.
          </p>
          <br />
          <p class="description">
            Basecamp workshop provides a proven playbook to business owners to
            scale with absolute clarity and freedom.
          </p>
        </section>

        {/* <!-- OFFER SECTION --> */}
        <section class="offer">
          <h2>EARLY BIRD OFFER</h2>

          <div class="price">
            <span class="old-price">Rs 9999</span>
            <span class="new-price">Rs 7999 only</span>
          </div>
          <p style={{ color: "#0b2239" }}>
            <h5>Ending Soon. Hurry!</h5>
          </p>
          <p>&nbsp;</p>
          <button class="cta-btn">SIGN UP TODAY</button>

          <p class="guarantee">
            Money Back Guarantee
            <br />
            No questions asked if you don’t find the workshop valuable.
          </p>
        </section>
      </div>
      {/* UNLOCK SECTION */}
      <section className="unlock-section">
        <div className="container">
          <h2 className="section-title">Unlock The Power Of Scaling Up</h2>
          <div className="row spacer"></div>
          <div className="row spacer"></div>
          <div className="row">
            <div className="col-md-3">&nbsp;</div>
            <div className="col-md-6">
              <p className="section-subtitle text-center">
                Success Alchemists leverage the Scaling Up framework{" "}
                <br className="d-none d-md-block" />- which is a globally proven
                framework - to grow <br className="d-none d-md-block" />
                businesses exponentially & sustainably.
              </p>
            </div>
            <div className="row spacer"></div>
            <div className="row spacer"></div>
          </div>

          <div className="row">
            <div className="col-md-3">&nbsp;</div>
            <div className="col-md-6">
              <p className="section-subtitle text-center">
                In the Basecamp 1-day workshop, we deep dive into the{" "}
                <br className="d-none d-md-block" />4 pillars of a business –
                <strong> People, Strategy, Execution & </strong>
                <br className="d-none d-md-block" />
                <strong>Cash</strong> – and teach you how to use Scaling Up to
                drive <br className="d-none d-md-block" />
                your next big decision(s) to scale your business.
              </p>
            </div>
          </div>

          <div className="row metrics-container">
            <div className="col-md-4 col-12">
              <div className="metric-box">
                <div className="metric-value">100K +</div>
                <div className="metric-label">Companies Worldwide</div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="metric-box">
                <div className="metric-value">10X</div>
                <div className="metric-label">Valuations Multiplied</div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="metric-box">
                <div className="metric-value">3X</div>
                <div className="metric-label">Profitability Increased</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="experience-section">
        <div className="container">
          <h1 className="experience-section-title">
            What You'll <br className="d-none d-md-block" /> Experience At{" "}
            <br className="d-none d-md-block" /> BASECAMP?
          </h1>

          <div className="row experience-grid ">
            <div className="col-md-6 col-12">
              <div className="experience-item">
                <div className="experience-icon">
                  <img src="arrow.png" width="200" alt="arrow" />
                </div>
                <div className="experience-text">
                  Discover how other players in your industry are scaling their
                  businesses
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="experience-item">
                <div className="experience-icon">
                  <img src="arrow.png" width="200" alt="arrow" />
                </div>
                <div className="experience-text">
                  Learn the nuances of business growth from scaling up certified
                  coaches
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="experience-item">
                <div className="experience-icon">
                  <img src="arrow.png" width="200" alt="arrow" />
                </div>
                <div className="experience-text">
                  Identify the gaps in your current business that's hindering
                  your next big leap
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="experience-item">
                <div className="experience-icon">
                  <img src="arrow.png" width="200" alt="arrow" />
                </div>
                <div className="experience-text">
                  Network with other ambitious business owners & leaders
                </div>
              </div>
            </div>
          </div>

          <div className="highlight-box">
            <div className="highlight-icon">
              <img src="./rocket_growth.png" width="240" />
            </div>
            {/* <div className="highlight-text">
              In our past workshops, leaders{" "}
              <br className="d-none d-md-block" />
              have figured out a{" "}
              <span className="highlight-yellow">
                5-15% <br className="d-none d-md-block" />
                Cashflow Growth Strategy{" "}
              </span>
              for <br className="d-none d-md-block" />
              their respective businesses during{" "}
              <br className="d-none d-md-block" />
              the sessions.
            </div> */}
            <div className="highlight-text">
              Tools & Frameworks that’ll enable you to navigate through the
              chaos that comes when you’re trying to scale your business.
            </div>
          </div>
        </div>
      </section>

      <div className="row">&nbsp;</div>
      <div style={{ position: "relative" }}>
        <Swiper
          ref={swiperRef}
          slidesPerView={"auto"}
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
                <div className="video col-md-2"></div>
                <div className="video col-md-8">
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
                <div className="video col-md-2"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="img-fluid navigation-buttons">
          <div onClick={backward}>
            <Image
              src={left_arrow_btn}
              className="img-fluid nav-left-btn"
              alt="right side image"
            />
          </div>
          <div onClick={forward}>
            <Image
              src={right_arrow_btn}
              className="img-fluid nav-left-btn"
              alt="right side image"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="section-title ">
          Leaders who attended the Basecamp workshops in the past said this
        </h2>
        <div className="row spacer"></div>
      </div>
      <section className="section excite-section">
        <div className="container">
          <h1 className="experience-section-title">
            This Should Excite You If…{" "}
          </h1>
          <div className="row">&nbsp;</div>
          <div className="row">
            <div className="col-md-1 d-none d-md-block">&nbsp;</div>
            <div className="col-md-11 col-12 excite-section-list">
              <i className="fa-solid fa-arrow-trend-up me-2"></i> You are
              running a company with turnover of 50 CR+
            </div>
          </div>
          <div className="row spacer"></div>
          <div className="row">
            <div className="col-md-1 d-none d-md-block">&nbsp;</div>
            <div className="col-md-11 col-12 excite-section-list">
              <i className="fa-solid fa-arrow-trend-up me-2"></i> You are
              serious about scaling up your business{" "}
              <br className="d-none d-md-block" />
              exponentially in the next 10 years
            </div>
          </div>
          <div className="row spacer"></div>
          <div className="row">
            <div className="col-md-1 d-none d-md-block">&nbsp;</div>
            <div className="col-md-11 col-12 excite-section-list">
              <i className="fa-solid fa-arrow-trend-up me-2"></i> You know what
              got you here, won’t take you to the next{" "}
              <br className="d-none d-md-block" />
              level
            </div>
          </div>
        </div>
      </section>

      <section className="join-section">
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="join-left">
              <h2>We’re Coming To Your City</h2>
              {/* <div className="row spacer"></div> */}
              <br></br>
              <h1>BASECAMP</h1>
              <div className="row spacer"></div>
              <div className="join-details">
                <div className="sub-job-details">
                  <h3>
                    <strong>Pune - 12th Feb’26</strong>
                  </h3>
                </div>
                <div className="row spacer"></div>

                <div className="sub-job-details">
                  <h3>
                    <strong>Mumbai - 26th Feb’26</strong>
                  </h3>
                </div>
                <div className="row spacer"></div>
                <div className="sub-job-details">
                  <h3>
                    <strong>Delhi-NCR - Coming Soon</strong>
                  </h3>
                </div>
              </div>
              <button
                className="btn btn-cta text-center"
                style={{ width: "100%", color: "#000000" }}
                onClick={handleShow}
              >
                EARLY BIRD PRICES START AT{" "}
                <span className="nowrap">Rs 7999 + GST</span>
                <br />
                <span className="btn-text">
                  <strong>REGISTER NOW</strong>
                </span>{" "}
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="join-right">
              <div className="">
                <img
                  src="banner.png"
                  style={{ height: "50% !important", zIndex: 9999 }}
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Have Questions About BASECAMP?</h2>
          <br />
          <h1 className="faq-heading">FAQs</h1>
          <br />
          <br />

          <div className="faq-item">
            <div className="faq-question">
              Q. Can multiple people from the same company join?
            </div>
            <div className="faq-answer">
              A. Yes. Don't forget to avail group offers.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">Q. Who is the BASECAMP for?</div>
            <div className="faq-answer">
              A. Founders, CXOs, L1 Leaders, Board Members
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              Q. What’s the duration of this workshop?
            </div>
            <div className="faq-answer">A. 7 hours</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              Q. How is Basecamp different than other generic business gyaan
              sessions?
            </div>
            <div className="faq-answer">
              A. Real business coaches who mentor companies with cumulative
              turnover of $2.07 Billions dollars will take you through the
              Scaling Up framework using case studies, tools, and insights that
              you can take back to your company & implement as it is for driving
              growth.{" "}
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              Q. What all is included in the workshop?
            </div>
            <div className="faq-answer">
              A. All sessions, lunch and hi-tea.{" "}
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">Q. Is it offline or online?</div>
            <div className="faq-answer">
              A. Offline workshop - conducted by Success Alchemists business
              coaches.{" "}
            </div>
          </div>

          <div className="contact-info">
            <p>
              For more info, write to us at <br></br>
              <a href="mailto:events@success-alchemists.com">
                events@success-alchemists.com
              </a>
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
        <Form onSubmit={rhfHandleSubmit(handleSubmit)} name="basecamp_form" id="basecamp_form">
          <Modal.Header closeButton>
            <Modal.Title>Book Your Seat</Modal.Title>
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
              <Form.Control.Feedback type="invalid">
                {errors.companyName?.message}
              </Form.Control.Feedback>
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
              <Form.Control.Feedback type="invalid">
                {errors.yourDesignation?.message}
              </Form.Control.Feedback>
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
                })}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName?.message}
              </Form.Control.Feedback>
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
                })}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
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
                    message: "Phone number must be 10 digits",
                  },
                })}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Basecamp Location</Form.Label>
              <Form.Select
                {...register("basecampLocation", {
                  required: "Please select a basecamp location",
                })}
                isInvalid={!!errors.basecampLocation}
              >
                <option value="">- Select Basecamp Location -</option>
                <option value="Pune - 12th Feb'26">Pune - 12th Feb'26</option>
                <option value="Mumbai - 26th Feb'26">
                  Mumbai - 26th Feb'26
                </option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.basecampLocation?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>No. of attendees</Form.Label>
              <Form.Select
                {...register("plan", {
                  required: "Please select a plan",
                })}
                isInvalid={!!errors.plan}
                disabled={!basecampLocation}
              >
                <option value="">- Select Plan -</option>
                {getPlanOptions().map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback
                type="invalid"
                style={{ display: "block" }}
              >
                {errors.plan?.message}
              </Form.Control.Feedback>
              {!basecampLocation && (
                <Form.Text className="text-muted">
                  Please select a basecamp location first
                </Form.Text>
              )}
            </Form.Group>

            <div className="row">&nbsp;</div>
            <Form.Group className="mb-3">
              <Form.Label>Apply Promo Code</Form.Label>
              <div className="d-flex gap-2">
                <Form.Control
                  type="text"
                  disabled={promoApplied}
                  placeholder="Enter promo code"
                  {...register("promoCode")}
                />

                {!promoApplied ? (
                  <Button variant="success" onClick={handleApplyPromo}>
                    Apply
                  </Button>
                ) : (
                  <Button variant="danger" onClick={handleRemovePromo}>
                    Remove
                  </Button>
                )}
              </div>

              {promoApplied && (
                <small className="text-success">
                  Promo applied! You saved ₹{discount}
                </small>
              )}
            </Form.Group>
              <input
              type="text"
              {...register("website")}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
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
  );
}
