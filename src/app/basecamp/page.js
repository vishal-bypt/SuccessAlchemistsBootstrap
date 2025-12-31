"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import basecamplogo2 from "./Basecamp_White.png";
import "./style.css";

export default function BasecampPage() {
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
                  <button className="btn btn-cta w-100 w-md-auto text-center">
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
                <br className="d-none d-md-block" />4 pillars of a business -
                People, Strategy, Execution &{" "}
                <br className="d-none d-md-block" />
                Cash - and teach you how to use Scaling Up to drive{" "}
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
      <div>
        {/* VIDEO CAROUSEL */}
        <div
          className="carousel-wrapper text-center position-relative"
          style={{ maxWidth: 900, margin: "40px auto", padding: "0 15px" }}
        >
          <button className="nav-arrow nav-left" onClick={prevVideo}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="nav-arrow nav-right" onClick={nextVideo}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <div
            className="video-frame position-relative"
            style={{
              aspectRatio: "16/9",
              background: "#000",
              border: "10px solid #1a1a1a",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            {v.type === "youtube" ? (
              <div className="video-overlay" onClick={() => openYT(v.id)}>
                <i
                  className="fa-brands fa-youtube text-warning"
                  style={{ fontSize: 40 }}
                ></i>
                <div className="text-white">Watch on YouTube</div>
              </div>
            ) : (
              <>
                {/* MP4 Overlay */}
                {/* MP4 Overlay */}
                {!isPlaying && (
                  <div
                    id="mp4Overlay"
                    className="video-overlay"
                    onClick={playMP4}
                  >
                    <Image
                      src={v.thumbnail}
                      alt="mp4"
                      fill
                      className="object-cover opacity-60"
                    />
                    <i
                      className="fa-solid fa-circle-play text-warning"
                      style={{ fontSize: 40 }}
                    ></i>
                  </div>
                )}

                {/* MP4 Player */}
                <video
                  id="mp4Video"
                  ref={playerRef}
                  controls
                  className="w-full h-full"
                  style={{
                    display: v.type === "mp4" && isPlaying ? "block" : "none",
                  }} // 👈 FIX
                  onEnded={() => setPlaying(false)}
                >
                  <source key={v.src} src={v.src} type="video/mp4" />{" "}
                  {/* 👈 also add key */}
                </video>

                {/* Optional Play/Pause Toggle */}
                {isPlaying && v.type === "mp4" && (
                  <button
                    className="absolute bottom-3 right-3 bg-black/50 px-3 py-1 rounded text-white text-sm"
                    onClick={togglePlay}
                  >
                    {playerRef.current?.paused ? "Play" : "Pause"}
                  </button>
                )}
              </>
            )}
          </div>

          {/* PROGRESS SLIDER */}
          <div
            className="progress-container mt-3"
            style={{
              height: 3,
              background: "#d9d9d9",
              borderRadius: 2,
              position: "relative",
            }}
          >
            <div style={{ width: progress + "%" }} className="progress"></div>
            <div style={{ left: progress + "%" }} className="slider-dot"></div>
          </div>
        </div>
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
              <h1>BASECAMP</h1>
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
              >
                Early Bird Prices Start At Rs 7999
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
                  style={{ height: "50% !important", zIndex:9999 }}
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
              For more info, write to us at{" "}
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
                  >
                    Limited spots Available
                    <br className="d-none d-sm-block" />
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
    </div>
  );
}
