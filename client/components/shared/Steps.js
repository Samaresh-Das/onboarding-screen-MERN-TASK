import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const Steps = (props) => {
  const themeMode = useSelector((state) => state.theme.theme);
  return (
    <Fragment>
      <div className="flex-1">
        <div
          className={`w-10 h-10  mx-auto border-2  rounded-full text-lg flex items-center ${props.className}`}
        >
          <span className="text-center w-full">{props.component}</span>
        </div>
        <p
          className={`text-center font-semibold text-[15px] ${
            themeMode === "dark" ? "text-white" : "text-black"
          }`}
        >
          {props.text}
        </p>
      </div>
    </Fragment>
  );
};

export default Steps;
