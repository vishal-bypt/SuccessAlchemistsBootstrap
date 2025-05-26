'use client';
import Image from "next/image";
import curve1 from "../../../../src/app/about/images/curve1.png";
import bluecurve from "../basecamp/Images/blue-curve.svg";
import basecamplogo2 from "../podcast/images/Pathfinders_White.png";
import Toast from "../../../components/Toast";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import "./podcast.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
const page = () => {
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
  const onSubmit = async (data: any) => {
    setShowSpinner(true);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL + "/path-finder"; // Replace with your API URL
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
      Toast.success("Your request for pathfinders or masterminds speaker has been submitted!");
      setShowSpinner(false);
    
      //setResponseData(data);
    } catch (error) {
      console.error("Error:", error);
      Toast.error("An error occurred while submitting the form.");
    }
  };
  return (
    <div className="main_body_div">
      {/* <div className="first_div_layout podcast">
                <div className="main_first_div_body">
                    <div
                        className="innerContainer"
                        style={{ justifyContent: "center", alignItems: "center" }}
                    >
                        <p className="heading" style={{ color: "white" }}>
                            Pathfinder podcast
                        </p>
                        <p className="subText" style={{ color: "white" }}>
                        A podcast series where we delve into the inspiring journeys of successful business leaders, founders, and CEOs of Small and Medium-sized enterprises. 

                        </p>
                    </div>
                </div>
            </div> */}
      <div className="basecamp-hero-section">
        <Image className="blue-curve" src={bluecurve} alt="img2" />
        <div className="hero-content">
          <div className="hero-icon-img">
            <Image className="logo-image" src={basecamplogo2} alt="img2" />
          </div>
          <p className="heading" style={{ color: "white" }}>
            Pathfinders Podcast
          </p>
          <p className="subText" style={{ color: "white" }}>
            A podcast series where we delve into the inspiring journeys of successful business leaders, founders, and CEOs of Small and Medium-sized enterprises.
          </p>
          {/* <p><Button variant="primary" onClick={handleShow}>
        To become Pathfinders
      </Button></p> */}
        </div>
      </div>
      <div className="second_div_layout">
        <div className="webinar-header">
          <h1 className="webinar_heading">
            Pathfinders 
          </h1>
          {/* <button
            className="border-0 bg-transparent text-decoration-underline"
            style={{ color: "rgba(251, 168, 25, 1)" }}
          >
            VIEW MORE
          </button> */}
        </div>
        <div className="webinar-content">
          <p style={{textAlign: "justify"}}>
            Pathfinders Podcast takes you behind the scenes of entrepreneurship, where grit, vision, and strategy intersect. Each episode features candid conversations with dynamic business minds who have built and scaled small and medium-sized enterprises across diverse industries. Through their firsthand accounts, you'll discover the untold challenges, pivotal moments, and key decisions that shaped their paths to success.
          </p>
        </div>
        

    
      </div>
      <div className="banner">
        <div className="overlay"></div>
        <div className="content">
          <h1 style={{color: 'white'}}>Want to be <Image alt="Masterminds" className="banner_img" style={{width: '280px', height : 'auto' }}  src={basecamplogo2}/> speaker ?</h1>
          <a href="javascript:void(0);" onClick={handleShow} className="btnForOverlaySection">Click Here</a>
        </div>
      </div>
      <div className="seventh_components shadow-lg">
        <div className="row row-gap">
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/bSagpoZ6hBU?si=d4x_SzpLhOerX-s-"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Success Alchemists Pathfinders
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/0-mZlURLCY4?si=uEvJ1ryjYWKtFw-C"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Mentoring Startups towards success
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/dr2DmRlXcfI?si=efBN6dN1RM4Ejjd2"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Entrepreneurial insights from fintech leader
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/40vkg5IaYZQ?si=eFgML20s-fUgbC-z"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Beyond the algorithm : A DEEP DIVE
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/XEXvnhB3akU?si=wvMHUuimDx87PQG8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Industry Pioneer : Continued Learning and consistency
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/ughFwXg8Cdw?si=0MSwr2mpIPXowiBO"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Every successful entrepreneur is a marathoner
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/LKJ9oNABO7c?si=o4GJEh_NQ02JM5KW"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    4 decades.Many stories.Lots of inspiration
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/brOOsc6GIhI?si=sbefzUJDLVvLUELt"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    AGRITECH : The next big money spinner{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/fOLCO-noL8k?si=o-zzfUy6aH-GJ8xQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Weikfield : "A story full of inspiration"
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/cVDrMk1mP4M?si=EaUuVvWkzRcik5_1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Serial entrepreneur, BNI, Clicktrails and so much more
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/TL4acYFGXOc?si=RPJPsP9tcCnZCm2H"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Million Miles Million Smiles </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/PEiRKO31E3Y?si=0cMuHj9UvHCeEFMt"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">When innovation meets authenticity !</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/17LdpOzH5wc?si=wMFZBy35UkFoWvvA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Biotech lifesciences india marching ahead
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/M3mQhJ_gItg?si=2dLSneD3wZbXwsyD"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">The 3th on way to success</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third_div_layout shadow-lg">
        <Image src={curve1} alt="curve1" className="image3 img-fluid" />
        <div className="row align-items-center">
          <div className="col-md-12">
            <p
              className="subText webinar-sub-text mt-0"
              style={{ color: "white", width: "100%", textAlign: "justify" }}
            >
              Success Alchemists' Pathfinder is a captivating podcast series
              that delves into the journeys of successful business owners,
              founders, CEOs, and professionals from small and medium-sized
              enterprises. Through in-depth interviews, we explore the
              challenges they have faced, the valuable lessons they've learned,
              and the innovative strategies they've employed to overcome
              obstacles and achieve remarkable success. Each episode offers
              listeners unique insights and inspiration, fostering a deeper
              understanding of the entrepreneurial landscape and the resilience
              required to thrive in today’s competitive environment. Join us as
              we uncover the stories behind the success of these inspiring
              leaders.
            </p>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Become Pathfinders or masterminds speaker</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-floating m-3">
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""
                  }`}
                id="name"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",

                })}
              />
              <label htmlFor="name">Name</label>
              {errors.name && (
                <div className="invalid-feedback">
                  {String(errors.name.message)}
                </div>
              )}
            </div>
            <div className="form-floating m-3">
              <input
                type="text"
                className={`form-control ${errors.email ? "is-invalid" : ""
                  }`}
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },

                })}
              />
              <label htmlFor="email">Email</label>
              {errors.email && (
                <div className="invalid-feedback">
                  {String(errors.email.message)}
                </div>
              )}
            </div>
            <div className="form-floating m-3">
              <input
                type="text"
                className={`form-control ${errors.phone ? "is-invalid" : ""
                  }`}
                id="phone"
                placeholder="Phone"
                {...register("phone", {
                  required: "Phone is required",
                })}
              />
              <label htmlFor="phone">Phone</label>
              {errors.phone && (
                <div className="invalid-feedback">
                  {String(errors.phone.message)}
                </div>
              )}
            </div>
            <div className="form-floating m-3">
              <input
                type="text"
                className={`form-control ${errors.company ? "is-invalid" : ""
                  }`}
                id="company"
                placeholder="Company Name"
                {...register("company", {
                  required: "Company Name is required",
                })}
              />
              <label htmlFor="company">Company Name</label>
              {errors.company && (
                <div className="invalid-feedback">
                  {String(errors.company.message)}
                </div>
              )}
            </div>
            {/* <div className="form-floating m-3">
              <input
                type="text"
                className={`form-control ${errors.jobTitle ? "is-invalid" : ""
                  }`}
                id="jobTitle"
                placeholder="Job Title"
                {...register("jobTitle", {
                  required: "Job Title is required",
                })}
              />
              <label htmlFor="jobTitle">Job Title</label>
              {errors.jobTitle && (
                <div className="invalid-feedback">
                  {String(errors.jobTitle.message)}
                </div>
              )}
            </div> */}
            <div className="form-floating m-3">
              <input
                type="text"
                className={`form-control ${errors.linkedinProfile ? "is-invalid" : ""
                  }`}
                id="linkedinProfile"
                placeholder="LinkedIn Profile"
                {...register("linkedinProfile", {
                  required: "LinkedIn Profile is required",
                })}
              />
              <label htmlFor="linkedinProfile">LinkedIn Profile</label>
              {errors.linkedinProfile && (
                <div className="invalid-feedback">
                  {String(errors.linkedinProfile.message)}
                </div>
              )}
            </div>
            <div className="form-floating m-3">
              <select {...register("interested")} className={`form-select ${errors.interested ? "is-invalid" : ""}`} id="interested" aria-label="Default select example">
                <option selected value="Pathfinders">Pathfinders</option>
                <option value="Masterminds">Masterminds</option>  
                <option value="Any">Any</option>  
              </select>
              <label htmlFor="interested">Are you interested in speaking on ?</label>
              {errors.interested && (
                <div className="invalid-feedback">
                  {String(errors.interested.message)}
                </div>
              )}
            </div>
            <div className="form-floating m-3">
              <select {...register("expertise")} className={`form-select ${errors.expertise ? "is-invalid" : ""}`} id="interested" aria-label="Default select example">
                <option selected value="Scaling Business">Scaling Business</option>
                <option value="Leadership">Leadership</option>  
                <option value="Startup Growth">Startup Growth</option>  
                <option value="Operations">Operations</option> 
                <option value="Fundraising">Fundraising</option>  
              </select>
              <label htmlFor="expertise">Preferred topics or Area of expertise</label>
              {errors.expertise && (
                <div className="invalid-feedback">
                  {String(errors.expertise.message)}
                </div>
              )}
            </div>
            <div className="form-floating m-3">
              <input
                type="text"
                className={`form-control ${errors.reason ? "is-invalid" : ""
                  }`}
                id="reason"
                placeholder="Why do you want to be a speaker on our platform?"
                {...register("reason", {
                  required: "Reason is required",
                })}
              />
              <label htmlFor="reason">Why do you want to be a speaker on our platform?</label>
              {errors.reason && (
                <div className="invalid-feedback">
                  {String(errors.reason.message)}
                </div>
              )}
            </div>
            
            


          </Modal.Body>
          <Modal.Footer>
            {showSpinner && <Spinner animation="border" variant="warning" />}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default page;
