"use client";
import React, { useEffect, useState } from "react";
import { Dialog } from "@material-tailwind/react";
import Logo from "../../../public/assets/images/nav_logo.png";
import Image from "next/image";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Checkbox } from "@material-tailwind/react";
import authApi from "../../api/auth";
import axios from "axios";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  checkForMembership: boolean;
};

const RegistrationForm = () => {
  const [open, setOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      checkForMembership: false,
    },
  });

  useEffect(() => {
    if (!open) {
      reset();
      setFormSubmitted(false);
      setIsLoading(false);
    }
  }, [open, reset]);

  const handleOpen = () => setOpen(!open);

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await authApi.register(data);
      console.log(response, ' ":: this is api response');
      setFormSubmitted(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response?.data.code === 400 &&
          error.response?.data.message === "Email already taken"
        ) {
          setIsEmailExist(true);
        }
      }
      alert(error)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        style={{ backgroundColor: "#0D9A73" }}
        className="font-barlow rounded-md md:2xl:rounded-lg 2xl:rounded-xl py-1 sm:py-2 xl:py-3 px-4 xl:px-6 3xl:px-8 font-bold text-md sm:text-lg md:text-xl xl:text-2xl 2xl:text-2xl text-[white]"
        onClick={handleOpen}
      >
        Join waiting list
      </button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="!p-10 items-center flex justify-center flex-col max-h-[90%] relative overflow-auto"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <path d="M1 1L16 16" stroke="black" />
          <path d="M1 16L16 1" stroke="black" />
        </svg>
        {isLoading && (
          <div className="h-full w-full opacity-50 bg-gray-500 absolute flex justify-center items-center">
            <div className="w-10 h-10 border-4 border-[#0D9A73] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <div className="mb-6 md:mb-7 xl:md-10">
          <Image
            src={Logo}
            alt="Logo"
            style={{ aspectRatio: "2.9" }}
            className="mb-4 md:mb-8 w-[150px] xl:w-[212px]"
          />
          <p
            className="text-lg font-bold font-barlow text-center"
            style={{ color: "#212121" }}
          >
            {!formSubmitted ? "Join Waiting List" : "Thank you for joining us."}
          </p>
        </div>
        {!formSubmitted && (
          <>
            <div className="w-full mb-8">
              <div className="mb-4">
                <p
                  className="mb-2 font-semibold text-sm font-barlow"
                  style={{ color: "#434343" }}
                >
                  First Name
                </p>
                <Controller
                  control={control}
                  name="firstName"
                  rules={{ required: "Please enter first name." }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <input
                        className="w-full rounded-lg h-10 font-normal text-sm font-barlow pl-4 placeholder:text-sm placeholder:text-[#434343]"
                        style={{
                          border: "1px solid #E0E0E0",
                          color: "#212121",
                        }}
                        value={value}
                        onChange={(event) => onChange(event.target.value.replace(/^[\s]+|[^A-Za-z\s]/g, ""))}
                        placeholder="Enter First Name"
                      />
                      {errors.firstName && (
                        <p className="font-medium text-sm font-barlow text-red-500">
                          {errors.firstName.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="mb-4">
                <p
                  className="mb-2 font-semibold text-sm font-barlow"
                  style={{ color: "#434343" }}
                >
                  Last Name
                </p>
                <Controller
                  control={control}
                  name="lastName"
                  rules={{ required: "Please enter last name." }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <input
                        className="w-full rounded-lg h-10 font-normal text-sm font-barlow pl-4 placeholder:text-sm placeholder:text-[#434343]"
                        style={{
                          border: "1px solid #E0E0E0",
                          color: "#212121",
                        }}
                        value={value}
                        onChange={(event) => onChange(event.target.value.replace(/^[\s]+|[^A-Za-z\s]/g, ""))}
                        placeholder="Enter Last Name"
                      />
                      {errors.lastName && (
                        <p className="font-medium text-sm font-barlow text-red-500">
                          {errors.lastName.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="mb-4">
                <p
                  className="mb-2 font-semibold text-sm font-barlow"
                  style={{ color: "#434343" }}
                >
                  Email ID
                </p>
                <Controller
                  control={control}
                  name="email"
                  rules={{
                    required: "Please enter email.",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Please enter valid email.",
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <input
                        className="w-full rounded-lg h-10 font-normal text-sm font-barlow pl-4 placeholder:text-sm placeholder:text-[#434343]"
                        style={{
                          border: "1px solid #E0E0E0",
                          color: "#212121",
                        }}
                        value={value}
                        onChange={(event) => {
                          setIsEmailExist(false)
                          onChange(event.target.value.replace(/\s/g, ""));
                        }}
                        placeholder="Enter Email ID"
                      />
                      {errors.email && (
                        <p className="font-medium text-sm font-barlow text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                      {isEmailExist && (
                        <p className="font-medium text-sm font-barlow text-red-500">
                          Email already exist.
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <div>
                <Controller
                  control={control}
                  name="checkForMembership"
                  rules={{
                    required: "Please tick this check box.",
                  }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <div className="flex items-center gap-2 p-0">
                        <Checkbox
                          crossOrigin={""}
                          color="green"
                          checked={value}
                          onChange={(event) => onChange(event.target.checked)}
                          ripple={false}
                          className="h-6 w-6"
                          containerProps={{ className: "!p-0" }}
                        />
                        <span className="text-sm font-normal font-barlow text-black">
                          Tick the box to help test our beta version and receive
                          1-year free membership.
                        </span>
                      </div>
                      {errors.checkForMembership && (
                        <p className="font-medium text-sm font-barlow text-red-500">
                          {errors.checkForMembership.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
            <button
              className="w-full rounded-lg text-white font-bold text-lg py-2 mb-8 font-barlow"
              style={{ backgroundColor: "#0D9A73" }}
              onClick={handleSubmit(onSubmit)}
            >
              JOIN US
            </button>
          </>
        )}
      </Dialog>
    </>
  );
};

export default RegistrationForm;
