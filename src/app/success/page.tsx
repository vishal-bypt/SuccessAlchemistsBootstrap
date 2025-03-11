import React from "react";
import "./success.css";
import Case1 from "../../app/success/images/Case-study1.png";
import Case2 from "../../app/success/images/Case-study2.png";
import Case3 from "../../app/success/images/Case-study3.png";
import Case4 from "../../app/success/images/Case4.png";
import Case5 from "../../app/success/images/Case5.png";
import Case6 from "../../app/success/images/Case6.png";
import User from "../../app/success/images/User.png";
import Image from "next/image";
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
              Our Success
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
          <p className="section-header">Our latest case studies</p>
          {/* <button
            className="border-0 bg-transparent text-decoration-underline"
            style={{ color: "rgba(251, 168, 25, 1)" }}
          >
            VIEW MORE
          </button> */}
        </div>
        <div className="casestudy-container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Image src={Case1} alt="case1" className="img-fluid w-100" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Image src={Case2} alt="case2" className="img-fluid w-100" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Image src={Case3} alt="case3" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="second_div_layout">
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
            <div className="col-lg-4 col-md-6 col-sm-12">
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
              <div className="card h-100 shadow-lg px-2 py-1">
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
                      <span className="subText1 p-2">LoremIpsum</span>
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
    </div>
  );
};

export default page;
