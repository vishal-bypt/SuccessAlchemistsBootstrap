"use client"
import Image from "next/image";
import React from "react";
import People1 from "../images/People - FACe.jpg";
import "../toolDetail.css";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const map = [
    {
      image: People1,
      slugName: 'Function-Accountability-Chart',
      pdfLink: ''
    }
  ]
  return (
    <>
      <div className="second_div_layout">
        <div className="mb-4">
          <h2 className="heading text-center">FACe</h2>
          <p className="subText text-center">Function Accountability Chart</p>
        </div>
        <div style={{ height: "360px", display: "flex", flexDirection: "row" }}>
          <Image src={People1} alt="case1" className="toolkit-img img-fluid" />
          <div className="d-flex justify-content-between flex-column" style={{ width: "50%", padding: "16px" }}>
            <div>
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
                className={`form-control ${errors.name ? "is-invalid" : ""
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
                className={`form-control ${errors.name ? "is-invalid" : ""
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
                className={`form-control ${errors.name ? "is-invalid" : ""
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
            <Button style={{maxWidth: 200}}>
                Download
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
