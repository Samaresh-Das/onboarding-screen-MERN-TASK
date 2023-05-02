import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import lookscoutDark from "../Assets/Lookscout.png";
import lookscoutWhite from "../Assets/LookscoutWhite.png";
import ProgressBar from "./ProgressBar";
import Form from "./Form";
import { useSelector } from "react-redux";
import { linkSite } from "./linkSite";

const Onboarding = () => {
  const themeMode = useSelector((state) => state.theme.theme);

  const [bannerUrl, setBannerUrl] = useState("");
  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    const getBannerPhoto = async () => {
      const response = await fetch(`${linkSite}admin/adminData`);
      const data = await response.json();
      console.log(data);
      setBannerUrl(data.fileUrl);
      setButtonText(data.buttonText);
    };
    getBannerPhoto();
  }, []);
  return (
    <Fragment>
      <div className="mx-3">
        {themeMode === "light" ? (
          <Image
            src={bannerUrl}
            alt="Comapny logo"
            className="mx-auto mt-[48px] mb-[30px]"
            height={200}
            width={200}
          />
        ) : (
          <Image
            src={bannerUrl}
            alt="Comapny logo"
            className="mx-auto mt-[48px] mb-[30px]"
            height={200}
            width={200}
          />
        )}
      </div>
      <div
        className={`mx-3 md:w-[92%] xl:w-[750px] md:mx-auto   ${
          themeMode === "light"
            ? "border-2 border-[#DAE0E6] rounded-lg"
            : "border-0 "
        } rounded-lg md:relative`}
      >
        <ProgressBar />
        <Form buttonText={buttonText} />
      </div>
    </Fragment>
  );
};

export default Onboarding;
