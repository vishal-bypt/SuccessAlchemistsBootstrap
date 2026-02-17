"use client";
import Image from "next/image";
import { memo, useState, useEffect } from "react";
import "./contactus.css";
import { useForm } from "react-hook-form";
import Toast from "../../components/Toast";
import { useRouter } from 'next/navigation';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import curveShape2 from "../../../public/assets/images/Curve-shape2.svg";

const ContactUs = memo(() => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const noOnlySpaces = {
    value: /^(?!\s*$).+/,
    message: "Invalid input: Cannot be empty or contain only spaces",
  };

  useEffect(() => {
    if (executeRecaptcha) {
      setRecaptchaReady(true);
    }
  }, [executeRecaptcha]);

  const onSubmit = async (formData: any) => {
    if (!executeRecaptcha) {
      return Toast.error("Security verification is not ready. Please try again.");
    }

    if (formData.website?.trim()) {
      return Toast.error("Spam detected.");
    }

    try {
      const recaptchaToken = await executeRecaptcha("contact_form");

      if (!recaptchaToken) {
        return Toast.error("Security verification failed. Please try again.");
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, recaptchaToken }),
        }
      );

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        //throw new Error(result?.message || "Failed to submit the form.");
        return Toast.error(result?.message || "Failed to submit the form.");
      }

      if (!result?.success) {
        return Toast.error(result?.message || "Submission failed.");
      }

      reset();
      Toast.success("Your enquiry has been submitted successfully!");

    } catch (error: any) {
      console.error("Contact form submission error:", error);
      Toast.error(error.message || "Something went wrong. Please try again later.");
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
                    className={`form-control ${errors.name ? "is-invalid" : ""
                      }`}
                    id="name"
                    placeholder="Name"
                    {...register("name", {
                      required: "Name is required",
                      pattern: noOnlySpaces,
                    })}
                  />
                  <label htmlFor="name">Name <span className="text-danger">*</span></label>
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
                  <label htmlFor="email">Email <span className="text-danger">*</span></label>
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
                    className={`form-control ${errors.phone ? "is-invalid" : ""
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
                  <label htmlFor="phone">Phone number <span className="text-danger">*</span></label>
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
                    className={`form-control contact-textarea ${errors.message ? "is-invalid" : ""
                      }`}
                    id="message"
                    placeholder="Leave a comment here"
                    {...register("message", {
                      required: "Message is required",
                      pattern: noOnlySpaces,
                    })}
                  ></textarea>
                  <label htmlFor="message">Message <span className="text-danger">*</span></label>
                  {errors.message && (
                    <div className="invalid-feedback">
                      {String(errors.message.message)}
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  {...register("website")}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <input type="hidden" {...register("formLoadTime", { value: Date.now().toString() })} />
              </div>
            </div>

            <div className="submit-btn-div">
              <button
                type="submit"
                className="btnstyle btn-submit"
                disabled={!recaptchaReady || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : recaptchaReady ? "SEND NOW" : "Loading..."}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default ContactUs;
