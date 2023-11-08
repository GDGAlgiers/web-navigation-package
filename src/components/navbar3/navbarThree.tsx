"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { FiX } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { generaleStyle } from "@/types/generaleStyleType";
import { ListLink } from "@/types/linkType";
import { LogoInfo } from "@/types/logoType";
import { userInfo } from "@/types/userType";
import { buttonInfo } from "@/types/navbarButtonInfo";
interface INavbarProps {
  Style: generaleStyle;
  links: ListLink[];
  LogoInf: LogoInfo;
  menuType: string;
  loggedIn: boolean;
  button1:buttonInfo,
  button2:buttonInfo,
  userInfo: userInfo;
}
const NavbarThree = (props: INavbarProps) => {
  const {
    Style,
    links,
    LogoInf,
    menuType,
    loggedIn,
    button1,
    button2,
    userInfo,
  } = props;
  const { background, textColor, textSize, ButtonColor } = Style;
  const [Arr, setArr] = useState(Array(links.length).fill(false));
  const [menu, setMenu] = useState(false);
  const Menu = () => {
    if (menuType == "Burger") {
      return (
        <GrMenu
          className="text-2xl cursor-pointer "
          onClick={() => setMenu(true)}
        />
      );
    }
    if (menuType == "bottom-bar") {
      return (
        <RiMenu2Fill
          className="text-2xl cursor-pointer "
          onClick={() => setMenu(true)}
        />
      );
    }
  };
  return (
    <>
      {/* Big Screens */}
      <div
        style={{ background: `${background}` }}
        className={` items-center justify-between px-3 w-full bg-[#fff] h-24 fixed top-0 hidden lg:flex `}
      >
        <div className="flex items-center gap-10">
          <Image
            alt="Logo"
            src={LogoInf.logoIcon}
            className="max-h-16 w-auto"
          />
          <div
            style={{ color: `${textColor}`, fontSize: `${textSize}` }}
            className={`flex items-center gap-16 `}
          >
            {links.map((link, index) => {
              return (
                <div
                  key={index}
                  className="flex relative cursor-pointer items-start gap-2"
                  onClick={() => {
                    setArr((prevArr) => {
                      const newArr = [...prevArr];
                      newArr[index] = !prevArr[index];
                      return newArr;
                    });
                  }}
                >
                  {link.name}
                  {!Arr[index] ? (
                    <MdOutlineKeyboardArrowDown className="text-xl" />
                  ) : (
                    <MdOutlineKeyboardArrowUp className="text-xl" />
                  )}
                  {Arr[index] && (
                    <div className="flex flex-col gap-2 text-sm p-2 border border-solid pl-3 w-24 bg-white absolute translate-y-[100%] -bottom-[100%] rounded-sm">
                      {link.link.map((lien, index) => {
                        return (
                          <Link key={index} href={`${lien.link} `}>
                            {lien.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {loggedIn ? (
          <Image alt="profilpic" src={userInfo.image} />
        ) : (
          <div className="flex items-center gap-3 ">
            <Link href={button1.link}>
              {button1.button}
            </Link>
            <Link href={button2.link}>
            {button2.button}
            </Link>
          </div>
        )}
      </div>
      {/* Small Screens */}
      <div
        className={`flex relative items-center justify-between px-2 w-full bg-[#fff] h-16 top-0 lg:hidden `}
      >
        {menu && (
          <div className="absolute bg-white translate-y-[100%] bottom-0 left-0 right-0 w-full p-3 flex flex-col gap-3 border-t border-t-[#A0A0A0] text-sm md:text-base ">
            {links.map((link, index) => {
              return (
                <div key={index} className="w-full  pl-3">
                  <div
                    className="flex items-start gap-2 w-full justify-between"
                    onClick={() => {
                      setArr((prevArr) => {
                        const newArr = [...prevArr];
                        newArr[index] = !prevArr[index];
                        return newArr;
                      });
                    }}
                  >
                    {link.name}
                    {!Arr[index] ? (
                      <MdOutlineKeyboardArrowDown className="text-xl " />
                    ) : (
                      <MdOutlineKeyboardArrowUp className="text-xl " />
                    )}
                  </div>
                  {Arr[index] && (
                    <div className=" flex flex-col gap-2 text-sm p-2 pl-3 w-full rounded-sm  ">
                      {link.link.map((lien, index) => {
                        return (
                          <Link key={index} href={`${lien.link} `}>
                            {lien.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            {!loggedIn && (
              <Link
                href={button1.link}
                className="border-t border-t-[#A0A0A0] py-5 pl-8 cursor-pointer "
              >
                {" "}
                Log In{" "}
              </Link>
            )}
          </div>
        )}
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 ">
          {menu ? (
            <FiX
              className="text-2xl cursor-pointer "
              onClick={() => setMenu(false)}
            />
          ) : (
            <Menu />
          )}
          <Image
            alt="Logo"
            src={LogoInf.logoIcon}
            className="max-h-10 w-auto"
          />
        </div>
        {loggedIn ? (
          <Image alt="profilpic" src={userInfo.image} />
        ) : (
          <Link href={button2.link}>
            <button
              style={{ background: `${ButtonColor}` }}
              className="rounded-[4px] text-white text-xs w-20 md:text-sm md:w-24 p-2 border "
            >
              {" "}
              Sign In{" "}
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default NavbarThree;
