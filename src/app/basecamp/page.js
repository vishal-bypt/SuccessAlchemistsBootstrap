"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import basecamplogo2 from "./Basecamp_White.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./style.css";

export default function BasecampPage() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("");
  const [order_id] = useState(`ORD${Date.now()}`);

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

  const handleSubmit = async (e) => {
      e.preventDefault();
  
      // ✅ Basic validations
      if (!firstName || !lastName || !email || !phone || !plan) {
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
  
      await handlePayment({ firstName, lastName, email, phone, plan });
  
      handleClose();
    };
  
    const handlePayment = async ({
      firstName,
      lastName,
      email,
      phone,
      plan,
    }) => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
      const payload = {
        order_id: order_id,
        amount: plan,
        billing_name: `${firstName} ${lastName}`,
        billing_email: email,
        billing_tel: phone,
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

  const openYT = (id) => {
    window.open("https://www.youtube.com/watch?v=" + id, "_blank");
  };

  const playMP4 = () => {
    const overlay = document.getElementById("mp4Overlay");
    const video = document.getElementById("mp4Video");
    if (overlay && video) {
      overlay.style.display = "none";
      video.style.display = "block";
      video.play();
      setPlaying(true);
    }
  };

  const togglePlay = () => {
    const v = videos[index];
    if (v.type === "mp4" && playerRef.current) {
      if (playerRef.current.paused) playerRef.current.play();
      else playerRef.current.pause();
      setPlaying(!playerRef.current.paused);
    }
  };

  const nextVideo = () => {
    if (index < videos.length - 1) setIndex(index + 1);
  };

  const prevVideo = () => {
    if (index > 0) setIndex(index - 1);
  };

  const v = videos[index];
  const progress = ((index + 1) / videos.length) * 100;

  return (
    <div>
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
                  Learn To Scale With Clarity
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
                  <p>
                    A workshop that can help you identify roadblocks & gaps in your exponential growth journey. <br className="d-none d-md-block" />
                    {/* make Crores of Cash for your business */}
                  </p>
                  <div className="date-time">
                    <div>
                      <i>
                        Exclusively crafted for Founders{" "}
                        <br className="d-none d-md-block" />& Top Executives
                      </i>
                    </div>
                    <div></div>
                  </div>
                  <button className="btn btn-cta w-100 w-md-auto text-center" onClick={handleShow}>
                    REGISTER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
  <br className="d-none d-md-block" />
  4 pillars of a business –
  <strong> People, Strategy,{" "}
  Execution & </strong>  
  <br className="d-none d-md-block" />
  <strong>Cash</strong> – and teach you how to use Scaling Up to drive{" "}
  <br className="d-none d-md-block" />
  your next big decision(s) to scale your business.
</p>

            </div>
          </div>

          <div className="row metrics-container">
            <div className="col-md-4 col-12">
              <div className="metric-box">
                <div className="metric-value">80,000</div>
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
              Tools & Frameworks that’ll enable you to navigate through the chaos that comes when you’re trying to scale your business.
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO CAROUSEL */}
      <div
        className="video-frame position-relative"
        style={{
          maxWidth: 900,
          margin: "40px auto",
          aspectRatio: "16/9",
          background: "#000",
          border: "10px solid #1a1a1a",
          borderRadius: 10,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {!isPlaying && (
          <div className="video-overlay" onClick={() => setPlaying(true)}>
            <Image
              src="https://img.youtube.com/vi/7ZCfJEMV4nE/maxresdefault.jpg"
              alt="youtube"
              fill
              className="object-cover opacity-60"
            />
            <i
              className="fa-solid fa-circle-play text-warning"
              style={{ fontSize: 45 }}
            ></i>
            <div className="text-white mt-2 text-sm">Play Video</div>
          </div>
        )}

        {isPlaying && (
          <iframe
            ref={playerRef}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/7ZCfJEMV4nE?si=zuuvzaP_Wk3pN-tE"
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        )}
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
              <i className="fa-solid fa-arrow-trend-up me-2"></i> You are running a company with turnover of 50 CR+
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
              <i className="fa-solid fa-arrow-trend-up me-2"></i> You know what got you here, won’t take you to the next{" "}
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
                    <strong>Pune - 12th Feb’25</strong>
                  </h3>
                </div>
                  <div className="row spacer"></div>

                <div className="sub-job-details">
                  <h3>
                    <strong>Mumbai - 26th Feb’25</strong>
                  </h3>
                </div>
                <div className="row spacer"></div>
                <div className="sub-job-details">
                  <h3>
                    <strong>DELHI-NCR - 24th MAr’25</strong>
                  </h3>
                </div>
              </div>
              <button
                className="btn btn-cta text-center"
                style={{ width: "100%", color: "#000000" }}
                onClick={handleShow}
              >
                Early Bird Prices Start At <span className="nowrap">Rs 7999</span>
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
              turnover of $xxx million dollars will take you through the Scaling
              Up framework using case studies, tools, and insights that you can
              take back to your company & implement as it is for driving growth.{" "}
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
              For more info, write to us at{" "}<br></br>
              <a href="mailto:lakshmy@success-alchemists.com">
                lakshmy@success-alchemists.com
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
                <Form onSubmit={handleSubmit}>
                  <Modal.Header closeButton>
                    <Modal.Title>Book Your Seat</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
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
        
                    <Form.Label>Plan</Form.Label>
                    <Form.Select
                      value={plan}
                      onChange={(e) => setPlan(e.target.value)}
                      required
                    >
                      <option value="">- Select Plan -</option>
                      {/* <option value="9999">Early Bird - For Individuals - ₹9999</option>
                      <option value="23999">Early Bird - For Teams - ₹23999</option> */}
                      <option value="11999">Regular - For Individuals - ₹11999</option>
                      <option value="27999">Regular - For Teams - ₹27999</option>
                    </Form.Select>
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
}
