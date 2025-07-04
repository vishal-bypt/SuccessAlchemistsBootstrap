"use client";
import Image from "next/image";
import "./contactus.css";
import { useForm } from "react-hook-form";
import Toast from "../../components/Toast";
import { useRouter } from 'next/navigation';

import curveShape2 from "../../../public/assets/images/Curve-shape2.svg";

const ContactUs = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const noOnlySpaces = {
    value: /^(?!\s*$).+/,
    message: "Invalid input: Cannot be empty or contain only spaces",
  };

  const onSubmit = async(data: any) => {
    //console.log("BASE URL", process.env.NEXT_PUBLIC_API_URL);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL+"/contact"; // Replace with your API URL
    const postData:any = data;

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
      Toast.success("Your enquiry has been submitted successfully!");
      // setTimeout(() => {
      //   router.push("/"); // Redirect to the home page after 2 seconds  
      // }, 2000);
      
      //setResponseData(data);
    } catch (error) {
      console.error("Error:", error);
      Toast.error("An error occurred while submitting the form.");
    }
  };
  return (
    <div className="main_body_div">
      <div className="first_div_layout contactUs">
        <div className="main_first_div_body">
          <div className="innerContainer">
            <p
              className="heading"
              style={{ color: "white", textAlign: "left" }}
            >
              Contact us
            </p>
            <p
              className="subText"
              style={{ color: "white", textAlign: "left" }}
            >
              Contact us to learn more or to schedule a discovery call on how
              Scaling Up can transform your business.
            </p>
          </div>
        </div>
      </div>

      <div className="second_div_layout">
        <Image
          src={curveShape2}
          alt="curve1"
          className="curve-contact img-fluid"
        />
        <div className="third_div_layout contact-div shadow-lg">
          {/* <Image src={curve1} alt="curve1" className="image3 img-fluid" /> */}

          <form onSubmit={handleSubmit(onSubmit)} className="w-100">
            <p className="heading" style={{ color: "white" }}>
              Schedule a conversation
            </p>
            <div className="row row-gap mt-4">
              <div className="col-md-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    placeholder="Name"
                    {...register("name", {
                      required: "Name is required",
                      pattern: noOnlySpaces,
                    })}
                  />
                  <label htmlFor="name">Name</label>
                  {errors.name && (
                    <div className="invalid-feedback">
                      {String(errors.name.message)}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-floating">
                  <input
                    type="email"
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

              <div className="col-md-4">
                <div className="form-floating">
                  <input
                    type="tel"
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    id="phone"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid phone number",
                      },
                      validate: (value) =>
                        noOnlySpaces.value.test(value) || noOnlySpaces.message,
                    })}
                  />
                  <label htmlFor="phone">Phone number</label>
                  {errors.phone && (
                    <div className="invalid-feedback">
                      {String(errors.phone.message)}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-floating">
                  <textarea
                    className={`form-control contact-textarea ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    id="message"
                    placeholder="Leave a comment here"
                    {...register("message", {
                      required: "Message is required",
                      pattern: noOnlySpaces,
                    })}
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  {errors.message && (
                    <div className="invalid-feedback">
                      {String(errors.message.message)}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="submit-btn-div">
              <button
                type="submit"
                className="btnstyle btn-submit"
              >
                SEND NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
