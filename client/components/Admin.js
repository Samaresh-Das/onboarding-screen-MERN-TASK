import React, { Fragment, useEffect, useRef, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useSelector } from "react-redux";
import Image from "next/image";
import { linkSite } from "./linkSite";
import Link from "next/link";
import Input from "./shared/Input";
import lookscoutDark from "../Assets/Lookscout.png";
import Table from "./shared/Table";

const Admin = () => {
  const [isValid, setIsValid] = useState(false);
  const [file, setFile] = useState();
  const [bannerUrl, setBannerUrl] = useState("");
  const buttonRef = useRef();

  useEffect(() => {
    const getBannerPhoto = async () => {
      const response = await fetch(`${linkSite}admin/adminData`);
      const data = await response.json();
      console.log(data);
      setBannerUrl(data.fileUrl);
    };
    getBannerPhoto();
  }, []);

  const themeMode = useSelector((state) => state.theme.theme);
  const filePickerRef = useRef();
  const pickedHandler = (e) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setFile(false);
      // eslint-disable-next-line
      fileIsValid = false;
    }
  };

  const formSubmitHandler = async (event) => {
    console.log(buttonRef.current.value);
    event.preventDefault();
    const formData = new FormData();
    formData.append("buttonText", buttonRef.current.value);
    if (file) {
      formData.append("image", file);
    }
    const response = await fetch(`${linkSite}admin/updateForm`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    // window.location.reload();
  };

  const handleClick = () => {
    //to reload the window
    formSubmitHandler().then(() => {
      window.location.reload();
    });
  };
  return (
    <Fragment>
      <form
        className={`w-[40%]  mx-auto md:px-[48px] md:pb-10 ${
          themeMode === "light" ? "bg-white" : "bg-[#1C2534]"
        } p-4 md:relative`}
        onSubmit={formSubmitHandler}
      >
        <div className="mb-4">
          <input
            type="file"
            ref={filePickerRef}
            // style={{ display: "none" }}
            accept=".jpg, .png, .jpeg"
            onChange={pickedHandler}
          />
          <Image
            //   src={previewUrl ? previewUrl : user.profilePicture}
            src={bannerUrl}
            width={400}
            height={400}
            alt=""
            className="object-contain mx-auto rounded-full mt-[30px] md:mt-0"
          />
          <Input
            label="Button Text"
            htmlfor="text"
            type="text"
            id="text"
            placeholder="Button Text"
            ref={buttonRef}
          />
        </div>

        <div className="md:inline-block">
          <Link
            href="/"
            className="w-full bg-[#437EF7] text-white text-[15px] font-medium py-2 px-4 rounded-md transition duration-300 h-[46px] md:absolute md:bottom-4 md:left-10 md:w-[110px]"
            type="button"
          >
            <span className="inline-flex align-items-center">
              <FaLessThan className="ml-3" />
            </span>
            Home
          </Link>
          <button
            className="w-full bg-[#437EF7] text-white text-[15px] font-medium py-2 px-4 rounded-md transition duration-300 h-[46px] md:absolute md:bottom-4 md:right-10 md:w-[100px] text-center"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
      <Table />
    </Fragment>
  );
};

export default Admin;
