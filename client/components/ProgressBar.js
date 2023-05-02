import React from "react";
import { FiLock } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from "react-redux";
import Hr from "./shared/Hr";
import Steps from "./shared/Steps";

const ProgressBar = () => {
  const themeMode = useSelector((state) => state.theme.theme);
  return (
    // <div className="max-w-xl mx-auto my-4 pb-4 bg-[#FAFBFC]">
    <div
      className={`w-full mx-auto rounded-t-lg pb-4 ${
        themeMode === "light" ? "bg-[#FAFBFC]" : "bg-[#252D3C]"
      } `}
    >
      <div className="flex py-[12px] mx-4">
        <Steps
          component={<FiLock className="mx-auto text-[#437EF7]" />}
          text="Account"
          className="border-[#437EF7]"
        />

        <Hr passed="done" />

        <Steps
          component={
            <RxPerson
              className={`mx-auto ${
                themeMode === "light" ? "text-black" : "text-white"
              } `}
            />
          }
          text="Personal"
          className="border-gray-300"
        />

        <Hr />

        <Steps
          component={
            <BsCurrencyDollar
              className={`mx-auto ${
                themeMode === "light" ? "text-black" : "text-white"
              } `}
            />
          }
          text="Billing"
        />

        <Hr />

        <Steps
          component={
            <AiOutlineLike
              className={`mx-auto ${
                themeMode === "light" ? "text-black" : "text-white"
              } `}
            />
          }
          text="Done"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
