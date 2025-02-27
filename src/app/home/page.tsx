"use client";
import Image from "next/image";
import your_logo from "./images/your_logo_image.png";
import lorem_ipsum from "./images/lorem_ipsum_image.png";
import o_logo from "./images/o_logo.png";
import lorem_ipsum2 from "./images/lorem_ipsum.png";
import main_image from "./images/main_layout_image.jpeg";
import "./home.css";

const Home = () => {
  return (
    <div
      className="hero-section p-1 box-shadow mt-3"
      style={{ display: "flex", gap: "16px", flexDirection: "column" }}
    >
      {/* <div className="bg-warning radios"> */}
      <div className="first_div_layout">
        <div className="main_first_div_body" />
        <div
          className="container"
          style={{ zIndex: 1, padding: "72px 64px", position: "absolute" }}
        >
          <div className="row align-items-center no-gutters">
            <div className=" col-lg-7 col-md-12 col-xs-12">
              <div
                style={{
                  display: "flex",
                  gap: "32px",
                  flexDirection: "column",
                }}
              >
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
      <div
        className="second_div_layout col-12 d-flex "
        // style={{ flexWrap: "wrap" }}
      >
        <div className="second_div_first_text col-xl-3 col-lg-3 col-md-12">
          Trusted by Thousand
          <br /> top brands
        </div>
        <div
          className="second_div_right_div col-xl-9 col-lg-10 col-md-12 "
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className="image_layout_your_logo col-1">
            <Image
              src={your_logo}
              width={200}
              height={200}
              className="image_layout_your_logo"
              alt="your logo"
            />
          </div>
          <div className="image_layout_lorem_ipsum col-1">
            <Image
              className="image_layout_lorem_ipsum"
              src={lorem_ipsum}
              width={200}
              height={200}
              alt="lorem ipsum"
            />
          </div>
          <div className="image_layout_o_logo col-1">
            <Image
              className="image_layout_o_logo"
              src={o_logo}
              width={200}
              height={200}
              alt="lorem ipsum"
            />
          </div>
          <div className="image_layout_lorem_ipsum2 col-1">
            <Image
              className="image_layout_lorem_ipsum2"
              src={lorem_ipsum2}
              width={200}
              height={200}
              alt="lorem ipsum"
            />
          </div>
          <div className="image_layout_your_logo col-1">
            <Image
              src={your_logo}
              width={200}
              height={200}
              className="image_layout_your_logo"
              alt="your logo"
            />
          </div>
          <div className="image_layout_lorem_ipsum2 col-1">
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
      {/* </div> */}
    </div>
    // <div className="main_body_div">
    //   <div className="first_div_layout">
    //     <div className="main_first_div_body" />
    //     <div className="inner_div">
    //       <div className="inner_first_div">
    //         Are you ready to have more{" "}
    //         <span className="inner_first_div_span">freedom</span> from your
    //         bussinss?
    //       </div>
    //       <div className="inner_second_div">
    //         Learn from India’s first certified Scaling Up coach{" "}
    //         <span className="inner_second_div_span">Ajay Hiraskar </span>
    //         <br />
    //         who has led the implementation of the Scaling Up performance
    //         <br />
    //         platform across many industry verticals. This platform has already
    //         <br />
    //         guided more than 80,000 companies world wide to succeed and
    //         <br /> grow.
    //       </div>
    //     </div>
    //   </div>
    //   <div className="second_div_layout">
    //     <div className="second_div_first_text">
    //       Trusted by Thousand
    //       <br /> top brands
    //     </div>
    //     <div className="second_div_right_div">
    //       <div className="image_layout_your_logo">
    //         <Image
    //           src={your_logo}
    //           width={200}
    //           height={200}
    //           className="image_layout_your_logo"
    //           alt="your logo"
    //         />
    //       </div>
    //       <div className="image_layout_lorem_ipsum">
    //         <Image
    //           className="image_layout_lorem_ipsum"
    //           src={lorem_ipsum}
    //           width={200}
    //           height={200}
    //           alt="lorem ipsum"
    //         />
    //       </div>
    //       <div className="image_layout_o_logo">
    //         <Image
    //           className="image_layout_o_logo"
    //           src={o_logo}
    //           width={200}
    //           height={200}
    //           alt="lorem ipsum"
    //         />
    //       </div>
    //       <div className="image_layout_lorem_ipsum2">
    //         <Image
    //           className="image_layout_lorem_ipsum2"
    //           src={lorem_ipsum2}
    //           width={200}
    //           height={200}
    //           alt="lorem ipsum"
    //         />
    //       </div>
    //       <div className="image_layout_your_logo">
    //         <Image
    //           src={your_logo}
    //           width={200}
    //           height={200}
    //           className="image_layout_your_logo"
    //           alt="your logo"
    //         />
    //       </div>
    //       <div className="image_layout_lorem_ipsum2">
    //         <Image
    //           className="image_layout_lorem_ipsum2"
    //           src={lorem_ipsum2}
    //           width={200}
    //           height={200}
    //           alt="lorem ipsum"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="third_div_layout">
    //     <div className="third_div_title_text">Our excellence</div>
    //   </div>
    // </div>
  );
};

export default Home;
