import React from "react";
import "./resources.css";
import Case1 from "../../../public/assets/images/scalingUp.png"
import Case2 from "../../../public/assets/images/FAC.png";
import Case3 from "../../app/resources/images/ref-book1.webp";
import Case4 from "../../app/resources/images/Case4.png";
import Case5 from "../../app/resources/images/Case5.png";
import Case6 from "../../app/resources/images/Case6.png";
import User from "../../app/resources/images/User.png";
import Image from "next/image";
import curve1 from "../../app/resources/images/curve1.png";
const page = () => {
  return (
    <div className="main_body_div">
      <div className="first_div_layout">
        <div className="main_first_div_body">
          <div
            className="innerContainer"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p className="heading" style={{ color: "white" }}>
              Resources
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
        <div className="d-flex flex-row justify-content-between">
          <p className="section-header">Our latest tool kit</p>
         <button
            className="border-0 bg-transparent text-decoration-underline"
            style={{ color: "rgba(251, 168, 25, 1)" }}
          >
            VIEW MORE
          </button> 
        </div>
        <div className="container mt-4">
          <div className="row g-4">
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 image-div">
              <a target="_blank" href="../../../assets/images/PDF/Cash - CASh - Cash Acceleration Strategies.pdf">
              <Image src={Case1} alt="case1" className="toolkit-img img-fluid w-100" />
              
              <div className="overlay">
                <h2>CASh</h2>
                <p>Cash Acceleration Strategies</p>
              </div>
              </a>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 image-div">
              <a target="_blank" href="../../../assets/images/PDF/Cash - POO -  The Power of One.pdf">
              <Image src={Case1} alt="case2" className="img-fluid w-100" />
              <div className="overlay">
                <h2>CASh</h2>
                <p>The Power of One</p>
              </div>
              </a>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 image-div">
            <a target="_blank" href="../../../assets/images/PDF/People - FACe - Function Accountability Chart.pdf">
              <Image src={Case2} alt="case3" className="img-fluid w-100" />
              <div className="overlay">
                <h2>FACe</h2>
                <p>Function Accountability Chart</p>
              </div>
              </a>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 image-div">
            <a target="_blank" href="../../../assets/images/PDF/People - FACe - Function Accountability Chart.pdf">
              <Image src={Case2} alt="case3" className="img-fluid w-100" />
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
          <p className="heading">Reference book</p>
          <button
            className="border-0 bg-transparent text-decoration-underline"
            style={{ color: "rgba(251, 168, 25, 1)" }}
          >
            VIEW MORE
          </button>
        </div>
        <div className="container mt-4">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 shadow-lg p-2">
                <Image
                  src={Case3}
                  className="card-img-top img-fluid"
                  alt="case4"
                />
                <div className="card-body">
                  <div className="gap-2">
                    <p>
                      <span className="subText1 px-2 py-1">LoremIpsum</span>
                    </p>
                    <h5 className="card-title">Lorem Ipsum</h5>
                  </div>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                  <div className="d-flex flex-row justify-content-between">
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
                      <p className="subText m-0">Lorem Ipsum</p>
                    </div>
                    <p
                      className="subText m-0"
                      style={{ color: "rgba(97, 97, 97, 1)" }}
                    >
                      Jan 1,2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 shadow-lg p-2">
                <Image
                  src={Case5}
                  className="card-img-top img-fluid"
                  alt="case5"
                />
                <div className="card-body">
                  <div className="gap-2">
                    <p>
                      <span className="subText1 px-2 py-1">LoremIpsum</span>
                    </p>
                    <h5 className="card-title">Lorem Ipsum</h5>
                  </div>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                  <div className="d-flex flex-row justify-content-between">
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
                      <p className="subText m-0">Lorem Ipsum</p>
                    </div>
                    <p
                      className="subText m-0"
                      style={{ color: "rgba(97, 97, 97, 1)" }}
                    >
                      Jan 1,2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 shadow-lg p-2">
                <Image
                  src={Case6}
                  className="card-img-top img-fluid"
                  alt="case4"
                />
                <div className="card-body">
                  <div className="gap-2">
                    <p>
                      <span className="subText1 px-2 py-1">LoremIpsum</span>
                    </p>
                    <h5 className="card-title">Lorem Ipsum</h5>
                  </div>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                  <div className="d-flex flex-row justify-content-between">
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
                      <p className="subText m-0">Lorem Ipsum</p>
                    </div>
                    <p
                      className="subText m-0"
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
      </div>
      <div className="third_div_layout shadow-lg">
        <Image src={curve1} alt="curve1" className="image3 img-fluid" />
        <p className="heading" style={{ color: "white" }}>
          Subscribe to our Monthly Newsletter
        </p>
        <p className="subText" style={{ color: "white" }}>
          You will never miss our latest news or blogs.
        </p>
        <div className="col-12 col-md-8 col-lg-8 position-relative">
          <input
            type="text"
            className="form-control input"
            placeholder="Email"
          />
          <button className="col-6 col-md-6 col-lg-5 position-absolute text-white top-0 end-0 h-100 btn">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default page;
