"use client";
import React, { useState } from "react";
import "./resources.css";
import Case1 from "./images/tools-final-08.png";
import Case2 from "./images/tools-final-09.png";
import Case3 from "./images/tools-final-10.png";
import Case4 from "./images/tools-final-11.png";
import Book0 from "../../app/resources/images/scaling_up.jpeg";
import Book1 from "../../app/resources/images/mastering_the_rockefeller.jpeg";
import Book2 from "../../app/resources/images/ref-book2.png";
import Book3 from "../../app/resources/images/ref-book3.png";
import Book4 from "../../app/resources/images/ref-book4.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Toast from "../../components/Toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import People1 from "../toolDetail/images/People - FACe.jpg";
import People2 from "../toolDetail/images/People-OPPP.jpg";
import People3 from "../toolDetail/images/People-PACe.jpg";
import People4 from "../toolDetail/images/People-Talent.jpg";
import Strategy1 from "../toolDetail/images/Strategy-7Strata.jpg";
import Strategy2 from "../toolDetail/images/Strategy-Brand Promise.jpg";
import Strategy3 from "../toolDetail/images/Strategy-Vision.jpg";
import Strategy4 from "../toolDetail/images/Strategy-SWT.jpg";
import Execution1 from "../toolDetail/images/Execution-WWW.jpg"
import Execution2 from "../toolDetail/images/Execution- Rockefeller.jpg"
import Cash1 from "../toolDetail/images/Cash-CASh.jpg"
import Cash2 from "../toolDetail/images/Cash-POO.jpg"
import "../toolDetail/toolDetail.css";

const peopleArray = [
  {
    title: "FACe",
    desc: "Function Accountability Chart",
    slug: "function-accountability-chart",
    image: People1,
  },
  {
    title: "OPPP",
    desc: "One Page Personal Plan",
    slug: "one-page-personal-plan",
    image: People2,
  },
  {
    title: "PACe",
    desc: "Process Accountability Chart",
    slug: "process-accountability-chart",
    image: People3,
  },
  {
    title: "Talent",
    desc: "Talent Assessment Chart",
    slug: "talent-assessment-chart",
    image: People4,
  },
];

const strategyArray = [
  {
    title: "Strategy",
    desc: "7 Strata",
    slug: "7-strata",
    image: Strategy1,
  },
  {
    title: "Strategy",
    desc: "Vision Summary",
    slug: "vision-summary",
    image: Strategy2,
  },
  {
    title: "OPSP",
    desc: "One Page Strategic Plan",
    slug: "one-page-strategic-plan",
    image: Strategy3,
  },
  {
    title: "SWT",
    desc: "Strengths Weaknesses Trends",
    slug: "strengths-weaknesses-trends",
    image: Strategy4,
  },
];

const executionArray = [
  {
    title: "WWW",
    desc: "Who What When",
    slug: "who-what-when",
    image: Execution1,
  },
  {
    title: "Execution",
    desc: "Rockefeller Habits Checklist",
    slug: "rockefeller-habits-checklist",
    image: Execution2,
  }
];

