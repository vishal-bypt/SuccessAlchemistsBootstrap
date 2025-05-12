"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import People1 from "../images/People - FACe.jpg";
import People2 from "../images/People-OPPP.jpg";
import People3 from "../images/People-PACe.jpg";
import People4 from "../images/People-Talent.jpg";
import Strategy1 from "../images/Strategy-7Strata.jpg";
import Strategy2 from "../images/Strategy-Brand Promise.jpg";
import Strategy3 from "../images/Strategy-Vision.jpg";
import Strategy4 from "../images/Strategy-SWT.jpg";
import Execution1 from "../images/Execution-WWW.jpg";
import Execution2 from "../images/Execution- Rockefeller.jpg";
import Cash1 from "../images/Cash-CASh.jpg";
import Cash2 from "../images/Cash-POO.jpg";
import "../toolDetail.css";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import Toast from "@/components/Toast";
import Spinner from 'react-bootstrap/Spinner';
import { useRouter } from 'next/navigation';
// import { useRouter } from "next/router";

const detailsMap = [
  {
    category: "people",
    image: People1,
    slugName: "function-accountability-chart",
    title: "FACe - Function Accountability Chart",
    desc: "",
    file : "People-FACe-FunctionAccountabilityChart.pdf"
  },
  {
    category: "people",
    image: People2,
    slugName: "one-page-personal-plan",
    title: "OPPP - One Page Personal Plan",
    desc: "",
    file : "People-OPPP-OnePagePersonalPlan.pdf"
  },
  {
    category: "people",
    image: People3,
    slugName: "process-accountability-chart",
    title: "PACe - Process Accountability Chart",
    desc: "",
    file : "People-FACe-FunctionAccountabilityChart.pdf"
  },
  {
    category: "people",
    image: People4,
    slugName: "talent-assessment-chart",
    title: "Talent - Talent Assessment Chart",
    desc: "",
    file : "People-TalentAssessmentChart.pdf"
  },
  {
    category: "strategy",
    image: Strategy1,
    slugName: "7-strata",
    title: "Strategy - 7 Strata",
    desc: "",
    file : "Strategy-7Strata.pdf"
  },
  {
    category: "strategy",
    image: Strategy2,
    slugName: "brand-promise",
    title: "Strategy - Brand Promise",
    desc: "",
    file : "Strategy-BrandPromise.pdf"
  },
  {
    category: "strategy",
    image: Strategy3,
    slugName: "one-page-strategic-plan",
    title: "OPSP - One Page Strategic Plan",
    desc: "",
    file : "Strategy-OPSP-OnePageStrategicPlan.pdf"
  },
  {
    category: "strategy",
    image: Strategy4,
    slugName: "strengths-weaknesses-trends",
    title: "SWT - Strengths Weaknesses Trends",
    desc: "",
    file : "Strategy-SWT-StrengthsWeaknessesTrends.pdf"
  },
  {
    category: "execution",
    image: Execution1,
    slugName: "who-what-when",
    title: "WWW - Who What When",
    desc: "",
    file : "Execution-WWW-WhoWhatWhen.pdf"
  },
  {
    category: "execution",
    image: Execution2,
    slugName: "rockefeller-habits-checklist",
    title: "Execution - Rockefeller Habits Checklist",
    desc: "Execution-RockefellerHabitsChecklist.pdf",
  },
  {
    category: "cash",
    image: Cash1,
    slugName: "cash-acceleration-strategies",
    title: "CASh - Cash Acceleration Strategies",
    desc: "",
    file : "Cash-CASh-CashAccelerationStrategies.pdf"
  },
  {
    category: "cash",
    image: Cash2,
    slugName: "the-power-of-one",
    title: "POO - The Power of One",
    desc: "",
    file : "Cash-POO-ThePowerofOne.pdf"
  },
];
export default function Page() {
  const params = useParams();
  const slug = params.slug;
  const [selected, setSelected] = useState<any>(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const selectedObj = detailsMap.find((item) => item.slugName === slug);
    setSelected(selectedObj);
  }, [slug]);

  const onSubmit = async (data: any) => {
      setShowSpinner(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL + "/toolkit"; // Replace with your API URL
      const postData: any = data;
      const downloadUrl = process.env.NEXT_PUBLIC_BASE_PATH + '/assets/images/PDF/'+ selected?.file;
      console.log("downloadUrl", downloadUrl);
     
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
        Toast.success("Your request for toolkit download has been registered! You can download now.");
        setShowSpinner(false);
        //console.log("selected", selected);
        // const link = document.createElement('a');
        // link.href = downloadUrl;
        // link.download = selected?.file; // Suggests the filename
        // document.body.appendChild(link);
        // link.click();
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', selected?.file || 'downloaded-file');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // setTimeout(() => {
        //   router.push("/toolDetail"); // Redirect to the home page after 2 seconds  
        // }, 2000);
  
        //setResponseData(data);
      } catch (error) {
        console.error("Error:", error);
        Toast.error("An error occurred while submitting the form.");
      }
    };
    console.log("errors", errors);
  return (
    <>
      {selected && (
        <div
          className={`second_div_layout ${
            selected?.category === "people"
              ? "gradient_bg_1"
              : selected?.category === "strategy"
              ? "gradient_bg_2"
              : selected?.category === "execution"
              ? "gradient_bg_3"
              : selected?.category === "cash"
              ? "gradient_bg_4"
              : ""
          }`}
        >
          <div className="mb-4">
            <h2 className="heading text-center">{selected?.title}</h2>
            <p className="subText text-center">{selected?.desc}</p>
          </div>
          <div
            style={{ height: "300px", display: "flex", flexDirection: "row" }}
          >
            <Image
              src={selected?.image}
              alt="case1"
              className="toolkit-img img-fluid"
            />
            <div
              className="d-flex justify-content-between flex-column"
              style={{ width: "70%", padding: "16px" }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex justify-content-between">
                <div style={{ width: "50%" }}>
                  <div className="form-floating m-3">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
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
                  <div className="form-floating m-3 mt-5">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
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
                </div>
                <div style={{ width: "50%" }}>
                  <div className="form-floating m-3">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      id="phone"
                      placeholder="Phone"
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
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
                  <div className="form-floating m-3 mt-5">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.company ? "is-invalid" : ""
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
                </div>
              </div>
               
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >

                {showSpinner && <Spinner animation="border" variant="warning" style={{marginRight : '20px', marginTop : '20px'}} />} &nbsp;
               
                <button
                type="submit"
                  style={{
                    width: 350,
                    backgroundColor:
                      selected?.category === "people"
                        ? "#ED9E3F"
                        : selected?.category === "strategy"
                        ? "#0184D4"
                        : selected?.category === "execution"
                        ? "#7D5C39"
                        : selected?.category === "cash"
                        ? "#86BE41"
                        : "",
                  }}
                  className="py-3 btn_div"
                >
                  Download
                </button>
                 
              </div>
              </form>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}
