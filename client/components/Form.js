import React, { useRef } from "react";
import Input from "./shared/Input";
import { FaGreaterThan } from "react-icons/fa";
import { useSelector } from "react-redux";
import Link from "next/link";
import { linkSite } from "./linkSite";

const Form = (props) => {
  const themeMode = useSelector((state) => state.theme.theme);
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(nameRef.current.value);
    const data = await fetch(`${linkSite}admin/postData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        name: nameRef.current.value,
      }),
    });
    const response = await data.json();
    console.log(response);
  };

  const emailRef = useRef();
  const nameRef = useRef();

  return (
    <form
      className={`w-full  mx-auto md:px-[48px] md:pb-10 ${
        themeMode === "light" ? "bg-white" : "bg-[#1C2534]"
      } p-4 md:relative`}
      onSubmit={formSubmitHandler}
    >
      <div className="mb-4">
        <Input
          htmlfor="name"
          type="text"
          id="name"
          placeholder="Name"
          label="Name"
          ref={nameRef}
        />
      </div>
      <div className="mb-4">
        <Input
          label="Email*"
          htmlfor="email"
          type="email"
          id="email"
          placeholder="Email"
          ref={emailRef}
        />
        <p
          className={`${
            themeMode === "light" ? "text-[#5F6D7E]" : "text-[#A5ACBA]"
          } font-normal text-[14px]`}
        >
          Please input a real Email Address
        </p>
      </div>
      <div className="md:flex md:flex-row justify-around">
        <div className="mb-4 md:w-full">
          <Input
            label="Password"
            htmlfor="password"
            type="password"
            id="password"
            placeholder="********"
          />
        </div>
        <div className="mb-4 md:w-full">
          <Input
            label="Confirm-password"
            htmlfor="confirm-password"
            type="password"
            id="confirm-password"
            placeholder="********"
          />
          <p
            className={`${
              themeMode === "light" ? "text-[#5F6D7E]" : "text-[#A5ACBA]"
            } font-normal text-[14px]`}
          >
            Passwords need to match
          </p>
        </div>
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className={`ml-2 text-[15px] font-medium ${
            themeMode === "light" ? "" : "text-[#A5ACBA]"
          } font-normal text-[14px]`}
        >
          I accept the Terms and Privacy Policy
        </label>
      </div>
      <div className="md:inline-block">
        <Link
          href="/admin"
          className="w-full bg-[#437EF7] text-white text-[15px] font-medium py-2 px-4 rounded-md transition duration-300 h-[46px] md:absolute md:bottom-4 md:left-10 md:w-[110px] text-center"
          type="submit"
        >
          Admin
        </Link>
        <button
          className="w-full bg-[#437EF7] text-white text-[15px] font-medium py-2 px-4 rounded-md transition duration-300 h-[46px] md:absolute md:bottom-4 md:right-10 md:w-[100px]"
          type="submit"
        >
          {props.buttonText || "Next"}
          <span className="inline-flex align-items-center">
            <FaGreaterThan className="ml-3" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default Form;
