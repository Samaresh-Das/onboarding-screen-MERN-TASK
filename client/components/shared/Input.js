/* eslint-disable */
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const Input = React.forwardRef(
  ({ type, id, placeholder, htmlfor, label }, ref) => {
    const themeMode = useSelector((state) => state.theme.theme);
    return (
      <Fragment>
        <label
          className={`block ${
            themeMode === "light" ? "text-gray-700" : "text-white"
          } text-[15px] font-medium mb-2`}
          htmlFor={htmlfor}
        >
          {label}
        </label>
        <input
          ref={ref}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 ${
            themeMode === "dark" && "bg-[#2E3545] border-0"
          } ${type === "password" ? " md:w-[97%] lg:w-[320px]" : "w-full"}`}
          type={type}
          id={id}
          placeholder={placeholder}
        />
      </Fragment>
    );
  }
);

export default Input;
