"use client";
import { useRef, useState } from "react";
import "./success.css";
import Case1 from "../../app/success/images/case-study.svg";
import Case2 from "../../app/success/images/Case-study2.png";
import Case3 from "../../app/success/images/Case-study3.png";

import Curve_shape from "../home/images/Curve-shape.png";
import right_arrow_btn from "../home/images/right-arrow-btn.png";
import left_arrow_btn from "../home/images/left-arrow-btn.png";
import Image from "next/image";
import success from "../../app/success/images/Artboard 2.1@4x.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

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
const page = () => {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="main_body_div">
      <div className="first_div_layout success">
        <div className="main_first_div_body">
          <div
            className="innerContainer"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p className="heading" style={{ color: "white" }}>
              Our Success
            </p>
            <p className="subText" style={{ color: "white" }}>
              We deliver Accelerated growth, Augmented value and Simplified
              business across geographies, sectors and domains to our clients.
            </p>
          </div>
        </div>
      </div>
      <div className="second_div_layout">
        <div className="d-flex flex-row justify-content-between">
          <p className="section-header">Our latest case studies</p>
          {/* <button
            className="border-0 bg-transparent text-decoration-underline"
            style={{ color: "rgba(251, 168, 25, 1)" }}
          >
            VIEW MORE
          </button> */}
        </div>
        <div
          className="casestudy-container w-100 d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="row w-100">
            <div className="col-md-12 d-flex justify-content-center">
              <Image
                src={success}
                alt="case1"
                className="img-fluid"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '800px',
                  maxHeight: '800px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="client-review-section box-shadow ">
        <div
          className="img-fluid"
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            zIndex: "1",
            overflow: "hidden",
          }}
        >
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
            className="img-fluid navigation-buttons"
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              zIndex: "1",
              display: "flex",
            }}
          >
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
      {/*<div className="second_div_layout">
        <div className="d-flex flex-row justify-content-between">
          <p className="section-header">Latest blog posts</p>
          <button
            className="border-0 bg-transparent text-decoration-underline"
            style={{ color: "rgba(251, 168, 25, 1)" }}
          >
            VIEW MORE
          </button>
        </div>
        <div className="casestudy-container">
          <div className="row">
            <div className="col-lg-4  col-xl-4 col-xxl-3 col-md-6 col-sm-12">
              <div className="casestudy-card h-100 shadow-lg">
                <Image
                  src={Case4}
                  className="card-img-top img-fluid"
                  alt="case4"
                />
                <div className="card-body">
                  <p>
                    <span className="subText1 px-3 py-1">LoremIpsum</span>
                  </p>
                  <div>
                    <h5 className="card-title">Lorem Ipsum</h5>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-row gap-2 align-items-center">
                      <Image
                        src={User}
                        alt="user"
                        className="img-fluid"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <p className="profile-name m-0">Lorem Ipsum</p>
                    </div>
                    <p
                      className="date-text m-0"
                      style={{ color: "rgba(97, 97, 97, 1)" }}
                    >
                      Jan 1,2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-xl-4 col-xxl-3 col-md-6 col-sm-12">
              <div className="casestudy-card h-100 shadow-lg">
                <Image
                  src={Case5}
                  className="card-img-top img-fluid"
                  alt="case5"
                />
                <div className="card-body">
                  <p>
                    <span className="subText1 px-3 py-1">LoremIpsum</span>
                  </p>
                  <div className="gap-2">
                    <h5 className="card-title">Lorem Ipsum</h5>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-row gap-2 align-items-center">
                      <Image
                        src={User}
                        alt="user"
                        className="img-fluid"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <p className="profile-name m-0">Lorem Ipsum</p>
                    </div>
                    <p
                      className="date-text m-0"
                      style={{ color: "rgba(97, 97, 97, 1)" }}
                    >
                      Jan 1,2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-xl-4 col-xxl-3 col-md-6 col-sm-12">
              <div className="casestudy-card h-100 shadow-lg">
                <Image
                  src={Case6}
                  className="card-img-top img-fluid"
                  alt="case4"
                />
                <div className="card-body">
                  <p>
                    <span className="subText1 px-3 py-1">LoremIpsum</span>
                  </p>
                  <div className="gap-2">
                    <h5 className="card-title">Lorem Ipsum</h5>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-row gap-2 align-items-center">
                      <Image
                        src={User}
                        alt="user"
                        className="img-fluid"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <p className="profile-name m-0">Lorem Ipsum</p>
                    </div>
                    <p
                      className="date-text m-0"
                      style={{ color: "rgba(97, 97, 97, 1)" }}
                    >
                      Jan 1,2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-xl-4 col-xxl-3 col-md-6 col-sm-12">
              <div className="casestudy-card h-100 shadow-lg">
                <Image
                  src={Case6}
                  className="card-img-top img-fluid"
                  alt="case4"
                />
                <div className="card-body">
                  <p>
                    <span className="subText1 px-3 py-1">LoremIpsum</span>
                  </p>

                  <div className="gap-2">
                    <h5 className="card-title">Lorem Ipsum</h5>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-row gap-2 align-items-center">
                      <Image
                        src={User}
                        alt="user"
                        className="img-fluid"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <p className="profile-name m-0">Lorem Ipsum</p>
                    </div>
                    <p
                      className="date-text m-0"
                      style={{ color: "rgba(97, 97, 97, 1)" }}
                    >
                      Jan 1,2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                      </div> */}
    </div>
  );
};

export default page;
