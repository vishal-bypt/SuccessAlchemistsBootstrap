"use client";
import logo from "../../public/assets/images/main_logo.png";
import Image from "next/image";
import Email from "../../public/assets/images/Email.png";
import Location from "../../public/assets/images/Location.png";
import Facebook from "../../public/assets/images/Facebook.png";
import Instagram from "../../public/assets/images/Instagram.png";
import Linkedin from "../../public/assets/images/Linkedin.png";
import Twitter from "../../public/assets/images/Twitter.png";
import Youtube from "../../public/assets/images/Youtube.png";
const Footer = () => {
  return (
    <div className="d-flex flex-column gap-1">
      <footer className=" p-5 mt-5 border-0 fot">
        <div className="row gx-4">
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
            <Image src={logo} alt="logo" className="main_logo mb-3 img-fluid" />
            <p className="text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              {[
                "Home",
                "About us",
                "Who we are",
                "Our success",
                "Quick assessment",
                "Events",
                "Contact us",
              ].map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column ">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center gap-2">
                <Image src={Email} alt="email" className="icon-img" />
                <p className="mb-0">ajay@hiraskar.com</p>
              </li>
              <li className="mb-2 d-flex align-items-start gap-2">
                <Image src={Location} alt="location" className="icon-img" />
                <div>
                  <p className="mb-1">
                    D-702, Kumar Presidency Phase 1, Lane no.7, Koregaon Park,
                    Pune 411001
                  </p>
                  <p className="text-primary">Get direction</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column  ">
            <h5>Social Networks</h5>
            <div className="d-flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin, Twitter].map(
                (icon, index) => (
                  <Image
                    key={index}
                    src={icon}
                    alt="social"
                    className="social-icon"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </footer>
      <div
        className="d-flex footer-div shadow-lg py-3 my-auto justify-content-center align-items-center w-100 text-center"
        style={{ borderRadius: 15 }}
      >
        <p className="mb-0">
          © Copyright 2023 Success Alchemists All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
