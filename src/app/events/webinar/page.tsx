"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import curve1 from "../../../../src/app/about/images/curve1.png";
import bluecurve from "../basecamp/Images/blue-curve.svg";
import basecamplogo2 from "../webinar/images/Masterminds_White.png";
import Toast from "../../../components/Toast";
import Spinner from 'react-bootstrap/Spinner';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import "./webinar.css";
const page = () => {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Pathfinders");
  const [selectedValue2, setSelectedValue2] = useState("Masterminds");
  const [selectedRevanueValue, setSelectedRevanueValue] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [showSpinner, setShowSpinner] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
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
      {/* <div className="first_div_layout webinar">
        <div className="main_first_div_body">
          <div
            className="innerContainer"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p className="heading" style={{ color: "white" }}>
              Mastermind Webinar
            </p>
            <p className="subText" style={{ color: "white" }}>
              An interactive knowledge-sharing session with industry experts who have implemented strategies, insights, and best practices for business growth and transformation.
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
            Masterminds Webinar
          </p>
          <p className="subText" style={{ color: "white" }}>
            An interactive knowledge-sharing session with industry experts who
            have implemented strategies, insights, and best practices for
            business growth and transformation.
          </p>
          {/* <p><Button variant="primary" onClick={handleShow2}>
            To become masterminds
          </Button></p> */}

        </div>
      </div>

      <div className="second_div_layout">
        <div className="webinar-header">
          <h1 className="webinar_heading">
            Webinar <span className="badge green-badge">Free</span>
          </h1>
          {/* <button
            className="border-0 bg-transparent text-decoration-underline"
            style={{ color: "rgba(251, 168, 25, 1)" }}
          >
            VIEW MORE
          </button> */}
        </div>
        <div className="webinar-content">
          <p className="mb-2" style={{ textAlign: "justify" }}>
            At Success Alchemists, we are dedicated to transforming businesses
            through the proven Scaling Up framework developed by Verne Harnish.
            With a diverse client base spanning various industries, we empower
            organizations to achieve sustainable growth and operational
            excellence.
          </p>
          <p style={{ textAlign: "justify" }}>
            This webinar is an excellent platform to acquire actionable
            knowledge, enhance your growth strategies, and connect with
            like-minded individuals dedicated to success. Don’t miss this
            enriching experience to propel your business forward!
          </p>
        </div>



      </div>

      <div className="fourth_component">
        <div className="fourth_component_first_div">
          <div className="fourth_component_title_div">
            For Whom Is This Webinar?
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-md-6 fourth_component_bottom_component_gray_light right_border_div ">
              <h1 className="text_div">Entrepreneurs and Business Owners</h1>
              <p className="fourth-webinar-content" style={{ textAlign: "justify" }}>
                This group includes small business owners and entrepreneurs
                seeking to scale their businesses for increased revenue and
                growth.
              </p>
            </div>
            <div className="col-md-6 fourth_component_bottom_component_brack_div">
              <h1 className="text_div">Decision-Makers</h1>
              <p className="fourth-webinar-content" style={{ textAlign: "justify" }}>
                Managers, executives, and leaders within larger organizations
                responsible for strategic decisions and business expansion.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 fourth_component_bottom_component_brack_div right_border_div top_border_div">
              <h1 className="text_div">Professionals and Financial Experts</h1>
              <p className="fourth-webinar-content" style={{ textAlign: "justify" }}>
                Individuals from diverse industries and financial backgrounds
                looking to enhance their skills and strategies for business
                growth and financial optimization.
              </p>
            </div>
            <div className="col-md-6 fourth_component_bottom_component_gray_light top_border_div">
              <h1 className="text_div">Entrepreneurs</h1>
              <p className="fourth-webinar-content" style={{ textAlign: "justify" }}>
                Entrepreneurs will discover invaluable open-book management
                strategies, providing the foundation for building a transparent,
                engaging, and scalable business model that empowers teams and
                drives growth.
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="second_div_layout">
        <p className="heading" style={{ color: "black" }}>
          Upcoming Webinars
        </p>
        <div className="webinar-main-box">
          <div className="webinar-box" style={{ background: 'linear-gradient(to right, #fba819, #fff3cc)' }}>
            <div className="row">
              <div className="col-md-12 p-5">
                <h3 className="text-center">Coming Soon...</h3>
              </div>
              {/* <div className="col-md-4">
                <iframe
                  className="video-iframe"
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/FohUsWevkGo?si=KSu8b_mJcAl1Qh96"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-md-8">
                <div className="webinar-box-content">
                  <div className="second-box-content">
                    <h3>Scaling Up- Pathway to Progress With Ajay Hiraskar</h3>
                    <p style={{ textAlign: "justify" }}>
                      In this webinar, Ajay dives into the transformative power
                      of the Scaling Up Framework, sharing the critical
                      strategies and tools that have propelled his clients to
                      new heights. Learn the benefits of implementing this
                      powerful framework.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>


      <div className="banner">
        <div className="overlay"></div>
        <div className="content">
          <h1 style={{ color: 'white' }}>Want to be <Image alt="Masterminds" style={{ width: '280px', height: 'auto' }} src={basecamplogo2} /> speaker ?</h1>
          <a href="javascript:void(0);" onClick={handleShow2} className="btnForOverlaySection">Click Here</a>
        </div>
      </div>


      <div className="second_div_layout">
        <p className="heading" style={{ color: "black" }}>
          Previous Webinars
        </p>
        <div className="webinar-main-box">
          <div className="webinar-box">
            <div className="row">
              <div className="col-md-4">
                <iframe
                  className="video-iframe"
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/FohUsWevkGo?si=KSu8b_mJcAl1Qh96"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-md-8">
                <div className="webinar-box-content">
                  <div className="second-box-content">
                    <h3>Scaling Up- Pathway to Progress With Ajay Hiraskar</h3>
                    <p style={{ textAlign: "justify" }}>
                      In this webinar, Ajay dives into the transformative power
                      of the Scaling Up Framework, sharing the critical
                      strategies and tools that have propelled his clients to
                      new heights. Learn the benefits of implementing this
                      powerful framework.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="webinar-box">
            <div className="row">
              <div className="col-md-4">
                <iframe
                  className="video-iframe"
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/r3deFcELIck?si=NwgPoo_asrnOXEFI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-md-8">
                <div className="webinar-box-content">
                  <div className="second-box-content">
                    <h3>July2024 - Rajeev Malik of Only Ladders</h3>
                    <p style={{ textAlign: "justify" }}>
                      A seasoned Brand Strategist and Marketing Advisor with
                      over 35 years of experience. Rajeev has successfully
                      nurtured brands like Toyota, Daihatsu, Blue Star, and
                      Mahindra Commercial Vehicles. He's an award-winning
                      expert, recognized as one of the 50 Most Talented CMOs and
                      among the Top 100 Digital Marketers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="webinar-box">
            <div className="row">
              <div className="col-md-4">
                <iframe
                  className="video-iframe"
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/afWQ9njK28A?si=r9dqBtC4Z7q3byNv"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-md-8">
                <div className="webinar-box-content">
                  <div className="second-box-content">
                    <h3>
                      March2024 - Siddharth Motiwale of Clarion Technologies
                    </h3>
                    <p style={{ textAlign: "justify" }}>
                      Strategic thinking and execution planning go hand in hand
                      to create a successful organization. The challenge is HOW?{" "}
                    </p>

                    <p style={{ textAlign: "justify" }}>
                      The problem statement: Most senior management
                      professionals are so tied up in transactional roles that
                      we often miss the big picture of Strategic thinking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="webinar-box">
            <div className="row">
              <div className="col-md-4">
                <iframe
                  className="video-iframe"
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/RYgZpZUIN5k?si=4oej4FOs_CjGUPwl"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-md-8">
                <div className="webinar-box-content">
                  <div className="second-box-content">
                    <h3>May2024 - Sunny Bhanushali of Aliens Tattoo</h3>
                    <p style={{ textAlign: "justify" }}>
                      Our Guest Speaker Sunny Bhanushali, one of the most famous
                      names in the artistic world of Tattoo, is the man behind
                      them and many other famous people around the world!
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
          What will you learn?
        </p>
        <p className="subText webinar-sub-text" style={{ color: "white", textAlign: "justify" }}>
          The Scaling Up methodology has helped thousands of business leaders
          break through their plateaus so they can grow and scale effectively.
          In this webinar, we’ll focus on how to harness the power of your
          business to achieve extraordinary results.
        </p>
      </div>

      {/* modal html start here */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Workshop Registration - Individual</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-4 mt-2">
            Please provide us with your contact details below, and we’ll get
            back to you with the payment details within 24 hours of receiving
            your registration
          </p>
          <form>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control contact-input"
                id="floatingInput"
                placeholder="E.g. Aman Rai"
              />
              <label htmlFor="floatingInput">
                Your Name <span>*</span>
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control contact-input"
                id="floatingInput"
                placeholder="E.g. Aman Rai"
              />
              <label htmlFor="floatingInput">
                Designation <span>*</span>
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control contact-input"
                id="floatingInput"
                placeholder="E.g. Aman Rai"
              />
              <label htmlFor="floatingInput">
                Company Name <span>*</span>
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control contact-input"
                id="floatingInput"
                placeholder="E.g. Aman Rai"
              />
              <label htmlFor="floatingInput">
                Business Email Address <span>*</span>
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control contact-input"
                id="floatingInput"
                placeholder="E.g. Aman Rai"
              />
              <label htmlFor="floatingInput">
                Mobile number <span>*</span>
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn submit-btn">Submit</Button>
        </Modal.Footer>
      </Modal>
      {/* modal html start here */}

      <Modal show={show2} onHide={handleClose2}>
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
                  pattern: {
                    value: /^[0-9]{10}$/, // Example: validates 10-digit numbers
                    message: "Phone number must be 10 digits",
                  },
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
              <select value={selectedValue}  {...register("interested")} className={`form-select ${errors.interested ? "is-invalid" : ""}`} id="interested" aria-label="Default select example">
                <option value="Pathfinders">Pathfinders</option>
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
              <select {...register("annual_revanue")} className={`form-select ${errors.interested ? "is-invalid" : ""}`} id="annual_revanue" aria-label="Annual Revenue (USD)">
                <option value="Zero revenue - startup">Zero revenue - startup</option>
                <option value="< t Mn USD>">&lt; 1 Mn USD</option>
                <option value="1 to 10 Mn USD">1 to 10 Mn USD</option>
                <option value="10 to 50 Mn USD">10 to 50 Mn USD</option>
                <option value="> 50 Mn USD">&gt; 50 Mn USD</option>
              </select>
              <label htmlFor="interested">Annual Revenue (USD)</label>
              {errors.annual_revanue && (
                <div className="invalid-feedback">
                  {String(errors.annual_revanue.message)}
                </div>
              )}
            </div>
            <div className="form-floating m-3">
              <input
                type="text"
                className={`form-control ${errors.unique_aspect_of_your_work ? "is-invalid" : ""
                  }`}
                id="unique_aspect_of_your_work"
                placeholder="Describe the unique aspects of your work"
                {...register("unique_aspect_of_your_work")}
              />
              <label htmlFor="unique_aspect_of_your_work">Describe the unique aspects of your work</label>
              {errors.unique_aspect_of_your_work && (
                <div className="invalid-feedback">
                  {String(errors.unique_aspect_of_your_work.message)}
                </div>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            {showSpinner && <Spinner animation="border" variant="warning" />}
            <Button variant="secondary" onClick={handleClose2}>
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
