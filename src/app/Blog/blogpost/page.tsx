'use client'
import React, { useState } from "react";
import "../blogstyle.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from "next/image";


import Case5 from "../images/Case4.png";
import Case6 from "../images/Case5.png";
import User from "../images/User.png";


const page = () => {

    return (
        <div className="second_div_layout">
            <p className="heading">
            Latest blog posts
            </p>

            <div className="mt-4">
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card h-100 shadow-lg">
                <Image
                  src={Case5}
                  className="card-img-top img-fluid"
                  alt="case4"
                />
                <div className="card-body">
                  <div className="gap-2">
                  <span className="badge rounded-pill badge-pill">LoremIpsum</span>
                   
                    <h5 className="card-title">Lorem Ipsum</h5>
                  </div>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                  <div className="d-flex flex-row justify-content-between align-items-center profile-date-div">
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
                      <p className="profile-subText m-0">Lorem Ipsum</p>
                    </div>
                    <p
                      className="dateText m-0"
                      style={{ color: "rgba(97, 97, 97, 1)" }}
                    >
                      Jan 1,2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card h-100 shadow-lg">
                <Image
                  src={Case5}
                  className="card-img-top img-fluid"
                  alt="case4"
                />
                <div className="card-body">
                  <div className="gap-2">
                  <span className="badge rounded-pill badge-pill">LoremIpsum</span>
                   
                    <h5 className="card-title">Lorem Ipsum</h5>
                  </div>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                  <div className="d-flex flex-row justify-content-between align-items-center profile-date-div">
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
                      <p className="profile-subText m-0">Lorem Ipsum</p>
                    </div>
                    <p
                      className="dateText m-0"
                      style={{ color: "rgba(97, 97, 97, 1)" }}
                    >
                      Jan 1,2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card h-100 shadow-lg">
                <Image
                  src={Case5}
                  className="card-img-top img-fluid"
                  alt="case4"
                />
                <div className="card-body">
                  <div className="gap-2">
                  <span className="badge rounded-pill badge-pill">LoremIpsum</span>
                   
                    <h5 className="card-title">Lorem Ipsum</h5>
                  </div>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                  <div className="d-flex flex-row justify-content-between align-items-center profile-date-div">
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
                      <p className="profile-subText m-0">Lorem Ipsum</p>
                    </div>
                    <p
                      className="dateText m-0"
                      style={{ color: "rgba(97, 97, 97, 1)" }}
                    >
                      Jan 1,2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card h-100 shadow-lg">
                <Image
                  src={Case5}
                  className="card-img-top img-fluid"
                  alt="case4"
                />
                <div className="card-body">
                  <div className="gap-2">
                  <span className="badge rounded-pill badge-pill">LoremIpsum</span>
                   
                    <h5 className="card-title">Lorem Ipsum</h5>
                  </div>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                  <div className="d-flex flex-row justify-content-between align-items-center profile-date-div">
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
                      <p className="profile-subText m-0">Lorem Ipsum</p>
                    </div>
                    <p
                      className="dateText m-0"
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
    );
};

export default page;