const cashArray = [
  {
    title: "CASh",
    desc: "Cash Acceleration Strategies",
    slug: "cash-acceleration-strategies",
    image: Cash1,
  },
  {
    title: "POO",
    desc: "The Power of One",
    slug: "the-power-of-one",
    image: Cash2,
  }
];

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
  const [selectedCategory, setSelectedCategory] = useState<{
    title: "People" | "Strategy" | "Execution" | "Cash";
    categoryArray: any[];
  } | null>(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormSubmit = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default anchor click behavior
    //handleShow(); // Show the modal when the link is clicked
    localStorage.getItem("hasSubmittedInquiry") === "true"
      ? router.push("/toolDetail")
      : handleShow();
  };

  const selectCategory = (
    categoryTitle: "People" | "Strategy" | "Execution" | "Cash",
    categoryArr: any[]
  ) => {
    if (selectedCategory?.title === categoryTitle) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory({
        title: categoryTitle,
        categoryArray: categoryArr,
      });
    }
  };

  const onSubmit = async (data: any) => {
    setShowSpinner(true);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL + "/toolkit"; // Replace with your API URL
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
      localStorage.setItem("hasSubmittedInquiry", "true");
      Toast.success(
        "Your request for toolkit download has been registered! You can download now."
      );
      setShowSpinner(false);
      setTimeout(() => {
        router.push("/toolDetail"); // Redirect to the home page after 2 seconds
      }, 2000);

      //setResponseData(data);
    } catch (error) {
      console.error("Error:", error);
      Toast.error("An error occurred while submitting the form.");
    }
  };
  return (
    <div className="main_body_div">
      <div className="first_div_layout resource">
        <div className="main_first_div_body">
          <div
            className="innerContainer"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p className="heading" style={{ color: "white" }}>
              Resources
            </p>
            <p className="subText" style={{ color: "white" }}>
              Links to articles, books, and tools that support the effective
              implementation of the Scaling Up framework
            </p>
          </div>
        </div>
      </div>
      <div className="second_div_layout">
        <div className="d-flex flex-row justify-content-between">
          <p className="section-header">Our latest tool kit</p>
          {/*<button
            className="border-0 bg-transparent text-decoration-underline"
            style={{ color: "rgba(251, 168, 25, 1)" }} handleClose
          >
            VIEW MORE
  </button>*/}
        </div>
        <div className="mt-4">
          <div className="row g-4">
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
              <Link
                className="tool-img-link"
                onClick={() => selectCategory("People", peopleArray)}
                href="javascript:void(0);"
              >
                <Image
                  src={Case2}
                  alt="case1"
                  className="toolkit-img img-fluid"
                />

                <div className="overlay">
                  <h2>People</h2>
                  {/* <p>Cash Acceleration Strategies</p> */}
                </div>
              </Link>
            </div>
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
              <Link
                className="tool-img-link"
                onClick={() => selectCategory("Strategy", strategyArray)}
                href="javascript:void(0);"
              >
                <Image
                  src={Case1}
                  alt="case2"
                  className="toolkit-img img-fluid"
                />
                <div className="overlay">
                  <h2>Strategy</h2>
                  {/* <p>The Power of One</p> */}
                </div>
              </Link>
            </div>
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
              <Link
                className="tool-img-link"
                onClick={() => selectCategory("Execution", executionArray)}
                href="javascript:void(0);"
              >
                <Image
                  src={Case3}
                  alt="case3"
                  className="toolkit-img img-fluid"
                />
                <div className="overlay">
                  <h2>Execution</h2>
                  {/* <p>Function Accountability Chart</p> */}
                </div>
              </Link>
            </div>
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
              <Link
                className="tool-img-link"
                onClick={() => selectCategory("Cash", cashArray)}
                href="javascript:void(0);"
              >
                <Image
                  src={Case4}
                  alt="case3"
                  className="toolkit-img img-fluid"
                />
                <div className="overlay">
                  <h2>Cash</h2>
                  {/* <p>Function Accountability Chart</p> */}
                </div>
              </Link>
            </div>
          </div>
        </div>
        {selectedCategory !== null && (
          <div>
            <div className="d-flex flex-row justify-content-between mt-2">
              <p className="section-header-tool">{selectedCategory.title}</p>
            </div>
            <div className="row g-4 mt-4">
              {selectedCategory.categoryArray.map((object) => (
                <div
                  className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div"
                  key={object.slug}
                >
                  <Link
                    className="tool-img-link"
                    href={`/toolDetail/${object.slug}`}
                  >
                    <Image
                      src={object.image}
                      alt="case1"
                      className="toolkit-img img-fluid"
                    />
                    <div className="overlay">
                      <h2>{object.title}</h2>
                      <p>{object.desc}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="second_div_layout">
        <div className="d-flex flex-row justify-content-between">
          <p className="section-header">Reference books</p>
          {/* <button
            className="border-0 bg-transparent text-decoration-underline"
            style={{ color: "rgba(251, 168, 25, 1)" }}
          >
            VIEW MORE
          </button> */}
        </div>
        <div className="mt-2">
          <div className="grid-5-col mt-2">
            <div className="custom-col-5 p-2">
              <a href="https://www.amazon.in/Scaling-Up-Verne-Harnish/dp/9362053160/ref=sr_1_1?crid=3CN5G4C1QVDIL&dib=eyJ2IjoiMSJ9.Q0tvizYJ0XnyRfyYz3o-y7CO_UCqHuu9pxLnuyfXx3iSnIxn6TDXmp_H53TmNJnveQd7RJ8f0e2ZDTiZkeuQqnEAGjry5vuYU5xWQM-H905Jykiamn5W0pHC0H5yENxc_8pD3wn3HKfZJjaWjR_yrK5XSnBS9l9oV5BtwqXeaQGm9qYSwNSyxIk6BakZG6WVqtQidWK3LXSdVpXHkP4cGQOjqZrxX600ccDztcKFOlY.H79FBLE0SB4QKzzZt0qJdyYUf6fk_F_qoJwbg_W4p_U&dib_tag=se&keywords=scaling+up+verne+harnish&qid=1747738951&sprefix=scaling+up%2Caps%2C239&sr=8-1" target="_blank">
              <div className="card h-100 shadow-lg p-2">
                <div className="card-image">
                  <Image
                    src={Book0}
                    className="card-img-top img-fluid"
                    alt="case4"
                  />
                </div>
                <div className="card-body">
                  <div className="gap-2">
                    <h5 className="card-title">
                      Scaling up
                    </h5>
                  </div>
                </div>
              </div></a>
            </div>
            <div className="custom-col-5 p-2">
              <a href="https://www.amazon.in/Mastering-Rockefeller-Habits-22nd-Anniversary/dp/B0CXCDYCHN/ref=sr_1_2?crid=JY94OR1ETP4E&dib=eyJ2IjoiMSJ9.XCmjMAr4Yk8wug9W3WpiDjl6SS-1b_MHMGMVSAH1y9ou5dcGPG_BHAzfR-P6miC6zYV84yz6E6nCrRGfwAcjrvli8I9zb1eRclDJFT8ehFiF0hnxr_FuxqJkYEB-wkCoYoOblSDZQ877q75Jc8N_VQ.h-5DTB3NVfu_fKojnTo99hg_4IV_FPpE4co5oIYbRj8&dib_tag=se&keywords=mastering+the+rockefeller+habits&qid=1747739138&sprefix=mastering+the+roc%2Caps%2C264&sr=8-2" target="_blank">
              <div className="card h-100 shadow-lg p-2">
                <div className="card-image">
                  <Image
                    src={Book1}
                    className="card-img-top img-fluid"
                    alt="case4"
                  />
                </div>
                <div className="card-body">
                  <div className="gap-2">
                    <h5 className="card-title">
                      Mastering the rockefeller habits
                    </h5>
                  </div>
                </div>
              </div></a>
            </div>
            <div className="custom-col-5 p-2">
              <a href="https://www.amazon.in/FORTUNE-Greatest-Business-Decisions-Time/dp/1603200592/ref=sr_1_1?crid=3AQJ39YJOKUD7&dib=eyJ2IjoiMSJ9.QdGnVr8cCeZDiDwBsgKITt4V9a2uKeJN9rKMyTX37v5o9QyKgTR1mAJh6C9g22z0Lxxa_WK31Kh15g-enMzziIrjBzF3Dzg9EczK10BXpWh9k2I3w9cGDkrIpo4jrN_5xCqW4NEoUTsotsErSPiPmzghLSgOeDiXj5zMPTzSBDcTLX1uwUaPrt_xp96XZoTg.T39xR92Mx5OvAKOGvXCSmx4raKm0M1XVNIDmdUWXHuw&dib_tag=se&keywords=The+Greatest+business+decisions+of+all+time&qid=1747739685&sprefix=the+greatest+business+decisions+of+all+time%2Caps%2C265&sr=8-1" target="_blank">
              <div className="card h-100 shadow-lg p-2">
                <div className="card-image">
                  <Image
                    src={Book2}
                    className="card-img-top img-fluid"
                    alt="case5"
                  />
                </div>
                <div className="card-body">
                  <div className="gap-2">
                    <h5 className="card-title">
                      The Greatest business decisions of all time
                    </h5>
                  </div>
                </div>
              </div></a>
            </div>
            <div className="custom-col-5 p-2">
              <a href="https://www.amazon.in/12-Habits-Valuable-Employees-Roadmap-ebook/dp/B0CQ62WD2T/ref=sr_1_1?crid=2DRXTOCN79UD2&dib=eyJ2IjoiMSJ9.lAMQzcVHfJop0DkuMY-hQ3yvhU8dWijmXI2Yhu_hMFivWc2BB-3Qa8aS1b_AN1A26B1WQ0x55tCLj4l44XrR1w.QXgrOQ_pzuPSl9WT8cJ_aq0AwFjuAjf7KrS7wBUixFU&dib_tag=se&keywords=12+Habits+of+valuable+employees&qid=1747739730&sprefix=12+habits+of+valuable+employees%2Caps%2C260&sr=8-1" target="_blank">
              <div className="card h-100 shadow-lg p-2">
                <div className="card-image">
                  <Image
                    src={Book3}
                    className="card-img-top img-fluid"
                    alt="case4"
                  />
                </div>
                <div className="card-body">
                  <div className="gap-2">
                    <h5 className="card-title">
                      12 Habits of valuable employees
                    </h5>
                  </div>
                </div>
              </div></a>
            </div>
            <div className="custom-col-5 p-2">
              <a href="https://www.amazon.in/Scaling-Compensation-Principles-Strategic-Advantage/dp/1955884188/ref=sr_1_1?crid=2RFRHK4U3YH9Z&dib=eyJ2IjoiMSJ9.wNkxzcraLxuC1iQ4vk3rz0QHxqwZSdTRhh2JE1gGqPXGjHj071QN20LucGBJIEps.JOCHobagUJGhj8nOrMwaqe65QTigzCZIued5H3mqHY4&dib_tag=se&keywords=Scaling+up+compensation&qid=1747739772&sprefix=scaling+up+compensation%2Caps%2C288&sr=8-1" target="_blank">
              <div className="card h-100 shadow-lg p-2">
                <div className="card-image">
                  <Image
                    src={Book4}
                    className="card-img-top img-fluid"
                    alt="case4"
                  />
                </div>
                <div className="card-body">
                  <div className="gap-2">
                    <h5 className="card-title">Scaling up compensation</h5>
                  </div>
                </div>
              </div></a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="third_div_layout shadow-lg">
        <Image src={curve1} alt="curve1" className="image3 img-fluid" />
        <p className="section-header" style={{ color: "white" }}>
          Subscribe to our Monthly Newsletter
        </p>
        <p className="section-subText" style={{ color: "white" }}>
          You will never miss our latest news or blogs.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="col-12 col-md-8 col-lg-8 position-relative mt-3">
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
            <button
              type="submit"
              className="col-6 col-md-6 col-lg-4 col-xxl-4 position-absolute text-white h-100 top-0 end-0 subscribe-btn"
            >
              Subscribe Now
            </button>
          </div>
        </form>
      </div> */}

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Toolkit Assessement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-floating m-3">
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
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
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
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
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
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
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
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
          </Modal.Body>
          <Modal.Footer>
            {showSpinner && <Spinner animation="border" variant="warning" />}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default page;
