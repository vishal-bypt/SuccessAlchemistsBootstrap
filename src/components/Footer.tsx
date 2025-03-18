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
import Link from "next/link";
import { usePathname } from "next/navigation";
const arr = [
  "/home",
  "/about",
  "/who",
  "/success",
  "/assessment",
  "/resources",
];
const Footer = () => {
  const pathName = usePathname();
  return (
    <div className="d-flex flex-column gap-1">
      <footer className="p-3 p-md-5 border-0 fot">
        <div className="row gx-4">
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
            <Image
              src={logo}
              alt="logo"
              className="Footer_main_logo"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
            <h5>Explore</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <Link
                  className={`${
                    pathName === "/home"
                      ? "active-link font-semibold"
                      : "inactive-link font-normal"
                  } link-underline link-underline-opacity-0`}
                  href={"/home"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/about"
                      ? "active-link font-semibold"
                      : "inactive-link font-normal"
                  } link-underline link-underline-opacity-0`}
                  href={"/about"}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/who"
                      ? "active-link font-semibold"
                      : "inactive-link font-normal"
                  } link-underline link-underline-opacity-0`}
                  href={"/who"}
                >
                  Who we are
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/success"
                      ? "active-link font-semibold"
                      : "inactive-link font-normal"
                  } link-underline link-underline-opacity-0`}
                  href={"/success"}
                >
                  Our success
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/assessment"
                      ? "active-link font-semibold"
                      : "inactive-link font-normal"
                  } link-underline link-underline-opacity-0`}
                  href={"/assessment"}
                >
                  Quick assessment
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/resources"
                      ? "active-link font-semibold"
                      : "inactive-link font-normal"
                  } link-underline link-underline-opacity-0`}
                  href={"/resources"}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/events/webinar"
                      ? "active-link font-semibold"
                      : "inactive-link font-normal"
                  } link-underline link-underline-opacity-0`}
                  href={"/events/webinar"}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/contactUs"
                      ? "active-link font-semibold"
                      : "inactive-link font-normal"
                  } link-underline link-underline-opacity-0`}
                  href={"/contactUs"}
                >
                  Contact us
                </Link>
              </li>
            </ul>
            {/* <ul className="list-unstyled mt-3">
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
                  <Link href={arr[index].toString()}>{item}</Link>
                </li>
              ))}
            </ul> */}
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column ">
            <h5>Contact Info</h5>
            <ul className="list-unstyled mt-3">
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
                  <p className="get-direction-text">Get direction</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column  ">
            <h5>Social Networks</h5>
            <div className="d-flex gap-3 mt-3">
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
          © Copyright 2025 Success Alchemists All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
