"use client";

import Image from "next/image";
import { memo, useState } from "react";
import about from "../../app/about/images/Success7.png";
import Backward from "../../app/who/images/Backward.png";
import blog4 from "../../app/who/images/Blog4.png";
import blog5 from "../../app/who/images/Blog5.png";
import blog6 from "../../app/who/images/Blog6.png";
import blog7 from "../../app/who/images/Blog7.png";
import coach1 from "../../app/who/images/coach1.png";
import coach2 from "../../app/who/images/coach2.png";
import coach3 from "../../app/who/images/coach3.png";
import coach6 from "../../app/who/images/coach6.png";
import coach7 from "../../app/who/images/coach7.png";
import Forward from "../../app/who/images/Forward1.png";
import man from "../../app/who/images/man.svg";
import india from "./images/india.jpg";
import uae from "./images/uae.png";
import africa from "./images/africa.jpeg";
import man2 from "../../app/who/images/vikram.svg";
import "./about2.css";


const About = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const itemsPerPage = 3;
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
    {
      name: "Ashima Gupta",
      role: "Associate Coach",
      description: "Ashima Gupta is a seasoned IT leader with over 20 years of experience developing products and leading high-performing teams across various industries. With a deep expertise in Agile practices, team building, and scaling complex systems, she has consistently driven growth and operational excellence. Ashima is also a certified yoga instructor and Art of Living teacher, passionate about integrating mindfulness and well-being into professional environments through meditation and breathwork.",
      image: coach1,
    },
    {
      name: "Lakshmy S Nair",
      role: "Associate Coach",
      description: "With a rich background spanning 15 years across various industries, Lakshmy brings a wealth of knowledge and experience to the table. Her career journey encompasses roles in business analysis, banking and credit analysis, education, and life and wellness coaching. She holds a postgraduate degree in Business Economics and is CAIIB certified, alongside being a Certified Credit Analyst.",
      image: coach2,
    },
    {
      name: "N Dharmadhikari",
      role: "Associate Coach",
      description: "Enriched with vast and extensive experience in varied commercial faculties within telecommunication industry in India and the UAE, N Dharmadhikari has successfully led teams to surpass yearly product revenue budgets of ~ $1 bn USD. A management graduate majoring in Marketing, he has been able to play multiple roles and drive business growth successfully in Marketing, Strategy and P&L.",
      image: coach3,
    },
    {
      name: "Sandesh Banger",
      role: "Associate Coach",
      description: "An MBA graduate from IIM Kozhikode with 15 years of extensive experience in Banking, Finance Consulting, and Training. Throughout his career, Sandesh has exposure working with businesses across multiple industries. As our go-to expert on cash management tools, with his profound financial domain knowledge and expertise, Sandesh’s insights are invaluable. He is also USA CFA Level 2 qualified. Sandesh has a passion for content creation and a keen interest in public speaking.",
      image: coach6,
    },
    {
      name: "Sangeeta Acharya",
      role: "Associate Coach & Head Accountability",
      description: "Sangeeta holds an MBA from Pune University and brings 14 years of extensive experience in the telecom industry. She has demonstrated expertise in Customer Experience, Credit Risk Management, Collections, and Business Analysis. Sangeeta excels at driving operational excellence and leading strategic initiatives. She is also passionate about continuous learning and is an avid reader.",
      image: coach7,
    },


  ];
  const coaches1 = [
    {
      name: "Jyoti Hiraskar",
      role: "Happiness Champion",
      description: "Jyoti Hiraskar joins Success Alchemists after her successful stint as a Teacher, having worked in various schools in Mumbai and Pune. Besides being an accountability partner at Success Alchemists, she is also an IT professional and an inner transformation teacher with “Art of living”, helping people understand the purpose of their life through yoga & pranayam.",
      image: blog4,
    },
    {
      name: "Kavita Lakshman",
      role: "Accountability Partner",
      description: "Kavita holds a Bachelor of Arts degree from Mumbai University and has completed a Postgraduate Diploma in Travel and Tourism from the esteemed Garware Institute at Mumbai University. With over 16 years of experience in multinational companies, Kavita brings a wealth of expertise and a proven track record of success in the industry.",
      image: blog5,
    },
    {
      name: "Puja S Barori",
      role: "Accountability Partner",
      description: "Puja S Barori is a multifaceted individual with 10 years of experience in the BPO-ITO industry, offering outstanding team leadership training and developing efficient teams. She is a creative artist, a voyager and a passionate fitness and nutrition coach with an urge to promote a safe, enjoyable and sustainable platform for people aiming to achieve health and fitness goals.",
      image: blog6,
    },
    {
      name: "Dashrath",
      role: "Accountability Partner",
      description: "Dashrath comes from a startup background and believes in the power of accountability to drive growth.He helps individuals stay focused, take consistent action, and achieve their goals. With the right support and guidance, he ensures progress feels both motivating and achievable.",
      image: blog7,
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
                <p className="section-title-white">Our leadership</p>
                <div className="about2-leadership-section">
                  <div className="row">
                    <div className="col-lg-5 d-flex justify-content-start">
                      <Image
                        src={man}
                        alt="Ajay Hiraskar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-7 leadership-content">
                      <div className="leadership-content-title-logo">
                         <div className="leader-name">
                          Ajay Hiraskar
                         </div>
                         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
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
                         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
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
                        src={man2}
                        alt="Ajay Hiraskar"
                        className="img-fluid"
                      />
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
                        Scaling Up coaches
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
                                <p className="about2_card_text">{coach.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
      
                  </div>
                  <div className="about2_team_sub_container">
                    <div className="d-flex flex-row justify-content-between scaling-row">
                      <div className="section-title-black text-left no-padding" >
      
                        Accountability team
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
                                <p className="about2_card_text">{coach.description}</p>
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
