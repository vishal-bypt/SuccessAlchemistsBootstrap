"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { memo } from "react";
import about from "../../app/about/images/Success7.png";
import Backward from "../../app/who/images/Backward.png";
import Forward from "../../app/who/images/Forward1.png";
import "./about2.css";
import africa from "./images/africa.jpeg";
import ashima from "./images/Ashima.png";
import ashutosh from "./images/Ashutosh.png";
import augustine from "./images/Augustine.png";
import bobby from "./images/Bobby.png";
import india from "./images/india.jpg";
import jyoti from "./images/Jyoti.png";
import kavita from "./images/Kavita.png";
import lakshmy from "./images/Lakshmi.png";
import nd from "./images/ND.png";
import nimisha from "./images/Nimisha.png";
import puja from "./images/Puja.png";
import rahul from "./images/Rahul.png";
import sandesh from "./images/Sandesh.png";
import sangeeta from "./images/Sangeeta.png";
import uae from "./images/uae.png";
import ajay from "./images/Ajay.png";
import vikram from "./images/vikram.png";


const About = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const getItemsPerPage = () => (window.innerWidth < 768 ? 1 : 3);

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? 0 : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= coaches.length
        ? prevIndex
        : prevIndex + itemsPerPage
    );
  };

  const handlePrev1 = () => {
    setCurrentIndex1((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? 0 : prevIndex - itemsPerPage
    );
  };

  const handleNext1 = () => {
    setCurrentIndex1((prevIndex) =>
      prevIndex + itemsPerPage >= coaches1.length
        ? prevIndex
        : prevIndex + itemsPerPage
    );
  };
  const coaches = [
    // {
    //   name: "Chirag Savla",
    //   role: "Certified Scaling Up Coach | Ex-CEO, Godrej East Africa",
    //   description: "Chirag is a seasoned business operator with 20+ years of P&L leadership across Africa, the Middle East, and India — including an 11-year tenure at Godrej Consumer Products as CEO for East Africa and Regional Head for the Rest of Africa and Middle East. He has led multi-country operations spanning brand building, manufacturing, exports, and financial strategy at scale. As a Certified Scaling Up Coach, he now works with founders and leadership teams to move businesses from entrepreneurial hustle to structured, predictable growth. His coaching is grounded in operating reality, not theory - built on two decades of running businesses where the stakes were real.",
    //   image: nd,
    // },
    {
      name: "N. Dharmadhikari",
      role: "Certified Alchemist Coach| Independent Director",
      description: "ND is a seasoned corporate leader with 25+ years of experience spanning telecom and technology sectors across India and the Middle East — including senior roles at Etisalat, Reliance Communications, and Idea Cellular. He has led high-stakes portfolio strategy, revenue transformation, and go-to-market execution at an international scale, including overseeing the merger of two major telecom entities serving markets across MENA. Today, as an Independent Business Consultant and Director, he advises Tech Solutions companies on closing the gap between commercial ambition and operational discipline. His edge: knowing exactly where growth leaks profitability, and fixing it.",
      image: nd,
    },
    {
      name: "Lakshmy S Nair",
      role: "Certified Alchemist Coach | Ex-Banker",
      description: "Lakshmy brings a rare combination of financial acumen and human potential expertise to her coaching practice. With nearly a decade as Credit Manager at Federal Bank, she developed a sharp understanding of business risk, performance, and decision-making before transitioning into coaching and leadership development. A Certified Alchemist Coach at Success Alchemists, a Master Practitioner in NLP, and a Certified Credit Professional, she works at the intersection of mindset and execution — helping professionals and organisations unlock performance that numbers alone cannot explain. Her grounding in both banking discipline and behavioural science makes her a coach who understands the pressures leaders face from the inside out.",
      image: lakshmy,
    },
    {
      name: "Sandesh Banger",
      role: "Certified Alchemist Coach | Ex-Banker | IIM-K",
      description: "Sandesh brings 15 years of experience across banking, finance, and technology — with stints at ICICI Bank, RBL Bank, and CDAC — before transitioning into the training and consulting space in 2018. He founded Hipertap Consulting, a boutique financial training firm delivering workshops and consulting across Financial Analysis, Credit Risk, Wholesale Banking, and Investment Banking. As a Certified Alchemist Coach at Success Alchemists, he now works directly with CXOs, senior leadership teams, and business heads to build scalable, profitable enterprises. His rare combination of deep financial expertise and front-line business coaching makes him a trusted advisor for ambitious entrepreneurs ready to grow with discipline.",
      image: sandesh,
    },
    {
      name: "Ashima Gupta",
      role: "Associate Coach | Agile Expert",
      description: "Ashima brings over two decades of technology leadership to her coaching practice, with senior engineering roles at Dell, BambooBox, Support.com, and Aptean spanning software development, product management, and organisational design. As a Director of Engineering and Agile practitioner, she has led high-performance technical teams through complex builds, rapid growth, and structural transformation. Now, as a Scaling Up Associate Coach at Success Alchemists, she helps entrepreneurs and organisations translate that operational depth into scalable, structured growth. Her edge is distinctive — she speaks the language of both the boardroom and the engineering floor.",
      image: ashima,
    },
    // {
    //   name: "Harjinder Kohli (Bobby)",
    //   role: "Certified Scaling Up Coach| ex- COO North America, Clarion",
    //   description: "Bobby is a seasoned technology and enterprise sales leader with nearly three decades of experience scaling businesses across India, government sectors, and North America. He has held VP and Head roles at Airtel and Reliance Jio, and spent over 12 years at Sify Technologies driving system integration and global alliances at the SVP level. At Clarion Technologies, he progressed from CEO of India & Government Business to his current role as COO North America — overseeing operations, partnerships, and growth across one of the most competitive technology markets in the world. His career is a masterclass in building and scaling technology-driven businesses across geographies, sectors, and market cycles. As a Certified Scaling Up Coach, he now works with founders and leadership teams to move businesses from entrepreneurial hustle to structured, predictable growth.",
    //   image: bobby,
    // },
    // {
    //   name: "Abhishek Hiraskar",
    //   role: "Associate Coach | Sports & Media Business Leader",
    //   description: "Abhishek is a sports industry professional with 10+ years of experience spanning broadcast, sponsorships, brand partnerships, and media rights across some of the world's most recognised sporting properties — including BCCI, IOC, NBA, ISL, EPL, and ICC Events. He has held partnerships and content leadership roles at JioStar and Ultrahuman, managing elite athlete programs and forging strategic alliances with marquee brands. Now, as an Associate Coach at Growth Alchemists Business Coaching, he channels that high-performance commercial background into helping businesses scale with clarity and purpose. He brings to coaching what few others can — a front-row view of how the world's biggest sporting brands are built and grown.",
    //   image: abhishek,
    // },
    {
      name: "Rahul Chaure",
      role: "Associate Coach| Entrepreneur",
      description: "Rahul Chaure is the rare kind of coach who has lived the entrepreneurial journey firsthand — not just advised on it. With over 15 years at the helm of EduVed Learning Solutions, a multi-product education technology company he has built and scaled from the ground up, he understands the real weight of P&L decisions, team building, and long-term strategy. Before EduVed, he held Business Head and Sales Head roles at Reliance Communications and DSK Digital Technologies, sharpening a commercial edge that cuts across telecom, technology, and education. Now, as an Associate Coach at Success Alchemists, he brings that founder's instinct and operator's discipline to help other entrepreneurs build businesses that are structured, scalable, and built to last.",
      image: rahul,
    },
    {
      name: "Nimisha Sainani",
      role: "Associate Coach,| Ex-CGO, Savart | ISB",
      description: "Nimisha is a growth-focused marketing and product leader with 12+ years of experience scaling startups across fintech, consumer tech, and digital products — with stints at Paytm, Multipl, Savart, and Little. As Chief Growth Officer at Savart, she led the full revenue and monetisation function for an AI-based wealth management platform, working across product, marketing, sales, and design. Her proven strength lies in driving outsized business outcomes with lean teams and limited resources — a discipline she now channels as a Business Coach at Success Alchemists, helping entrepreneurs build scalable, profitable businesses using the Scaling Up framework.",
      image: nimisha,
    },
    {
      name: "Ashutosh Sharma",
      role: "Scaling Up Coach | Fractional CMO",
      description: "Ashutosh is a senior marketing and business leader with over three decades of experience across SaaS, Media, Retail, FMCG, and Digital — spanning organisations like Times Internet, NowFloats, Euro RSCG, Ogilvy, and Cheil Communication. He has built and led marketing functions, digital businesses, and content operations at scale, delivering measurable growth across diverse sectors and business models. As a Fractional CMO, he brings CMO-level strategic depth to growth-stage companies without the full-time overhead. Now, as a Scaling Up Coach in Certification at Success Alchemists, he works towards installing the habits, rhythms, and decision-making infrastructure that turn growth ambitions into consistent, compounding results.",
      image: ashutosh,
    },
    {
      name: "Augustine Vaz",
      role: "Associate Coach| Customer Strategy & Data Leader",
      description: "Augustine brings over three decades of global consulting and business leadership experience, with senior roles at Capgemini, Ericsson, SAS Institute, and AT&T spanning the UK, US, and India. He has led customer lifecycle strategy, data-driven business transformation, and digital solutions for clients across telecoms, B2B2X, and enterprise sectors — consistently turning data and insights into measurable commercial outcomes. At Capgemini New York, he spearheaded Customer First & Data Strategy consulting for global organisations; at Ericsson, he drove digital business solutions across pre-sales and delivery for over five years. Now, as a Business Coach at Success Alchemists, he brings that rare global perspective and analytical rigour to help ambitious businesses scale with precision and purpose.",
      image: augustine,
    },
  ];
  const coaches1 = [
    {
      name: "Jyoti Hiraskar",
      role: "Happiness Champion",
      description: "Following a successful career as a teacher across schools in Mumbai and Pune, Jyoti Hiraskar joined Success Alchemists, bringing a unique perspective to the team. In her role as Happiness Champion, she leverages her expertise as an \"Art of Living\" teacher to guide others toward inner transformation. By integrating yoga and pranayama, Jyoti empowers our team to align with their life’s purpose and find clarity in their personal and professional journeys.",
      image: jyoti,
    },
     {
      name: "Sangeeta Acharya",
      role: "Associate Coach & Head Accountability",
      description: "Sangeeta holds an MBA from Pune University and brings 14 years of extensive experience in the telecom industry. She has demonstrated expertise in Customer Experience, Credit Risk Management, Collections, and Business Analysis. Sangeeta excels at driving operational excellence and leading strategic initiatives. She is also passionate about continuous learning and is an avid reader.",
      image: sangeeta,
    },
    {
      name: "Kavita Lakshman",
      role: "Accountability Partner",
      description: "Kavita holds a Bachelor of Arts degree from Mumbai University and has completed a Postgraduate Diploma in Travel and Tourism from the esteemed Garware Institute at Mumbai University. With over 16 years of experience in multinational companies, Kavita brings a wealth of expertise and a proven track record of success in the industry.",
      image: kavita,
    },
    {
      name: "Puja S Barori",
      role: "Accountability Partner",
      description: "Puja S Barori is a multifaceted individual with 10 years of experience in the BPO-ITO industry, offering outstanding team leadership training and developing efficient teams. She is a creative artist, a voyager and a passionate fitness and nutrition coach with an urge to promote a safe, enjoyable and sustainable platform for people aiming to achieve health and fitness goals.",
      image: puja,
    },
  ];

  const countries = [
  {
    id: 1,
    name: "INDIA",
    image: india,
  },
  {
    id: 2,
    name: "UAE",
    image: uae,
  },
  {
    id: 3,
    name: "AFRICA",
    image: africa,
  },
];


  return (
    <div className="about2_main_body_div">
      <section className="about2_first_div_layout about2_aboutUs">
        
        <div className="about2_main_first_div_body_new">
            <div
              className="innerContainer"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <p className="heading-white">
                Success Alchemists help  
                <span className="highlight-text"> accelerate</span> your business  
                <span className="highlight-text"> growth</span> with  
                <span className="highlight-text"> execution-focussed</span> business coaching
              </p>
              <div className="white-subtitle-text" >
               When we work with Founders & businesses, our core focus stays in bringing measurable impact through Leadership Development, Team Alignment, Structured Execution, and Strategic Insights. 
              </div>
              <div className="white-subtitle-text">
              We create sustainable transformation in the four foundational pillars of every growing business - People, Strategy, Execution & Cash. 
            </div>
            </div>
          </div>
      </section> 
      
      <section className="about2-second-layout"><div className="row metrics-container">
            <div className="col-md-4 col-12">
              <div className="metric-box">
                <div className="metric-value">$2 Bn</div>
                <div className="metric-label">CUM. Turnover of businesses coached last year</div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="metric-box">
                <div className="metric-value">800+</div>
                <div className="metric-label">Leaders Impacted</div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="metric-box">
                <div className="metric-value">12</div>
                <div className="metric-label">High performance Business Coaches</div>
              </div>
            </div>
          </div>
           <div className="section-title-black">Our Presence</div>
          <div className="country-section">
  {countries.map((item) => (
    <div className="country-card" key={item.id}>
      <Image
        src={item.image}
        alt={item.name}
        width={150}
        height={100}
        className="country-img"
      />
      <p className="country-name">{item.name}</p>
    </div>
  ))}
</div>
          </section>
    
         
      <section className="about2_third_layout">
        <div className="about2_main_second_div_body row">
          <div className="about2_innerContainer1">
            <div className="section-title-black text-left no-padding">We’re all about helping you</div>
           
            <div className="black-subtitle-text">
            At Success Alchemists, we are dedicated to transforming businesses. With a diverse client base spanning across various industries, and countries, we empower organizations to achieve sustainable growth and operational excellence.
            </div>
         
            <div className="black-subtitle-text">
            Our approach combines tailored implementation of the Scaling Up principles with executive coaching and execution support, ensuring that our clients not only set ambitious goals but also have the strategies and resources to achieve them. 
            </div>
         
            <div className="black-subtitle-text">
              We believe that with the right guidance and support, every organization can unlock its full potential and thrive in today's competitive landscape.
            </div>
          </div>

        </div>
      </section>
      <section className="about2_fourth_layout">
          <div className="d-flex justify-content-evenly">
          <Image src={about} style={{width: "95%", height: "auto"}} alt="graph" />
          </div>
      </section>

      <section className="about2_fifth_layout">
                <p className="section-title-white mb-2">Our Leadership</p>
                <div className="about2-leadership-section">
                  <div className="row">
                    <div className="col-lg-5 d-flex justify-content-start">
                      <Image
                        src={ajay}
                        alt="Ajay Hiraskar"
                        className="img-fluid custom-img"
                      />
                    </div>
                    <div className="col-lg-7 leadership-content">
                      <div className="leadership-content-title-logo">
                         <div className="leader-name">
                          Ajay Hiraskar
                         </div>
                         <a href="https://www.linkedin.com/in/ajayhiraskar?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
                        <div className="linkedin-white-bg">
                          <svg
                            viewBox="0 0 25 25"
                            width="25"
                            height="25"
                            fill="#0f2437"
                          >
                            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.2zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                          </svg>
                        </div>
                      </a>
                      </div>
                      <p className="white-subtitle-text" >
                        India’s 1st Scaling-Up Coach, Ajay brings 37 years of experience building and scaling companies across telecom, IT services, publishing, and industrial sectors. 
                      </p>

                      <p className="white-subtitle-text" >
                        He has helped businesses across technology, recruitment, manufacturing, and B2C implement the Scaling Up framework to accelerate growth.
                      </p>

                      <p className="white-subtitle-text" >
                        A long-time Charter and Governing Council Member of TiE Pune, Ajay also mentors startups and has helped organize TiECon, Pune’s largest startup conference.
                      </p>
                    </div>
                  </div>
      
                  <div className="row align-items-center">
                    <div className="col-lg-7 leadership-content order-2 order-lg-1">
                      <div className="leadership-content-title-logo">
                         <div className="leader-name">
                          Vikram Panjwani
                         </div>
                         <a href="https://www.linkedin.com/in/vikram-panjwani?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
                        <div className="linkedin-white-bg">
                          <svg
                            viewBox="0 0 25 25"
                            width="25"
                            height="25"
                            fill="#0f2437"
                          >
                            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.2zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                          </svg>
                        </div>
                      </a>
                      </div>
                      <p className="white-subtitle-text">
                        Vikram is a certified Scaling Up business coach and growth advisor who works with founders and leadership teams to build scalable, high-performance companies. 
                      </p>
                      <p className="white-subtitle-text">
                        With nearly three decades of experience in building and leading consumer and telecom businesses, he brings practical insight into sales, marketing, and P&L management.
                      </p>
                      <p className="white-subtitle-text">
                        Having previously served as CEO of Denkali and held leadership roles at companies such as Vodafone and Tata Teleservices, Vikram now helps entrepreneurs implement the proven Scaling Up framework to achieve structured, sustainable growth.
                      </p>
                    </div>
                    <div className="col-lg-5 d-flex justify-content-end order-1 order-lg-2">
                      <Image
                        src={vikram}
                        alt="Vikram Panjwani"
                        className="img-fluid custom-img"
                      />
                    </div>             
                  </div>

                  <div className="row">
                    <div className="col-lg-5 d-flex justify-content-start">
                      <Image
                        src={bobby}
                        alt="Bobby"
                        className="img-fluid custom-img"
                      />
                    </div>
                    <div className="col-lg-7 leadership-content">
                      <div className="leadership-content-title-logo">
                         <div className="leader-name">
                          Harjinder Kohli (Bobby)
                         </div>
                         {/* <a href="https://www.linkedin.com/in/ajayhiraskar?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
                        <div className="linkedin-white-bg">
                          <svg
                            viewBox="0 0 25 25"
                            width="25"
                            height="25"
                            fill="#0f2437"
                          >
                            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.2zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                          </svg>
                        </div>
                      </a> */}
                      </div>
                      <p className="white-subtitle-text" >
                        Bobby is a seasoned technology and enterprise sales leader with nearly three decades of experience scaling businesses across India, government sectors, and North America.
                      </p>

                      <p className="white-subtitle-text" >
                         He has held VP and Head roles at Airtel and Reliance Jio, and spent over 12 years at Sify Technologies driving system integration and global alliances at the SVP level. At Clarion Technologies, he progressed from CEO of India & Government Business to his current role as COO North America — overseeing operations, partnerships, and growth across one of the most competitive technology markets in the world.
                      </p>

                      <p className="white-subtitle-text" >
                        His career is a masterclass in building and scaling technology-driven businesses across geographies, sectors, and market cycles. As a Certified Scaling Up Coach, he now works with founders and leadership teams to move businesses from entrepreneurial hustle to structured, predictable growth. 
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="about2_sixth_layout">
                <p className="section-title-white mb-2">
                  About Success Alchemists and the Team
                </p>
                <p className="white-subtitle-text">
                  At Success Alchemists, we harness the transformative power of the
                  Scaling Up framework, with strategic focus on the four pillars of
                  PEOPLE, STRATEGY, EXECUTION, and CASH. Since our inception in 2015,
                  we have been committed to helping mid-sized companies achieve
                  remarkable growth. Our mission is to empower ambitious entrepreneurs
                  to build successful, profitable, and sustainable businesses,
                  unlocking substantial value along the way. We deliver exceptional
                  value to our clients by enhancing their business operations and
                  strategies through the methodologies championed by Verne Harnish,
                  the Founder and CEO of Scaling Up and acclaimed author. Our proven
                  processes have enabled us to effectively support clients in India
                  and globally across various sectors, including manufacturing, IT
                  services, marketing solutions, recruitment, and more.
                </p>
              </section>
              <section className="about2_seventh_layout">
                <div className="section-title-black text-left no-padding">Team</div>
                <div className="black-subtitle-text">
                  We are a dedicated team of high performers, committed to our
                  clients’ success. Ajay Hiraskar, our founder and Chief Alchemist, is
                  the first certified Scaling Up Coach in India and the sole certified
                  coach in West and South India. With extensive knowledge and
                  experience, Ajay leads our team in delivering outstanding results.
                  The core Success Alchemists team is made up of experienced professionals, each bringing a diverse mix of expertise and experience from various domains. This collective knowledge positions us as an ideal partner for clients across industries, enabling us to tailor our approach to meet the unique needs of each business we serve.
                </div>
              <div className="about2_sub_seventh_layout">
                  <div className="about2_team_sub_container">
                    <div className="d-flex flex-row justify-content-between scaling-row">
                      <div className="section-title-black text-left no-padding">
                        Associate Coaches
                      </div>
                      <div className="about2_btnContainer">
                        <button
                          className="about2_slider_btn about2_prev_btn"
                          onClick={handlePrev}
                          disabled={currentIndex === 0}
                        >
                          <Image src={Backward} alt="backward" />
                        </button>
                        <button
                          className="about2_slider_btn about2_next_btn"
                          onClick={handleNext}
                          disabled={currentIndex + itemsPerPage >= coaches.length}
                        >
                          <Image src={Forward} alt="forward" />
                        </button>
                      </div>
                    </div>
      
                    <div className="row g-4">
                      {coaches
                        .slice(currentIndex, currentIndex + itemsPerPage)
                        .map((coach, index) => (
                          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="about2_card_coach h-100 shadow-lg">
                              <Image
                                src={coach.image}
                                className="about2_card_img_top img-fluid"
                                alt={coach.name}
                              />
                              <div className="about2_card_body">
                                <div className="gap-2">
                                  <p className="about2_member_name">{coach.name}</p>
                                  <p
                                    className="about2_member_role"
                                    style={{ color: "rgba(251, 168, 25, 1)" }}
                                  >
                                    {coach.role}
                                  </p>
                                </div>
                                  <p className={`about2_card_text ${expanded ? "expanded" : ""}`}>
                                    {coach.description}
                                  </p>

                                  {/* Show button only on mobile */}
                                    <button
                                      className="read-more-btn"
                                      onClick={() => setExpanded(!expanded)}>
                                      {expanded ? "Read Less" : "Read More"}
                                  </button>       
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
      
                  </div>
                  <div className="about2_team_sub_container">
                    <div className="d-flex flex-row justify-content-between scaling-row">
                      <div className="section-title-black text-left no-padding" >
      
                        Management Team
                      </div>
                      <div className="about2_btnContainer">
                        <button
                          className="about2_slider_btn about2_prev_btn"
                          onClick={handlePrev1}
                          disabled={currentIndex1 === 0}
                        >
                          <Image src={Backward} alt="backward" />
                        </button>
                        <button
                          className="about2_slider_btn about2_next_btn"
                          onClick={handleNext1}
                          disabled={currentIndex1 + itemsPerPage >= coaches1.length}
                        >
                          <Image src={Forward} alt="forward" />
                        </button>
                      </div>
                    </div>
                    <div className="row g-4">
                      {coaches1
                        .slice(currentIndex1, currentIndex1 + itemsPerPage)
                        .map((coach, index) => (
                          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="about2_card_coach  h-100 shadow-lg">
                              <Image
                                src={coach.image}
                                className="about2_card_img_top img-fluid"
                                alt={coach.name}
                              />
                              <div className="about2_card_body">
                                <div>
                                  <p className="about2_member_name">{coach.name}</p>
                                  <p
                                    className="about2_member_role"
                                    style={{ color: "rgba(251, 168, 25, 1)" }}
                                  >
                                    {coach.role}
                                  </p>
                                </div>
                                <p className={`about2_card_text ${expanded ? "expanded" : ""}`}>
                                    {coach.description}
                                  </p>

                                  {/* Show button only on mobile */}
                                    <button
                                      className="read-more-btn"
                                      onClick={() => setExpanded(!expanded)}>
                                      {expanded ? "Read Less" : "Read More"}
                                  </button>    
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
      
                  </div>

              
                </div>
              </section>
    
     <section className="home2-hero-section-footer-webinar">
    <div className="home2-webinar-container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-8 col-md-12 col-12 order-lg-1 order-1">
          <div className="home2-hero-content-footer-webinar text-center">
            <h3 className="d-none d-md-block">
              Are You <br />
              <span>Ready To Scale?</span>
            </h3>
            <h3 className="d-block d-md-none">
              Are You <span>Ready To Scale?</span>
            </h3>
            <p className="home2-hero-subtitle">
              {/* <a href="/contactUs" className="text-decoration-none"> */}
              <button className="btn home2-btn-cta-footer-webinar text-center"  onClick={() => window.location.href = "/contactUs"}>
                <strong>REQUEST A CALLBACK</strong>
              </button>
              {/* </a> */}
            </p>
          </div>
        </div>
      </div>
    </div>
        </section>
    </div>
  );
});

export default About;
