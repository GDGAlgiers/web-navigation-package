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
  };

  const handleTitleClick = (title) => {
    setVisibleTitles((prevVisibleTitles) => ({
      ...prevVisibleTitles,
      [title]: !prevVisibleTitles[title],
    }));
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
        <Link href="/" className="">
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
                      top: "52px",
                    }}
                    className="absolute left-0 flex flex-col border-2 w-[120px]"
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
      <div className="hidden lg:flex items-center justify-center gap-[20px]">
        <Link
          href={linkBtnOne}
          className="border-[2px] border-blue-400 bg-green-300 hover:bg-green-600 transition-all duration-300 px-[20px] py-[10px] rounded-md "
        >
          {btnOne}
        </Link>
        <Link
          href={linkBtnTwo}
          className="border-[2px] border-blue-400 bg-green-300 hover:bg-green-600 transition-all duration-300 px-[20px] py-[10px] rounded-md "
        >
          {btnTwo}
        </Link>
      </div>

      {/* Mobile */}
      <button
        className="z-50 flex flex-col items-center justify-center my-2 cursor-pointer lg:hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-red-700 transition-all duration-300 h-[2px] w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-[2.5px]" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`bg-red-700 transition-all duration-300 h-[2px] w-6 rounded-sm ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-red-700 transition-all duration-300 h-[2px] w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-[2.5px]" : "translate-y-1"
          }`}
        ></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            style={{
              backgroundColor: mobileSideBarBg,
            }}
            className="flex pt-[100px] gap-[50px] flex-col w-full sm:w-[300px] h-[99.9%] absolute top-0 right-0"
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

            <div className="lg:hidden flex flex-col items-center justify-center gap-[10px]">
              <Link
                href={linkBtnOne}
                className="border-[2px] border-blue-200 w-[100px] items-center flex justify-center bg-green-300 hover:bg-green-600 transition-all duration-300 py-[10px] rounded-[4px] "
              >
                {btnOne}
              </Link>
              <Link
                href={linkBtnTwo}
                className="border-[2px] border-blue-200 items-center flex justify-center w-[100px] bg-green-300 hover:bg-green-600 transition-all duration-300 py-[10px] rounded-[4px]"
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
