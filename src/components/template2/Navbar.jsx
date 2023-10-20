import React, { useEffect, useState } from "react";
import Image from "next/image";
import defaultLogo from "public/images/template2/logo.png";
import avatar from "public/images/template2/avatar.png";
import searchIcon from "public/images/template2/search.svg";
import { GiHamburgerMenu as HamMenu } from "react-icons/gi";
import Link from "next/link";

function Navbar(props) {
  const {
    logo = defaultLogo,
    links = [],
    generaleStyles,
    mobileSettings,
  } = props;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  return (
    <div className="relative w-screen">
      <div className="flex  justify-between items-center bg-white h-24 w-full 2xl:px-16 xl:px-8 px-4">
        <div className="flex items-center justify-start h-ful xl:gap-20 2xl:gap-24 gap-10">
          <Image src={logo} alt="logo" className=" h-20" />

          <SearchBar
            className="my-5 h-auto 2xl:w-[510px] w-[400px]"
            hidden={screenWidth < 720}
          />
        </div>

        <div className="flex gap-8 items-center h-14">
          <ul className="hidden lg:flex gap-8 h-6 ">
            {links.map((item) => (
              <li>
                <Link href={item.link || "#"}>
                  <Image src={item.icon} className="h-full w-auto" />
                </Link>
              </li>
            ))}
          </ul>

          <Link href="#">
            <Image src={avatar} />
          </Link>
          <HamMenu className="lg:hidden h-6 w-auto cursor-pointer" />
        </div>
        {/* mobile menu */}
        {/* <div className="absolute flex flex-col items-center w-full h-auto bg-white top-full left-0">
          <ul className="flex flex-col p-4">
            <li className="py-2">
              <SearchBar className="w-[300px] h-auto" />
            </li>
            <li className="py-2">
              <Link href="#">
                <Image src={settingsIcon} className="h-full" />
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
                <Image src={settingsIcon} className="h-full" />
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

function SearchBar({ className, hidden }) {
  return (
    <div
      className={`${className} ${
        hidden ? "hidden" : "flex"
      } items-center rounded justify-between p-4 bg-Light-grey-input`}
    >
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none pr-4 flex-grow"
      />
      <Image src={searchIcon} />
    </div>
  );
}

export default Navbar;
