import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../store/actions/actions";

const Header = () => {
  const { content, language } = useSelector((store) => store);
  const data = content.navbarSection;
  const dispatch = useDispatch();

  return (
    <header>
      <div className="text-[#777777] font-bold flex justify-end pb-10">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            // onChange={() => {
            //   darkMode ? setDarkMode(false) : setDarkMode(true);
            // }}
            type="checkbox"
            value=""
            className="sr-only peer"
            data-testid="darkMode-toggle"
            // checked={darkMode}
          />
          <div className="w-14 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#3730A3] dark:peer-focus:ring-[#3730A3] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#FFE86E] after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#FFE86E] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3730A3]"></div>
          <span className="ms-3 font-medium text-gray-900 dark:text-gray-300">
            {/* {darkMode ? "Dark Mode On" : "Dark Mode Off"} */}
          </span>
        </label>
        <p>{data.mode.light}</p>
        <p className="px-4">|</p>
        <p
          onClick={() => {
            dispatch(changeLanguage());
          }}
          className="cursor-pointer"
        >
          {language === "tr" ? (
            <>
              {data.title.rest}{" "}
              <span className="text-[#4731D3]">{data.title.highlight}</span>
            </>
          ) : (
            <>
              <span className="text-[#4731D3]">{data.title.highlight}</span>
              {data.title.rest}
            </>
          )}
        </p>
      </div>
      <nav className="flex font-inter items-center justify-between">
        <p className="text-2xl text-[#7B61FF] bg-[#EEEBFF] w-[64px] h-[64px] rounded-full flex items-center justify-center">
          {data.nav.text}
        </p>
        <div className="flex gap-20 items-center">
          {data.nav.sections.map((section, index) => (
            <div
              key={index}
              className="font-medium text-lg text-[#6B7280] last:border last:rounded-md last:py-3 last:px-8 last:border-[#3730A3] last:text-[#3730A3]"
            >
              <p>{section}</p>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
