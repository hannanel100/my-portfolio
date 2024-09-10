"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const sendEmailToApi = async (data: any) => {
  let response = await axios.post("/api/contact", data);
  return response;
};

const ContactForm = () => {
  const {
    mutate: sendEmail,
    isError,
    isLoading,
  } = useMutation({
    mutationFn: sendEmailToApi,
    onSuccess: () => {
      console.log("success");
      setEmail("");
      setFullname("");
      setSubject("");
      setMessage("");
    },
    onError: () => {
      console.log("error");
    },
  });

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fullname, email, subject, message);
    sendEmail({
      fullname,
      email,
      subject,
      message,
    });
  };

  return (
    <>
      <form className="mb-8 flex flex-col rounded-lg" onSubmit={handleSubmit}>
        <label htmlFor="fullname" className="mt-8 font-light text-gray-50">
          Full name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="fullname"
          className="rounded-lg border border-b border-teal-500 border-opacity-40 bg-transparent py-2 pl-4 font-light text-gray-500 focus:rounded-md focus:border-none focus:outline-none focus:ring-1 focus:ring-orange-300"
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          value={fullname}
        />

        <label htmlFor="email" className="mt-4 font-light text-gray-50">
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          className="rounded-lg border border-b border-teal-500 border-opacity-40 bg-transparent py-2 pl-4 font-light text-gray-500 focus:rounded-md focus:border-none focus:outline-none focus:ring-1 focus:ring-orange-300"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />

        <label htmlFor="subject" className="mt-4 font-light text-gray-50">
          Subject<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          className="rounded-lg border border-b border-teal-500 border-opacity-40 bg-transparent py-2 pl-4 font-light text-gray-500 focus:rounded-md focus:border-none focus:outline-none focus:ring-1 focus:ring-orange-300"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          value={subject}
        />

        <label htmlFor="message" className="mt-4 font-light text-gray-50">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          className="rounded-lg border border-b border-teal-500 border-opacity-40 bg-transparent py-2 pl-4 font-light text-gray-500 focus:rounded-md focus:border-none focus:outline-none focus:ring-1 focus:ring-orange-300"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        ></textarea>
        <div className="flex flex-row items-center justify-start">
          <button className="mt-8 flex w-40 flex-row items-center justify-between rounded-md bg-orange-500  py-2 text-lg font-light text-gray-50 shadow-sm shadow-orange-400">
            {!isLoading && !isError && (
              <span className="mx-auto flex items-center">
                Send
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="ml-2  "
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            )}
            {isLoading && (
              <span className="mx-auto flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="ml-2 animate-slideRight "
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            )}
            {isError && (
              <span className="mx-auto flex items-end justify-around">
                <span className=" w-16 animate-pulse text-xs">Try Again</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="ml-2 animate-crash"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="smoke-container">
                  <svg width="80px" height="24px" viewBox="0 0 31 73">
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        className="smokes"
                        transform="translate(2.000000, 2.000000)"
                        stroke="#ffffff"
                        strokeWidth="5"
                      >
                        <g className="smoke-1">
                          <path
                            id="Shape1"
                            d="M0.5,8.8817842e-16 C0.5,8.8817842e-16 3.5,5.875 3.5,11.75 C3.5,17.625 0.5,17.625 0.5,23.5 C0.5,29.375 3.5,29.375 3.5,35.25 C3.5,41.125 0.5,41.125 0.5,47"
                          ></path>
                        </g>
                        <g className="smoke-2">
                          <path
                            id="Shape2"
                            d="M0.5,8.8817842e-16 C0.5,8.8817842e-16 3.5,5.875 3.5,11.75 C3.5,17.625 0.5,17.625 0.5,23.5 C0.5,29.375 3.5,29.375 3.5,35.25 C3.5,41.125 0.5,41.125 0.5,47"
                          ></path>
                        </g>
                        <g className="smoke-3">
                          <path
                            id="Shape3"
                            d="M0.5,8.8817842e-16 C0.5,8.8817842e-16 3.5,5.875 3.5,11.75 C3.5,17.625 0.5,17.625 0.5,23.5 C0.5,29.375 3.5,29.375 3.5,35.25 C3.5,41.125 0.5,41.125 0.5,47"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </span>
            )}
          </button>
        </div>
      </form>
      <p>
        or email me at:{" "}
        <button
          onClick={() => (window.location.href = "mailto:me@hannanel.dev")}
        >
          me@hannanel.dev
        </button>
      </p>
    </>
  );
};

export default ContactForm;
