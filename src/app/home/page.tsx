"use client";
import Image from "next/image";
import your_logo from "./images/Logos/image 2.png";
import lorem_ipsum from "./images/Logos/image 3.png";
import o_logo from "./images/Logos/image 4.png";
import logo6 from "./images/Logos/image 6.png";
import logo7 from "./images/Logos/image 7.png";
import logo8 from "./images/Logos/image 8.png";
import logo9 from "./images/Logos/image 9.png";
import logo10 from "./images/Logos/image 10.png";
import logo11 from "./images/Logos/image 11.png";
import Curve_shape from "./images/Curve-shape.png";
import main_image from "./images/main_layout_image.jpeg";
import right_arrow_btn from "./images/right-arrow-btn.png";
import left_arrow_btn from "./images/left-arrow-btn.png";
import people_icon from "./images/people_icon.png";
import idea_icon from "./images/idea_icon.png";
import Vector from "./images/Vector.png";
import market_analysis from "./images/market_analysis.png";
import execution_icon from "./images/execution_icon.svg";
import money_icon from "./images/money_icon.png";
import peoples_meeting_image from "./images/peoples_meeting_image.jpeg";
import Double_arrow from "./images/Double_arrow.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "./home.css";
import { useRef, useState } from "react";

const items = [
  {
    id: 1,
    title: "Success story of #1 - Ador powerton",
    description:
      "Ravin Mirchandani, the Executive Chairperson talks about a remarkable success story about the impact of the Scaling Up performance system & the amazing business turnaround experienced within Ador Powertron. In the last section, Ravin talks about the things to keep in mind while selecting a good coach & the value added by the current coach.",
    src: " https://www.youtube.com/embed/mN0qCIfEr-8?si=cQHPlh9-GkF85pIe",
   
  },
  {
    id: 2,
    title: "Success Story #2 - Aliens Tattoo",
    description:
      "In this video, Sunny Bhanushali the Founder & CEO of Aliens Tattoo talks about experiencing challenges of rapid growth, the biggest benefit of implementing a structured framework & the value added by their coach.",
    src: "https://www.youtube.com/embed/K1-7-5N2lzY?si=UFol7OgXkzBg_ImI",
  },
  {
    id: 3,
    title: "Success Story #3 - Grauer & Weil (Engineering Division)",
    description:
      "In this video, Rohit More, the Director talks about the biggest benefits of implementing the Scaling Up framework. Besides ensuring alignment at every level within the organization, they clearly articulated their B-HAG (Big Hairy Audacious Goal) & have been systematically seeing growth YoY for the past 3 years. At the end, there is a reference to the Coach and the support provided in this growth journey.",
    src: "https://www.youtube.com/embed/UrIxZUvzovo?si=nrjwyoMuQsnzgUsz",
  },
  {
    id: 4,
    title: "Success Story #4 - Clarion Technologies",
    description:
      "In this video, their CEO, Siddharth Motiwale talks about the 'secret sauce' which has helped Clarion grow systematically over the past few years. He also talks about the value added by Ajay as their coach.",
    src: "https://www.youtube.com/embed/jokpun-w7v8?si=8jz8BsXy1Ig62ULG",
  },
  {
    id: 5,
    title: "Success Story #5 - InfraCloud Technologies",
    description:
      "In this video, their CEO, Siddharth Motiwale talks about the 'secret sauce' which has helped Clarion grow systematically over the past few years. He also talks about the value added by Ajay as their coach.",
    src: "https://www.youtube.com/embed/N4PUd0g_vDs?si=gP3asGFHOusha3bX",
  },
  {
    id: 6,
    title: "Success Story #6 - Uplers & Mavlers",
    description:
      "In this video, Jaymin (CEO) & Nital (COO) talk about the benefits of implementing the Scaling Up framework. They ensured alignment at all levels within their business & experienced the resultant growth.",
    src: "https://www.youtube.com/embed/8_HT9N82rh4?si=49oIAZ5JZzhLG0B5",
  },
];
const Home = () => {
  // @ts-ignore
  const swiperRef = useRef<Swiper | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

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

  return (
    <div
      className="hero-section box-shadow"
      style={{ display: "flex", gap: "16px", flexDirection: "column" }}
    >
      {/* <div className="bg-warning radios"> */}
      <div className="first_div_layout home">
        <div className="main_first_div_body" />
        <div className="main_first_div_content">
          <div className="row align-items-center no-gutters">
            <div className="col-xxl-7 col-lg-8 col-md-12 col-xs-12">
              <div className="hero-container">
                <div className="inner_first_div">
                  Are you ready to
                  <br /> have more{" "}
                  <span className="inner_first_div_span">freedom</span>
                  <br /> from your bussinss?
                </div>
                <div className="inner_second_div">
                  Learn from India’s first certified Scaling Up coach{" "}
                  <span className="inner_second_div_span">Ajay Hiraskar </span>
                  who has led the implementation of the Scaling Up performance
                  platform across many industry verticals. This platform has
                  already guided more than 80,000 companies world wide to
                  succeed and grow.
                </div>
              </div>
            </div>
            {/* <div className=" col-xl-7 col-lg-6 col-md-12 text-lg-right text-center">
              <Image src={main_image} alt="" className="img-fluid" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="company-logo second_div_layout">
        <div
          className="row"
          style={{ width: "auto", overflowX: "auto", overflowY: "hidden" }}
        >
          <div className="second_div_first_text col-md-3">
            Trusted by top brands
          </div>
          <div className="second_div_right_div col-md-9">
            <div className="slider-container">
              <div className="slider-track">
                <div className="image_layout_your_logo col-1">
                  <Image
                    src={your_logo}
                    width={200}
                    height={200}
                    className="image_layout_your_logo"
                    alt="your logo"
                  />
                </div>
                <div className="image_layout_lorem_ipsum">
                  <Image
                    className="image_layout_lorem_ipsum"
                    src={lorem_ipsum}
                    width={200}
                    height={200}
                    alt="lorem ipsum"
                  />
                </div>
                <div className="image_layout_o_logo">
                  <Image
                    className="image_layout_o_logo"
                    src={o_logo}
                    width={200}
                    height={200}
                    alt="lorem ipsum"
                  />
                </div>
                <div className="image_layout_lorem_ipsum2">
                  <Image
                    className="image_layout_lorem_ipsum2"
                    src={logo6}
                    width={200}
                    height={200}
                    alt="lorem ipsum"
                  />
                </div>
                <div className="image_layout_your_logo">
                  <Image
                    src={logo7}
                    width={200}
                    height={200}
                    className="image_layout_your_logo"
                    alt="your logo"
                  />
                </div>
                <div className="image_layout_lorem_ipsum2">
                  <Image
                    className="image_layout_lorem_ipsum2"
                    src={logo8}
                    width={200}
                    height={200}
                    alt="lorem ipsum"
                  />
                </div>
                <div className="image_layout_lorem_ipsum2">
                  <Image
                    className="image_layout_lorem_ipsum2"
                    src={logo9}
                    width={200}
                    height={200}
                    alt="lorem ipsum"
                  />
                </div>
                <div className="image_layout_lorem_ipsum2">
                  <Image
                    className="image_layout_lorem_ipsum2"
                    src={logo10}
                    width={200}
                    height={200}
                    alt="lorem ipsum"
                  />
                </div>
                <div className="image_layout_lorem_ipsum2">
                  <Image
                    className="image_layout_lorem_ipsum2"
                    src={logo11}
                    width={200}
                    height={200}
                    alt="lorem ipsum"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid client-review-section box-shadow ">
        <div className="img-fluid client-review-curve">
          <Image
            src={Curve_shape}
            className="img-fluid"
            style={{ borderRadius: "24px" }}
            alt="right side image"
          />
        </div>
        <div className="client_review_text">
          Client Reviews
          {/* <button onClick={forward}>forward</button>
          <button onClick={backward}>backward</button> */}
        </div>
        <div style={{ position: "relative" }}>
          <Swiper
            ref={swiperRef}
            slidesPerView={"auto"}
            centeredSlides={true}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {items?.map((d: any, i: any) => (
              <SwiperSlide key={i}>
                <div className="row slider-row">
                  <div className="video col-md-4">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src={d.src}
                        className="home-video"
                        title="YouTube video player"
                        allowFullScreen={true}
                      ></iframe>
                    </div>
                  </div>
                  <div className="video col-md-7 video_detail_div">
                    <div className="video_detail_div_title_text">{d.title}</div>
                    <div className="video_detail_p_tag">{d.description}</div>
                    <div></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="img-fluid navigation-buttons">
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
      </div>
      <div className="fourth_component">
    
            <Image
              src={idea_icon}
              className="img-fluid bulb-image"
              alt="right side "
            />
          
        <div className="fourth_component_first_div">
          <div className="fourth_component_title_div">
            We become successful, when we help you become successful
          </div>
          <div className="fourth_component_p_tag  col-md-12">
            At Success Alchemists, we believe that our success is tied to yours.
            If you're a CEO seeking to deliver accelerated growth, augmented
            value, and a simplified business model, our experienced Scaling Up
            Coaches are here to help. Scaling up requires a significant shift in
            management thinking, and while the path may seem simple, it often
            involves a steep learning curve.
          </div>
          <div className="fourth_component_p_tag col-md-12">
            Leveraging proven methods that have empowered over 2,700 firms
            worldwide, we provide business coaching, management development, and
            organizational change strategies to propel your business onto an
            unparalleled growth trajectory.
          </div>
          <div className="fourth_component_p_tag col-md-12">
          For the business owner developing strategy, fixing cultural issues and differentiating in complex markets, business coaching can deliver agility, clarity and commitment in four main areas:
          </div>
     
        </div>
        <div>
          <div className="row">
            <div className="col-md-6 fourth_component_bottom_component_gray_light right_border_div border-bottom">
              <div className="number_div">1</div>
              <div className="text_div">
                Developing a core customer-centric strategy
              </div>
            </div>
            <div className="col-md-6 fourth_component_bottom_component_brack_div border-bottom">
              <div className="number_div">2</div>
              <div className="text_div">Execution planning</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 fourth_component_bottom_component_brack_div right_border_div ">
              <div className="number_div">3</div>
              <div className="text_div">
                Finding and retaining the right talent, and
              </div>
            </div>
            <div className="col-md-6 fourth_component_bottom_component_gray_light">
              <div className="number_div">4</div>
              <div className="text_div">
                Establishing effective communication rhythms
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fifth_component">
        <div className="fifth_component_div">
          <div className="fifth_component_title_div">
            Guaranteed growth solutions
          </div>
          <div className="col-md-12 fifth_component_sub_title_div">
          We help ambitious entrepreneurs build successful & sustainable businesses resulting in unlocking of large scale potential business value by identifying the right.
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
          <div className="col-md-6 col-lg-3">
            <div className="unselected_box">
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
              <div className="unselected_box_text">
                Get the right people in the right seats, aligned with culture
                and strategy.
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
            <div className="unselected_box">
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
              <div className="unselected_box_text">
                Develop a clear, differentiated, and scalable plan for
                sustainable growth.
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
            <div className="unselected_box">
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
              <div className="unselected_box_text">
                Drive disciplined processes to ensure flawless implementation
                and accountability.
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
            <div className="unselected_box">
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
              <div className="unselected_box_text">
                Maintain strong cash flow to fuel growth and avoid financial
                constraints.
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
      <div className="sixth_component">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="col-md-4" style={{ position: "relative" }}>
            <div className="img-fluid curve-image" style={{}}>
              <Image
                src={Curve_shape}
                className="img-fluid"
                alt="right side image"
              />
            </div>
            <div
              className="image_div_image"
              style={{
                paddingTop: "16px",
                paddingLeft: "6px",
              }}
            >
              <Image
                className="image_div_image img-fluid"
                src={peoples_meeting_image}
                alt="right side image"
              />
            </div>
          </div>
          <div className="col-md-7 right_div_sixth_component">
            <div>
              <div className="sixth_component_title_div">SCALING UP</div>
              <div className="sixth_component_header_div">Team assessment</div>
              <div className="sixth_component_sub_header_div">
              Welcome to the Scaling Up 4 Decisions Assessment!
              </div>
              <p className="sixth_component_content">
              This tool will help you evaluate and strengthen your business across the critical areas of People, Strategy, Execution, and Cash.
              </p>
            </div>

            {/* <div className="sixth_component_btn_div">
              REQUEST A QUOTE
              <Image
                className="img-fluid"
                src={Double_arrow}
                alt="right side image"
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="seventh_components">
        <div className="row res-row">
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                  className="video-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/PGgIAnehjR8"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Challenges of Scaling Up a Business
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="video-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/pDNju3Ookq4"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    The 10 Rockefeller Habits To Success
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                  className="video-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/048UdKxDsA8"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Scaling up - Anaheim Highlights</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
