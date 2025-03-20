import React from "react";
import "./resources.css";
import Case1 from "../../../public/assets/images/scalingUp.png"
import Case2 from "../../../public/assets/images/FAC.png";
import Book1 from "../../app/resources/images/ref-book1.webp";
import Book2 from "../../app/resources/images/ref-book2.png";
import Book3 from "../../app/resources/images/ref-book3.png";
import Book4 from "../../app/resources/images/ref-book4.png";
import Case4 from "../../app/resources/images/Case4.png";
import Case5 from "../../app/resources/images/Case5.png";
import Case6 from "../../app/resources/images/Case6.png";
import User from "../../app/resources/images/User.png";
import Image from "next/image";
import curve1 from "../../app/resources/images/curve1.png";
const page = () => {
  return (
    <div className="main_body_div">
      <div className="first_div_layout resource">
        <div className="main_first_div_body">
          <div
            className="innerContainer"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p className="heading" style={{ color: "white" }}>
              Resources
            </p>
            <p className="subText" style={{ color: "white" }}>
            Links to articles, books, and tools that support the effective implementation of the Scaling Up framework
            </p>
          </div>
        </div>
      </div>
      <div className="second_div_layout">
        <div className="d-flex flex-row justify-content-between">
          <p className="section-header">Our latest tool kit</p>
         { /*<button
            className="border-0 bg-transparent text-decoration-underline"
            style={{ color: "rgba(251, 168, 25, 1)" }}
          >
            VIEW MORE
  </button>*/}
        </div>
        <div className="mt-4">
          <div className="row g-4">
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
              <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Cash - CASh - Cash Acceleration Strategies.pdf">
                <Image src={Case1} alt="case1" className="toolkit-img img-fluid" />

                <div className="overlay">
                  <h2>CASh</h2>
                  <p>Cash Acceleration Strategies</p>
                </div>
              </a>
            </div>
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
              <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Cash - POO -  The Power of One.pdf">
                <Image src={Case1} alt="case2" className="toolkit-img img-fluid" />
                <div className="overlay">
                  <h2>CASh</h2>
                  <p>The Power of One</p>
                </div>
              </a>
            </div>
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
              <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/People - FACe - Function Accountability Chart.pdf">
                <Image src={Case2} alt="case3" className="toolkit-img img-fluid" />
                <div className="overlay">
                  <h2>FACe</h2>
                  <p>Function Accountability Chart</p>
                </div>
              </a>
            </div>
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
              <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/People - FACe - Function Accountability Chart.pdf">
                <Image src={Case2} alt="case3" className="toolkit-img img-fluid" />
                <div className="overlay">
                  <h2>FACe</h2>
                  <p>Function Accountability Chart</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
      <div className="second_div_layout">
        <div className="d-flex flex-row justify-content-between">
          <p className="section-header">Reference books</p>
          {/* <button
            className="border-0 bg-transparent text-decoration-underline"
            style={{ color: "rgba(251, 168, 25, 1)" }}
          >
            VIEW MORE
          </button> */}
        </div>
        <div className="mt-2">
          <div className="row g-4">
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="card h-100 shadow-lg p-2">
                <div className="card-image">
                  <Image
                    src={Book1}
                    className="card-img-top img-fluid"
                    alt="case4"
                  />
                </div>
                <div className="card-body">
                  <div className="gap-2">

                    <h5 className="card-title">Mastering the rockefeller habits</h5>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="card h-100 shadow-lg p-2">
                <div className="card-image">
                  <Image
                    src={Book2}
                    className="card-img-top img-fluid"
                    alt="case5"
                  />
                </div>
                <div className="card-body">
                  <div className="gap-2">
                   
                    <h5 className="card-title">The Greatest business decisions of all time</h5>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="card h-100 shadow-lg p-2">
                <div className="card-image">
                <Image
                  src={Book3}
                  className="card-img-top img-fluid"
                  alt="case4"
                />
                </div>
                <div className="card-body">
                  <div className="gap-2">                   
                    <h5 className="card-title">12 Habits of valuable employees</h5>
                  </div>
                
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="card h-100 shadow-lg p-2">
                <div className="card-image">
                <Image
                  src={Book4}
                  className="card-img-top img-fluid"
                  alt="case4"
                />
                </div>
                <div className="card-body">
                  <div className="gap-2">
                   
                    <h5 className="card-title">Scaling up compensation</h5>
                  </div>
                
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third_div_layout shadow-lg">
        <Image src={curve1} alt="curve1" className="image3 img-fluid" />
        <p className="section-header" style={{ color: "white" }}>
          Subscribe to our Monthly Newsletter
        </p>
        <p className="section-subText" style={{ color: "white" }}>
          You will never miss our latest news or blogs.
        </p>
        <div className="col-12 col-md-8 col-lg-8 position-relative mt-3">
          <input
            type="text"
            className="form-control input"
            placeholder="Email"
          />
          <button className="col-6 col-md-6 col-lg-4 col-xxl-4 position-absolute text-white top-0 end-0 h-100 subscribe-btn">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default page;
