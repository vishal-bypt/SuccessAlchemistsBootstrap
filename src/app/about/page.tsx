"use client";
import "./about.css";
import image2 from "../../../src/app/about/images/Image2.png";
import Image from "next/image";
import curve from "../../../src/app/about/images/curve.png";
import graph from "../../../src/app/about/images/Graph.png";
import curve1 from "../../../src/app/about/images/curve1.png";
import Circle1 from "../../../src/app/about/images/Circle1.png";
import Circle2 from "../../../src/app/about/images/Circle2.png";
import Circle3 from "../../../src/app/about/images/Circle3.png";
import Circle4 from "../../../src/app/about/images/Circle4.png";
import forward from "../../../src/app/about/images/forward.png";
import downArrow from "../../../src/app/about/images/Downarrow.png";
import img from "../../../src/app/about/images/imageB.png";
const About = () => {
  return (
    <div className="main_body_div">
      <div className="first_div_layout">
        <div className="main_first_div_body">
          <div
            className="innerContainer"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p className="heading" style={{ color: "white" }}>
              About us
            </p>
            <p className="subText" style={{ color: "white" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
        </div>
      </div>
      <div className="second_div_layout">
        <div className="main_second_div_body row align-items-center">
          <div className="innerContainer1 col-md-6 text-center text-md-start">
            <p className="heading1">We’re all about helping you</p>
            <p className="subText1">
              At Success Alchemists, we are dedicated to transforming businesses
              through the proven Scaling Up framework developed by Verne
              Harnish.
            </p>
            <p className="subText1">
              Our approach combines tailored implementation of the Scaling Up
              principles with executive coaching and execution support.
            </p>
            <button className="btn">Join us on the journey to success</button>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center">
            <Image
              className="img-fluid rounded image"
              src={image2}
              alt="img2"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid third_div_layout">
        <div className="row align-items-center">
          <div className="col-12 col-md-3 position-absolute text-md-start text-center top-0 start-0">
            <Image className="image1" src={curve} alt="curve" />
          </div>
          <div className="col-12 col-md-9 d-flex flex-column flex-md-row justify-content-evenly main">
            <div className="col-12 col-md-6">
              <Image className="image2 img-fluid" src={graph} alt="graph" />
            </div>
            <div className="col-12 col-md-6 subContainer2 text-center text-md-start">
              <p className="heading2">MISSION , VISION , VALUES</p>
              <p className="subText2">
                We help ambitious entrepreneurs build successful, profitable &
                sustainable businesses resulting in unlocking of large-scale
                potential business value.
              </p>
              <button className="btn1 mx-auto mx-md-0">REQUEST A QUOTE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="forth_div_layout row align-items-center bg-white shadow-sm rounded-4 p-4">
        <div className="col-lg-6 col-md-12">
          <div>
            <p className="fs-2 fw-semibold text-dark">Key Factors for Success:</p>
            <p className="fs-2 fw-semibold text-dark">Accelerated Growth, Greater</p>
            <p className="fs-2 fw-semibold text-dark">Value, and Simplicity</p>
          </div>
          <div className="mt-4">
            {[
              "Accelerated growth",
              "Greater value",
              "Simplified business",
            ].map((text, index) => (
              <div key={index} className="d-flex align-items-center gap-3 mb-3">
                <Image src={forward} alt="forward" width={24} height={24} />
                <p className="fs-4 fw-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="col-lg-6 col-md-12 text-center">
          <Image src={img} alt="Key Factors" className="img-fluid rounded" />
        </div>
      </div>
      <div className="fifth_div_layout">
        <Image src={curve1} alt="curve1" className="image3" />
        <div className="main_fifth_div_body">
          <p className="heading2">Core Values</p>
          <div className="subContainer3">
            <div className="circle">
              <Image src={Circle1} alt="Circle1" />
              <Image src={downArrow} alt="downArrow" className="down" />
              <p className="subText4">
                Deliver more than what the customer pays for
              </p>
            </div>
            <div className="circle">
              <Image src={Circle2} alt="Circle2" />
              <Image src={downArrow} alt="downArrow" className="down" />
              <p className="subText4">
                No matter what, do the right thing for our customers, out team,
                our partners and our community
              </p>
            </div>
            <div className="circle">
              <Image src={Circle3} alt="Circle3" />
              <Image src={downArrow} alt="downArrow" className="down" />
              <p className="subText4">
                Always be in process of developing ourselves, our processes and
                our solutions
              </p>
            </div>
            <div className="circle">
              <Image src={Circle4} alt="Circle4" />
              <Image src={downArrow} alt="downArrow" className="down" />
              <p className="subText4">
                Ensure an impact on the larger entrepreneur & business community
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
