import Onboarding from "../components/Onboarding";
import { Fragment, useEffect } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../store/theme";

export default function Home() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.theme);

  const darkThemeToggler = () => {
    if (themeMode === "light") {
      dispatch(themeActions.dark("dark"));
    }
    console.log(themeMode);
  };
  const lightThemeToggler = () => {
    if (themeMode === "dark") {
      dispatch(themeActions.light("light"));
    }
    console.log(themeMode);
  };

  useEffect(() => {
    if (themeMode === "light") {
      document.body.style.backgroundColor = "white";
    } else if (themeMode === "dark") {
      document.body.style.backgroundColor = "#151B28";
    }
  }, [themeMode]);
  return (
    <Fragment>
      {themeMode === "dark" && (
        <button
          className="d-inline mx-2 bg-dark  text-light"
          style={{
            border: "none",
            borderRadius: "50%",
            fontSize: "20px",
          }}
          onClick={lightThemeToggler}
        >
          <MdOutlineDarkMode className="absolute right-0 top-0 text-[40px] text-white" />
        </button>
      )}
      {themeMode === "light" && (
        <button
          className="d-inline mx-2 bg-light"
          style={{
            border: "none",
            fontSize: "20px",
            borderRadius: "50%",
          }}
          onClick={darkThemeToggler}
        >
          <MdDarkMode className="absolute right-0 top-0 text-[40px] " />
        </button>
      )}
      <div>
        <Onboarding />
      </div>
    </Fragment>
  );
}
