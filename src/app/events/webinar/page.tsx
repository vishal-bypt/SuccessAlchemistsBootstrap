import React from "react";
import "./webinar.css";
import curve1 from "../../events/webinar/images/curve1.png";
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
              Mastermind Webinar
            </p>
            <p className="subText" style={{ color: "white" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
        </div>
      </div>
      <div className="second_div_layout"></div>
      <div className="third_div_layout">
        <Image src={curve1} alt="curve1" className="image3 img-fluid" />
        <p className="heading" style={{ color: "white" }}>
          What will you learn?
        </p>
        <p className="subText1" style={{ color: "white" }}>
          The Scaling Up methodology has helped thousands of business leaders
          break through their plateaus so they can grow and scale effectively.
          In this webinar, we’ll focus on how to harness the power of your
          business to achieve extraordinary results.
        </p>
      </div>
      <div className="second_div_layout">
        <p className="heading">For Whom Is This Webinar?</p>
        <div>
          <div className="d-flex flex-row">
            <div className="border-end-1 border-bottom-1 border-dark">
              <p></p>
            </div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
