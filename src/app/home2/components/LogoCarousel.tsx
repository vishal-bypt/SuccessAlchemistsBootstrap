"use client";
import { memo } from "react";
import Image from "next/image";

// Import logos
import your_logo from "../images/Logos/image 2.png";
import lorem_ipsum from "../images/Logos/image 3.png";
import o_logo from "../images/Logos/image 4.png";
import logo6 from "../images/Logos/image 6.png";
import logo7 from "../images/Logos/image 7.png";
import logo8 from "../images/Logos/image 8.png";
import logo9 from "../images/Logos/image 9.png";
import logo10 from "../images/Logos/image 10.png";
import logo11 from "../images/Logos/image 11.png";
import logo15 from "../images/Logos/image 15.png";
import logo16 from "../images/Logos/image 16.png";
import logo17 from "../images/Logos/image 17.png";
import logo18 from "../images/Logos/image 18.png";
import logo19 from "../images/Logos/image 19.png";
import logo20 from "../images/Logos/image 20.png";
import logo21 from "../images/Logos/image 21.png";
import logo22 from "../images/Logos/image 22.png";
import logo23 from "../images/Logos/image 23.png";
import logo25 from "../images/Logos/image 25.png";
import logo26 from "../images/Logos/image 26.png";
import logo27 from "../images/Logos/image 27.png";
import logo28 from "../images/Logos/image 28.png";
import logo29 from "../images/Logos/image 29.png";
import logo32 from "../images/Logos/image 32.png";
import logo33 from "../images/Logos/image 33.png";
import logo34 from "../images/Logos/image 34.png";

const logos = [
  your_logo,
  lorem_ipsum,
  o_logo,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo25,
  logo26,
  logo27,
  logo28,
  logo29,
  logo32,
  logo33,
  logo34,
];

const LogoCarousel = memo(() => {
  return (
    <div className="home2-company-logo home2-second-div-layout">
      <div className="text-center">
        <h2>Trusted By Top Brands</h2>
      </div>
      <div
        className="home2-second-div-layout-row"
        style={{
          width: "auto",
          overflowX: "auto",
          overflowY: "hidden",
          marginTop: "16px",
        }}
      >
        <div className="home2-second-div-right-div">
          <div className="home2-slider-container">
            <div className="home2-slider-track">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className={
                    index === 0
                      ? "image_layout_your_logo"
                      : index === 1
                      ? "image_layout_lorem_ipsum"
                      : index === 2
                      ? "image_layout_o_logo"
                      : "image_layout_lorem_ipsum2"
                  }
                >
                  <Image
                    src={logo}
                    width={200}
                    height={200}
                    className={
                      index === 0
                        ? "image_layout_your_logo"
                        : index === 1
                        ? "image_layout_lorem_ipsum"
                        : index === 2
                        ? "image_layout_o_logo"
                        : "image_layout_lorem_ipsum2"
                    }
                    alt={`logo ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicated logos for infinite scroll */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-duplicate-${index}`}
                  className={
                    index === 0
                      ? "image_layout_your_logo"
                      : index === 1
                      ? "image_layout_lorem_ipsum"
                      : index === 2
                      ? "image_layout_o_logo"
                      : "image_layout_lorem_ipsum2"
                  }
                >
                  <Image
                    src={logo}
                    width={200}
                    height={200}
                    className={
                      index === 0
                        ? "image_layout_your_logo"
                        : index === 1
                        ? "image_layout_lorem_ipsum"
                        : index === 2
                        ? "image_layout_o_logo"
                        : "image_layout_lorem_ipsum2"
                    }
                    alt={`logo ${index + 1} duplicate`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

LogoCarousel.displayName = "LogoCarousel";

export default LogoCarousel;

