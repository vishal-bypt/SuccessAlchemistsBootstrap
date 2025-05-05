"use client";
import React, { useState } from "react";
import logo from "../../public/assets/images/main_logo.png";
import logo1 from "../../public/assets/images/Success5.png"
import Image from "next/image";
import Email from "../../public/assets/images/Email.svg";
import Location from "../../public/assets/images/Location (2).svg";
import Facebook from "../../public/assets/images/Facebook.png";
import Instagram from "../../public/assets/images/Instagram.png";
import Linkedin from "../../public/assets/images/Linkedin.png";
import Twitter from "../../public/assets/images/Twitter.png";
import Youtube from "../../public/assets/images/Youtube.png";
import curve1 from "../../src/app/about/images/curve1.png";
import { useForm } from "react-hook-form";
import Toast from "../../src/components/Toast";
import { useRouter } from 'next/navigation';
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


  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const router = useRouter();
    const [showSpinner, setShowSpinner] = useState(false);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleFormSubmit = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault(); // Prevent the default anchor click behavior
      //handleShow(); // Show the modal when the link is clicked
      localStorage.getItem('hasSubmittedInquiry') === 'true' ? router.push("/toolDetail") : handleShow();
    };
  
    const onSubmit = async (data: any) => {
      setShowSpinner(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL + "/newsletter"; // Replace with your API URL
      const postData: any = data;
  
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });
        //console.log("response", response);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        reset();
        handleClose();
        localStorage.setItem('hasSubmittedInquiry', 'true');
        Toast.success("Your request for newsletter has been submitted.");
        setShowSpinner(false);
        // setTimeout(() => {
        //   router.push("/"); // Redirect to the home page after 2 seconds  
        // }, 2000);
  
        //setResponseData(data);
      } catch (error) {
        console.error("Error:", error);
        Toast.error("An error occurred while submitting the form.");
      }
    };
  const pathName = usePathname();
  return (
    <div className="d-flex flex-column gap-1">
      <footer className="p-3 p-md-5 border-0 fot">
        <div className="row gx-4 res-row">
          <div className="col-12 col-md-4 col-lg-4 d-flex flex-column">
            <Image
              src={logo1}
              alt="logo"
              className="Footer_main_logo"
              style={{ width: "150px", height: "auto" }}
            />
            <div className="col-12 col-md-10 mt-3 col-lg-10 d-flex flex-column text-justify-content-center align-items-start gap-2" style={{textAlign: "justify"}}>
            At Success Alchemists, we believe that our success is tied to yours. If you're a CEO seeking to deliver accelerated growth, augmented value, and a simplified business model, our experienced Scaling Up Coaches are here to help
            </div>
           
          </div>
          <div className="col-12 col-md-2 col-lg-2 d-flex flex-column">
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
                  href={
                    "https://q.esperto.one/q/sR4RRluSEazkK5XHPlVZ/6hDOhyCnHHDQf1Uzk3eg"
                  }
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
                    [
                      "/events/podcast",
                      "/events/webinar",
                      "/events/basecamp",
                      "/events/webinarDetail",
                    ].includes(pathName)
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
          </div>
          <div className="col-12 col-md-3 col-lg-3 d-flex flex-column ">
            <h5>Contact Info</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2 d-flex align-items-center gap-2">
                <Image src={Email} alt="email" className="icon-img" />
                <p className="mb-0">ajay@success-alchemists.com</p>
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
          <div className="col-12 col-md-3 col-lg-3 d-flex flex-column  ">
            <h5>Social Networks</h5>
            <div className="d-flex gap-3 mt-3">
              {[
                {
                  link: "https://www.facebook.com/success.alchemists",
                  imageSrc: Facebook,
                },
                {
                  link: "https://www.instagram.com/alchemistsuccess",
                  imageSrc: Instagram,
                },
                {
                  link: "https://youtube.com/@success_alchemists",
                  imageSrc: Youtube,
                },
                {
                  link: "https://www.linkedin.com/company/success-alchemists/",
                  imageSrc: Linkedin,
                },
                {
                  link: "https://x.com/SuccessAlc82336",
                  imageSrc: Twitter,
                },
              ].map((icon, index) => (
                <Link
                  href={icon.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={icon.imageSrc}
                    alt={""}
                    width={30}
                    height={30}
                    className="social-icon"
                  />
                </Link>
              ))}
            </div>

            <div className="flex gap-3 mt-5">
              <h5>What’s New</h5>
              </div>
              <div className="flex">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="col-12 col-md-12 col-lg-12 position-relative mt-3">
                    <input
                      type="text"
                      className={`form-control input ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <div
                        className="invalid-feedback position-absolute"
                        style={{ top: "100%", left: 0 }}
                      >
                        {String(errors.email.message)}
                      </div>
                    )}
                 </div>
                 <div className="col-12 col-md-12 col-lg-12 position-relative mt-2">   
                    <button
                      type="submit"
                      className="col-md-4 btn btn-primary btn-sm w-30"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
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
