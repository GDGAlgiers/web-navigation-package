import React, { useEffect, useState } from "react";
import Image from "next/image";
import defaultLogo from "public/images/template2/logo.png";
import avatar from "public/images/template2/avatar.png";
import searchIcon from "public/images/template2/search.svg";

import { GiHamburgerMenu as HamMenu } from "react-icons/gi";
import { AiOutlineClose as CloseMenu } from "react-icons/ai";
import Link from "next/link";
import MobileSearch from "./MobileSearch";
import MobileMenu from "./MobileMenu";

function Navbar(props) {
  const {
    logo = defaultLogo,
    links = [],
    generaleStyles,
    mobileSettings,
  } = props;

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
    setSearchOpen(false);
  };

  return (
    <div className="relative w-screen ">
      <div className="flex  justify-between items-center bg-white h-24 w-full 2xl:px-16 xl:px-8 px-4">
        <div className="flex items-center justify-start h-ful xl:gap-20 2xl:gap-24 gap-10">
          {menuOpen ? (
            <CloseMenu
              className="lg:hidden h-6 w-auto cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <HamMenu
              className="lg:hidden h-6 w-auto cursor-pointer"
              onClick={handleOpenMenu}
            />
          )}

          <Image src={logo} alt="logo" className=" h-20" />

          {/* search bar */}
          <div
            className={`hidden md:flex my-5 h-auto 2xl:w-[510px] w-[400px] items-center rounded justify-between p-4 bg-Light-grey-input`}
          >
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none pr-4 flex-grow"
            />
            <Image src={searchIcon} />
          </div>
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
            onClick={() => {
              setSearchOpen((prv) => !prv);
              setMenuOpen(false);
            }}
          >
            <Image src={searchIcon} />
          </button>
          <Link href="#">
            <Image src={avatar} />
          </Link>
        </div>
      </div>
      {/* mobile menu */}
      {menuOpen && <MobileMenu links={links} />}
      {/* mobile search */}
      {searchOpen && <MobileSearch setOpen={setSearchOpen} />}
    </div>
  );
}

export default Navbar;
