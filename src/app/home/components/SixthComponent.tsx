"use client";
import { memo } from "react";
import Image from "next/image";
import Curve_shape from "../images/Curve-shape.png";
import Double_arrow from "../images/Double_arrow.png";
import peoples_meeting_image from "../images/peoples_meeting_image.jpeg";

const SixthComponent = memo(() => {
  return (
    <div className="home2-sixth_component">
          <div className="section-title-white mb-0">Do You Need The 
        Scaling Up Framework?</div>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="col-md-4" style={{ position: "relative" }}>
          {/* <div className="img-fluid curve-image" style={{}}>
            <Image
              src={Curve_shape}
              className="img-fluid"
              alt="curve shape"
              loading="lazy"
            />
          </div> */}
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
              alt="people meeting"
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-md-7 home2-right_div_sixth_component">
          <div>
            <div className="home2-sixth_component_title_div mt-4">SCALING UP</div>
            <div className="home2-sixth_component_header_div">Team assessment</div>
            {/* <div className="home2-sixth_component_sub_header_div">
              Welcome to the Scaling Up 4 Decisions Assessment!
            </div> */}
            <p className="white-subtitle-text mb-4">
              This tool will help you evaluate and strengthen your business
              across the critical areas of People, Strategy, Execution, and
              Cash.
            </p>
          </div>

          <div className="home2-sixth_component_btn_div">
            <a
              href="https://scalinguptoolkit.com/s/ScaleUpQA_AH"
              target="_blank"
              rel="noopener noreferrer"
            >
              TAKE THE ASSESSMENT
              <Image
                className="img-fluid img-black"
                src={Double_arrow}
                height={35}
                width={35}
                alt="right arrow"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

SixthComponent.displayName = "SixthComponent";

export default SixthComponent;

