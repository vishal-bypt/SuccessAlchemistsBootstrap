"use client";
import Image from "next/image";
import your_logo from "./images/your_logo_image.png";
import lorem_ipsum from "./images/lorem_ipsum_image.png";
import o_logo from "./images/o_logo.png";
import lorem_ipsum2 from "./images/lorem_ipsum.png";
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

const Home = () => {
  // @ts-ignore
  const swiperRef = useRef<Swiper | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const forward = () => {
    if (currentIndex === 10) return;
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
      <div className="first_div_layout">
        <div className="main_first_div_body" />
        <div
          className="container main_first_div_content"
          style={{ zIndex: 1, padding: "72px 64px", position: "absolute" }}
        >
          <div className="row align-items-center no-gutters">
            <div className="col-lg-8 col-md-12 col-xs-12">
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
      <div className="second_div_layout">
        <div className="row" style={{ width: "auto", overflowX: "auto",overflowY:'hidden' }}>
          <div className="second_div_first_text col-md-4">
            Trusted by Thousand top brands
          </div>
          <div className="second_div_right_div col-md-8">
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
                    src={lorem_ipsum2}
                    width={200}
                    height={200}
                    alt="lorem ipsum"
                  />
                </div>
                <div className="image_layout_your_logo">
                  <Image
                    src={your_logo}
                    width={200}
                    height={200}
                    className="image_layout_your_logo"
                    alt="your logo"
                  />
                </div>
                <div className="image_layout_lorem_ipsum2">
                  <Image
                    className="image_layout_lorem_ipsum2"
                    src={lorem_ipsum2}
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
            {[...Array(10)]?.map((d: any, i: any) => (
              <SwiperSlide key={i}>
                <div className="row slider-row">
                  <div className="video col-md-4">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/DU--G_EWgmI?si=osIU3OiFrP7NxbFg"
                        style={{ borderRadius: "24px" }}
                        title="YouTube video player"
                        allowFullScreen={true}
                      ></iframe>
                    </div>
                  </div>
                  <div className="video col-md-7 video_detail_div">
                    <div className="video_detail_div_title_text">
                      Success story of #1 - Ador powerton
                    </div>
                    <div className="video_detail_p_tag">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry. 
                    </div>
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
                className="img-fluid"
                alt="right side image"
              />
            </div>
            <div onClick={forward}>
              <Image
                src={right_arrow_btn}
                className="img-fluid"
                alt="right side image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fourth_component">
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
          <div style={{ position: "absolute", top: "-23px", right: "-28px" }}>
            <Image
              src={idea_icon}
              className="img-fluid"
              alt="right side image"
            />
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
            
              We help ambitious entrepreneurs build successful & sustainable businesses resulting in unlocking of large scale potential
              business value
           
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="bottom_arrow_div">
                <Image
                  src={Vector}
                  className="img-fluid"
                  alt="right side image"
                />
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="bottom_arrow_div">
                <Image
                  src={Vector}
                  className="img-fluid"
                  alt="right side image"
                />
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="bottom_arrow_div">
                <Image
                  src={Vector}
                  className="img-fluid"
                  alt="right side image"
                />
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="bottom_arrow_div">
                <Image
                  src={Vector}
                  className="img-fluid"
                  alt="right side image"
                />
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
            <div
              className="img-fluid"
              style={{
                position: "absolute",
                rotate: "-90deg",
                top: "0px",
                left: "0px",
                zIndex: "1",
                overflow: "hidden",
              }}
            >
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
                GET OUR FREE GROWTH POTENTIAL ASSESSMENT HERE
              </div>
            </div>

            <div className="sixth_component_btn_div">
              REQUEST A QUOTE
              <Image
                className="img-fluid"
                src={Double_arrow}
                alt="right side image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="seventh_components">
        <div className="row">
          <div className="col-md-4">
            <div className="seventh_components_card_box">
            <div className="card video-card">
              <div className="video-thumbnail">
                <iframe
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
            <div className="card video-card">
              <div className="video-thumbnail">
                <iframe
                className="video-border"
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
            <div className="card video-card">
              <div className="video-thumbnail">
                <iframe
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/048UdKxDsA8"
                  allow="autoplay; encrypted-media"
                ></iframe>
              </div>
              <div className="card-body">
                <h5 className="card-title">ScaleUp - Anaheim Highlights</h5>
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
