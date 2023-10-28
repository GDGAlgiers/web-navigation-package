import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

export default function NavbarThree({
  logo,
  logoWidth,
  logoHeight,
  data,
  btnOne,
  linkBtnOne,
  btnTwo,
  linkBtnTwo,
  navBgColor,
  navHeight,
  mobileSideBarBg,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleTitles, setVisibleTitles] = useState({});

  const handleClick = () => {
    setIsOpen(!isOpen);
    setVisibleTitles(false);
  };

  const handleTitleClick = (title) => {
    setVisibleTitles((prevVisibleTitles) => {
      const updatedVisibleTitles = { [title]: !prevVisibleTitles[title] };
      // Close all other popups
      Object.keys(prevVisibleTitles).forEach((prevTitle) => {
        if (prevTitle !== title) {
          updatedVisibleTitles[prevTitle] = false;
        }
      });
      return updatedVisibleTitles;
    });
  };

  return (
    <div
      style={{
        backgroundColor: navBgColor,
        height: navHeight,
      }}
      className="flex items-center justify-between px-[30px]"
    >
      <div className="flex items-center justify-center gap-[40px]">
        {/* Mobile */}
        <button
          className="z-50 flex flex-col items-center justify-center my-2 cursor-pointer lg:hidden"
          onClick={handleClick}
        >
          <span
            className={`bg-gray-700 transition-all duration-300 h-[2px] w-6 rounded-sm  ${
              isOpen ? "rotate-45 translate-y-[2.5px]" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`bg-gray-700 transition-all duration-300 h-[2px] w-6 rounded-sm ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-gray-700 transition-all duration-300 h-[2px] w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-[2.5px]" : "translate-y-1"
            }`}
          ></span>
        </button>
        <Link href="/" className="z-50 ">
          <Image src={logo} width={logoWidth} height={logoHeight} />
        </Link>
        <ul className="hidden lg:flex items-center justify-center gap-[20px]">
          {data.map(({ title, subTitles, subTitlesLinks }, index) => (
            <li
              key={index}
              className="relative cursor-pointer"
              onClick={() => handleTitleClick(title)}
            >
              <div className="flex items-center gap-[10px]">
                <span>{title}</span>
                {visibleTitles[title] ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <AnimatePresence>
                {visibleTitles[title] && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ y: -5, opacity: 0 }}
                    style={{
                      top: `calc(${navHeight}/2 + 15px)`,
                    }}
                    className="shadow-gray-500/40 overflow-hidden shadow-lg rounded-[8px] absolute left-0 flex flex-col w-[120px]"
                    onClick={() => handleTitleClick(title)}
                  >
                    {subTitles.map((subTitle, index) => (
                      <Link
                        href={subTitlesLinks[index]}
                        key={index}
                        className="pl-[10px] w-full py-[8px] hover:bg-slate-200 transition-all duration-300 cursor-pointer"
                        onClick={() => {
                          handleTitleClick(title);
                        }}
                      >
                        {subTitle}
                      </Link>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-[20px]">
        <Link
          href={linkBtnOne}
          className="hidden whitespace-nowrap lg:block border-[1px] border-[#3A4F39] bg-white hover:bg-[#3A4F39] hover:text-white transition-all duration-300 px-[20px] py-[10px] rounded-[4px]"
        >
          {btnOne}
        </Link>
        <Link
          href={linkBtnTwo}
          className="z-50 whitespace-nowrap border-[1px] border-[#3A4F39] text-white bg-[#3A4F39] hover:bg-white hover:text-[#3A4F39] transition-all duration-300 px-[20px] py-[10px] rounded-[4px]"
        >
          {btnTwo}
        </Link>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            style={{
              backgroundColor: mobileSideBarBg,
              height: `calc(100vh - ${navHeight})`,
              marginTop: navHeight,
            }}
            className="flex border-t-[#3A4F39] border-t-[2px] pt-[15px] gap-[50px] flex-col w-full h-[100vh] absolute top-0 left-0"
          >
            <ul className="flex flex-col items-center w-full lg:hidden">
              {data.map(({ title, subTitles, subTitlesLinks }, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:bg-gray-300 w-full transition-all duration-300 items-center gap-[10px]"
                  onClick={() => {
                    handleTitleClick(title);
                  }}
                >
                  <div className="flex items-center gap-[8px] pl-[20px] py-[10px] hover:bg-gray-400 transition-all duration-300 cursor-pointer">
                    <span>{title}</span>
                    {visibleTitles[title] ? <FaAngleUp /> : <FaAngleDown />}
                  </div>

                  <AnimatePresence>
                    {visibleTitles[title] && (
                      <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ y: -5, opacity: 0 }}
                        className="flex flex-col"
                      >
                        {subTitles.map((subTitle, index) => (
                          <Link
                            href={subTitlesLinks[index]}
                            key={index}
                            className="pl-[30px] w-full py-[10px] hover:bg-slate-200 transition-all duration-300 cursor-pointer"
                          >
                            {subTitle}
                          </Link>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            <div className="flex flex-col lg:hidden">
              <div className="h-[2px] self-center w-[95%] bg-[#3A4F39]" />

              <Link
                href={linkBtnTwo}
                className="border-[1.5px] ml-[70px] border-[#3A4F39] items-center mt-[20px] flex justify-center w-[100px] text-[#3A4F39] bg-white hover:text-white hover:bg-[#3A4F39] transition-all duration-300 py-[10px] rounded-[4px]"
              >
                {btnTwo}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
