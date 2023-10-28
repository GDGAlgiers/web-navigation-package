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

  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="relative w-screen ">
      <div className="flex  justify-between items-center bg-white h-24 w-full 2xl:px-16 xl:px-8 px-4">
        <div className="flex items-center justify-start h-ful xl:gap-20 2xl:gap-24 gap-10">
          <HamMenu className="lg:hidden h-6 w-auto cursor-pointer" />
          <Image src={logo} alt="logo" className=" h-20" />

          <SearchBar className="hidden md:flex my-5 h-auto 2xl:w-[510px] w-[400px]" />
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
          <button
            className="md:hidden"
            onClick={() => setSearchOpen((prv) => !prv)}
          >
            <Image src={searchIcon} />
          </button>
          <Link href="#">
            <Image src={avatar} />
          </Link>
        </div>
      </div>
      {/* mobile menu */}
      <div className="absolute flex flex-col items-center w-full h-auto bg-white top-full left-0">
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
      </div>
      {/* mobile search */}
      {searchOpen && (
        <div className="absolute py-5 flex justify-center gap-4 items-center w-full h-auto bg-white top-full left-0">
          <div
            className={`flex w-64 h-12 items-center border border-[#696969] rounded-[100px] justify-between p-4 bg-Light-grey-input text-[#696969]`}
          >
            <Image src={searchIcon} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none pl-5 flex-grow"
            />
          </div>
          <button
            className="text-[#696969]"
            onClick={() => setSearchOpen(false)}
          >
            annuler
          </button>
        </div>
      )}
    </div>
  );
}

function SearchBar({ className }) {
  return (
    <div
      className={`${className} items-center rounded justify-between p-4 bg-Light-grey-input`}
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
