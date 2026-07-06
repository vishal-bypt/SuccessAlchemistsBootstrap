"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import basecamplogo2 from "./Artboard.png";
import delhi from "./delhi.png";
import bangalore from "./bangaluru.jpg";
import pune from "./pune.jpeg";
import mumbai from "./mumbai.jpg";
import founderDependencyIcon from "../../../public/assets/images/founder-dependency.svg";
import unclearOwnershipIcon from "../../../public/assets/images/unclear-ownership.svg";
import prioritySlippageIcon from "../../../public/assets/images/priority-slippage.svg";
import marginPressureIcon from "../../../public/assets/images/margin-pressure.svg";
import blockingScaleIcon from "../../../public/assets/images/blocking-scale.svg";
import scalingUpFrameworkIcon from "../../../public/assets/images/scaling-up-framework.svg";
import peopleStrategyIcon from "../../../public/assets/images/people-strategy.svg";
import ninetyDaysIcon from "../../../public/assets/images/90-days.svg";
import moneyBackIcon from "../../../public/assets/images/money-back.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Toast from "../../components/Toast";
import "./style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function BasecampPage() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const swiperRef = useRef(null);
  // Holds the hero (outer) form data when the dialog is opened from it, so the
  // lead can be stored even if the user closes the dialog without submitting.
  const pendingHeroLeadRef = useRef(null);
  const handleClose = () => {
    setShow(false);
    if (pendingHeroLeadRef.current) {
      const lead = pendingHeroLeadRef.current;
      pendingHeroLeadRef.current = null;
      saveHeroLead(lead);
    }
    // Clear the hero (outer) form when returning to the page after the popup.
    resetHero();
  };
  const handleShow = () => {
    reset();   // ✅ reset here
    setShow(true);
  };
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    reset2();   // ✅ reset here
    setShow2(true);
  };
  const {
    register,
    handleSubmit: rhfHandleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    setValue,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      companyName: "",
      // yourDesignation: "",
      name: "",
      // lastName: "",
      email: "",
      phone: "",
      basecampLocation: "",
      plan: "",
      promoCode: "",
    },
  });

  const {
    register: register2,
    handleSubmit: form2Submit,
    formState: { errors: errors2, isValid: isValid2, isSubmitting: isSubmitting2 },
    watch: watch2,
    setValue: setValue2,
    reset: reset2,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      companyName: "",
      yourDesignation: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      basecampLocation: "Pune",
      plan: "",
      promoCode: "",
    },
  });

  // Hero (outer) "Reserve Your Spot" form
  const {
    register: registerHero,
    handleSubmit: heroHandleSubmit,
    formState: { errors: errorsHero },
    reset: resetHero,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      designation: "",
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
    "DMS20",
    "365CIRCLE",
    "STARTLABS"
  ];

  const items = [
    {
      id: 1,
      title: "Success story of #1 - Ador powerton",
      description:
        "Ravin Mirchandani, the Executive Chairperson talks about a remarkable success story about the impact of the Scaling Up performance system & the amazing business turnaround experienced within Ador Powertron. In the last section, Ravin talks about the things to keep in mind while selecting a good coach & the value added by the current coach.",
      src: " https://youtu.be/GyCb1FzL8f0",
    },
    {
      id: 2,
      title: "Success Story #2 - Aliens Tattoo",
      description:
        "In this video, Sunny Bhanushali the Founder & CEO of Aliens Tattoo talks about experiencing challenges of rapid growth, the biggest benefit of implementing a structured framework & the value added by their coach.",
      src: "https://youtu.be/yZYbwIRNFGo",
    },
    {
      id: 3,
      title: "Success Story #3 - Grauer & Weil (Engineering Division)",
      description:
        "Rohit More, the Director talks about the biggest benefits of implementing the Scaling Up framework. Besides ensuring alignment at every level within the organization, they clearly articulated their B-HAG (Big Hairy Audacious Goal) & have been systematically seeing growth YoY for the past 3 years. At the end, there is a reference to the Coach and the support provided in this growth journey.",
      src: "https://youtu.be/tVbpVpNADlw",
    },
    {
      id: 4,
      title: "Success Story #4 - Clarion Technologies",
      description:
        "In this video, their CEO, Siddharth Motiwale talks about the 'secret sauce' which has helped Clarion grow systematically over the past few years. He also talks about the value added by Ajay as their coach.",
      src: "https://youtu.be/WO1A4s2Zjy8",
    },
    {
      id: 5,
      title: "Success Story #5 - InfraCloud Technologies",
      description:
        "In this video, Girish Shilamkar, the Founder & CEO, shares some key aspects of the Scaling Up framework, which helped him build a great culture within his company. These foundations ultimately helped ensure a successful exit in 2025.",
      src:
        "https://youtu.be/kVqcCXjmE4w",
    },
    {
      id: 6,
      title: "Success Story #6 - Uplers & Mavlers",
      description:
        "In this video, Jaymin (CEO) & Nital (COO) talk about the benefits of implementing the Scaling Up framework. They ensured alignment at all levels within their business & experienced the resultant growth.",
      src:
        "https://youtu.be/KrLvC80Cbks",
    },
  ];

  const cityList = [
    // {
    //   id: 1,
    //   name: "Delhi-NCR",
    //   location: "IIT Delhi Campus",
    //   date: "15th April’26",
    //   image: delhi,
    //   earlyBird: "Early bird offer end 10th April' 26",
    //   price1: "Rs 9999",
    //   price2: "Rs 7999",
    //   button: "REGISTER NOW"
    // },
    // {
    //   id: 2,
    //   name: "Bangalore",
    //   date: "11th June’26",
    //   image: bangalore,
    //   status: "Sold Out",
    //   soldOut: true,
    //   button: "SOLD OUT"
    // },
    {
      id: 3,
      name: "Pune",
      date: "9th July’26",
      image: pune,
      price1: "Rs 9999",
      // price2: "Rs 7999",
      // earlyBird: "Early bird offer",
      button: "REGISTER NOW"
    },
    {
      id: 4,
      name: "Mumbai",
      date: "20th August’26",
      image: mumbai,
      price1: "Rs 9999",
      price2: "Rs 7999",
      earlyBird: "Early bird offer",
      button: "REGISTER NOW"
    },
    {
      id: 5,
      name: "Bangalore",
      date: "24th September’26",
      image: bangalore,
      price1: "Rs 9999",
      price2: "Rs 7999",
      earlyBird: "Early bird offer",
      button: "REGISTER NOW"
    },
    {
      id: 2,
      name: "Bangalore",
      date: "11th June’26",
      image: bangalore,
      status: "Sold Out",
      soldOut: true,
      button: "SOLD OUT"
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

  function getEmbedUrl(url) {
    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? `https://www.youtube.com/embed/${match[1]}?enablejsapi=1` : url;
  }

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

  // Hero form submit: prefill the "Book Your Seat" dialog and open it.
  const onHeroSubmit = (data) => {
    setValue("name", data.name, { shouldValidate: true });
    setValue("email", data.email, { shouldValidate: true });
    setValue("phone", data.phone, { shouldValidate: true });
    setValue("companyName", data.companyName, { shouldValidate: true });
    setValue("basecampLocation", "Pune - 9th July’26", {
      shouldValidate: true,
    });
    // Remember the lead so it is still stored if the dialog is closed unsubmitted.
    pendingHeroLeadRef.current = data;
    setShow(true);
  };

  // Persist a hero-form lead (abandoned dialog) via the same backend that the
  // dialog form uses; it writes to MongoDB and is synced to Google Sheets.
  const saveHeroLead = async (data) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl || !executeRecaptcha) return;
    try {
      const recaptchaToken = await executeRecaptcha("basecamp_lead");
      await fetch(apiUrl + "/register-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          billing_name: data.name,
          billing_email: data.email,
          billing_tel: data.phone,
          company: data.companyName,
          designation: data.designation,
          basecampLocation: "Pune",
          type: "basecamp-lead",
          recaptchaToken,
        }),
      });
    } catch (error) {
      // Best-effort background capture — never block or alert the user on failure.
      console.warn("Lead capture failed:", error);
    }
  };

  const handleSubmit = async (data) => {
    // Full registration takes over; do not also store the hero lead.
    pendingHeroLeadRef.current = null;
    if (data.website) {
      //return res.status(400).json({ error: 'Spam detected' });
      console.error("Error:", "Spam detected");
      Toast.error("Spam detected.");
      throw new Error(`Spam detected`);
    }
    await handlePayment(data);
    if (result === false) {
      return;
    }
    handleClose();
  };

  const handleSubmitForm2 = async (data) => {
    if (data.website) {
      //return res.status(400).json({ error: 'Spam detected' });
      console.error("Error:", "Spam detected");
      Toast.error("Spam detected.");
      throw new Error(`Spam detected`);
    }
    await handlePayment2(data);
    if (result === false) {
      return;
    }
    handleClose2();
  };

  const handlePayment2 = async (data) => {
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
      billing_name: `${firstName} ${lastName}`,
      billing_email: email,
      billing_tel: phone,
      company: companyName,
      designation: yourDesignation,
      basecampLocation: basecampLocation,
      type: "basecamp-basic",
    };

    //console.log("Records is:::::", payload);

    if (!executeRecaptcha) {
      Toast.error("reCAPTCHA not ready");
      return false;
    }

    // Check if API URL is defined
    if (!apiUrl) {
      alert(
        "Payment failed: API URL is not configured. Please check your environment variables."
      );
      console.error("NEXT_PUBLIC_API_URL is not defined");
      return false;
    }

    try {
      const recaptchaToken = await executeRecaptcha("basecamp_form");
      const response = await fetch(apiUrl + "/register-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, recaptchaToken }),
      });

      // Check if response is ok
      const paymentData = await response.json();

      if (!response.ok || !paymentData.success) {
        Toast.error(paymentData?.message || "Failed to submit the form.");
        return false;
      }

      if (!paymentData.success) {
        Toast.error(
          paymentData?.message || "Registration failed. Please try again later."
        );
        return false;
      }
      reset2();
      Toast.success("Registration submitted successfully!");
      handleClose2();
    } catch (error) {
      console.error("Basecamp form error:", error);
      alert(
        `Basecamp registration failed: ${error.message ||
        "Network error. Please check your connection and try again."
        }`
      );
    }
  };

  const handlePayment = async (data) => {
    const {
      name,
      // lastName,
      email,
      phone,
      plan,
      companyName,
      // yourDesignation,
      basecampLocation,
    } = data;

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const payload = {
      order_id: order_id,
      amount: Number(plan) - Number(discount),
      billing_name: name,
      billing_email: email,
      billing_tel: phone,
      company: companyName,
      // designation: yourDesignation,
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
        body: JSON.stringify({ ...payload, recaptchaToken }),
      });

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const paymentData = await response.json();
      if (!paymentData.success) {
        Toast.error(paymentData.message || "An error occurred while initiating payment.");
        return false;
      }
      console.log("Response from /initiate-payment:", paymentData);

      // ✅ Open Razorpay popup
      const options = {
        key: paymentData.data.key,
        amount: paymentData.data.amount * 100,
        currency: "INR",
        description: "Basecamp Payment",
        order_id: paymentData.data.orderId,

        handler: async function (response) {
          console.log("Payment Success:", response);

          // ✅ SEND TO BACKEND FOR VERIFY
          // const verifyRes = await fetch(apiUrl + "/verify-payment", {
          //   method: "POST",
          //   headers: { "Content-Type": "application/json" },
          //   body: JSON.stringify(response),
          // });

          // const data = await verifyRes.json();

          // if (data.success) {
          //   Toast.success("Payment verified successfully! Your registration is confirmed.");
          //   reset();
          //   handleClose();
          // } else {
          //   Toast.error("Payment verification failed.");
          // }
          handleClose();
          Toast.success("Payment received! Confirmation may take a few seconds.");

          reset();

        },

        prefill: {
          name: name,
          email: email,
          contact: phone,
        },
        modal: {
          ondismiss: async () => {
            try {
              const dismissResponse = await fetch(
                apiUrl + "/razorpay-dismissed",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    orderId: paymentData.data.orderId,
                  }),
                }
              );

              const dismissData = await dismissResponse.json();

              if (!dismissResponse.ok) {
                console.error(
                  "Failed to update dismissed payment:",
                  dismissData
                );
              }
            } catch (dismissError) {
              console.error(
                "Error while marking dismissed payment as failed:",
                dismissError
              );
            }

            Toast.error("Payment was not completed.");
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment fetch error:", error);
      Toast.error(
        `Payment failed: ${error.message ||
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
    } else if (basecampLocation === "Delhi-NCR - 15th April’26") {
      return [
        { value: "7999", label: "Early Bird - For Individuals - ₹7999 + GST" },
        {
          value: "17999",
          label: "Early Bird - For 3 Team members - ₹17999 + GST",
        },
      ];
    } else if (basecampLocation === "Pune - 9th July’26") {
      return [
        { value: "9999", label: "For Individuals - ₹9999 + GST" },
        {
          value: "22499",
          label: "For Team of 3 members - ₹22499 + GST",
        },
      ];
    } else if (basecampLocation === "Mumbai - 20th August’26") {
      return [
        { value: "7999", label: "Early Bird - For Individuals - ₹7999 + GST" },
        {
          value: "17999",
          label: "Early Bird - For 3 Team members - ₹17999 + GST",
        },
      ];
    } else if (basecampLocation === "Bangalore - 24th September’26") {
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

  // Reset promo code when plan changes
  useEffect(() => {
    setValue("promoCode", "");
    setDiscount(0);
    setPromoApplied(false);
  }, [plan, setValue]);


  const sliderRef = useRef(null);

  const getScrollStep = () => {
    const slider = sliderRef.current;
    if (!slider) return 0;
    const card = slider.querySelector(".city-card");
    if (!card) return 0;
    const styles = getComputedStyle(slider);
    const gap = parseFloat(styles.columnGap || styles.gap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -getScrollStep(),
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: getScrollStep(),
      behavior: "smooth"
    });
  };

  return (
    <div>
      {/* FLOATING REGISTER DIV */}
      <div className="floating-register-div">
        <div className="floating-register-left">
          <p className="floating-register-text">
            Early Bird Offer for Pune Basecamp Expires Soon
          </p>
          <p className="floating-register-subtext"></p>
        </div>
        <div className="floating-register-right">
          <button className="floating-register-button" onClick={handleShow}>
            SECURE YOUR SPOT NOW
          </button>
        </div>
      </div>
      {/* HERO FORM SECTION */}
      <section className="hero-form-section">
        <div className="container">
          <div className="row hero-form-row">
            <div className="col-lg-7 col-12 hero-form-left">
              <Image
                src={basecamplogo2}
                alt="BASECAMP"
                className="hero-form-brand"
                priority
              />
              <h1 className="hero-form-title">
                <span className="hero-form-title-accent">Scale</span> Without
                <br />
                Founder Dependency
              </h1>
              <p className="hero-form-desc">
                A 1-day Scaling Up workshop for founders and leadership teams
                to fix execution gaps across{" "}
                <span className="hero-form-desc-accent">
                  People, Strategy, Execution &amp; Cash.
                </span>
              </p>

              <ul className="hero-form-info">
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Pune</span>
                  <i className="fa-regular fa-calendar ms-3"></i>
                  <span>
                    9<sup>th</sup> July
                  </span>
                </li>
                <li>
                  <i className="fa-regular fa-clock"></i>
                  <span>7 hour Offline Workshop</span>
                </li>
                <li>
                  <i className="fa-solid fa-ticket"></i>
                  {/* <span>
                    Early Bird Rs <s>9,999</s> 7,999
                  </span> */}
                  <span>
                    Rs 9,999
                  </span>
                </li>
              </ul>

              <button className="btn-cta hero-form-cta" onClick={handleShow}>
                RESERVE YOUR SPOT
              </button>
            </div>

            <div className="col-lg-5 col-12 hero-form-right">
              <div className="hero-form-card">
                <div className="hero-form-card-header">
                  <div className="hero-form-card-icon">
                    <i className="fa-solid fa-user-group"></i>
                  </div>
                  <h3 className="hero-form-card-title">Reserve Your Spot</h3>
                </div>

                <form onSubmit={heroHandleSubmit(onHeroSubmit)} noValidate>
                  <div className="hero-form-field">
                    <label htmlFor="hf-name">Name</label>
                    <input
                      id="hf-name"
                      type="text"
                      placeholder="Full name"
                      autoComplete="name"
                      className={errorsHero.name ? "hf-invalid" : ""}
                      {...registerHero("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    {errorsHero.name && (
                      <span className="hero-form-error">
                        {errorsHero.name.message}
                      </span>
                    )}
                  </div>
                  <div className="hero-form-field">
                    <label htmlFor="hf-email">Email</label>
                    <input
                      id="hf-email"
                      type="email"
                      placeholder="Work email"
                      autoComplete="email"
                      className={errorsHero.email ? "hf-invalid" : ""}
                      {...registerHero("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errorsHero.email && (
                      <span className="hero-form-error">
                        {errorsHero.email.message}
                      </span>
                    )}
                  </div>
                  <div className="hero-form-field">
                    <label htmlFor="hf-phone">Phone</label>
                    <input
                      id="hf-phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      autoComplete="tel"
                      className={errorsHero.phone ? "hf-invalid" : ""}
                      {...registerHero("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Phone number must be 10 digits",
                        },
                      })}
                    />
                    {errorsHero.phone && (
                      <span className="hero-form-error">
                        {errorsHero.phone.message}
                      </span>
                    )}
                  </div>
                  <div className="hero-form-field">
                    <label htmlFor="hf-company">Company Name</label>
                    <input
                      id="hf-company"
                      type="text"
                      placeholder="Company name"
                      autoComplete="organization"
                      className={errorsHero.companyName ? "hf-invalid" : ""}
                      {...registerHero("companyName", {
                        required: "Company name is required",
                        minLength: {
                          value: 2,
                          message: "Company name must be at least 2 characters",
                        },
                      })}
                    />
                    {errorsHero.companyName && (
                      <span className="hero-form-error">
                        {errorsHero.companyName.message}
                      </span>
                    )}
                  </div>
                  <div className="hero-form-field">
                    <label htmlFor="hf-designation">Designation</label>
                    <input
                      id="hf-designation"
                      type="text"
                      placeholder="Your designation"
                      autoComplete="organization-title"
                      className={errorsHero.designation ? "hf-invalid" : ""}
                      {...registerHero("designation", {
                        required: "Designation is required",
                        minLength: {
                          value: 2,
                          message: "Designation must be at least 2 characters",
                        },
                      })}
                    />
                    {errorsHero.designation && (
                      <span className="hero-form-error">
                        {errorsHero.designation.message}
                      </span>
                    )}
                  </div>

                  <button type="submit" className="btn-cta hero-form-card-cta">
                    Reserve Your Spot
                  </button>
                </form>

                <p className="hero-form-card-note">
                  <i className="fa-solid fa-lock"></i> Limited seats | Offline
                  workshop
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCALE STUCK SECTION */}
      <section className="scale-stuck-section">
        <div className="container">
          <div className="scale-stuck-eyebrow">Where Scale Gets Stuck</div>
          <div className="scale-stuck-title">
            Growth should not create
            <br className="d-none d-md-block" /> more founder dependency
          </div>
          <p className="scale-stuck-desc">
            As businesses grow, execution often becomes harder to control.
            Founders remain involved in too many decisions. Teams are busy, but
            ownership is unclear. Meetings happen, but priorities still slip.
            Revenue grows, but cash flow and profit come under pressure.
          </p>
          <p className="scale-stuck-desc">
            Basecamp is designed to help founders and leadership teams to
            identify where scale is getting stuck — and fix it across People,
            Strategy, Execution &amp; Cash.
          </p>

          <div className="row scale-stuck-grid">
            <div className="col-md-6 col-12">
              <div className="scale-stuck-card">
                <div className="scale-stuck-icon">
                  <Image src={founderDependencyIcon} alt="Founder Dependency" />
                </div>
                <h3 className="scale-stuck-card-title">Founder Dependency</h3>
                <p className="scale-stuck-card-text">
                  Founders remain involved in too many decisions.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="scale-stuck-card">
                <div className="scale-stuck-icon">
                  <Image src={unclearOwnershipIcon} alt="Unclear Ownership" />
                </div>
                <h3 className="scale-stuck-card-title">Unclear Ownership</h3>
                <p className="scale-stuck-card-text">
                  Teams are busy, but ownership is unclear.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="scale-stuck-card">
                <div className="scale-stuck-icon">
                  <Image src={prioritySlippageIcon} alt="Priority Slippage" />
                </div>
                <h3 className="scale-stuck-card-title">Priority Slippage</h3>
                <p className="scale-stuck-card-text">
                  Meetings happen, but priorities still slip.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="scale-stuck-card">
                <div className="scale-stuck-icon">
                  <Image src={marginPressureIcon} alt="Margin Pressure" />
                </div>
                <h3 className="scale-stuck-card-title">Margin Pressure</h3>
                <p className="scale-stuck-card-text">
                  Revenue grows, but margins and cash flow come under pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WALK AWAY SECTION */}
      <section className="walkaway-section">
        <div className="container">
          <div className="walkaway-title">What You Will Walk Away With</div>
          <div className="walkaway-subtitle">
            By the end of the Basecamp, participants will have
          </div>

          <div className="row walkaway-grid">
            <div className="col-md-6 col-12">
              <div className="walkaway-item">
                <div className="walkaway-icon">
                  <Image src={blockingScaleIcon} alt="Blocking scale" />
                </div>
                <div className="walkaway-text">
                  A clearer view of what is blocking scale in their business
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="walkaway-item">
                <div className="walkaway-icon">
                  <Image src={scalingUpFrameworkIcon} alt="Scaling Up Framework" />
                </div>
                <div className="walkaway-text">
                  A practical understanding of the Scaling Up Framework
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="walkaway-item">
                <div className="walkaway-icon">
                  <Image src={peopleStrategyIcon} alt="People, Strategy, Execution & Cash" />
                </div>
                <div className="walkaway-text">
                  Better clarity on People, Strategy, Execution & Cash gaps
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="walkaway-item">
                <div className="walkaway-icon">
                  <Image src={ninetyDaysIcon} alt="90-day direction" />
                </div>
                <div className="walkaway-text">
                  A 90-day direction to improve accountability and business
                  momentum
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNLOCK SECTION */}
      <section className="unlock-section">
        <div className="container">
          <div className="unlock-title ">Unlock The Power Of Scaling Up</div>
          <div className="row">
            <div className="col-md-3 d-none d-md-block">&nbsp;</div>
            <div className="col-md-6">
              <p className="section-subtitle text-center">
                Success Alchemists leverage the Scaling Up framework{" "}
                <br className="d-none d-md-block" />- which is a globally proven
                framework - to grow <br className="d-none d-md-block" />
                businesses exponentially & sustainably.
              </p>
            </div>
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
      {/* REGISTRATION */}
      {/* INFO CARDS SECTION */}
      <section className="info-cards-section">
        <div className="container">
          <div className="row info-cards-row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="info-card">
                <h3 className="info-card-title">Who Should Attend?</h3>
                <ul className="info-card-list">
                  <li>Founders</li>
                  <li>CXOs</li>
                  <li>Leadership Teams</li>
                  <li>L1 Leaders</li>
                  <li>Board Members</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="info-card">
                <h3 className="info-card-title">What’s Included?</h3>
                <ul className="info-card-list">
                  <li>People, Strategy, Cash &amp; Execution sessions</li>
                  <li>Tools, Frameworks &amp; practical insights</li>
                  <li>Actionable takeaways for your business</li>
                  <li>Lunch &amp; hi-tea</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="info-card">
                <h3 className="info-card-title">Why It’s Different?</h3>
                <ul className="info-card-list">
                  <li>No generic business gyaan</li>
                  <li>Led by Scaling Up Certified coaches</li>
                  <li>Built around real business challenges</li>
                  <li>Focussed on practical implementaion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MONEY BACK SECTION */}
      <section className="money-back-section">
        <div className="money-back-container">
          <div className="money-back-icon">
            <Image src={moneyBackIcon} alt="Money-back guarantee" />
          </div>
          <div className="money-back-text">
            <h2>MONEY-BACK GUARANTEE</h2>
            <p>No questions asked if you don’t find the workshop valuable.</p>
          </div>
        </div>
      </section>

      <section className="city-section">

        <h2 className="city-title mb-5">We’re coming to your city</h2>

        <div className="basecamp-slider-container">

          <button className="arrow left" onClick={scrollLeft}>
            &#8249;
          </button>


          <div className="city-slider" ref={sliderRef}>

            {cityList.map((city) => (
              <div className="city-card" key={city.id}>

                <Image src={city.image} alt={city.name} className="city-img" />

                <h3 className="city-name">

                  {/* Location Icon */}
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 
      9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 
      1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                    </svg>
                  </span>{city.name}
                </h3>
                <div className="city-location ">{city.location}</div>
                <p className="city-date">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 
      0-2 .9-2 2v14c0 1.1.9 2 2 
      2h14c1.1 0 2-.9 
      2-2V6c0-1.1-.9-2-2-2zm0 
      16H5V9h14v11z"/>
                    </svg>
                  </span>{city.date}
                </p>

                {city.earlyBird && (
                  <>
                    <p className="early-bird">{city.earlyBird}</p>
                  </>
                )}

                <div className="price-row">
                  <span className={!city.earlyBird ? "" : "price-old"}>{city.price1}</span>
                  <span>{city.price2}</span>
                </div>

                {city.status && (
                  <p className="coming">{city.status}</p>
                )}

                <button
                  className={`city-btn${city.soldOut ? " sold-out" : ""}`}
                  // onClick={city.earlyBird ? handleShow : handleShow2}
                  onClick={handleShow}
                  disabled={city.soldOut}
                >
                  {city.button}
                </button>
              </div>
            ))}

          </div>

          <button className="arrow right " onClick={scrollRight}>
            &#8250;
          </button>

        </div >

      </section >

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
                      src={getEmbedUrl(d.src)}
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
        {/* <div className="img-fluid navigation-buttons">
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
        </div> */}
      </div>

      <div className="container">
        <div className="leader-title ">
          Leaders who attended the Basecamp workshops in the past said this
        </div>

      </div>
      <section className="faq-section">
        <div className="container">
          <h2 className="unlock-title">Have Questions About BASECAMP?</h2>
          <br />
          <h1 className="faq-heading">FAQs</h1>
          {/* <br /> */}
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

                >
                  <span style={{ color: "#fdae07" }}>Ready to Scale</span> <br />{" "}
                  with More Clarity?
                </h3>
                <h3
                  className="d-block d-md-none"

                >
                  <span style={{ color: "#fdae07" }}>Ready to Scale</span>{" "}
                  with More Clarity?
                </h3>
                <p className="hero-subtitle">
                  <button
                    className=" btn-cta-footer text-center"
                    style={{ width: "60%", color: "#000000" }}
                    onClick={handleShow}
                  //  disabled
                  >
                    LIMITED SPOTS AVAILABLE
                    <br />
                    <span className="btn-text">
                      <strong>RESERVE YOUR SPOT FOR PUNE NOW</strong>
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

            {/* <Form.Group className="mb-3">
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
            </Form.Group> */}

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* <Form.Group className="mb-3">
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
            </Form.Group> */}

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
                {/* <option value="Pune - 12th Feb'26">Pune - 12th Feb'26</option>
                <option value="Mumbai - 26th Feb'26">
                  Mumbai - 26th Feb'26
                </option> */}
                {/* <option value="Delhi-NCR - 15th April’26">
                  Delhi-NCR - 15th April’26
                </option> */}
                <option value="Pune - 9th July’26">
                  Pune - 9th July’26
                </option>
                <option value="Mumbai - 20th August’26">
                  Mumbai - 20th August’26
                </option>
                <option value="Bangalore - 24th September’26">
                  Bangalore - 24th September’26
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
            <Button type="submit" variant="primary" disabled={!recaptchaReady || isSubmitting || !isValid}>
              {isSubmitting ? "Submitting..." : recaptchaReady ? "Submit" : "Loading..."}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Form
          onSubmit={form2Submit(handleSubmitForm2)}
          name="basecamp_form"
          id="basecamp_form"
        >
          <Modal.Header closeButton>
            <Modal.Title>Register Your Interest</Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                {...register2("companyName", {
                  required: "Company name is required",
                  minLength: {
                    value: 2,
                    message: "Company name must be at least 2 characters",
                  },
                })}
                isInvalid={!!errors2.companyName}
              />
              <Form.Control.Feedback type="invalid">
                {errors2.companyName?.message}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Your Designation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your designation"
                {...register2("yourDesignation", {
                  required: "Designation is required",
                  minLength: {
                    value: 2,
                    message: "Designation must be at least 2 characters",
                  },
                })}
                isInvalid={!!errors2.yourDesignation}
              />
              <Form.Control.Feedback type="invalid">
                {errors2.yourDesignation?.message}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="For Example : John"
                {...register2("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters",
                  },
                })}
                isInvalid={!!errors2.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors2.firstName?.message}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="For Example : Smith"
                {...register2("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Last name must be at least 2 characters",
                  },
                })}
                isInvalid={!!errors2.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors2.lastName?.message}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                {...register2("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                isInvalid={!!errors2.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors2.email?.message}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="10-digit phone number"
                {...register2("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
                isInvalid={!!errors2.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors2.phone?.message}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Upcoming Basecamp Locations</Form.Label>
              <Form.Select disabled
                {...register2("basecampLocation", {
                  required: "Please select a basecamp location",
                })}
                isInvalid={!!errors2.basecampLocation}
              >
                <option value="">- Select Basecamp Location -</option>
                {/* <option value="Delhi-NCR">Delhi-NCR</option> */}
                <option value="Pune">Pune</option>
                {/* <option value="Dubai">Dubai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option> */}
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                {errors2.basecampLocation?.message}
              </Form.Control.Feedback>
            </Form.Group>


            <input
              type="text"
              {...register2("website")}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>

            <Button
              type="submit"
              variant="primary"
              disabled={!recaptchaReady || isSubmitting2 || !isValid2}
            >
              {isSubmitting2
                ? "Submitting..."
                : recaptchaReady
                  ? "Submit"
                  : "Loading..."}
            </Button>

          </Modal.Footer>

        </Form>
      </Modal>
    </div >
  );
}
