'use client'
import React, { useState } from "react";
import "./eventDetail.css";

import Image from "next/image";
import aboutcurve1 from "../../../../public/assets/images/about-Curve-shape1.svg";
import bluecurve from "../basecamp/Images/blue-curve.svg";
import curve1 from "../../../../src/app/about/images/curve1.png";
import Double_arrow from "../../home/images/Double_arrow.png";
import check_icon from "../eventDetail/Images/checked-icon.svg"
import card_ajay from "../eventDetail/Images/card-ajay.png"
import market_analysis from "./Images/market_analysis.png";
import money_icon from "./Images/money_icon.png";
import people_icon from "./Images/people_icon.png";
import execution_icon from "./Images/execution_icon.svg";
import speaker_photo from "./Images/speaker-photo.png"

const page = () => {

  return (
    <div className="main_body_div">
      <div className="basecamp-hero-section">
        <Image className="blue-curve" src={bluecurve} alt="img2" />
        <div className="hero-content">

          <p className="heading" style={{ color: "white" }}>
            Are you looking for
            Accelerated growth and Augmented
            value ?
          </p>
          <p className="subText webinar-sub-text mt-2 col-md-8"
            style={{ color: "white" }}>
            Learn from India's first certified Scaling Up coach Ajay
            Hiraskar who has led the implementation of the Scaling Up
            performance platform across many industry verticals. This
            platform has already guided more than 80,000 companies world
            wide to succeed and grow.
          </p>
          <div className="col-md-5 col-lg-5 col-xxl-4 mt-5">
            <a href="#bookID" style={{ textDecoration: 'none' }}>
              <div className="attend-time-div" style={{ background: '#fff' }}>
                <div>
                  <p className="attend-text" style={{ color: '#fba819' }}>Attend the workshop</p>
                  <p className="location-text" style={{ color: '#fba819' }}>On 18th June 2025 at J W mariott, Pune</p>
                </div>
                <Image className="img-fluid" src={Double_arrow} alt="right" />
              </div>
            </a>
          </div>

        </div>
      </div>


      <div className="fifth_component">
        <div className="fifth_component_div">
          <div className="fifth_component_title_div">
            What is the purpose of the basecamp?
          </div>
          <div className="col-md-12 fifth_component_sub_title_div">
            The Scaling Up platform has delivered
          </div>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            rowGap: "16px",
            alignItems: "center",
            height: "max-content",
          }}
        >
          <div className="col-md-6 col-lg-4">
            <div className="unselected_box">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="unselected_box_card_title">More money</div>

              </div>
              <div className="unselected_box_text">
                <p className="list-image-name">
                  <Image
                    src={check_icon}
                    className="img-fluid checkImage"
                    alt="check-img"
                  />
                  2x Cash Flow
                </p>
                <p className="list-image-name">
                  <Image
                    src={check_icon}
                    className="img-fluid checkImage"
                    alt="check-img"
                  />
                  3x Industry Average Profitability
                </p>
                <p className="list-image-name">
                  <Image
                    src={check_icon}
                    className="img-fluid checkImage"
                    alt="check-img"
                  />
                  10x Valuation
                </p>
              </div>
              <div className="bottom_arrow_div">
                {/* <Image
                  src={Vector}
                  className="img-fluid"
                  alt="right side image"
                /> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="unselected_box">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="unselected_box_card_title">More time</div>

              </div>
              <div className="unselected_box_text">
                <p className="list-image-name">
                  <Image
                    src={check_icon}
                    className="img-fluid checkImage"
                    alt="check-img"
                  />
                  Reduce by 80% the time it takes to manage the business.
                </p>

              </div>
              <div className="bottom_arrow_div">
                {/* <Image
                  src={Vector}
                  className="img-fluid"
                  alt="right side image"
                /> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="unselected_box">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="unselected_box_card_title">More fun</div>

              </div>

              <div className="unselected_box_text">
                <p className="list-image-name">
                  <Image
                    src={check_icon}
                    className="img-fluid checkImage"
                    alt="check-img"
                  />
                  Support to speed up the process and take the load off the leadership team.
                </p>

              </div>
              <div className="bottom_arrow_div">
                {/* <Image
                  src={Vector}
                  className="img-fluid"
                  alt="right side image"
                /> */}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="fifth_component">
        <div className="who-basecamp">
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <Image
                src={card_ajay}
                className="img-fluid ajay-card-Image"
                alt="ajay-img"
              />
            </div>
            <div className="col-md-6 offset-lg-1 col-lg-6 fifth_gap">
              <h1 className="fifth_component_title_div">Who is the basecamp for?</h1>
              <div className="col-md-12">
                <div className="unselected_box blue-box">
                  <div>
                    <div className="unselected_box_card_title blue-box-title">Founders</div>

                  </div>
                  <div className="unselected_box_text blue-box-content">
                    <p className="list-image-name">
                      Empower founders to scale their vision, drive innovation, and achieve remarkable business growth.
                    </p>

                  </div>

                </div>
              </div>
              <div className="col-md-12">
                <div className="unselected_box blue-box">
                  <div>
                    <div className="unselected_box_card_title blue-box-title">CEOs</div>
                  </div>

                  <div className="unselected_box_text blue-box-content">
                    <p className="list-image-name">
                      Equip CEOs with scalable strategies, execution frameworks, and leadership mastery to foster a high-performance organization.
                    </p>

                  </div>

                </div>
              </div>
              <div className="col-md-12">
                <div className="unselected_box blue-box">
                  <div>
                    <div className="unselected_box_card_title blue-box-title">Top leadership of the company</div>
                  </div>

                  <div className="unselected_box_text blue-box-content">
                    <p className="list-image-name">
                      Equip the top leadership team with the tools and best practices needed to achieve breakthrough results.
                    </p>

                  </div>

                </div>
              </div>
              <div className="sixth_component_btn_div">
                <a href="#bookID">
                  ATTEND THE BASECAMP
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="fourth_component">
          <div className="fourth_component_first_div">
            <div className="fifth_component_title_div">
              Why should you attend this basecamp?
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-md-6 fourth_component_bottom_component_gray_light right_border_div border-bottom">

                <div className="text_div">Rapid Growth Strategies</div>
                <p className="attend-text" style={{ marginBottom: "0px" }}>
                  Uncover the exact steps to accelerate your business growth, as used by successful industry leaders.
                </p>
              </div>
              <div className="col-md-6 fourth_component_bottom_component_brack_div border-bottom">
                <div className="text_div">Actionable Tools</div>
                <p className="attend-text" style={{ marginBottom: "0px" }}>
                  Access our exclusive toolkit filled with practical resources and frameworks, saving you time and effort.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 fourth_component_bottom_component_brack_div right_border_div ">

                <div className="text_div">Expert Mentorship</div>
                <p className="attend-text" style={{ marginBottom: "0px" }}>
                  Learn from seasoned entrepreneurs and business experts who have been in your shoes and conquered the scaling up journey.
                </p>
              </div>
              <div className="col-md-6 fourth_component_bottom_component_gray_light">
                <div className="text_div">Network of Champions</div>
                <p className="attend-text" style={{ marginBottom: "0px" }}>
                  Connect with a community of like-minded individuals, collaborating and supporting each other’s growth.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="fifth_component blue_bg">
        <div className="fifth_component_div">
          <div className="fifth_component_title_div" style={{ color: "#fff" }}>
            What will the
            workshop cover?
          </div>
          <div className="col-md-12 fifth_component_sub_title_div" style={{ color: "#fff" }}>
            The foundational Four Pillars of Scaling Up!
          </div>
        </div>
        <div
          className="row"
          style={{
            display: "flex",

          }}
        >
          <div className="col-md-6 col-lg-3">
            <div className="unselected_box" style={{ background: "#fff" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="unselected_box_card_title">People</div>
                <Image
                  src={people_icon}
                  className="img-fluid growth-icon"
                  alt="right side image"
                />
              </div>
              <div className="unselected_box_text mb-2">
                Talent Assessment Exercise to evaluate the current leadership within your organization & draw up a roadmap for specific individuals. Also, understand the Process Accountability Chart (PACe) which will help you to improve processes within your organization.
              </div>
              <div className="bottom_arrow_div">
                {/* <Image
                  src={Vector}
                  className="img-fluid"
                  alt="right side image"
                /> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="unselected_box" style={{ background: "#fff" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="unselected_box_card_title">Strategy</div>
                <Image
                  src={market_analysis}
                  className="img-fluid growth-icon"
                  alt="right side image"
                />
              </div>
              <div className="unselected_box_text mb-2">
                Introduction to the One Page Strategic Plan (OPSP) which will help you build focus and alignment across all levels of your organization. You will build a Vision Summary (Simplified OPSP) for your organization.
              </div>
              <div className="bottom_arrow_div">
                {/* <Image
                  src={Vector}
                  className="img-fluid"
                  alt="right side image"
                /> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="unselected_box" style={{ background: "#fff" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="unselected_box_card_title">Execution</div>
                <Image
                  src={execution_icon}
                  className="img-fluid growth-icon"
                  alt="right side image"
                />
              </div>
              <div className="unselected_box_text mb-2">
                Rockefeller Habits checklist which will help build seamless execution capabilities across your organization. Learn the use of the simple, but powerful Who-What-When (WWW) Summary to drive actions and accountabilities.
              </div>
              <div className="bottom_arrow_div">
                {/* <Image
                    src={Vector}
                    className="img-fluid"
                    alt="right side image"
                  /> */}
              </div>

            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="unselected_box" style={{ background: "#fff" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="unselected_box_card_title">Cash</div>
                <Image
                  src={money_icon}
                  className="img-fluid growth-icon"
                  alt="right side image"
                />
              </div>
              <div className="unselected_box_text mb-2">
                The Power of One Tool which will show you the impact on cash-flow when making changes to the financial levers of your business
              </div>
              <div className="bottom_arrow_div">
                {/* <Image
                    src={Vector}
                    className="img-fluid"
                    alt="right side image"
                  /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fifth_component">
        <div className="who-basecamp">
          <h1 className="fifth_component_title_div">Who is the basecamp for?</h1>
          <div className="row mt-4">
            <div className="col-md-3 col-lg-3">
              <Image
                src={speaker_photo}
                className="img-fluid ajay-card-Image"
                alt="ajay-img"
              />
            </div>
            <div className="col-md-9 col-lg-9 fifth_gap" style={{ background: '#f9f9f9', padding: '32px', borderRadius: '16px' }}>
              <h1>Ajay Hiraskar</h1>
              <p className="list-image-name-ajay">
                Join our exclusive one-day workshop with Ajay Hiraskar, India’s first certified Scaling Up coach, and unlock the keys to accelerating your business growth. Learn proven strategies to double your cash flow, triple your profitability, and increase your company’s valuation tenfold. This workshop provides rapid growth strategies, actionable tools, expert mentorship, and access to a network of industry champions. Tailored for founders, CEOs, and top leadership, it empowers you to scale your vision, drive innovation, and achieve extraordinary success. Explore essential growth tools across the four pillars of scaling up: People, Strategy, Execution, and Cash. Transform your organization with our Scaling Up workshop!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="scalingup-all-div">
        <div>
          <h1 className="fifth_component_title_div">What is Scaling Up all about?</h1>
          <p className="fifth_component_sub_title_div">Scaling Up is a proven methodology that has transformed countless organizations and helped them achieve remarkable success. Join us on this transformative journey and discover how Scaling Up can take your business to new heights.</p>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="scale-box">
              <h3>01.People</h3>
              <p>Harness the power of your biggest asset – your people.</p>
              <p>Scaling Up offers simple tools to align your team with your strategy and optimize their performance.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="scale-box">
              <h3>02.Strategy</h3>
              <p>Craft a clear and differentiated strategy that sets you apart from your competitors.</p>
              <p>Scaling Up helps you develop a revenue-oriented plan that covers short-term and long-term goals.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="scale-box">
              <h3>03.Execution</h3>
              <p>Streamline your processes and eliminate unnecessary drama.</p>
              <p>Scaling Up provides the Rockefeller Habits ChecklistTM to ensure smooth execution and focused teamwork.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="scale-box">
              <h3>04.Cash</h3>
              <p>Keep a close eye on your cash flow for sustained growth. Scaling Up unlocks tools to better plan and manage your finances.</p>
            </div>
          </div>
        </div>
        <div className="sixth_component_btn_div" style={{ margin: "0 auto" }}>
          <a href="#bookID">
            ATTEND THE BASECAMP
          </a>
        </div>
        <div className="col-md-12 event-video">
          <div className="seventh_components_card_box">
            <div className="video-card">
              <div className="video-thumbnail">
                <iframe
                  className="video-iframe"
                  width="100%"

                  src="https://www.youtube.com/embed/PGgIAnehjR8"
                  allow="autoplay; encrypted-media"
                ></iframe>
              </div>

            </div>
          </div>


        </div>

      </div>



      <div className="book-seat-div">
        <h2>2024 Success Alchemists Workshop</h2>
        <p>18th June 2025 .	10:00 AM  . 	JW MARRIOTT, Senapati Bapat Road | Pune, 411053</p>
      </div>
      <div className="col-md-11 book-seat-inner-div" id="bookID">
        <h3 className="book-header">Book Your Seat</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="left-div">
              <label className="till-date-label">
                Early bird Till 5th June
              </label>
              <div className="content-label-div">
                <div className="left-content-label">
                  <h3>For Individuals</h3>
                  <h5>₹8,999 <span>+ GST</span></h5>
                </div>
                <div className="left-content-label right-content-label">
                  <h3>For Teams</h3>
                  <h5>₹20,999 <span>+ GST</span></h5>
                  <p>for a group of 3 participants from the same company</p>
                </div>
              </div>
              <button className="register-btn-book">Register Now</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-div left-div-border">
              <label className="till-date-label till-date-grey" >
                Regular 6th to 14th June
              </label>
              <div className="content-label-div">
                <div className="left-content-label">
                  <h3 style={{color:"#fff"}}>For Individuals</h3>
                  <h5 style={{color:"#fff"}}>₹10,999 <span>+ GST</span></h5>
                </div>
                <div className="left-content-label right-content-label">
                  <h3 style={{color:"#fff"}}>For Teams</h3>
                  <h5 style={{color:"#fff"}}>₹23,999 <span>+ GST</span></h5>
                  <p style={{color:"#fff"}}>for a group of 3 participants from the same company</p>
                </div>
              </div>
              <button className="register-btn-book">Register Now</button>
            </div>
          </div>

        </div>


      </div>

    </div>


  );
};

export default page;
