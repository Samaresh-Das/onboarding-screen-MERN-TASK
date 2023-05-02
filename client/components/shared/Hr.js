import React from "react";
import { useSelector } from "react-redux";

const Hr = ({ passed }) => {
  const themeMode = useSelector((state) => state.theme.theme);
  return (
    <div
      className={`${
        themeMode === "dark" && !passed ? "invisible" : "visible "
      } w-1/6 align-center items-center align-top content-center flex `}
    >
      <div className="w-[99%] bg-[#437EF7] rounded items-center align-middle align-center flex-1  ">
        <hr className="dots text-gray-300" />
      </div>
    </div>
  );
};

export default Hr;
