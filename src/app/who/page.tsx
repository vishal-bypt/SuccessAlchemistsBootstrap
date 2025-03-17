"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./who.css";
import man2 from "../../app/who/images/Vikram.jpg";
import man from "../../app/who/images/man.png";
import Image from "next/image";
import curve1 from "../../../src/app/about/images/curve1.png";
import Blog1 from "../../app/who/images/Blog1.png";
import Blog2 from "../../app/who/images/Blog2.png";
import Blog3 from "../../app/who/images/Blog3.png";
import Blog4 from "../../app/who/images/Blog4.png";
import Blog5 from "../../app/who/images/Blog5.png";
import Blog6 from "../../app/who/images/Blog6.png";
import Forward from "../../app/who/images/Forward1.png";
import Backward from "../../app/who/images/Backward.png";
const page = () => {
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
      description:"Ashima Gupta is a seasoned IT leader with over 20 years of experience developing products and leading high-performing teams across various industries. With a deep expertise in Agilbreathworks, team building, and scaling complex systems, she has consistently driven growth and operational excellence. Ashima is also a certified yoga instructor and Art of Living teacher, passionate about integrating mindfulness and well-being into professional environments through meditation and breathwork.",
      image: Blog1,
    },
    {
      name: "Lakshmy S Nair",
      role: "Associate Coach",
      description:"With a rich background spanning 15 years across various industries, Lakshmy brings a wealth of knowledge and experience to the table. Her career journey encompasses roles in business analysis, banking and credit analysis, education, and life and wellness coaching. She holds a postgraduate degree in Business Economics and is CAIIB certified, alongside being a Certified Credit Analyst. She is also a certified professional life and wellness coach. Currently, she is enhancing her qualifications by pursuing a second postgraduate degree in Counselling Psychology. She is also a passionate Bharatnatyam dancer and a dedicated writer. She also holds a Level 3 Yoga Teacher certification from the Ministry of AYUSH, Government of India.",
      image: Blog2,
    },
    {
      name: "N Dharmadhikari",
      role: "Associate Coach",
      description:"Enriched with vast and extensive experience in varied commercial faculties within telecommunication industry in India and the UAE, N Dharmadhikari has successfully led teams to surpass yearly product revenue budgets of ~ $1 bn USD. A management graduate majoring in Marketing, he has been able to play multiple roles and drive business growth successfully in Marketing, Strategy and P&L.",
      image: Blog3,
    },
    {
      name: "Jyoti Hiraskar",
      role: "Accountability Partner",
      description: "Jyoti Hiraskar joins Success Alchemists after her successful stint as a Teacher, having worked in various schools in Mumbai and Pune. Besides being an accountability partner at Success Alchemists, she is also an IT professional and an inner transformation teacher with “Art of living”, helping people understand the purpose of their life through yoga & pranayam.",
      image: Blog4,
    },
    {
      name: "Kavita Lakshman",
      role: "Accountability Partner",
      description: "Kavita holds a Bachelor of Arts degree from Mumbai University and has completed a Postgraduate Diploma in Travel and Tourism from the esteemed Garware Institute at Mumbai University. Her career began at WNS, where she joined as a trainee agent through the British Airways GFA process. Within three years, she was promoted to team leader, a testament to her training capabilities, eloquence, and resourcefulness. With over 16 years of experience in multinational companies, Kavita brings a wealth of expertise and a proven track record of success in the industry.",
      image: Blog5,
    },
    {
      name: "Puja S Barori",
      role: "Accountability Partner",
      description: "Puja S Barori is a multifaceted individual with 10 years of experience in the BPO-ITO industry, offering outstanding team leadership training and developing efficient teams. She is a creative artist, a voyager and a passionate fitness and nutrition coach with an urge to promote a safe, enjoyable and sustainable platform for people aiming to achieve health and fitness goals.",
      image: Blog6,
    },

    {
      name: "Ashima Gupta",
      role: "Associate Coach",
      description:"Ashima Gupta is a seasoned IT leader with over 20 years of experience developing products and leading high-performing teams across various industries. With a deep expertise in Agilbreathworks, team building, and scaling complex systems, she has consistently driven growth and operational excellence. Ashima is also a certified yoga instructor and Art of Living teacher, passionate about integrating mindfulness and well-being into professional environments through meditation and breathwork.",
      image: Blog1,
    },
    {
      name: "Lakshmy S Nair",
      role: "Associate Coach",
      description:"With a rich background spanning 15 years across various industries, Lakshmy brings a wealth of knowledge and experience to the table. Her career journey encompasses roles in business analysis, banking and credit analysis, education, and life and wellness coaching. She holds a postgraduate degree in Business Economics and is CAIIB certified, alongside being a Certified Credit Analyst. She is also a certified professional life and wellness coach. Currently, she is enhancing her qualifications by pursuing a second postgraduate degree in Counselling Psychology. She is also a passionate Bharatnatyam dancer and a dedicated writer. She also holds a Level 3 Yoga Teacher certification from the Ministry of AYUSH, Government of India.",
      image: Blog2,
    },
    {
      name: "N Dharmadhikari",
      role: "Associate Coach",
      description:"Enriched with vast and extensive experience in varied commercial faculties within telecommunication industry in India and the UAE, N Dharmadhikari has successfully led teams to surpass yearly product revenue budgets of ~ $1 bn USD. A management graduate majoring in Marketing, he has been able to play multiple roles and drive business growth successfully in Marketing, Strategy and P&L.",
      image: Blog3,
    },
    {
      name: "Jyoti Hiraskar",
      role: "Accountability Partner",
      description: "Jyoti Hiraskar joins Success Alchemists after her successful stint as a Teacher, having worked in various schools in Mumbai and Pune. Besides being an accountability partner at Success Alchemists, she is also an IT professional and an inner transformation teacher with “Art of living”, helping people understand the purpose of their life through yoga & pranayam.",
      image: Blog4,
    },
    {
      name: "Kavita Lakshman",
      role: "Accountability Partner",
      description: "Kavita holds a Bachelor of Arts degree from Mumbai University and has completed a Postgraduate Diploma in Travel and Tourism from the esteemed Garware Institute at Mumbai University. Her career began at WNS, where she joined as a trainee agent through the British Airways GFA process. Within three years, she was promoted to team leader, a testament to her training capabilities, eloquence, and resourcefulness. With over 16 years of experience in multinational companies, Kavita brings a wealth of expertise and a proven track record of success in the industry.",
      image: Blog5,
    },
    {
      name: "Puja S Barori",
      role: "Accountability Partner",
      description: "Puja S Barori is a multifaceted individual with 10 years of experience in the BPO-ITO industry, offering outstanding team leadership training and developing efficient teams. She is a creative artist, a voyager and a passionate fitness and nutrition coach with an urge to promote a safe, enjoyable and sustainable platform for people aiming to achieve health and fitness goals.",
      image: Blog6,
    },
  ];
  const coaches1 = [
    {
      name: "Jyoti Hiraskar",
      role: "Accountability Partner",
      description: "Jyoti Hiraskar joins Success Alchemists after her successful stint as a Teacher, having worked in various schools in Mumbai and Pune. Besides being an accountability partner at Success Alchemists, she is also an IT professional and an inner transformation teacher with “Art of living”, helping people understand the purpose of their life through yoga & pranayam.",
      image: Blog4,
    },
    {
      name: "Kavita Lakshman",
      role: "Accountability Partner",
      description: "Kavita holds a Bachelor of Arts degree from Mumbai University and has completed a Postgraduate Diploma in Travel and Tourism from the esteemed Garware Institute at Mumbai University. Her career began at WNS, where she joined as a trainee agent through the British Airways GFA process. Within three years, she was promoted to team leader, a testament to her training capabilities, eloquence, and resourcefulness. With over 16 years of experience in multinational companies, Kavita brings a wealth of expertise and a proven track record of success in the industry.",
      image: Blog5,
    },
    {
      name: "Puja S Barori",
      role: "Accountability Partner",
      description: "Puja S Barori is a multifaceted individual with 10 years of experience in the BPO-ITO industry, offering outstanding team leadership training and developing efficient teams. She is a creative artist, a voyager and a passionate fitness and nutrition coach with an urge to promote a safe, enjoyable and sustainable platform for people aiming to achieve health and fitness goals.",
      image: Blog6,
    },
    {
      name: "Ashima Gupta",
      role: "Associate Coach",
      description:"Ashima Gupta is a seasoned IT leader with over 20 years of experience developing products and leading high-performing teams across various industries. With a deep expertise in Agilbreathworks, team building, and scaling complex systems, she has consistently driven growth and operational excellence. Ashima is also a certified yoga instructor and Art of Living teacher, passionate about integrating mindfulness and well-being into professional environments through meditation and breathwork.",
      image: Blog1,
    },
    {
      name: "Lakshmy S Nair",
      role: "Associate Coach",
      description:"With a rich background spanning 15 years across various industries, Lakshmy brings a wealth of knowledge and experience to the table. Her career journey encompasses roles in business analysis, banking and credit analysis, education, and life and wellness coaching. She holds a postgraduate degree in Business Economics and is CAIIB certified, alongside being a Certified Credit Analyst. She is also a certified professional life and wellness coach. Currently, she is enhancing her qualifications by pursuing a second postgraduate degree in Counselling Psychology. She is also a passionate Bharatnatyam dancer and a dedicated writer. She also holds a Level 3 Yoga Teacher certification from the Ministry of AYUSH, Government of India.",
      image: Blog2,
    },
    {
      name: "N Dharmadhikari",
      role: "Associate Coach",
      description:"Enriched with vast and extensive experience in varied commercial faculties within telecommunication industry in India and the UAE, N Dharmadhikari has successfully led teams to surpass yearly product revenue budgets of ~ $1 bn USD. A management graduate majoring in Marketing, he has been able to play multiple roles and drive business growth successfully in Marketing, Strategy and P&L.",
      image: Blog3,
    },
    {
      name: "Jyoti Hiraskar",
      role: "Accountability Partner",
      description: "Jyoti Hiraskar joins Success Alchemists after her successful stint as a Teacher, having worked in various schools in Mumbai and Pune. Besides being an accountability partner at Success Alchemists, she is also an IT professional and an inner transformation teacher with “Art of living”, helping people understand the purpose of their life through yoga & pranayam.",
      image: Blog4,
    },
    {
      name: "Kavita Lakshman",
      role: "Accountability Partner",
      description: "Kavita holds a Bachelor of Arts degree from Mumbai University and has completed a Postgraduate Diploma in Travel and Tourism from the esteemed Garware Institute at Mumbai University. Her career began at WNS, where she joined as a trainee agent through the British Airways GFA process. Within three years, she was promoted to team leader, a testament to her training capabilities, eloquence, and resourcefulness. With over 16 years of experience in multinational companies, Kavita brings a wealth of expertise and a proven track record of success in the industry.",
      image: Blog5,
    },
    {
      name: "Puja S Barori",
      role: "Accountability Partner",
      description: "Puja S Barori is a multifaceted individual with 10 years of experience in the BPO-ITO industry, offering outstanding team leadership training and developing efficient teams. She is a creative artist, a voyager and a passionate fitness and nutrition coach with an urge to promote a safe, enjoyable and sustainable platform for people aiming to achieve health and fitness goals.",
      image: Blog6,
    },
    {
      name: "Ashima Gupta",
      role: "Associate Coach",
      description:"Ashima Gupta is a seasoned IT leader with over 20 years of experience developing products and leading high-performing teams across various industries. With a deep expertise in Agilbreathworks, team building, and scaling complex systems, she has consistently driven growth and operational excellence. Ashima is also a certified yoga instructor and Art of Living teacher, passionate about integrating mindfulness and well-being into professional environments through meditation and breathwork.",
      image: Blog1,
    },
    {
      name: "Lakshmy S Nair",
      role: "Associate Coach",
      description:"With a rich background spanning 15 years across various industries, Lakshmy brings a wealth of knowledge and experience to the table. Her career journey encompasses roles in business analysis, banking and credit analysis, education, and life and wellness coaching. She holds a postgraduate degree in Business Economics and is CAIIB certified, alongside being a Certified Credit Analyst. She is also a certified professional life and wellness coach. Currently, she is enhancing her qualifications by pursuing a second postgraduate degree in Counselling Psychology. She is also a passionate Bharatnatyam dancer and a dedicated writer. She also holds a Level 3 Yoga Teacher certification from the Ministry of AYUSH, Government of India.",
      image: Blog2,
    },
    {
      name: "N Dharmadhikari",
      role: "Associate Coach",
      description:"Enriched with vast and extensive experience in varied commercial faculties within telecommunication industry in India and the UAE, N Dharmadhikari has successfully led teams to surpass yearly product revenue budgets of ~ $1 bn USD. A management graduate majoring in Marketing, he has been able to play multiple roles and drive business growth successfully in Marketing, Strategy and P&L.",
      image: Blog3,
    },
    {
      name: "Jyoti Hiraskar",
      role: "Accountability Partner",
      description: "Jyoti Hiraskar joins Success Alchemists after her successful stint as a Teacher, having worked in various schools in Mumbai and Pune. Besides being an accountability partner at Success Alchemists, she is also an IT professional and an inner transformation teacher with “Art of living”, helping people understand the purpose of their life through yoga & pranayam.",
      image: Blog4,
    },
    {
      name: "Kavita Lakshman",
      role: "Accountability Partner",
      description: "Kavita holds a Bachelor of Arts degree from Mumbai University and has completed a Postgraduate Diploma in Travel and Tourism from the esteemed Garware Institute at Mumbai University. Her career began at WNS, where she joined as a trainee agent through the British Airways GFA process. Within three years, she was promoted to team leader, a testament to her training capabilities, eloquence, and resourcefulness. With over 16 years of experience in multinational companies, Kavita brings a wealth of expertise and a proven track record of success in the industry.",
      image: Blog5,
    },
    {
      name: "Puja S Barori",
      role: "Accountability Partner",
      description: "Puja S Barori is a multifaceted individual with 10 years of experience in the BPO-ITO industry, offering outstanding team leadership training and developing efficient teams. She is a creative artist, a voyager and a passionate fitness and nutrition coach with an urge to promote a safe, enjoyable and sustainable platform for people aiming to achieve health and fitness goals.",
      image: Blog6,
    },
    {
      name: "Ashima Gupta",
      role: "Associate Coach",
      description:"Ashima Gupta is a seasoned IT leader with over 20 years of experience developing products and leading high-performing teams across various industries. With a deep expertise in Agilbreathworks, team building, and scaling complex systems, she has consistently driven growth and operational excellence. Ashima is also a certified yoga instructor and Art of Living teacher, passionate about integrating mindfulness and well-being into professional environments through meditation and breathwork.",
      image: Blog1,
    },
    {
      name: "Lakshmy S Nair",
      role: "Associate Coach",
      description:"With a rich background spanning 15 years across various industries, Lakshmy brings a wealth of knowledge and experience to the table. Her career journey encompasses roles in business analysis, banking and credit analysis, education, and life and wellness coaching. She holds a postgraduate degree in Business Economics and is CAIIB certified, alongside being a Certified Credit Analyst. She is also a certified professional life and wellness coach. Currently, she is enhancing her qualifications by pursuing a second postgraduate degree in Counselling Psychology. She is also a passionate Bharatnatyam dancer and a dedicated writer. She also holds a Level 3 Yoga Teacher certification from the Ministry of AYUSH, Government of India.",
      image: Blog2,
    },
    {
      name: "N Dharmadhikari",
      role: "Associate Coach",
      description:"Enriched with vast and extensive experience in varied commercial faculties within telecommunication industry in India and the UAE, N Dharmadhikari has successfully led teams to surpass yearly product revenue budgets of ~ $1 bn USD. A management graduate majoring in Marketing, he has been able to play multiple roles and drive business growth successfully in Marketing, Strategy and P&L.",
      image: Blog3,
    },
  ];
  return (
    <div>
      <div className="main_body_div">
        <div className="first_div_layout">
          <div className="main_first_div_body">
            <div
              className="innerContainer"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <p className="heading" style={{ color: "white" }}>
                Who we are
              </p>
              <p className="subText" style={{ color: "white" }}>
              Success Alchemists is a growth acceleration firm dedicated to transforming businesses through strategic insights, structured execution, and leadership development. We partner with entrepreneurs and organizations to drive scalable, sustainable success using the proven Scaling Up Framework.
              </p>
            </div>
          </div>
        </div>
        <div className="second_div_layout">
          <p className="section-header">Our leadership</p>
          <div className="leadership-section">

            <div className="row align-items-center profile-section">
              <div className="col-lg-7">
                <p className="section-subText">
                  Ajay Hiraskar - As the first certified Scaling Up Coach in
                  India, he brings 37 years of experience in starting, building,
                  and growing businesses both locally and globally. His career
                  spans telecom, IT services, publishing, and industrial
                  products, where he has led complex projects and large teams
                  under challenging conditions. As a Scaling Up Coach, he has
                  helped companies in technology, recruitment, manufacturing,
                  B2C, and industrial services implement key growth strategies.
                  For the past decade, he has been an active member of TiE Pune,
                  serving as a Charter and Governing Council Member. He has also
                  played a key role in mentoring start-ups and organizing Pune’s
                  largest start-up conference, TiECon.
                </p>
              </div>
              <div className="col-lg-5 d-flex justify-content-center">
                <Image
                  src={man}
                  alt="Ajay Hiraskar"
                  className="img-fluid rounded-3"
                />
                {/* <Image src={curve2} alt="curve" className="curve" /> */}
              </div>
            </div>       
        
            <div className="row align-items-center profile-section">
              <div className="col-lg-5 d-flex justify-content-center">
                <Image
                  src={man2}
                  alt="Ajay Hiraskar"
                  className="img-fluid rounded-3"
                />
                {/* <Image src={curve2} alt="curve" className="curve" /> */}
              </div>
              <div className="col-lg-7">
                <p className="section-subText">
                Vikram Panjwani - As the first certified Scaling Up Coach in India, he brings 37 years of experience in starting, building, and growing businesses both locally and globally. His career spans telecom, IT services, publishing, and industrial products, where he has led complex projects and large teams under challenging conditions. As a Scaling Up Coach, he has helped companies in technology, recruitment, manufacturing, B2C, and industrial services implement key growth strategies. For the past decade, he has been an active member of TiE Pune, serving as a Charter and Governing Council Member. He has also played a key role in mentoring start-ups and organizing Pune’s largest start-up conference, TiECon.
                </p>
              </div>
            </div>
        
        </div>
        </div>
        <div className="third_div_layout shadow-lg">
          <Image src={curve1} alt="curve1" className="image3" />
          <p className="section-header" style={{ color: "white" }}>
            About Success Alchemists and the Team
          </p>
          <p className="team-content" style={{ color: "white" }}>
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
        </div>
        <div className="forth_div_layout">
          <p className="section-header">Team</p>
          <p className="section-subText">
            We are a dedicated team of high performers, committed to our
            clients’ success. Ajay Hiraskar, our founder and Chief Alchemist, is
            the first certified Scaling Up Coach in India and the sole certified
            coach in West and South India. With extensive knowledge and
            experience, Ajay leads our team in delivering outstanding results.
            The core Success Alchemists team consists of twelve members, each
            bringing a diverse mix of expertise and experience from various
            domains. This collective knowledge positions us as an ideal partner
            for clients across industries, enabling us to tailor our approach to
            meet the unique needs of each business we serve.
          </p>
          <div className="sub_forth_div_layout">
            <div className="team-sub-container">
              <div className="d-flex flex-row justify-content-between">
                <p className="team-head">
                  Scaling Up certified coaches
                </p>
                <div className="btnContainer">
                  <button
                    className="btn"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                  >
                    <Image src={Backward} alt="backward" />
                  </button>
                  <button
                    className="btn"
                    onClick={handleNext}
                    disabled={currentIndex + itemsPerPage >= coaches.length}
                  >
                    <Image src={Forward} alt="forward" />
                  </button>
                </div>
              </div>
             
                <div className="row">
                  {coaches
                    .slice(currentIndex, currentIndex + itemsPerPage)
                    .map((coach, index) => (
                      <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card h-100 shadow-lg">
                          <Image
                            src={coach.image}
                            className="card-img-top img-fluid"
                            alt={coach.name}
                          />
                          <div className="card-body">
                            <div className="gap-2">
                              <p className="member-name">{coach.name}</p>
                              <p
                                className="member-role"
                                style={{ color: "rgba(251, 168, 25, 1)" }}
                              >
                                {coach.role}
                              </p>
                            </div>
                            <p className="card-text">{coach.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
             
            </div>
            <div className="team-sub-container">
              <div className="d-flex flex-row justify-content-between">
                <p className="team-head" >
                
                Accountability team
                </p>
                <div className="btnContainer">
                  <button
                    className="btn"
                    onClick={handlePrev1}
                    disabled={currentIndex1 === 0}
                  >
                    <Image src={Backward} alt="backward" />
                  </button>
                  <button
                    className="btn"
                    onClick={handleNext1}
                    disabled={currentIndex1 + itemsPerPage >= coaches1.length}
                  >
                    <Image src={Forward} alt="forward" />
                  </button>
                </div>
              </div>
              
                <div className="row">
                  {coaches1
                    .slice(currentIndex1, currentIndex1+ itemsPerPage)
                    .map((coach, index) => (
                      <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card h-100 shadow-lg">
                          <Image
                            src={coach.image}
                            className="card-img-top img-fluid"
                            alt={coach.name}
                          />
                          <div className="card-body">
                            <div>
                              <p className="member-name">{coach.name}</p>
                              <p
                                className="member-role"
                                style={{ color: "rgba(251, 168, 25, 1)" }}
                              >
                                {coach.role}
                              </p>
                            </div>
                            <p className="card-text">{coach.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
             
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default page;
