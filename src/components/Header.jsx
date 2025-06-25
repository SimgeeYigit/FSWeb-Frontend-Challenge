import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, changeMode } from "../store/actions/actions";
import useLocalStorage from "../hooks/useLocalStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const { content, language, mode } = useSelector((store) => store);
  const [storedLanguage, setStoredLanguage] = useLocalStorage(
    "language",
    language
  );
  const [storedMode, setStoredMode] = useLocalStorage("mode", mode);

  const data = content.navbarSection;
  const dispatch = useDispatch();

  useEffect(() => {
    if (storedLanguage !== language) {
      setStoredLanguage(language);
    }
  }, [language, storedLanguage, setStoredLanguage]);

  useEffect(() => {
    if (storedMode !== mode) {
      setStoredMode(mode);
    }
  }, [mode, storedMode, setStoredMode]);

  useEffect(() => {
    if (storedLanguage && storedLanguage !== language) {
      dispatch(changeLanguage());
    }
    if (storedMode && storedMode !== mode) {
      dispatch(changeMode());
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const notifymode = () => {
    const messageTr =
      mode === "dark" ? "Aydınlık moda geçildi!" : "Karanlık moda geçildi!";
    const messageEn =
      mode === "dark" ? "Switched to light mode!" : "Switched to dark mode!";
    const bgColor = mode === "dark" ? "#" : "#333333";
    const textColor = mode === "dark" ? "#000000" : "#ffffff";

    toast.success(language === "tr" ? messageTr : messageEn, {
      style: {
        background: bgColor,
        color: textColor,
      },
    });
  };
  const notifylang = () => {
    const message =
      language === "tr" ? "Switch to English!" : "Türkçe diline çevrildi!";
    const bgColor = mode === "dark" ? "#333333" : "#ffffff";
    const textColor = mode === "dark" ? "#ffffff" : "#000000";

    toast.success(message, {
      style: {
        background: bgColor,
        color: textColor,
      },
    });
  };

  return (
    <header className="pt-4 pr-[10rem] pb-20 pl-[10rem]">
      <div className="text-[#777777] font-bold flex justify-end pb-10 items-center gap-4 ">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            data-testid="darkMode-toggle"
            checked={mode === "dark"}
            onChange={() => dispatch(changeMode())}
            onClick={notifymode}
          />
          <div
            className={`w-[55px] h-[24px] rounded-full p-[2px] relative transition-all duration-500 transform -rotate-180 ${
              mode === "dark" ? "bg-[#3A3A3A]" : "bg-[#4731D3]"
            }`}
          >
            <span
              className={`absolute top-[4px] left-[5px] w-[16px] h-[16px] rounded-full bg-[#FFE86E] shadow-md transform transition-all duration-500 flex items-center justify-center
                ${mode === "dark" ? "translate-x-[27px]" : "translate-x-0"}`}
            >
              {mode === "dark" && (
                <span className="absolute w-[16px] h-[16px] rounded-full bg-[#3A3A3A] -left-[7px] top-0"></span>
              )}
            </span>
          </div>
        </label>
        <p className="dark:text-[#D9D9D9]">
          {mode === "dark" ? data.mode.dark : data.mode.light}
        </p>
        <p className="px-4">|</p>
        <p
          onClick={() => {
            notifylang();
            dispatch(changeLanguage());
          }}
          className="cursor-pointer"
        >
          {language === "tr" ? (
            <>
              <span className="dark:text-[#777777]">{data.title.rest}</span>{" "}
              <span className="text-[#4731D3] dark:text-[#CFCBFF]">
                {data.title.highlight}
              </span>
            </>
          ) : (
            <>
              <span className="text-[#4731D3] dark:text-[#CFCBFF]">
                {data.title.highlight}
              </span>
              <span className="dark:text-[#777777]">{data.title.rest}</span>
            </>
          )}
        </p>
      </div>
      <nav className="flex font-inter items-center justify-between">
        <p className="text-2xl text-[#7B61FF] bg-[#EEEBFF] w-[64px] h-[64px] rounded-full flex items-center justify-center dark:bg-[#4731D3] dark:text-[#8F88FF]">
          {data.nav.text}
        </p>
        <div className="flex gap-20 items-center">
          {data.nav.sections.map((section, index) => (
            <div
              key={index}
              onClick={() => {
                if (index === 0) {
                  document
                    .getElementById("skills")
                    .scrollIntoView({ behavior: "smooth" });
                } else if (index === 1) {
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                } else if (index === 2) {
                  history.push("/contact");
                }
              }}
              style={{ cursor: "pointer" }}
              className="font-medium text-lg text-[#6B7280] last:border last:rounded-md last:py-3 last:px-8 last:border-[#3730A3] last:text-[#3730A3] dark:last:text-[#3730A3] dark:last:bg-[#FFFFFF]"
            >
              {section}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
